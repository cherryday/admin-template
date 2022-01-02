import { SidebarLink } from '../SidebarLink/SidebarLink'
import { UserLink } from '../UserLink/UserLink'
import styles from './MainSidebar.module.css'
import logoIcon from '../../../assets/icons/logo.svg'
import { ReactComponent as DashboardIcon } from '../../../assets/icons/dashboard.svg'
import { ReactComponent as ToggleIcon } from '../../../assets/icons/toggle.svg'
import { ReactComponent as SettingsIcon } from '../../../assets/icons/settings.svg'

export const MainSidebar = (): JSX.Element => {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.header}>
        <img src={logoIcon} alt="logo"/>
      </div>

      <UserLink/>

      <SidebarLink
        to="/"
        icon={<DashboardIcon/>}
        className={styles.link}
      >
        Dashboard
      </SidebarLink>

      <SidebarLink
        to="/settings"
        icon={<SettingsIcon/>}
        className={styles.link}
      >
        Settings
      </SidebarLink>

      <div className={styles.divider}></div>

      <div className={styles.footer}>
        <button className={styles.toggle}>
          <ToggleIcon className={styles.toggleIcon}/>
          Toggle sidebar
        </button>
      </div>
    </aside>
  )
}