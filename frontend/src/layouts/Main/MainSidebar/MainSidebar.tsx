import cn from 'classnames'
import { SidebarLink } from '../SidebarLink/SidebarLink'
import { UserLink } from '../UserLink/UserLink'
import styles from './MainSidebar.module.css'
import logoIcon from '../../../assets/icons/logo.svg'
import logoMiniIcon from '../../../assets/icons/logo-mini.svg'
import { ReactComponent as DashboardIcon } from '../../../assets/icons/dashboard.svg'
import { ReactComponent as ToggleIcon } from '../../../assets/icons/toggle.svg'
import { ReactComponent as SettingsIcon } from '../../../assets/icons/settings.svg'
import { MainSidebarProps } from './MainSidebar.props'

export const MainSidebar = ({ mini, toggle }: MainSidebarProps): JSX.Element => {
  return (
    <aside className={cn(styles.sidebar, {
      [styles.mini]: mini
    })}>
      <div className={styles.header}>
        <img src={mini ? logoMiniIcon : logoIcon} alt="logo"/>
      </div>

      <UserLink mini={mini}/>

      <SidebarLink
        to="/"
        icon={<DashboardIcon/>}
        className={styles.link}
        mini={mini}
      >
        Dashboard
      </SidebarLink>

      <SidebarLink
        to="/settings"
        icon={<SettingsIcon/>}
        className={styles.link}
        mini={mini}
      >
        Settings
      </SidebarLink>

      <div className={styles.divider}></div>

      <button onClick={toggle} className={styles.toggle}>
        <ToggleIcon className={styles.toggleIcon}/>
        <p className={styles.toggleText}>
          Toggle sidebar
        </p>
      </button>
    </aside>
  )
}