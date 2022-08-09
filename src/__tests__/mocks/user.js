import { prismaMock } from "@/prisma/singleton";

export const users = [
  {
    id: 1,
    first_name: "first_name",
    last_name: "last_name",
    email: "email@email.com",
  },
  {
    id: 2,
    first_name: "first_name",
    last_name: "last_name",
    email: "email@email2.com",
  },
];

export const mockUser = {
  mockValid(index = 0) {
    prismaMock.users.create.mockResolvedValue(users[index]);
    prismaMock.users.findUnique.mockResolvedValue(users[index]);
    prismaMock.users.findFirst.mockResolvedValue(users[index]);
    prismaMock.users.findMany.mockResolvedValue(users);
    prismaMock.users.create.mockResolvedValue(users[index]);
    prismaMock.users.update.mockResolvedValue(users[index]);
    prismaMock.users.update.mockResolvedValue(users[index]);
  },
  mockEmpty() {
    prismaMock.users.create.mockResolvedValue(null);
    prismaMock.users.findUnique.mockResolvedValue(null);
    prismaMock.users.findFirst.mockResolvedValue(null);
    prismaMock.users.findMany.mockResolvedValue(null);
    prismaMock.users.create.mockResolvedValue(null);
    prismaMock.users.update.mockResolvedValue(null);
    prismaMock.users.update.mockResolvedValue(null);
  },
};
