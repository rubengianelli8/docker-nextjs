import { PrismaClient } from "@prisma/client";

const prisma = global.prisma || new PrismaClient();
/*new PrismaClient({
    log: ['query'],
  });*/

if (process.env.NODE_ENV !== "production") global.prisma = prisma;

export default prisma;
