import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilChart,
  cilHospital,
  cilCalculator,
  cilChartPie,
  cilUserFollow,
  cilGroup,
  cilUser,
  cilBuilding,
  cilPuzzle,
  cilFolder,
  cilEqualizer,
  cilRectangle,
  cilClipboard,
  cilMobile,
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon icon={cilChart} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Member',
    to: '/theme/member',
    icon: <CIcon icon={cilGroup} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Company',
    to: '/theme/company',
    icon: <CIcon icon={cilBuilding} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Skill',
    to: '/base/skill',
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Labor Information',
    to: '/base/labor',
    icon: <CIcon icon={cilUserFollow} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Recruit',
    to: '/base/recruit',
    icon: <CIcon icon={cilClipboard} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Job application',
    to: '/base/jobApplication',
    icon: <CIcon icon={cilMobile} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Document',
    to: '/base/document',
    icon: <CIcon icon={cilFolder} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Hospital',
    to: '/base/hospital',
    icon: <CIcon icon={cilHospital} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Welfare',
    to: '/base/welfare',
    icon: <CIcon icon={cilCalculator} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'News',
    to: '/base/news',
    icon: <CIcon icon={cilRectangle} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Report',
    to: '/base/report',
    icon: <CIcon icon={cilCalculator} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'User management',
    to: '/base/useManagement',
    icon: <CIcon icon={cilUser} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Setting',
    to: '/base/setting',
    icon: <CIcon icon={cilEqualizer} customClassName="nav-icon" />,
  },
]

export default _nav
