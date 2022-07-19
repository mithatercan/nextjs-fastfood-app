import { Prisma, PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()


const sellerData2: Prisma.SellerCreateInput[] = [
  {
    company: 'lsaa',
    region: 'laass',
    currency: 'lqq',
    menus: {
      create: [
        {
          name: "chicken-menu",
          price: 22,
          items: {
            create: [
              {
                name: "chicken-burger",
                price: 12,
                ingredient: {
                  create: [
                    { name: "meat" },
                    { name: "special-sauce" },
                    { name: "burger-bread" },
                    { name: "cabbage" },
                    { name: "pickle" },
                    { name: "tomato" }
                  ]
                }
              },
              {
                name: "coke",
                price: 2,
              },
              {
                name: "french-fries",
                price: 4,
                ingredient: {
                  create: [
                    {
                      name: "potato"
                    },
                    {
                      name: "oil"
                    }
                  ]
                }
              }
            ]
          }
        },
        {
          name: "meat-burger-menu",
          price: 32,
          items: {
            create: [
              {
                name: "meat-burger"
                , price: 20
                , ingredient: {
                  create: [
                    { name: "meat" },
                    { name: "salt" },
                    { name: "butter" }
                  ]
                },

              },
            ],
          },

        },
      ]
    },
    drinks: {
      create: [
        {
          price: 2,
          name: "pepsi"
        }
      ]
    }
    , side_dishs: {
      create: [
        {
          price: 4,
          name: "chiken-nuggets"
        }
      ]
    },
    desserts: {
      create: [
        { price: 4, name: "waffle" }
      ]
    },
    sauces: {
      create: [
        { price: 2, name: "ketchup" }
      ]
    }
  }]

//   model Seller {
//   id       Int    @id @default(autoincrement())
//   company  String @unique
//   region   String
//   currency String
//   menus    Menu[]
// }
//
// // whole menu
// model Menu {
//   id       Int       @id @default(autoincrement())
//   name     String
//   price    Int
//   seller   Seller    @relation(fields: [sellerId], references: [id])
//   sellerId Int
//   items    Product[]
//   extras   Extra[]
//   size     Size
// }
//
// // One item like Buger or Fries
// model Product {
//   id         Int          @id @default(autoincrement())
//   price      Int
//   name       String
//   Menu       Menu?        @relation(fields: [menuId], references: [id])
//   menuId     Int?
//   ingredient Ingredient[]
// }
//
// // ingredients of products, meat pickle etc.
// model Ingredient {
//   id        Int     @id @default(autoincrement())
//   name      String
//   product   Product @relation(fields: [productId], references: [id])
//   productId Int
// }
//
// model Extra {
//   id     Int    @id @default(autoincrement())
//   name   String
//   price  Int
//   Menu   Menu?  @relation(fields: [menuId], references: [id])
//   menuId Int?
//   size   Size?
// }
//
// enum Size {
//   Big
//   Medium
//   Small
// }

async function main() {
  console.log(`Start seeding ...`)
  for (const u of sellerData2) {
    const user = await prisma.seller.create({
      data: u,
    })
    console.log(`Created user with id: ${user.id}`)
  }
  console.log(`Seeding finished.`)
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })

