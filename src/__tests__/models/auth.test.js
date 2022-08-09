import { auth } from "@/models/auth";
import { prismaMock } from "@/prisma/singleton";
import mockUser from "@/mocks/user";
test("mockeo de user", async () => {
  mockUser.mockValid();
  const user = await auth.getUser("email@email.com");
  expect(user).toBe(true);
});
