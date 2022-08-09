export default class CustomError extends Error {
  constructor(code, ...params) {
    super(...params);
    this.name = "CustomError";
    this.code = code;
  }
}
