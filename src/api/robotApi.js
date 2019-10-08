import apisauce from 'apisauce';

import config from './config';

const create = (baseURL = config.hostname) => {
  const api = apisauce.create({
    baseURL,
    headers: {
      'Content-Type': 'application/json',
    },
    timeout: 10000,
  });

  const identify = (seconds = 1) =>
    api.post(`robot/control/identify?token=${config.token}&seconds=${seconds}`);
  const lights = (on, brightness) =>
    api.post(
      `robot/control/lights?token=${config.token}&on=${on}&brightness=${brightness}`
    );
  const turn = (angle = 0) =>
    api.post(`/robot/control/move/turn?token=${config.token}&angle=${angle}`);
  const move = (x, y, bogie) =>
    api.post(
      `/robot/control/move?token=${config.token}&x=${x}&y=${y}&bogie=${bogie}`,
    );
  const moveArc = (distance, angle, speed) =>
    api.post(
      `/robot/control/move/arc?token=${config.token}&distance=${distance}&angle=${angle}&speed=${speed}`,
    );
  const bogie = (value = 0) =>
    api.post(`/robot/control/move/bogie?token=${config.token}&value=${value}`);
  const playsound = (sound, volume = 12) =>
    api.post(
      `/robot/control/playsound?token=${config.token}&sound=${sound}&volume=${volume}`,
    );
  const stop = () => api.post(`/robot/control/stop?token=${config.token}`);

  return {
    identify,
    lights,
    turn,
    move,
    moveArc,
    bogie,
    playsound,
    stop,
  };
};

export default {
  create,
};
