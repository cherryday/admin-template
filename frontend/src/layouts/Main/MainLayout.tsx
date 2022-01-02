import { Outlet } from 'react-router-dom';
import { MainHeader } from './MainHeader/MainHeader'
import { MainSidebar } from './MainSidebar/MainSidebar'
import styles from './MainLayout.module.css'

export const MainLayout = (): JSX.Element => {
  return (
    <div className={styles.layout}>
      <MainSidebar/>
      <MainHeader/>
      <main className={styles.main}>
        <Outlet/>
      </main>
    </div>
  )
}
