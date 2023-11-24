import { Header } from './components/Header';

import * as S from './styles';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <>
      <Header />
      <S.Container>
        <Outlet />
      </S.Container>
    </>
  );
}

export default App;
