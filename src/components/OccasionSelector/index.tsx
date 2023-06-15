import * as S from './styles';

const types = [
  { value: 'party', image: '../party.svg', text: 'Festa' },
  { value: 'waltz', image: '../waltz.svg', text: 'Valsa' },
  { value: 'parade', image: '../parade.svg', text: 'Desfile' },
];

type OccasionSelectorProps = {
  active: string;
  onChangeType: (type: string) => void;
};

export function OccasionSelector({
  active,
  onChangeType,
}: OccasionSelectorProps) {
  return (
    <S.Container>
      <h3>Ocasião</h3>

      <div>
        {types.map((type) => (
          <S.Selector
            key={type.value}
            $active={active == type.value}
            onClick={() => onChangeType(type.value)}
          >
            <img src={`${type.image}`} alt={`${type.value} icon`} />
            <label>{type.text}</label>
          </S.Selector>
        ))}
      </div>
    </S.Container>
  );
}
