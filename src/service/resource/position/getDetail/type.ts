import { BaseResponse } from '@/service/type'

type PositionDetail = {
  id: number
  code: string
  name: string
  activated: boolean
}

export type RequestParams = {
  GET: { positionId: number }
}

export type Response = {
  GET: BaseResponse<PositionDetail>
}
