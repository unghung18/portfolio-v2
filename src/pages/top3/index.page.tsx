import { BasicLayout } from '@/components/layouts/WrapLayout/BasicLayout'
import { Meta } from '@/components/meta'
import { HttpResponse } from '@/lib/api'
import { combineGssp } from '@/lib/next/gssp/combineGssp'
import { NextPageWithLayout } from '@/lib/next/types'
import { TRANSLATE } from '@/routes'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { Top3 } from '@/components/templates/Top'

type Props = HttpResponse<any>

const Page: NextPageWithLayout<Props> = () => <Top3 />

Page.getLayout = BasicLayout
Page.getMeta = Meta(() => ({ title: 'Pdf View' }))

export const getServerSideProps = combineGssp<any>(
  // authGssp(),
  async ({ locale = 'vn' }) => ({
    props: {
      ...(await serverSideTranslations(locale, [TRANSLATE.COMMON])),
    },
  }),
)

export default Page
