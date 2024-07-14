import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function insertUser(
  firstName: string,
  lastName: string,
  email: string,
  userName: string,
  password: string
) {
  const response = await prisma.user.create({
    data: {
      firstName,
      lastName,
      email,
      userName,
      password,
    },
  });
  console.log(response);
}

// insertUser("Pandit", "Ponga", "Panditponga@gmail.com", "pongapandit", "123456");

async function updateUser(firstName: string, lastName: string, email: string) {
  const response = await prisma.user.update({
    where: {
      email,
    },
    data: {
      firstName,
      lastName,
    },
  });
  console.log(response);
}

updateUser("SWA", "KAT", "Panditponga@gmail.com");
