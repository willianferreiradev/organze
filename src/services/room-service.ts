import api from './api';

export const RoomService = {
  async turnOn(id: number) {
    return api.get(`valor=X&id=${id}`);
  },
};
