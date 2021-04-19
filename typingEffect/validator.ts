export class Validator {
  static isValiDelay = function (value: number): boolean {
    if (isNaN(value) || !isFinite(value)) return false;

    return true;
  };

  static isValidType = function (value: string): boolean {
    if (value.length < 1) return false;

    return true;
  };

  static isValidElement = function (value: string): boolean {
    if (!value.includes(".") || !value.includes("#")) return false;

    return true;
  };
}
