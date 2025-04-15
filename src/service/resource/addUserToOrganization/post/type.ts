type UserInfo = {
  id: number
  credential: string
  credentialType: string
}

export type RequestBodyCreateAccount = {
  POST: Array<UserInfo>
}
