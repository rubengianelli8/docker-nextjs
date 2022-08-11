export default class CustomError extends Error {
  constructor(code, ...params) {
    super(...params);
    this.name = "CustomError";
    this.code = code;
  }
}

export const decodeJwt = (token) => {
  var segments = token.split(".");

  if (segments.length !== 3) {
    throw new Error("Not enough or too many segments");
  }

  // All segment should be base64
  var payloadSeg = segments[1];

  // base64 decode and parse JSON
  var payload = JSON.parse(base64urlDecode(payloadSeg));

  return payload;
};
