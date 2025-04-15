import { BaseResponse } from '@/service/type'

type StaffDetail = {
  id: number
  imageUrl: string
  code: string
  name: string
  fullName: string
  department: {
    id: number
    name: string
  }
  position: {
    id: number
    name: string
  }
  birthday: string
  gender: string
  phoneNumber: string
  email: string
  activated: boolean
}

export type RequestParams = {
  GET: { employeeId: number }
}

export type Response = {
  GET: BaseResponse<StaffDetail>
}
