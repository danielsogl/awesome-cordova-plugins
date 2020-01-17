import * as ts from 'typescript';

import { getDecorator, getDecoratorName } from '../helpers';

export function transformProperty(members: any[], index: number) {
  const property = members[index] as ts.PropertyDeclaration,
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

  const getter = ts.createGetAccessor(
    undefined,
    undefined,
    property.name,
    undefined,
    property.type,
    ts.createBlock([
      ts.createReturn(
        ts.createCall(ts.createIdentifier(type + 'PropertyGet'), undefined, [
          ts.createThis(),
          ts.createLiteral((property.name as any).text)
        ])
      )
    ])
  );

  const setter = ts.createSetAccessor(
    undefined,
    undefined,
    property.name,
    [
      ts.createParameter(
        undefined,
        undefined,
        undefined,
        'value',
        undefined,
        property.type
      )
    ],
    ts.createBlock([
      ts.createStatement(
        ts.createCall(ts.createIdentifier(type + 'PropertySet'), undefined, [
          ts.createThis(),
          ts.createLiteral((property.name as any).text),
          ts.createIdentifier('value')
        ])
      )
    ])
  );

  return [getter, setter];
}
