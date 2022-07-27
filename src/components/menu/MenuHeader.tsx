import { Box, Button, ButtonGroup } from '@chakra-ui/react'
import CategoryModal from '@components/menu/CategoryModal'
import ProductModal from '@components/menu/ProductModal'
import Link from 'next/link'
import React, { useState } from 'react'
import { ArrowNarrowLeft } from 'tabler-icons-react'

const MenuHeader = (): JSX.Element => {
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
    </Box>
  )
}

export default MenuHeader
