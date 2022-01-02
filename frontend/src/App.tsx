import { Route, Routes } from 'react-router-dom'
import { HomePage } from './pages/Home/HomePage'
import { MainLayout } from './layouts/Main/MainLayout'
import { SettingsPage } from './pages/Settings/SettingsPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<MainLayout/>}>
          <Route path="/" element={<HomePage/>}></Route>
          <Route path="/settings" element={<SettingsPage/>}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
