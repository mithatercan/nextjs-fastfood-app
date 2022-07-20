// import { Prisma, PrismaClient } from '@prisma/client'
//
// const prisma = new PrismaClient()
//
//
//
// async function main() {
//   console.log(`Start seeding ...`)
//   for (const u of sellerData2) {
//     const user = await prisma.seller.create({
//       data: u,
//     })
//     console.log(`Created user with id: ${user.id}`)
//   }
//   console.log(`Seeding finished.`)
// }
//
// main()
//   .then(async () => {
//     await prisma.$disconnect()
//   })
//   .catch(async (e) => {
//     console.error(e)
//     await prisma.$disconnect()
//     process.exit(1)
//   })
//
