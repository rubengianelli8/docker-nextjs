import prisma from "@/prisma/client";
import { error } from "./error";

export const demo = {
  getDemo(_parent, { id, name }, _context) {
    try {
      if (id) return prisma.demo.findUnique({ where: { id } });
      return prisma.demo.findUnique({ where: { name } });
    } catch (e) {
      return error.getError(e);
    }
  },
  getDemos(_parent, _args, _context) {
    try {
      return prisma.demo.findMany();
    } catch (e) {
      return error.getError(e);
    }
  },
  addDemo(_parent, data, _context) {
    try {
      return prisma.demo.create({ data });
    } catch (e) {
      return error.getError(e);
    }
  },
  deleteDemo(_parent, { id }, _context) {
    try {
      return prisma.demo.delete({ where: { id } });
    } catch (e) {
      return error.getError(e);
    }
  },
};
