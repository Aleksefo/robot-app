import React from 'react';
import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {
  useQueueStatus,
  useQueueRegistration,
  useQueue,
} from '../hooks/queueHooks';
import {ScrollView} from 'react-native-gesture-handler';
import {SectionHeader} from '../components/SectionHeader';
import {Row} from '../components/Row';
import {colors} from '../theme';

export const QueueScreen = () => {
  const queue = useQueueStatus();
  const {registrationState} = useQueueRegistration();
  const {queueState, queueUp} = useQueue();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <ScrollView>
          <SectionHeader>Active Controllers</SectionHeader>
          {queue.robots && Object.keys(queue.robots).length ? (
            Object.entries(queue.robots).map(([k, {allocated, remaining}]) => (
              <Row
                title={`${k} — ${allocated}`}
                value={`${(remaining / 1000).toFixed(0)} sec`}
              />
            ))
          ) : (
            <Row
              title={
                'Robots are waiting!\nRegister, queue up and take control.'
              }
              centered
            />
          )}

          <SectionHeader>Queue</SectionHeader>
          {queue.queue && queue.queue.length ? (
            queue.queue.map(q => <Row title={q} />)
          ) : (
            <Row
              title={"Queue up and you'll be the next one to take control."}
              centered
            />
          )}
        </ScrollView>
      </View>

      <View style={styles.footerContainer}>
        <View style={styles.footer}>
          <View style={styles.button}>
            <Text>Registration Status:</Text>
            <Text>
              {registrationState.token
                ? 'Registered'
                : 'Registration error, check your token in config.js'}
            </Text>
          </View>

          <View style={styles.button}>
            {registrationState.token && (
              <TouchableOpacity
                onPress={() => {
                  queueUp(registrationState.token);
                }}>
                <View style={styles.container}>
                  <Text style={styles.buttonText}>Queue Up</Text>
                  <Text style={styles.buttonText}>{JSON.stringify(queueState)}}</Text>
                  {queueState.status === 'OK' && queueState && (
                    <Text style={styles.buttonText}>Queued</Text>
                  )}
                </View>
              </TouchableOpacity>
            )}
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRightWidth: 1,
    borderColor: colors.lightGray,
  },
  footerContainer: {
    height: 100,
  },
  footer: {
    flex: 1,
    flexDirection: 'row',
    borderTopWidth: 1,
    borderColor: colors.lightGray,
  },
  buttonText: {
    textAlign: 'center',
  },
});
