import { Avatar, Box } from '@chakra-ui/react'

const Navbar = (): JSX.Element => {
  return (
    <Box className="flex items-center justify-end w-full py-3 px-6 border-b-2 border-zinc-100">
      <Avatar name="Mithat Ercan" />
    </Box>
  )
}

export default Navbar
