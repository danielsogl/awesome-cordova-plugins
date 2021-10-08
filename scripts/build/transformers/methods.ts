import { Expression, factory, MethodDeclaration, SyntaxKind } from 'typescript';

import { Logger } from '../../logger';
import {
  convertValueToLiteral,
  getDecorator,
  getDecoratorArgs,
  getDecoratorName,
  getMethodsForDecorator,
} from '../helpers';

export function transformMethod(method: MethodDeclaration) {
  if (!method) return;

  const decorator = getDecorator(method),
    decoratorName = getDecoratorName(decorator),
    decoratorArgs = getDecoratorArgs(decorator);

  try {
    return factory.createMethodDeclaration(
      undefined,
      undefined,
      undefined,
      method.name,
      undefined,
      method.typeParameters,
      method.parameters,
      method.type,
      factory.createBlock([factory.createReturnStatement(getMethodBlock(method, decoratorName, decoratorArgs))])
    );
  } catch (e) {
    Logger.error('Error transforming method: ' + (method.name as any).text);
    Logger.error(e.message);
  }
}

function getMethodBlock(method: MethodDeclaration, decoratorName: string, decoratorArgs: any): Expression {
  const decoratorMethod = getMethodsForDecorator(decoratorName)[0];

  switch (decoratorName) {
    case 'CordovaCheck':
    case 'InstanceCheck':
      // TODO remove function wrapper
      return factory.createImmediatelyInvokedArrowFunction([
        factory.createIfStatement(
          factory.createBinaryExpression(
            factory.createCallExpression(factory.createIdentifier(decoratorMethod), undefined, [factory.createThis()]),
            SyntaxKind.EqualsEqualsEqualsToken,
            factory.createTrue()
          ),
          method.body
        ),
      ]);

    default:
      return factory.createCallExpression(factory.createIdentifier(decoratorMethod), undefined, [
        factory.createThis(),
        factory.createStringLiteral(decoratorArgs?.methodName || (method.name as any).text),
        convertValueToLiteral(decoratorArgs),
        factory.createIdentifier('arguments'),
      ]);
  }
}
