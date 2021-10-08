import { factory, PropertyDeclaration } from 'typescript';

import { getDecorator, getDecoratorName } from '../helpers';

export function transformProperty(members: any[], index: number) {
  const property = members[index] as PropertyDeclaration,
    decorator = getDecorator(property),
    decoratorName = getDecoratorName(decorator);

  let type: 'cordova' | 'instance';

  switch (decoratorName) {
    case 'CordovaProperty':
      type = 'cordova';
      break;

    case 'InstanceProperty':
      type = 'instance';
      break;

    default:
      return property;
  }

  const getter = factory.createGetAccessorDeclaration(
    undefined,
    undefined,
    property.name,
    undefined,
    property.type,
    factory.createBlock([
      factory.createReturnStatement(
        factory.createCallExpression(factory.createIdentifier(type + 'PropertyGet'), undefined, [
          factory.createThis(),
          factory.createStringLiteral((property.name as any).text),
        ])
      ),
    ])
  );

  const setter = factory.createSetAccessorDeclaration(
    undefined,
    undefined,
    property.name,
    [factory.createParameterDeclaration(undefined, undefined, undefined, 'value', undefined, property.type)],
    factory.createBlock([
      factory.createExpressionStatement(
        factory.createCallExpression(factory.createIdentifier(type + 'PropertySet'), undefined, [
          factory.createThis(),
          factory.createStringLiteral((property.name as any).text),
          factory.createIdentifier('value'),
        ])
      ),
    ])
  );

  return [getter, setter];
}
