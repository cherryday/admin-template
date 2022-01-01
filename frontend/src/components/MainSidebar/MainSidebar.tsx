import styles from './MainSidebar.module.css'
import logoIcon from '../../assets/icons/logo.svg'
import { UserAvatar } from '../UserAvatar/UserAvatar'

export const MainSidebar = (): JSX.Element => {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.header}>
        <img src={logoIcon} alt="logo"/>
        <UserAvatar src="https://cdn.vuetifyjs.com/images/john.jpg"/>
        <UserAvatar src="https://cdn.vuetifyjs.com/images/john.jpg" selected/>
      </div>
    </aside>
  )
}