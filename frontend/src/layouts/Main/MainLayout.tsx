import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import cn from 'classnames'
import { MainHeader } from './MainHeader/MainHeader'
import { MainSidebar } from './MainSidebar/MainSidebar'
import styles from './MainLayout.module.css'

export const MainLayout = (): JSX.Element => {
  const [isMini, setIsMini] = useState(false)

  function toggleSidebar () {
    setIsMini(!isMini)
  }

  return (
    <div className={styles.layout}>
      <MainSidebar mini={isMini} toggle={toggleSidebar}/>
      <MainHeader className={cn({ [styles.miniHeader]: isMini })}/>
      <main className={cn(styles.main, {
        [styles.mini]: isMini
      })}>
        <Outlet/>
      </main>
    </div>
  )
}
