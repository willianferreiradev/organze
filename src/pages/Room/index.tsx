import { useParams } from 'react-router-dom';

import { MusicPlayer } from '../../components/MusicPlayer';
import { Room as RoomType, roomsData } from '../../data/baseData';

export function Room() {
  const { id } = useParams();

  const room = roomsData[`SALA${id}`.toUpperCase()] as RoomType;
  const turnOnAllId = room.turnOnAll;

  return (
    <MusicPlayer
      musics={room.musics}
      turnOnAllId={turnOnAllId}
      sceneId={room.scene}
      icon={id == 'noivas' ? '../waltz.svg' : '../party.svg'}
    />
  );
}
