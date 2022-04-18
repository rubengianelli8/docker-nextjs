export const ERRORS = {
  P0: {
    type: "Unknown",
    code: "500",
    message: "Unknown Error",
  },
  P2025: {
    type: "Prisma Error",
    code: "P2025",
    message:
      "An operation failed because it depends on one or more records that were required but not found.",
  },
  P2026: {
    type: "Prisma Error",
    code: "500",
    message:
      "The current database provider doesn't support a feature that the query used: {feature}",
  },
  EMAILERROR1: {
    code: "EMAILERROR",
    message: "the email entered is invalid",
    type: "email error",
  },
};
