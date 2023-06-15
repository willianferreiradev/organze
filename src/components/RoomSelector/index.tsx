import { useNavigate } from 'react-router-dom';
import * as S from './styles';

export function RoomSelector() {
  const navigate = useNavigate();

  function handleChangeRoom(room: string) {
    navigate(`/room/${room}`);
  }

  return (
    <S.Container>
      <h3>Sala</h3>

      <div>
        <S.Selector onClick={() => handleChangeRoom('1')}>Sala 1</S.Selector>
        <S.Selector onClick={() => handleChangeRoom('2')}>Sala 2</S.Selector>
        <S.Selector onClick={() => handleChangeRoom('3')}>Sala 3</S.Selector>
        <S.Selector onClick={() => handleChangeRoom('4')}>Sala 4</S.Selector>
        <S.Selector onClick={() => handleChangeRoom('noivas')}>
          Noivas
        </S.Selector>
      </div>
    </S.Container>
  );
}
