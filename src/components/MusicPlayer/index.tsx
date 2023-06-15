import { useEffect, useState } from 'react';
import * as S from './styles';

let interval: number;

type MusicPlayerProps = {
  type: string;
  musics: { name: string; path: string }[];
};

export function MusicPlayer({ type, musics }: MusicPlayerProps) {
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
    if (type) {
      const id = document.getElementById('player') as HTMLAudioElement;
      id.currentTime = 0;
      id.play();
      setIsPlay(true);
    }
  }, [type]);

  function start() {
    const id = document.getElementById('player') as HTMLAudioElement;
    if (!isPlay) {
      setIsPlay(true);
      id.play();
    } else {
      setIsPlay(false);
      id.pause();
    }
  }

  function handlePrev() {
    const id = document.getElementById('player') as HTMLAudioElement;
    if (isPlay) {
      setIsPlay(false);
      id.pause();
    }

    const qtd = musics.length;
    if (currentMusic == 0) {
      setCurrentMusic(qtd - 1);
    } else {
      setCurrentMusic((current) => current - 1);
    }

    if (isPlay) {
      setTimeout(() => {
        setIsPlay(true);
        id.play();
      }, 200);
    }
  }

  function handleNext() {
    const id = document.getElementById('player') as HTMLAudioElement;
    if (isPlay) {
      setIsPlay(false);
      id.pause();
    }

    const qtd = musics.length;
    if (currentMusic == qtd - 1) {
      setCurrentMusic(0);
    } else {
      setCurrentMusic((current) => current + 1);
    }

    if (isPlay) {
      setTimeout(() => {
        setIsPlay(true);
        id.play();
      }, 200);
    }
  }

  return (
    <S.Container>
      <h3>Playlist</h3>

      <S.Player>
        <p>{musics[currentMusic].name}</p>
        <audio
          id="player"
          // controls
          src={musics[currentMusic].path}
          onEnded={handleNext}
          // ref={audioRef}
          // onLoadedMetadata={onLoadedMetadata}
          // onEnded={handleNext}
        />
        <S.Slider type="range" value={duration} onChange={() => null} />
        <S.Controls>
          <img src="..//prev.svg" alt="prev icon" onClick={handlePrev} />
          <img
            src="../play.svg"
            alt="play icon"
            className="play"
            onClick={start}
          />
          <img src="../next.svg" alt="next icon" onClick={handleNext} />
        </S.Controls>
      </S.Player>
    </S.Container>
  );
}
