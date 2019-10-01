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

  const registerUser = name =>
    api.post('user/register', {name, token: config.token});
  const getUser = token => api.get(`user?token=${token}`);

  const queueUp = token => api.post(`robot/queue?token=${token}`);
  const dequeue = token => api.post(`robot/queue?token=${token}`);
  const getQueue = () => api.get('robot/queue/status');

  return {
    registerUser,
    getUser,
    queueUp,
    dequeue,
    getQueue,
  };
};

export default {
  create,
};
