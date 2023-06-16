import axios from 'axios';

export const RoomService = {
  async turnOn(id: number) {
    return axios.get(
      `https://793434.homemanager.com.br:9090/HomeWeb/command.do?valor=X&id=${id}`
    );
  },

  async turnOnAll() {
    return axios.get(
      `https://793434.homemanager.com.br:9090/HomeWeb/command.do?valor=X&id=104`
    );
  },
};
