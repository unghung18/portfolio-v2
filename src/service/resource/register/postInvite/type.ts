export type RequestBody = {
  SAVE: {
    inviteCode?: string
    name?: string | null
    phone?: string | null
    gender: string
    birthDay: string
    password: string
    rePassword: string
    isCheck: boolean
  }
}
