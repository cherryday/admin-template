import { Link, useMatch } from 'react-router-dom'
import cn from 'classnames'
import { UserAvatar } from '../../../components/UserAvatar/UserAvatar'
import styles from './UserLink.module.css'

export const UserLink = (): JSX.Element => {
  const isUserRoute = !!useMatch('/user')

  return (
    <Link to="/user" className={cn(styles.user, {
      [styles.userActive]: isUserRoute
    })}>
      <UserAvatar
        src="https://cdn.vuetifyjs.com/images/john.jpg"
        selected={isUserRoute}
        className={styles.userAvatar}
      />
      <div>
        <p className={styles.userName}>Sierra Ferguson</p>
        <p className={styles.userEmail}>s.ferguson@gmail.com</p>
      </div>
    </Link>
  )
}