import { BaseResponse } from '@/service/type'

export type Response = {
  GET: BaseResponse<{
    startFiscalYear: string
    endFiscalYear: string
    isChangeFiscalYear: boolean
    newStartFiscalYear: string
  }>
}
