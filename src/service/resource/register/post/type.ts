export type RequestBody = {
  SAVE: {
    email: string
    otp: string
    phone?: string | null
    name: string | null
    password: string
    rePassword: string
    isCheck: boolean
  }
}
