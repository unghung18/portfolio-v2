import { Dashboard } from '@mui/icons-material'
import RequestQuoteIcon from '@mui/icons-material/RequestQuote'
import { ReactNode } from 'react'

export interface MenuPathProps {
  name: string
  path: string
  icon?: ReactNode
  isChecked?: boolean
  children?: MenuPathProps[]
  subMenu?: MenuPathProps[]
}

export const BASE_PATH = 'edm'

export const TRANSLATE = {
  COMMON: 'common',
}

export const MENU_URL = {
  DASHBOARD: '/dashboard',
}

export const listMenuRoutes: MenuPathProps[] = [
  {
    name: 'Trang chủ',
    path: MENU_URL.DASHBOARD,
    icon: <Dashboard />,
  },
]
