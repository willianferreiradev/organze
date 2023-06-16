// import axios from 'axios';
export const RoomService = {
  async turnOn(id: number) {
    // const agent = new https.Agent({
    //   rejectUnauthorized: false,
    // });
    return fetch(
      `https://793434.homemanager.com.br:9090/HomeWeb/command.do?valor=X&id=${id}`
    );
  },
};
