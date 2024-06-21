const httpStatusCode = require('./statusCodes');

class BaseError extends Error {
  constructor(name, statusCode, isOperational, message) {
    super(message);
    this.name = name;
    this.statusCode = statusCode;
    this.isOperational = isOperational;
  }
}

class NotFoundError extends BaseError {
  constructor(
    message,
    name = "NotFoundError",
    isOperational = true,
    statusCode = httpStatusCode.clientError.NotFound
  ) {
    super(name, statusCode, isOperational, message);
  }
}

class BadRequestError extends BaseError {
  constructor(
    message,
    name = "BadRequestError",
    isOperational = true,
    statusCode = httpStatusCode.clientError.BadRequest
  ) {
    super(name, statusCode, isOperational, message);
  }
}

class UnauthorizedError extends BaseError {
  constructor(
    message,
    name = "Unauthorized",
    isOperational = true,
    statusCode = httpStatusCode.clientError.Unauthorized
  ) {
    super(name, statusCode, isOperational, message);
  }
}

class ForbiddenError extends BaseError {
  constructor(
    message,
    name = "ForbiddenError",
    isOperational = true,
    statusCode = httpStatusCode.clientError.Forbidden
  ) {
    super(name, statusCode, isOperational, message);
  }
}

module.exports = {
  NotFoundError,
  ForbiddenError,
  UnauthorizedError,
  BadRequestError
}