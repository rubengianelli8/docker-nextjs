import prisma from "@/prisma/client";
import { error } from "./error";
import { uploadFile } from "@/utils/s3";
export const uploadFile = {
  async addDemo(_parent, { data, file }, _context) {
    try {
      const fileName = await uploadFile.upload(file, "/file");
      return prisma.demo.create({
        data: {
          ...data,
          file_name: fileName,
        },
      });
    } catch (e) {
      return error.getError(e);
    }
  },
};
