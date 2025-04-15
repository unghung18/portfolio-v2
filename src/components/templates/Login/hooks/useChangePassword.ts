import { authUaaApi } from '@/config/auth'
import { REGEX } from '@/helper/regex'
import { TRANSLATE } from '@/routes'
import { useTranslation } from 'next-i18next'
import { useState } from 'react'
import { toastError, toastSuccess } from '@/toast'

export const getOtpForgotPassword = (data: any) => {
  return authUaaApi({
    url: '/public-api/v1/user/forgot-password',
    method: 'post',
    data,
  })
}

export const submitChangePassword = (data: any) => {
  return authUaaApi({
    url: '/public-api/v1/user/submit-password',
    method: 'post',
    data,
  })
}

const useChangePassword = () => {
  const [otp, setOtp] = useState()
  const { t } = useTranslation(TRANSLATE.COMMON)

  const getOtp = async (val: string) => {
    try {
      const res = await getOtpForgotPassword({
        otpReceiver: val,
        receiverType: REGEX.EMAIL.test(val) ? 'EMAIL' : 'PHONE',
      })
      setOtp(res?.data?.data)
      toastSuccess(t('message.success'))
      return res?.data?.data
    } catch (err) {
      toastError(err)
    }
  }

  const handleChangePassword = async (val: any) => {
    try {
      const res = await submitChangePassword(val)
      toastSuccess(t('changepassword.success'))
      return res?.data
    } catch (err) {
      toastError(err)
    }
  }

  return { getOtp, otp, handleChangePassword }
}

export default useChangePassword
