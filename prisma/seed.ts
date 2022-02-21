import { PrismaClient } from "@prisma/client";

const db = new PrismaClient();

function getTodo() {
  return [
    { name: "Buy Shoes", completed: false },
    { name: "Recharge", completed: false },
    { name: "Some task", completed: true },
  ];
}

async function seed() {
  const hari = await db.user.create({
    data: {
      username: "Hari",
      //hashed version of "qwerty"
      passwordHash:
        "$2a$12$PaHdthB7IWhR53Vy2vm2AeAhbz5eXSDPomcQNk7ZW5Srv.Lz1gud6",
    },
  });
  await Promise.all(
    getTodo().map((todo) => {
      const data = { userid: hari.id, ...todo };
      return db.todo.create({ data });
    })
  );
}

seed();
