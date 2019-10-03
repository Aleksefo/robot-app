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
  const {name, token} = config;

  const registerUser = () => api.post('user/register', {name, token});
  const getUser = () => api.get(`user?token=${token}`);

  const queueUp = () => api.post(`robot/queue?token=${token}`);
  const dequeue = () => api.post(`robot/queue?token=${token}`);
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
