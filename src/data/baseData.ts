import { baseMusics, brideMusics } from './musics';

export type Room = {
  musics: typeof baseMusics;
  party: number;
  waltz: number;
  parade: number;
  turnOnAll: number;
};

export const roomsData = {
  SALA1: {
    musics: baseMusics,
    party: 118,
    waltz: 118,
    parade: 118,
    turnOnAll: 104,
  },
  SALA2: {
    musics: baseMusics,
    party: 167,
    waltz: 167,
    parade: 167,
    turnOnAll: 106,
  },
  SALA3: {
    musics: baseMusics,
    party: 169,
    waltz: 169,
    parade: 169,
    turnOnAll: 108,
  },
  SALA4: {
    musics: baseMusics,
    party: 171,
    waltz: 171,
    parade: 171,
    turnOnAll: 110,
  },
  SALANOIVAS: {
    musics: brideMusics,
    party: 194,
    waltz: 194,
    parade: 194,
    turnOnAll: 111,
  },
} as Record<string, Room>;
