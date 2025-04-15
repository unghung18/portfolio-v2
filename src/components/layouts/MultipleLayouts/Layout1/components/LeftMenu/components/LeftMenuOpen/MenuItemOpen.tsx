import SwitchSystemIcon from '@/components/icons/SwitchSystemIcon'
import { BLACK } from '@/helper/colors'
import { useAppSelector } from '@/redux/hook'
import { MenuPathProps, TRANSLATE } from '@/routes'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'
import { Box, Collapse, Typography } from '@mui/material'
import { useTranslation } from 'next-i18next'
import { useRouter } from 'next/router'
import { useCallback, useEffect, useState } from 'react'
import { useSetRecoilState } from 'recoil'
import { isOpenLeftMenuRecoil } from '../../recoil'
import { checkIsMenuOpen } from '@/helper/checkIsMenuOpen'

interface Props {
  item: MenuPathProps
  setMenuList?: any
  setTitleSubMenu?: any
}

const MenuItemOpen = (props: Props) => {
  const { t } = useTranslation(TRANSLATE.COMMON)
  const { item, setMenuList, setTitleSubMenu } = props
  const router = useRouter()

  const setIsOpenLeftMenu = useSetRecoilState(isOpenLeftMenuRecoil)

  const [open, setOpen] = useState(false)

  useEffect(() => {
    setOpen(checkIsMenuOpen(item, router.pathname))

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [item, router.pathname])


  const groupMenuChecked = useCallback(
    (item: MenuPathProps): boolean => {
      if (item.isChecked) return router.asPath.startsWith(item.path)
      if (item.children || item.subMenu)
        return [
          ...(item.children ? item.children : []),
          ...(item.subMenu ? item.subMenu : []),
        ].some(
          (itemMenu) =>
            router.asPath.startsWith(itemMenu.path) ||
            groupMenuChecked(itemMenu),
        )
      else return router.asPath.startsWith(item.path)
    },
    [router.asPath],
  )

  const isGroupMenuChecked = groupMenuChecked(item)

  const { firstMainColor: PRIMARY } = useAppSelector(
    (state) => state.themeColorData,
  )

  if (item.subMenu) {
    return (
      <Box
        className="flex items-center h-18 hover:bg-cyan-50 group rounded-[8px] my-3 cursor-pointer"
        style={{
          color: isGroupMenuChecked ? PRIMARY : BLACK,
        }}
        onClick={() => {
          setMenuList(item.subMenu)
          setTitleSubMenu(item.name)
        }}
      >
        {isGroupMenuChecked ? (
          <div className="w-2 h-full rounded-l-[4px] bg-[#0078D4]" />
        ) : (
          <div className="w-2 h-full rounded-l-[4px] group-hover:bg-[#0078D4]" />
        )}

        <div className="flex gap-6 items-center h-full w-full pl-5 group-hover:text-[#0078D4]">
          {item.icon}

          <Typography variant="body1">{t(item.name)}</Typography>
        </div>

        <KeyboardArrowRightIcon fontSize="small" />
      </Box>

    )
  }

  if (item.children) {
    return (
      <Box>
        <Box
          className="flex items-center h-18 hover:bg-cyan-50 group rounded-[8px] my-3 cursor-pointer"
          style={{
            color: isGroupMenuChecked ? PRIMARY : BLACK,
          }}
          onClick={() => {
            item.isChecked && router.push(item.path)
            setOpen(!open)
          }}
        >
          {isGroupMenuChecked ? (
            <div className="w-2 h-full rounded-l-[4px] bg-[#0078D4]" />
          ) : (
            <div className="w-2 h-full rounded-l-[4px] group-hover:bg-[#0078D4]" />
          )}

          <div className="flex gap-6 items-center h-full w-full pl-5 group-hover:text-[#0078D4]">
            {item.icon}

            <Typography variant="body1">{t(item.name)}</Typography>
          </div>

          <KeyboardArrowDownIcon
            fontSize="small"
            style={{ transform: open ? 'rotate(180deg)' : undefined }}
            onClick={(e) => {
              setOpen(!open)
              e.stopPropagation()
            }}
          />
        </Box>

        <Collapse in={open} style={{ paddingLeft: 25 }}>
          {item.children.map((item: any, index: number) => {
            return <MenuItemOpen key={'key' + index} item={item} />
          })}
        </Collapse>
      </Box>
    )
  }

  return (
    <div
      className="flex items-center h-18 hover:bg-cyan-50 group rounded-[8px] my-3 cursor-pointer"
      style={{
        color: isGroupMenuChecked ? PRIMARY : BLACK,
      }}
    >
      {isGroupMenuChecked ? (
        <div className="w-2 h-full rounded-l-[4px] bg-[#0078D4]" />
      ) : (
        <div className="w-2 h-full rounded-l-[4px] group-hover:bg-[#0078D4]" />
      )}

      <Box
        className="flex gap-6 items-center h-full w-full pl-5 group-hover:text-[#0078D4]"
        onClick={() => {
          router.push(item.path)
        }}
      >
        {item.icon}
        <Typography variant="body1">{t(item.name)}</Typography>
      </Box>
      {['/', '/dashboard'].includes(item.path) && (
        <SwitchSystemIcon
          onClick={() => {
            setIsOpenLeftMenu(false)
          }}
        />
      )}
    </div>
  )
}

export default MenuItemOpen
