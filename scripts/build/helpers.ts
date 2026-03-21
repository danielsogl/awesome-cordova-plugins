import { readdirSync, readFileSync } from 'node:fs';
import { join, resolve } from 'node:path';
import {
  ArrayLiteralExpression,
  canHaveDecorators,
  Decorator,
  Expression,
  factory,
  getDecorators as tsGetDecorators,
  Node,
  ObjectLiteralElementLike,
  ObjectLiteralExpression,
  SyntaxKind,
} from 'typescript';

import { Logger } from '../logger';

export const ROOT = resolve(__dirname, '../../');
export const TS_CONFIG = JSON.parse(readFileSync(resolve(ROOT, 'tsconfig.json'), 'utf-8'));
export const COMPILER_OPTIONS = TS_CONFIG.compilerOptions;
export const PLUGINS_ROOT = join(ROOT, 'src/@awesome-cordova-plugins/plugins/');
export const PLUGIN_PATHS = readdirSync(PLUGINS_ROOT).map((d: string) => join(PLUGINS_ROOT, d, 'index.ts'));

export function getDecorator(node: Node, index = 0): Decorator | undefined {
  const decorators = canHaveDecorators(node) ? tsGetDecorators(node) : undefined;
  if (decorators && decorators[index]) {
    return decorators[index];
  }
  return undefined;
}

export function hasDecorator(decoratorName: string, node: Node): boolean {
  const decorators = canHaveDecorators(node) ? tsGetDecorators(node) : undefined;
  return (
    !!decorators && decorators.length > 0 && decorators.findIndex((d) => getDecoratorName(d) === decoratorName) > -1
  );
}

export function getDecoratorName(decorator: Decorator): string {
  return (decorator.expression as unknown as { expression: { text: string } }).expression.text;
}

export function getRawDecoratorArgs(
  decorator: Decorator
): Array<{ name: { text: string }; initializer: { kind: number; text: string; elements: Array<{ text: string }> } }> {
  const expr = decorator.expression as unknown as {
    arguments: Array<{ properties: ReturnType<typeof getRawDecoratorArgs> }>;
  };
  if (expr.arguments.length === 0) return [];
  return expr.arguments[0].properties;
}

export function getDecoratorArgs(decorator: Decorator): Record<string, string | number | boolean | string[]> {
  const properties = getRawDecoratorArgs(decorator);
  const args: Record<string, string | number | boolean | string[]> = {};

  properties.forEach((prop) => {
    let val: string | number | boolean | string[];

    switch (prop.initializer.kind) {
      case SyntaxKind.StringLiteral:
      case SyntaxKind.Identifier:
        val = prop.initializer.text;
        break;

      case SyntaxKind.ArrayLiteralExpression:
        val = prop.initializer.elements.map((e) => e.text);
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
 * Convert a js value into typescript AST
 */
export function convertValueToLiteral(
  val: string | number | boolean | string[] | Record<string, unknown> | unknown[]
): Expression {
  if (Array.isArray(val)) {
    return arrayToArrayLiteral(val);
  }
  if (typeof val === 'object' && val !== null) {
    return objectToObjectLiteral(val as Record<string, unknown>);
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
  throw new Error('Unexpected value type: ' + typeof val);
}

function objectToObjectLiteral(obj: Record<string, unknown>): ObjectLiteralExpression {
  const newProperties: ObjectLiteralElementLike[] = Object.keys(obj).map((key: string): ObjectLiteralElementLike => {
    return factory.createPropertyAssignment(
      factory.createStringLiteral(key),
      convertValueToLiteral(obj[key] as string | number | boolean | string[])
    );
  });

  return factory.createObjectLiteralExpression(newProperties);
}

function arrayToArrayLiteral(list: unknown[]): ArrayLiteralExpression {
  const newList = list.map((item) => convertValueToLiteral(item as string | number | boolean));
  return factory.createArrayLiteralExpression(newList);
}

export function getMethodsForDecorator(decoratorName: string): string[] {
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

  return [decoratorName.charAt(0).toLowerCase() + decoratorName.slice(1)];
}
