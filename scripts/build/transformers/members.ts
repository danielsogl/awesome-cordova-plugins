import {
  canHaveDecorators,
  ClassDeclaration,
  ClassElement,
  ConstructorDeclaration,
  factory,
  getDecorators as tsGetDecorators,
  MethodDeclaration,
  SyntaxKind,
} from 'typescript';

import { transformMethod } from './methods';
import { transformProperty } from './properties';

export function transformMembers(cls: ClassDeclaration): ClassElement[] {
  const propertyIndices: number[] = [];

  const members = cls.members.map((member, index) => {
    const memberDecorators = canHaveDecorators(member) ? tsGetDecorators(member) : undefined;
    if (!memberDecorators || !memberDecorators.length) return member;

    switch (member.kind) {
      case SyntaxKind.MethodDeclaration:
        return transformMethod(member as MethodDeclaration) ?? member;
      case SyntaxKind.PropertyDeclaration:
        propertyIndices.push(index);
        return member;
      case SyntaxKind.Constructor: {
        const ctor = member as ConstructorDeclaration;
        return factory.createConstructorDeclaration(undefined, ctor.parameters, ctor.body);
      }
      default:
        return member;
    }
  }) as ClassElement[];

  propertyIndices.forEach((i: number) => {
    const result = transformProperty(members, i);
    if (Array.isArray(result)) {
      const [getter, setter] = result;
      members.push(getter, setter);
    }
  });

  propertyIndices.reverse().forEach((i) => members.splice(i, 1));

  return members;
}
