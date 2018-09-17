import * as ts from 'typescript';
import * as fs from 'fs-extra';
import * as path from 'path';
import { camelCase, clone } from 'lodash';
import { Logger } from '../logger';

export const ROOT = path.resolve(__dirname, '../../');
// tslint:disable-next-line:no-var-requires
export const TS_CONFIG = clone(require(path.resolve(ROOT, 'tsconfig.json')));
export const COMPILER_OPTIONS = TS_CONFIG.compilerOptions;
export const PLUGINS_ROOT = path.join(ROOT, 'src/@ionic-native/plugins/');
export const PLUGIN_PATHS = fs.readdirSync(PLUGINS_ROOT).map(d => path.join(PLUGINS_ROOT, d, 'index.ts'));

export function getDecorator(node: ts.Node, index = 0): ts.Decorator {
  if (node.decorators && node.decorators[index]) {
    return node.decorators[index];
  }
}

export function hasDecorator(decoratorName: string, node: ts.Node): boolean {
  return node.decorators && node.decorators.length && node.decorators.findIndex(d => getDecoratorName(d) === decoratorName) > -1;
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

  properties.forEach(prop => {
    let val;

    switch (prop.initializer.kind) {
      case ts.SyntaxKind.StringLiteral:
      case ts.SyntaxKind.Identifier:
        val = prop.initializer.text;
        break;

      case ts.SyntaxKind.ArrayLiteralExpression:
        val = prop.initializer.elements.map((e: any) => e.text);
        break;

      case ts.SyntaxKind.TrueKeyword:
        val = true;
        break;

      case ts.SyntaxKind.FalseKeyword:
        val = false;
        break;

      case ts.SyntaxKind.NumericLiteral:
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
    return ts.createNumericLiteral(String(val));
  }
  return ts.createLiteral(val);
}

/**
 * FROM STENCIL
 * Convert a js object into typescript AST
 * @param obj key value object
 * @returns Typescript Object Literal Expression
 */
function objectToObjectLiteral(obj: { [key: string]: any }): ts.ObjectLiteralExpression {
  const newProperties: ts.ObjectLiteralElementLike[] = Object.keys(obj).map((key: string): ts.ObjectLiteralElementLike => {
    return ts.createPropertyAssignment(ts.createLiteral(key), convertValueToLiteral(obj[key]) as ts.Expression);
  });

  return ts.createObjectLiteral(newProperties);
}

/**
 * FROM STENCIL
 * Convert a js array into typescript AST
 * @param list array
 * @returns Typescript Array Literal Expression
 */
function arrayToArrayLiteral(list: any[]): ts.ArrayLiteralExpression {
  const newList: any[] = list.map(convertValueToLiteral);
  return ts.createArrayLiteral(newList);
}

export function getMethodsForDecorator(decoratorName: string) {
  switch (decoratorName) {
    case 'CordovaProperty': return ['cordovaPropertyGet', 'cordovaPropertySet'];
    case 'InstanceProperty': return ['instancePropertyGet', 'instancePropertySet'];
    case 'CordovaCheck': return ['checkAvailability'];
    case 'InstanceCheck': return ['instanceAvailability'];
  }

  return [camelCase(decoratorName)];
}
