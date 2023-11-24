// import { Header } from './components/Header';

// import * as S from './styles';
import { Outlet } from 'react-router-dom';
import './styles.css';

function App() {
  return (
    <>
      {/* <Header /> */}
      <div className="container">
        <Outlet />
      </div>
    </>
  );
}

export default App;
