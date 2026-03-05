class ApiError extends Error {
  constructor(statusCode, message) {
    super(message);
    this.name = "ApiError";
    this.statusCode = statusCode;

    /**
       * Error.captureStackTrace(targetObject, constructorOpt)
       *.-> Ngăn xếp chồng lỗi
        targetObject
        → object sẽ được gắn thuộc tính .stack.

        constructorOpt
        → function dùng để cắt bỏ phần stack trace phía trên, giúp stack trace sạch và dễ đọc hơn.
    */
    Error.captureStackTrace(this, this.constructor);
  }
}
export default ApiError;
