import styles from './MainHeader.module.css'
import searchIcon from '../../../assets/icons/search.svg'
import notifyIcon from '../../../assets/icons/notify.svg'

export const MainHeader = (): JSX.Element => {
  return (
    <header className={styles.header}>
      <div className={styles.search}>
        <img
          src={searchIcon}
          alt="icon"
          className={styles.searchIcon}
        />
        <input
          type="text"
          placeholder="Global search"
          className={styles.searchInput}
        />
      </div>

      <img src={notifyIcon} alt="notify" />
    </header>
  )
}