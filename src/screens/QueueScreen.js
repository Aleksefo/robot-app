import React from 'react';
import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  TouchableHighlight,
} from 'react-native';
import {
  useQueueStatus,
  useQueueRegistration,
  useQueue,
} from '../hooks/queueHooks';

export const QueueScreen = () => {
  const queue = useQueueStatus();
  const {registrationState, register} = useQueueRegistration();
  const {queueState, queueUp} = useQueue();

  return (
    <SafeAreaView>
      <View style={styles.block}>
        <Text>Active Controllers</Text>
        {queue.robots &&
          Object.keys(queue.robots).map(k => (
            <Text>
              {k} — {queue.robots[k].allocated} -{' '}
              {(queue.robots[k].remaining / 1000).toFixed(0)}
            </Text>
          ))}
      </View>

      <View style={styles.block}>
        <Text>Queue</Text>
        {queue.queue && queue.queue.map(q => <Text>{q}</Text>)}
      </View>

      <View style={styles.block}>
        <TouchableHighlight
          onPress={() => {
            register('Tim Tom');
          }}>
          <Text>REGISTER</Text>
        </TouchableHighlight>
        <Text>{JSON.stringify(registrationState)}</Text>
      </View>

      {registrationState.token && (
        <View style={styles.block}>
          <TouchableHighlight
            onPress={() => {
              queueUp(registrationState.token);
            }}>
            <Text>QUEUE UP</Text>
          </TouchableHighlight>
          <Text>{JSON.stringify(queueState)}</Text>
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  block: {
    padding: 8,
  },
});
