import {
  Box,
  Button,
  Divider,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Text,
} from '@chakra-ui/react'
import data from '@utils/fakeBill'

import BillTable from './BillTable'

const BillDrawer = ({
  isOpen,
  toggleOpen,
}: {
  isOpen: boolean
  toggleOpen: () => void
}) => {
  return (
    <Drawer isOpen={isOpen} placement="right" size="sm" onClose={toggleOpen}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>Products</DrawerHeader>
        <Divider />

        <DrawerBody className="py-10 flex flex-col justify-between">
          <Box className="h-[80%] overflow-x-auto">
            <BillTable data={data} />
          </Box>

          <Flex className="py-5 px-2 border-t-2 border-zinc-100 items-center justify-between">
            Total :
            <Text as="span" fontWeight="bold">
              $ 20
            </Text>
          </Flex>
        </DrawerBody>

        <DrawerFooter>
          <Button
            colorScheme="red"
            variant="outline"
            mr={3}
            className="w-full"
            onClick={toggleOpen}
          >
            Cancel order
          </Button>
          <Button className="w-full" colorScheme="blue">
            Get Payment
          </Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}

export default BillDrawer
