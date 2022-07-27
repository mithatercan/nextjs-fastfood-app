import { Box } from '@chakra-ui/react'
import MenuHeader from '@components/menu/MenuHeader'
import MenuTable from '@components/menu/MenuTable'
import data from '@utils/fakeData'
import type { NextPage } from 'next'

const Menu: NextPage = () => {
  return (
    <Box>
      <MenuHeader />
      <MenuTable data={data} />
    </Box>
  )
}

export default Menu
