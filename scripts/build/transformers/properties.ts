import {
  ClassElement,
  factory,
  GetAccessorDeclaration,
  Identifier,
  PropertyDeclaration,
  SetAccessorDeclaration,
} from 'typescript';

import { getDecorator, getDecoratorName } from '../helpers';

export function transformProperty(
  members: ClassElement[],
  index: number
): [GetAccessorDeclaration, SetAccessorDeclaration] | PropertyDeclaration {
  const property = members[index] as PropertyDeclaration,
    decorator = getDecorator(property),
    decoratorName = decorator ? getDecoratorName(decorator) : undefined;

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

  const propertyName = (property.name as Identifier).text;

  const getter = factory.createGetAccessorDeclaration(
    undefined,
    property.name,
    [],
    property.type,
    factory.createBlock([
      factory.createReturnStatement(
        factory.createCallExpression(factory.createIdentifier(type + 'PropertyGet'), undefined, [
          factory.createThis(),
          factory.createStringLiteral(propertyName),
        ])
      ),
    ])
  );

  const setter = factory.createSetAccessorDeclaration(
    undefined,
    property.name,
    [factory.createParameterDeclaration(undefined, undefined, 'value', undefined, property.type)],
    factory.createBlock([
      factory.createExpressionStatement(
        factory.createCallExpression(factory.createIdentifier(type + 'PropertySet'), undefined, [
          factory.createThis(),
          factory.createStringLiteral(propertyName),
          factory.createIdentifier('value'),
        ])
      ),
    ])
  );

  return [getter, setter];
}
