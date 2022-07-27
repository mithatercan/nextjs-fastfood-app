import {
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react'
import React from 'react'
import { Pencil } from 'tabler-icons-react'

const MenuTable = ({
  data,
}: {
  data: {
    name: string
    price: number
    category: string
    description: string
  }[]
}): JSX.Element => {
  return (
    <TableContainer>
      <Table variant="simple" size="lg">
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
  )
}

export default MenuTable
