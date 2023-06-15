import { baseMusics, brideMusics } from './musics';

export type Room = {
  musics: typeof baseMusics;
  party: number;
  waltz: number;
  parade: number;
};

export const roomsData = {
  SALA1: {
    musics: baseMusics,
    party: 118,
    waltz: 0,
    parade: 0,
  },
  SALA2: {
    musics: baseMusics,
    party: 167,
    waltz: 0,
    parade: 0,
  },
  SALA3: {
    musics: baseMusics,
    party: 169,
    waltz: 0,
    parade: 0,
  },
  SALA4: {
    musics: baseMusics,
    party: 171,
    waltz: 0,
    parade: 0,
  },
  SALANOIVAS: {
    musics: brideMusics,
    party: 0,
    waltz: 0,
    parade: 182,
  },
} as Record<string, Room>;
