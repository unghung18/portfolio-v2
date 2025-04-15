export type RequestBodyInviteUser = {
  name: string
  orges: {
    id: number
    name: string
  }[]
  org: {
    id: number
    name: string
  }
  orgId: number
  phone: string
  email: string
  sendType: 'PHONE_NUMBER' | 'EMAIL'
  roleIds: number[]
  roles: {
    id: number
    name: string
  }[]
}
