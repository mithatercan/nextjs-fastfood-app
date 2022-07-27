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

const BillTable = ({
  data,
}: {
  data: {
    name: string
    quantity: number
    price: number
  }[]
}): JSX.Element => {
  return (
    <TableContainer>
      <Table variant="striped" size="md">
        <Thead>
          <Tr>
            <Th>Name</Th>
            <Th isNumeric>Quantity</Th>
            <Th isNumeric>Price</Th>
          </Tr>
        </Thead>
        <Tbody>
          {data.map((item) => (
            <Tr key={item.name}>
              <Td>{item.name}</Td>
              <Td isNumeric>{item.quantity}</Td>
              <Td isNumeric>{item.price}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  )
}

export default BillTable
