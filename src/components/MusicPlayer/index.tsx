import { useEffect, useState } from 'react';
import * as S from './styles';
import { RoomService } from '../../services/room-service';
import { useParams } from 'react-router-dom';
import { roomMapper } from '../../data/roomMapper';

let interval: number;

type Music = {
  name: string;
  path: string;
  delay: number;
  scene?: number;
};

type MusicPlayerProps = {
  musics: Music[];
  turnOnAllId: number;
  sceneId: number;
  icon: string;
};

export function MusicPlayer({
  turnOnAllId,
  sceneId,
  musics,
  icon = '../party.svg',
}: MusicPlayerProps) {
  const [isPlay, setIsPlay] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentMusic, setCurrentMusic] = useState(0);
  const { id } = useParams();

  useEffect(() => {
    setDuration(0);
    if (isPlay) {
      interval = setInterval(() => {
        const id = document.getElementById('player') as HTMLAudioElement;
        const a = (id.currentTime * 100) / id.duration;
        if (typeof a == 'number') {
          setDuration(a);
        }
      }, 1000);
    } else {
      clearInterval(interval);
    }
  }, [isPlay]);

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

  async function handleClick(index: number) {
    setCurrentMusic(index);
    const current = musics[index];
    const id = document.getElementById('player') as HTMLAudioElement;
    setIsPlay(false);
    id.pause();
    id.currentTime = 0;
    setDuration(0);
    setTimeout(() => {
      setIsPlay(true);
      id.play();
    }, current.delay);

    if (current.scene) {
      const scene = current.scene as number;
      await RoomService.turnOn(scene);
    } else {
      await RoomService.turnOn(sceneId);
    }
  }

  if (!id) {
    return <></>;
  }

  return (
    <S.Container>
      <h3>Cenas - {roomMapper[id]}</h3>

      <S.CardBody>
        <S.OccastionContainer>
          {musics.map((music, index) => (
            <S.Selector key={music.name} onClick={() => handleClick(index)}>
              <img src={icon} alt={`icon`} />
              <label>{music.name}</label>
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
