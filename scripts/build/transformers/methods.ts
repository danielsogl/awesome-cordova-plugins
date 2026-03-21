import { Expression, factory, Identifier, MethodDeclaration, SyntaxKind } from 'typescript';

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

  const decorator = getDecorator(method);
  if (!decorator) return;

  const decoratorName = getDecoratorName(decorator);
  const decoratorArgs = getDecoratorArgs(decorator);

  try {
    return factory.createMethodDeclaration(
      undefined,
      undefined,
      method.name,
      undefined,
      method.typeParameters,
      method.parameters,
      method.type,
      factory.createBlock([factory.createReturnStatement(getMethodBlock(method, decoratorName, decoratorArgs))])
    );
  } catch (e: unknown) {
    Logger.error('Error transforming method: ' + (method.name as Identifier).text);
    Logger.error(e instanceof Error ? e.message : String(e));
  }
}

function getMethodBlock(
  method: MethodDeclaration,
  decoratorName: string,
  decoratorArgs: Record<string, string | number | boolean | string[]>
): Expression {
  const decoratorMethod = getMethodsForDecorator(decoratorName)[0];

  switch (decoratorName) {
    case 'CordovaCheck':
    case 'InstanceCheck':
      return factory.createImmediatelyInvokedArrowFunction([
        factory.createIfStatement(
          factory.createBinaryExpression(
            factory.createCallExpression(factory.createIdentifier(decoratorMethod), undefined, [factory.createThis()]),
            SyntaxKind.EqualsEqualsEqualsToken,
            factory.createTrue()
          ),
          method.body!
        ),
      ]);

    default:
      return factory.createCallExpression(factory.createIdentifier(decoratorMethod), undefined, [
        factory.createThis(),
        factory.createStringLiteral((decoratorArgs?.methodName as string) || (method.name as Identifier).text),
        convertValueToLiteral(decoratorArgs),
        factory.createIdentifier('arguments'),
      ]);
  }
}
