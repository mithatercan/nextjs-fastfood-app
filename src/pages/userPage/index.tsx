import type { Category } from '@prisma/client'
import type { SubmitHandler } from 'react-hook-form'
import { useForm } from 'react-hook-form'

import { useCreateCompanyMutation, useUseUserQuery } from '../../services/api'

type TCompany = {
  name: string
  region: string
  currency: string
}
const UserPage = () => {
  const [createCompany, result] = useCreateCompanyMutation()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TCompany>()
  const onSubmit = (data: TCompany) => {
    createCompany({ ...data })
  }
  const { data: user, isFetching, isError } = useUseUserQuery()

  if (user) {
    console.log(user?.company)
  }

  return (
    <div>
      <div>
        {user?.email}
        {user ? (
          <div>{user?.company?.currency}</div>
        ) : (
          <div>create company</div>
        )}
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label> Name: </label>
        <input {...register('name')} />
        <label> currency :</label>
        <input {...register('currency')} />
        <label> Region: </label>
        <input {...register('region')} />
        <input type="submit" />
      </form>
    </div>
  )
}

export default UserPage
