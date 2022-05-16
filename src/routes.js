import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
const Member = React.lazy(() => import('./views/theme/member/Member'))
const AddMember = React.lazy(() => import('./views/theme/member/AddMember'))
const Company = React.lazy(() => import('./views/theme/company/Company'))
const AddCompany = React.lazy(() => import('./views/theme/company/AddCompany'))

// Base
const Labor = React.lazy(() => import('./views/base/labor/Labor'))
const Recruit = React.lazy(() => import('./views/base/recruit/Recruit'))
const AddRecruit = React.lazy(() => import('./views/base/recruit/AddRecruit'))
const Skill = React.lazy(() => import('./views/base/skill/Skill'))
const AddSkill = React.lazy(() => import('./views/base/skill/AddSkill'))
const jobApplication = React.lazy(() => import('./views/base/jobApplication/JobApplication'))
const AddjobApplication = React.lazy(() => import('./views/base/jobApplication/AddJobApplication'))
const Document = React.lazy(() => import('./views/base/document/Document'))
const AddDocument = React.lazy(() => import('./views/base/document/AddDocument'))
const Hospital = React.lazy(() => import('./views/base/hospital/Hospital'))
const AddHospital = React.lazy(() => import('./views/base/hospital/AddHospital'))
const Welfare = React.lazy(() => import('./views/base/welfare/Welfare'))
const AddWelfare = React.lazy(() => import('./views/base/welfare/AddWelfare'))
const News = React.lazy(() => import('./views/base/news/News'))
const AddNews = React.lazy(() => import('./views/base/news/AddNews'))
const Report = React.lazy(() => import('./views/base/report/Report'))
//const AddReport = React.lazy(() => import('./views/base/report/AddReport'))
const useManagement = React.lazy(() => import('./views/base/userManage/UserManage'))
const AddUserManagement = React.lazy(() => import('./views/base/userManage/AddUserManage'))
const Setting = React.lazy(() => import('./views/base/setting/Setting'))

const Spinners = React.lazy(() => import('./views/base/spinners/Spinners'))
const Tables = React.lazy(() => import('./views/base/tables/Tables'))
const Tooltips = React.lazy(() => import('./views/base/tooltips/Tooltips'))

// Buttons
const Buttons = React.lazy(() => import('./views/buttons/buttons/Buttons'))
const ButtonGroups = React.lazy(() => import('./views/buttons/button-groups/ButtonGroups'))
const Dropdowns = React.lazy(() => import('./views/buttons/dropdowns/Dropdowns'))

//Forms
const ChecksRadios = React.lazy(() => import('./views/forms/checks-radios/ChecksRadios'))
const FloatingLabels = React.lazy(() => import('./views/forms/floating-labels/FloatingLabels'))
const FormControl = React.lazy(() => import('./views/forms/form-control/FormControl'))
const InputGroup = React.lazy(() => import('./views/forms/input-group/InputGroup'))
const Layout = React.lazy(() => import('./views/forms/layout/Layout'))
const Range = React.lazy(() => import('./views/forms/range/Range'))
const Select = React.lazy(() => import('./views/forms/select/Select'))
const Validation = React.lazy(() => import('./views/forms/validation/Validation'))

const Charts = React.lazy(() => import('./views/charts/Charts'))

// Icons
const CoreUIIcons = React.lazy(() => import('./views/icons/coreui-icons/CoreUIIcons'))
const Flags = React.lazy(() => import('./views/icons/flags/Flags'))
const Brands = React.lazy(() => import('./views/icons/brands/Brands'))

// Notifications
const Alerts = React.lazy(() => import('./views/notifications/alerts/Alerts'))
const Badges = React.lazy(() => import('./views/notifications/badges/Badges'))
const Modals = React.lazy(() => import('./views/notifications/modals/Modals'))
const Toasts = React.lazy(() => import('./views/notifications/toasts/Toasts'))

const Widgets = React.lazy(() => import('./views/widgets/Widgets'))

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },

  { path: '/theme', name: 'Theme', element: Member, exact: true },
  { path: '/theme/member', name: 'Member', element: Member },
  { path: '/theme/member/AddMember', name: 'Add Member', element: AddMember },

  { path: '/theme/company', name: 'Company', element: Company },
  { path: '/theme/company/AddCompany', name: 'Add Comany', element: AddCompany },

  { path: '/base', name: 'Base', element: Skill, exact: true },
  { path: '/base/skill', name: 'Skill', element: Skill },
  { path: '/base/skill/AddSkill', name: 'Add Skill', element: AddSkill },
  { path: '/base/labor', name: 'Labor Information', element: Labor},
  { path: '/base/recruit', name: 'Recruit', element: Recruit},
  { path: '/base/recruit/AddRecruit', name: 'Add Recruit', element: AddRecruit},
  { path: '/base/jobApplication', name: 'Job application', element: jobApplication },
  { path: '/base/AddjobApplication', name: 'Add Job application', element: AddjobApplication },
  { path: '/base/document', name: 'Document', element: Document },
  { path: '/base/document/AddDocument', name: 'Add Document', element: AddDocument },
  { path: '/base/hospital', name: 'Hospital', element: Hospital },
  { path: '/base/hospital/AddHospital', name: 'Add Hospital', element: AddHospital },
  { path: '/base/welfare', name: 'Welfare', element: Welfare },
  { path: '/base/welfare/AddWelfare', name: 'Add Welfare', element: AddWelfare },
  { path: '/base/news', name: 'News', element: News },
  { path: '/base/news/AddNews', name: 'Add News', element: AddNews },
  { path: '/base/report', name: 'Report', element: Report},
  { path: '/base/useManagement', name: 'User management', element: useManagement},
  { path: '/base/useManagement/AddUserManage', name: 'Add User management', element: AddUserManagement},
  { path: '/base/setting', name: 'Setting', element: Setting},

  { path: '/base/spinners', name: 'Spinners', element: Spinners },
  { path: '/base/tables', name: 'Tables', element: Tables },
  { path: '/base/tooltips', name: 'Tooltips', element: Tooltips },
  { path: '/buttons', name: 'Buttons', element: Buttons, exact: true },
  { path: '/buttons/buttons', name: 'Buttons', element: Buttons },
  { path: '/buttons/dropdowns', name: 'Dropdowns', element: Dropdowns },
  { path: '/buttons/button-groups', name: 'Button Groups', element: ButtonGroups },
  { path: '/charts', name: 'Charts', element: Charts },
  { path: '/forms', name: 'Forms', element: FormControl, exact: true },
  { path: '/forms/form-control', name: 'Form Control', element: FormControl },
  { path: '/forms/select', name: 'Select', element: Select },
  { path: '/forms/checks-radios', name: 'Checks & Radios', element: ChecksRadios },
  { path: '/forms/range', name: 'Range', element: Range },
  { path: '/forms/input-group', name: 'Input Group', element: InputGroup },
  { path: '/forms/floating-labels', name: 'Floating Labels', element: FloatingLabels },
  { path: '/forms/layout', name: 'Layout', element: Layout },
  { path: '/forms/validation', name: 'Validation', element: Validation },
  { path: '/icons', exact: true, name: 'Icons', element: CoreUIIcons },
  { path: '/icons/coreui-icons', name: 'CoreUI Icons', element: CoreUIIcons },
  { path: '/icons/flags', name: 'Flags', element: Flags },
  { path: '/icons/brands', name: 'Brands', element: Brands },
  { path: '/notifications', name: 'Notifications', element: Alerts, exact: true },
  { path: '/notifications/alerts', name: 'Alerts', element: Alerts },
  { path: '/notifications/badges', name: 'Badges', element: Badges },
  { path: '/notifications/modals', name: 'Modals', element: Modals },
  { path: '/notifications/toasts', name: 'Toasts', element: Toasts },
  { path: '/widgets', name: 'Widgets', element: Widgets },
]

export default routes
