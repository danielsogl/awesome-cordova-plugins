import * as ts from 'typescript';
import { transformMethod } from './methods';
import { transformProperty } from './properties';

export function transformMembers(cls: ts.ClassDeclaration) {
  const propertyIndices: number[] = [];

  const members = cls.members.map((member: any, index: number) => {
    // only process decorated members
    if (!member.decorators || !member.decorators.length) return member;

    switch (member.kind) {
      case ts.SyntaxKind.MethodDeclaration:
        return transformMethod(member);
      case ts.SyntaxKind.PropertyDeclaration:
        propertyIndices.push(index);
        return member;
      case ts.SyntaxKind.Constructor:
        return ts.createConstructor(undefined, undefined, member.parameters, member.body);
      default:
        return member; // in case anything gets here by accident...
    }
  });

  propertyIndices.forEach((i: number) => {
    const [getter, setter] = transformProperty(members, i) as any;
    members.push(getter, setter);
  });

  propertyIndices.reverse().forEach(i => members.splice(i, 1));

  return members;
}




