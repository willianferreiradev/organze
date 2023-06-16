import axios from 'axios';

export const RoomService = {
  async turnOn(id: number) {
    return axios.get(
      `http://192.168.100.220:9090/HomeWeb/command.do?valor=X&id=${id}`
    );
  },

  async turnOnAll(id: number) {
    return axios.get(
      `http://192.168.100.220:9090/HomeWeb/command.do?valor=X&id=${id}`
    );
  },
};
