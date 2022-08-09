import { prisma } from "@/prisma/client";
import { error } from "./error";

export const uploadFile = {
  async addDemo(_parent, { data, file }, _context) {
    try {
      return prisma.demo.create({
        data: {
          ...data,
          file,
        },
      });
    } catch (e) {
      return error.getError(e);
    }
  },
};
