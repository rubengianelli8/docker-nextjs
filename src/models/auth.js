import prisma from "@/prisma/client";
import { error } from "./error";

export const auth = {
  async getUser(email) {
    try {
      return await prisma.str_user.findUnique({ where: { email } });
    } catch (e) {
      return error.getError(e);
    }
  },
};
