import { Link, useMatch, NavLink } from 'react-router-dom'
import cn from 'classnames'
import styles from './MainSidebar.module.css'
import logoIcon from '../../assets/icons/logo.svg'
import { UserAvatar } from '../UserAvatar/UserAvatar'
import { ReactComponent as DashboardIcon } from '../../assets/icons/dashboard.svg'
import { ReactComponent as ToggleIcon } from '../../assets/icons/toggle.svg'

export const MainSidebar = (): JSX.Element => {
  const isUserRoute = !!useMatch('/user')

  return (
    <aside className={styles.sidebar}>
      <div className={styles.header}>
        <img src={logoIcon} alt="logo"/>
      </div>

      <Link to="/user" className={cn(styles.user, {
        [styles.userActive]: isUserRoute
      })}>
        <UserAvatar
          className={styles.userAvatar}
          src="https://cdn.vuetifyjs.com/images/john.jpg"
          selected={isUserRoute}
        />
        <div>
          <p className={styles.userName}>Sierra Ferguson</p>
          <p className={styles.userEmail}>s.ferguson@gmail.com</p>
        </div>
      </Link>

      <NavLink to="/" className={({ isActive }) => isActive ? `${styles.link} ${styles.linkActive}` : styles.link}>
        <div className={styles.linkIcon}>
          <DashboardIcon/>
        </div>
        <p className={styles.linkText}>Dashboard</p>
      </NavLink>

      <NavLink to="/home" className={({ isActive }) => isActive ? `${styles.link} ${styles.linkActive}` : styles.link}>
        <div className={styles.linkIcon}>
          <DashboardIcon/>
        </div>
        <p className={styles.linkText}>Dashboard</p>
      </NavLink>

      <div className={styles.divider}></div>

      <NavLink to="/settings" className={({ isActive }) => isActive ? `${styles.link} ${styles.linkActive}` : styles.link}>
        <div className={styles.linkIcon}>
          <DashboardIcon/>
        </div>
        <p className={styles.linkText}>Dashboard</p>
      </NavLink>

      <div className={styles.footer}>
        <button className={styles.toggle}>
          <ToggleIcon className={styles.toggleIcon}/>
          Toggle sidebar
        </button>
      </div>
    </aside>
  )
}