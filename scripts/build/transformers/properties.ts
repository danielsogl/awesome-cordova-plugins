import {
  createBlock,
  createCall,
  createGetAccessor,
  createIdentifier,
  createLiteral,
  createParameter,
  createReturn,
  createSetAccessor,
  createStatement,
  createThis,
  PropertyDeclaration,
} from 'typescript';

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

  const getter = createGetAccessor(
    undefined,
    undefined,
    property.name,
    undefined,
    property.type,
    createBlock([
      createReturn(
        createCall(createIdentifier(type + 'PropertyGet'), undefined, [
          createThis(),
          createLiteral((property.name as any).text),
        ])
      ),
    ])
  );

  const setter = createSetAccessor(
    undefined,
    undefined,
    property.name,
    [createParameter(undefined, undefined, undefined, 'value', undefined, property.type)],
    createBlock([
      createStatement(
        createCall(createIdentifier(type + 'PropertySet'), undefined, [
          createThis(),
          createLiteral((property.name as any).text),
          createIdentifier('value'),
        ])
      ),
    ])
  );

  return [getter, setter];
}
