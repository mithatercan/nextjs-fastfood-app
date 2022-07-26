import { Box, Flex, Stack } from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'
import { Logout, Menu2, ReportMoney, SmartHome } from 'tabler-icons-react'

const Sidebar = (): JSX.Element => {
  return (
    <Box className="h-screen w-20 border-r-2 border-zinc-100">
      <Flex className="h-full py-5 flex-col items-center justify-between">
        <Image src="/logo.jpeg" alt="logo" width={45} height={45} />

        <Stack spacing={7}>
          <SmartHome size={28} />
          <ReportMoney size={28} />
          <Link href="/app/menu">
            <Menu2 className="cursor-pointer" size={28} />
          </Link>
        </Stack>

        <Logout />
      </Flex>
    </Box>
  )
}
export default Sidebar
