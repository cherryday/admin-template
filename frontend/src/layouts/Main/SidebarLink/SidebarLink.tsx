import { NavLink } from 'react-router-dom'
import cn from 'classnames'
import styles from './SidebarLink.module.css'
import { SidebarLinkProps } from './SidebarLink.props'

export const SidebarLink = ({ to, icon, children, mini, className = '' }: SidebarLinkProps): JSX.Element => {
  return (
    <NavLink to={to} className={({ isActive }) => cn(styles.link, className, {
      [styles.linkActive]: isActive,
      [styles.mini]: mini
    })}>
      <div className={styles.linkIcon}>
        {icon}
      </div>
      <p className={styles.linkText}>
        {children}
      </p>
    </NavLink>
  )
}
