import {useState, useCallback, useEffect} from 'react';
import QueueApi from '../api/queueApi';
import {useInterval} from './intervalHook';

const queueApi = QueueApi.create();

// TODO: add error handling for all the hooks

export function useQueueRegistration() {
  const [registrationState, setRegistrationStatus] = useState({});

  useEffect(() => {
    async function registerUser() {
      const response = await queueApi.registerUser();
      if (response.ok) {
        setRegistrationStatus(response.data);
      }
      console.log(response);
    }
    registerUser();
  }, []);

  return {registrationState};
}

export function useQueue() {
  const [queueState, setQueueState] = useState({});

  const queueUp = useCallback(async token => {
    const response = await queueApi.queueUp(token);
    if (response.ok) {
      setQueueState(response.data);
    }
    console.log(response.data);
  }, []);

  return {queueState, queueUp};
}

export function useQueueStatus() {
  const [queue, setQueue] = useState({});

  useInterval(async () => {
    const response = await queueApi.getQueue();
    if (response.ok) {
      setQueue(response.data);
    }
    console.log(response.data);
  }, 1000);

  return queue;
}
