import { Link, useMatch } from 'react-router-dom'
import cn from 'classnames'
import { UserAvatar } from '../../../components/UserAvatar/UserAvatar'
import styles from './UserLink.module.css'
import { UserLinkProps } from './UserLink.props'

export const UserLink = ({ mini }: UserLinkProps): JSX.Element => {
  const isUserRoute = !!useMatch('/user')

  return (
    <Link to="/user" className={cn(styles.user, {
      [styles.userActive]: isUserRoute,
      [styles.mini]: mini
    })}>
      <UserAvatar
        src="https://cdn.vuetifyjs.com/images/john.jpg"
        selected={isUserRoute}
        className={styles.userAvatar}
      />
      <div className={styles.userData}>
        <p className={styles.userName}>Sierra Ferguson</p>
        <p className={styles.userEmail}>s.ferguson@gmail.com</p>
      </div>
    </Link>
  )
}