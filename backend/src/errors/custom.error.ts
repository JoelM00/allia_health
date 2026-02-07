export abstract class CustomError extends Error {
  abstract statusCode: number

  constructor(message: string) {
    super(message)
    Object.setPrototypeOf(this, CustomError.prototype) //Always necessary when a built in class is extended, in this case it was Error (even inside the children classes)
  }

  abstract serializeErrors(): { message: string; field?: string }[]
}
