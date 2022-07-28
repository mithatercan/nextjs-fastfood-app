/* eslint-disable @typescript-eslint/ban-ts-comment */
import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Select,
  Stack,
} from '@chakra-ui/react'
import { useGetAllCategoriesQuery } from '@services/api'
// const [createCompany] = useCreateCompanyMutation()
// const { data: user } = useUseUserQuery()
// const router = useRouter()
// if (user?.company) {
//   router.push('/menu')
// }
// const { register, handleSubmit } = useForm<TCompany>()
//
// const onSubmit = (data: TCompany) => {
//   if (data.terms) {
//     createCompany({ ...data })
//   } else {
//     alert('You must accept the terms and conditions')
//   }
// }

const CategoryModal = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean
  onClose: () => void
}): JSX.Element => {
  const { data: categories } = useGetAllCategoriesQuery()
  const flattencategories =
    categories &&
    categories.map((c) =>
      // @ts-ignore
      c.categories.map((x) => x).map((x: { name: string }) => x.name)
    )[0]
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>New Product</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <form>
              <Stack spacing={3}>
                <Input placeholder="Product name" />
                <Input placeholder="Product's price" type="number" />
                <Select placeholder="Choose category">
                  {categories &&
                    flattencategories?.map((category: string) => {
                      return (
                        <option key={category} value={category}>
                          <label>{category}</label>
                        </option>
                      )
                    })}
                  )
                </Select>
                <Input placeholder="Product's description" />
              </Stack>
            </form>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="gray" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button colorScheme="blue">Save</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default CategoryModal
