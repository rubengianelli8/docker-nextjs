import { ApolloError } from "apollo-server-micro";
import { ERRORS } from "@/utils/errors";
import { Prisma } from "@prisma/client";

export const error = {
  prismaValidationError(error) {
    if (error instanceof Prisma.PrismaClientValidationError)
      return {
        type: "PrismaClientValidationError",
        message: error.message,
        code: "P2007",
      };

    if (error instanceof Prisma.PrismaClientKnownRequestError)
      return {
        type: "PrismaClientKnownRequestError",
        message: error.meta.cause,
        code: error.code,
      };

    if (error instanceof Prisma.PrismaClientUnknownRequestError)
      return {
        type: "PrismaClientUnknownRequestError",
        message: error.message,
        code: "P01",
      };

    if (error instanceof Prisma.PrismaClientRustPanicError)
      return {
        type: "PrismaClientRustPanicError",
        message: error.message,
        code: "P01",
      };

    if (error instanceof Prisma.PrismaClientInitializationError)
      return {
        type: "PrismaClientInitializationError",
        message: error.message,
        code: error.errorCode,
      };

    return false;
  },

  getError(error) {
    if (ERRORS[error.code]) {
      const { type, code, message } = ERRORS[error.code];
      return new ApolloError(message, code, { type });
    }
    const prismaError = this.prismaValidationError(error);
    if (prismaError) {
      const { message, type, code } = prismaError;
      return new ApolloError(message, code, { type });
    }

    if (error.code) {
      const { type } = error;
      return new ApolloError(error.message, error.code, { type });
    }

    const { message, code, type } = ERRORS.P0;
    return new ApolloError(message, code, { type });
  },
};
