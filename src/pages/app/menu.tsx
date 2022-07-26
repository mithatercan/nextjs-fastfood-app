import {
  Box,
  Button,
  ButtonGroup,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react'
import CategoryModal from '@components/menu/CategoryModal'
import ProductModal from '@components/menu/ProductModal'
import type { NextPage } from 'next'
import Link from 'next/link'
import React, { useState } from 'react'
import { ArrowNarrowLeft, Pencil } from 'tabler-icons-react'

const data = [
  {
    name: 'Burger',
    price: '100',
    category: 'Food',
    description: 'This is a burger',
  },
  {
    name: 'Pizza',
    price: '200',
    category: 'Food',
    description: 'This is a pizza',
  },
  {
    name: 'Coffee',
    price: '300',
    category: 'Drink',
    description: 'This is a coffee',
  },
  {
    name: 'Tea',
    price: '400',
    category: 'Drink',
    description: 'This is a tea',
  },
]

const Menu: NextPage = () => {
  const [isCategoryOpen, setIsCategoryOpen] = useState(false)
  const [isProductOpen, setIsProductOpen] = useState(false)

  return (
    <Box>
      {/* Modals Here */}
      <CategoryModal
        isOpen={isCategoryOpen}
        onClose={() => setIsCategoryOpen(false)}
      />
      <ProductModal
        isOpen={isProductOpen}
        onClose={() => setIsProductOpen(false)}
      />

      <Box className="flex justify-between items-center p-5 border-b-2 border-zinc-100">
        <Link href="/app/dashboard">
          <a className="flex items-center text-zinc-600">
            <ArrowNarrowLeft />
            Dashboard
          </a>
        </Link>
        <ButtonGroup>
          <Button
            colorScheme="blue"
            variant="outline"
            onClick={() => setIsProductOpen(true)}
          >
            New product
          </Button>
          <Button colorScheme="blue" onClick={() => setIsCategoryOpen(true)}>
            New category
          </Button>
        </ButtonGroup>
      </Box>

      <TableContainer>
        <Table variant="simple" size="lg">
          <TableCaption>Imperial to metric conversion factors</TableCaption>
          <Thead className="bg-zinc-100">
            <Tr>
              <Th>Name</Th>
              <Th>Description</Th>
              <Th>Category</Th>
              <Th isNumeric>Price</Th>
              <Th isNumeric>Edit</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data.map((item) => (
              <Tr key={item.name}>
                <Td>{item.name}</Td>
                <Td>{item.description}</Td>
                <Td>{item.category}</Td>
                <Td isNumeric>{item.price}</Td>
                <Td className="flex justify-end  ">
                  <Pencil className="100" />
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  )
}

export default Menu
