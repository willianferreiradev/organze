import { useState } from 'react';
import { MusicPlayer } from '../../components/MusicPlayer';
import { OccasionSelector } from '../../components/OccasionSelector';
import { useParams } from 'react-router-dom';

import { Room as RoomType, roomsData } from '../../data/baseData';
import { RoomService } from '../../services/room-service';

export function Room() {
  const [active, setActive] = useState('');
  const [isChanged, setIsChanged] = useState(false);
  const [sceneId, setSceneId] = useState(0);

  const { id } = useParams();

  const room = roomsData[`SALA${id}`.toUpperCase()] as RoomType;
  const turnOnAllId = room.turnOnAll;

  async function handleChangeType(type: string) {
    setActive(type);
    setIsChanged((value) => !value);

    const id = Object.entries(room)
      .find((room) => type == room[0])
      ?.filter((item) => typeof item == 'number')
      .find((item) => item) as number;

    setSceneId(id);
    try {
      await RoomService.turnOn(id);
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <>
      {/* <OccasionSelector active={active} onChangeType={handleChangeType} /> */}
      <MusicPlayer
        type={active}
        musics={room.musics}
        turnOnAllId={turnOnAllId}
        sceneId={sceneId}
        isChanged={isChanged}
      />
    </>
  );
}
