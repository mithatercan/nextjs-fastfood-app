// import { Prisma, PrismaClient } from '@prisma/client'
//
// const prisma = new PrismaClient()
//
//
// const sellerData2: Prisma.SellerCreateInput[] = [
//   {
//     company: 'chickenland',
//     region: 'us',
//     currency: '$',
//     menus: {
//       create: [
//         {
//           name: "chicken-menu",
//           price: 22,
//           items: {
//             create: [
//               {
//                 name: "chicken-burger",
//                 price: 12,
//                 ingredient: {
//                   create: [
//                     { name: "meat" },
//                     { name: "special-sauce" },
//                     { name: "burger-bread" },
//                     { name: "cabbage" },
//                     { name: "pickle" },
//                     { name: "tomato" }
//                   ]
//                 }
//               },
//               {
//                 name: "coke",
//                 price: 2,
//               },
//               {
//                 name: "french-fries",
//                 price: 4,
//                 ingredient: {
//                   create: [
//                     {
//                       name: "potato"
//                     },
//                     {
//                       name: "oil"
//                     }
//                   ]
//                 }
//               }
//             ]
//           }
//         },
//         {
//           name: "meat-burger-menu",
//           price: 32,
//           items: {
//             create: [
//               {
//                 name: "meat-burger"
//                 , price: 20
//                 , ingredient: {
//                   create: [
//                     { name: "meat" },
//                     { name: "salt" },
//                     { name: "butter" }
//                   ]
//                 },
//
//               },
//             ],
//           },
//
//         },
//       ]
//     },
//     drinks: {
//       create: [
//         {
//           price: 2,
//           name: "pepsi"
//         },
//         { price: 2, name: "sprite" },
//         { price: 2, name: "lipton" }
//       ]
//     }
//     , side_dishes: {
//       create: [
//         {
//           price: 4,
//           name: "chiken-nuggets"
//         },
//         { price: 4, name: "fish-fingers" }
//       ]
//     },
//     desserts: {
//       create: [
//         { price: 4, name: "waffle" },
//         { price: 2, name: "cake" }
//       ]
//     },
//     sauces: {
//       create: [
//         { price: 2, name: "ketchup" },
//         { price: 2, name: "mayo" }
//
//       ]
//     }
//   }]
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
