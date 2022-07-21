import { Prisma, PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const sellerData: Prisma.SellerCreateWithoutProductsInput[] =
  [
    {
      email: 'ali-81@weqwcom',
      company: "wwsaw",
      currency: "$",
      region: "us",
      username: "gordqawedqaweun210",
      password: "2345",

    },
    {
      company: "kfcsdaw",
      currency: "$",
      email: "kfcsdas@sad.com",
      password: "12345qaweq",
      region: "us",
      username: "kaweafc_kfc",
    }
  ]


const products = [
  {
    name: "chicken wings",
    description: "chicken wings",
    ingredients: "chicken",
    price: 9,
    category: "chicken",

  },
  {
    name: "chicken burger",
    description: "meat burger and bread",
    ingredients: "meat bread",
    price: 18,
    category: "burgers"
  },
  {
    name: "cola",
    description: "cold drink",
    ingredients: "coca cola",
    price: 3,
    category: "drink"
  },
  {
    name: "french fries",
    description: "french fries",
    ingredients: "potato",
    price: 5,
    category: "side dish",
  },
  {
    name: "chicken burger",
    description: "chicken burgerr",
    ingredients: "meat",
    price: 12,
    category: "burgers"
  },
  {
    name: "meat burger",
    description: "meat burger and bread",
    ingredients: "meat bread",
    price: 20,
    category: "burgers"
  },
  {
    name: "cola",
    description: "cold drink",
    ingredients: "coca cola",
    price: 2,
    category: "drink"
  },
  {
    name: "french fries",
    description: "french fries",
    ingredients: "potato",
    price: 4,
    category: "side dish",
  }


]
async function main() {
  console.log(`Start seeding ...`)
  for (const u of sellerData) {
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

