import { baseMusics, brideMusics } from './musics';

export type Room = {
  musics: typeof baseMusics;
  scene: number;
  turnOnAll: number;
};

export const roomsData = {
  SALA1: {
    musics: baseMusics,
    scene: 118,
    turnOnAll: 104,
  },
  SALA2: {
    musics: baseMusics,
    scene: 167,
    turnOnAll: 106,
  },
  SALA3: {
    musics: baseMusics,
    scene: 169,
    turnOnAll: 108,
  },
  SALA4: {
    musics: baseMusics,
    scene: 171,
    turnOnAll: 110,
  },
  SALANOIVAS: {
    musics: brideMusics,
    scene: 194,
    turnOnAll: 111,
  },
} as Record<string, Room>;
