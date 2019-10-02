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

  return {
    identify,
  };
};

export default {
  create,
};
