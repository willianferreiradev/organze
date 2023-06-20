import { useEffect, useState } from 'react';
import * as S from './styles';
import { RoomService } from '../../services/room-service';

let interval: number;

type MusicPlayerProps = {
  type: string;
  musics: { name: string; path: string }[];
  turnOnAllId: number;
  sceneId: number;
  isChanged: boolean;
};

const types = [
  { value: 'party', image: '../party.svg', text: 'Festa' },
  { value: 'waltz', image: '../waltz.svg', text: 'Valsa' },
  { value: 'parade', image: '../parade.svg', text: 'Desfile' },
];

export function MusicPlayer({
  type,
  turnOnAllId,
  sceneId,
  musics,
  isChanged,
}: MusicPlayerProps) {
  const [isPlay, setIsPlay] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentMusic, setCurrentMusic] = useState(0);

  useEffect(() => {
    setDuration(0);
    if (isPlay) {
      interval = setInterval(() => {
        const id = document.getElementById('player') as HTMLAudioElement;
        const a = (id.currentTime * 100) / id.duration;
        setDuration(a);
      }, 1000);
    } else {
      clearInterval(interval);
    }
  }, [isPlay]);

  useEffect(() => {
    console.log(type);
    if (type) {
      const id = document.getElementById('player') as HTMLAudioElement;
      id.currentTime = 0;
      setTimeout(() => {
        id.play();
        setIsPlay(true);
      }, 2000);
    }
  }, [isChanged, type]);

  async function start() {
    const id = document.getElementById('player') as HTMLAudioElement;
    if (!isPlay) {
      setIsPlay(true);
      id.play();
      await RoomService.turnOn(sceneId);
    } else {
      setIsPlay(false);
      id.pause();
      await RoomService.turnOnAll(turnOnAllId);
    }
  }

  return (
    <S.Container>
      <h3>Ocasião</h3>

      <S.CardBody>
        <S.OccastionContainer>
          {types.map((type) => (
            <S.Selector key={type.value}>
              <img src={`${type.image}`} alt={`${type.value} icon`} />
              <label>{type.text}</label>
            </S.Selector>
          ))}
        </S.OccastionContainer>

        <S.Player>
          <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
            <img
              src={isPlay ? '../pause.svg' : '../play.svg'}
              alt="play icon"
              className="play"
              onClick={start}
            />
            <p>{musics[currentMusic].name}</p>
          </div>
          <audio id="player" src={musics[currentMusic].path} />
          <S.Slider type="range" value={duration} onChange={() => null} />
        </S.Player>
      </S.CardBody>
    </S.Container>
  );
}
