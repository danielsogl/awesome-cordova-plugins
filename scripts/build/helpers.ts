import { readdirSync } from 'fs-extra';
import { camelCase, clone } from 'lodash';
import { join, resolve } from 'path';
import {
  ArrayLiteralExpression,
  Decorator,
  Expression,
  factory,
  Node,
  ObjectLiteralElementLike,
  ObjectLiteralExpression,
  SyntaxKind,
} from 'typescript';

import { Logger } from '../logger';

export const ROOT = resolve(__dirname, '../../');
// tslint:disable-next-line:no-var-requires
export const TS_CONFIG = clone(require(resolve(ROOT, 'tsconfig.json')));
export const COMPILER_OPTIONS = TS_CONFIG.compilerOptions;
export const PLUGINS_ROOT = join(ROOT, 'src/@awesome-cordova-plugins/plugins/');
export const PLUGIN_PATHS = readdirSync(PLUGINS_ROOT).map((d) => join(PLUGINS_ROOT, d, 'index.ts'));

export function getDecorator(node: Node, index = 0): Decorator {
  if (node.decorators && node.decorators[index]) {
    return node.decorators[index];
  }
}

export function hasDecorator(decoratorName: string, node: Node): boolean {
  return (
    node.decorators &&
    node.decorators.length &&
    node.decorators.findIndex((d) => getDecoratorName(d) === decoratorName) > -1
  );
}

export function getDecoratorName(decorator: any) {
  return decorator.expression.expression.text;
}

export function getRawDecoratorArgs(decorator: any): any[] {
  if (decorator.expression.arguments.length === 0) return [];
  return decorator.expression.arguments[0].properties;
}

export function getDecoratorArgs(decorator: any) {
  const properties: any[] = getRawDecoratorArgs(decorator);
  const args = {};

  properties.forEach((prop) => {
    let val: number | boolean;

    switch (prop.initializer.kind) {
      case SyntaxKind.StringLiteral:
      case SyntaxKind.Identifier:
        val = prop.initializer.text;
        break;

      case SyntaxKind.ArrayLiteralExpression:
        val = prop.initializer.elements.map((e: any) => e.text);
        break;

      case SyntaxKind.TrueKeyword:
        val = true;
        break;

      case SyntaxKind.FalseKeyword:
        val = false;
        break;

      case SyntaxKind.NumericLiteral:
        val = Number(prop.initializer.text);
        break;

      default:
        Logger.debug('Unexpected property value type: ' + prop.initializer.kind);
        throw new Error('Unexpected property value type << helpers.ts >>');
    }

    args[prop.name.text] = val;
  });

  return args;
}

/**
 * FROM STENCIL
 * Convert a js value into typescript AST
 * @param val array, object, string, boolean, or number
 * @returns Typescript Object Literal, Array Literal, String Literal, Boolean Literal, Numeric Literal
 */
export function convertValueToLiteral(val: any) {
  if (Array.isArray(val)) {
    return arrayToArrayLiteral(val);
  }
  if (typeof val === 'object') {
    return objectToObjectLiteral(val);
  }
  if (typeof val === 'number') {
    return factory.createNumericLiteral(val);
  }
  if (typeof val === 'string') {
    return factory.createStringLiteral(val);
  }
  if (typeof val === 'boolean') {
    return val ? factory.createTrue() : factory.createFalse();
  }
}

/**
 * FROM STENCIL
 * Convert a js object into typescript AST
 * @param obj key value object
 * @returns Typescript Object Literal Expression
 */
function objectToObjectLiteral(obj: { [key: string]: any }): ObjectLiteralExpression {
  const newProperties: ObjectLiteralElementLike[] = Object.keys(obj).map((key: string): ObjectLiteralElementLike => {
    return factory.createPropertyAssignment(
      factory.createStringLiteral(key),
      convertValueToLiteral(obj[key]) as Expression
    );
  });

  return factory.createObjectLiteralExpression(newProperties);
}

/**
 * FROM STENCIL
 * Convert a js array into typescript AST
 * @param list arrayÏ
 * @returns Typescript Array Literal Expression
 */
function arrayToArrayLiteral(list: any[]): ArrayLiteralExpression {
  const newList: any[] = list.map(convertValueToLiteral);
  return factory.createArrayLiteralExpression(newList);
}

export function getMethodsForDecorator(decoratorName: string) {
  switch (decoratorName) {
    case 'CordovaProperty':
      return ['cordovaPropertyGet', 'cordovaPropertySet'];
    case 'InstanceProperty':
      return ['instancePropertyGet', 'instancePropertySet'];
    case 'CordovaCheck':
      return ['checkAvailability'];
    case 'InstanceCheck':
      return ['instanceAvailability'];
  }

  return [camelCase(decoratorName)];
}
