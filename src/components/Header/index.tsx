import * as S from './styles';

import organze from '../../../public/organze.png';

export function Header() {
  return (
    <S.Container>
      <img src={organze} alt="Logo da Organze" />
    </S.Container>
  );
}
