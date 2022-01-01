import { Outlet } from 'react-router-dom';
import { MainHeader } from '../../components/MainHeader/MainHeader'
import { MainSidebar } from '../../components/MainSidebar/MainSidebar'
import styles from './MainLayout.module.css'

export const MainLayout = (): JSX.Element => {
  return (
    <div>
      <MainSidebar/>
      <MainHeader/>
      <main className={styles.main}>
        <Outlet/>
      </main>
    </div>
  )
}
