import {
  BrowserRouter,
  Route,
  Routes
} from 'react-router-dom'
import { HomePage } from './pages/Home/HomePage'
import { MainLayout } from './layouts/Main/MainLayout'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout/>}>
            <Route path="/home" element={<HomePage/>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
