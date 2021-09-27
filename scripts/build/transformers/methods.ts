import {
  createBinary,
  createBlock,
  createCall,
  createIdentifier,
  createIf,
  createImmediatelyInvokedArrowFunction,
  createLiteral,
  createMethod,
  createReturn,
  createThis,
  createTrue,
  Expression,
  MethodDeclaration,
  SyntaxKind,
} from 'typescript';

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
    return createMethod(
      undefined,
      undefined,
      undefined,
      method.name,
      undefined,
      method.typeParameters,
      method.parameters,
      method.type,
      createBlock([createReturn(getMethodBlock(method, decoratorName, decoratorArgs))])
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
      return createImmediatelyInvokedArrowFunction([
        createIf(
          createBinary(
            createCall(createIdentifier(decoratorMethod), undefined, [createThis()]),
            SyntaxKind.EqualsEqualsEqualsToken,
            createTrue()
          ),
          method.body
        ),
      ]);

    default:
      return createCall(createIdentifier(decoratorMethod), undefined, [
        createThis(),
        createLiteral(decoratorArgs?.methodName || (method.name as any).text),
        convertValueToLiteral(decoratorArgs),
        createIdentifier('arguments'),
      ]);
  }
}
