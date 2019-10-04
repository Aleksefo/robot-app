import React, {useState, useEffect} from 'react';
import {View, SafeAreaView, StyleSheet} from 'react-native';
import {
  useQueueStatus,
  useQueueRegistration,
  useQueue,
} from '../hooks/queueHooks';
import {ScrollView} from 'react-native-gesture-handler';
import {SectionHeader} from '../components/SectionHeader';
import {Row} from '../components/Row';
import {Button} from '../components/Button';
import {colors} from '../theme';

export const QueueScreen = () => {
  const queue = useQueueStatus();
  const {registrationState} = useQueueRegistration();
  const {queueUp} = useQueue();

  const [queuingActive, setQueuingActive] = useState(true);
  const [queuingButtonTitle, setQueuingButtonTitle] = useState('');
  useEffect(() => {
    if (
      queue &&
      queue.queue &&
      queue.queue.filter(user => registrationState.id === user.id).length > 0
    ) {
      setQueuingActive(false);
      setQueuingButtonTitle('You are in a queue');
    } else if (
      queue &&
      queue.robots &&
      Object.entries(queue.robots).filter(
        ([k, robot]) => queue.robots[k].allocated.id === registrationState.id,
      ).length > 0
    ) {
      setQueuingActive(false);
      setQueuingButtonTitle('You are controlling the robot!');
    } else {
      setQueuingActive(true);
      setQueuingButtonTitle('Queue Up');
    }
  }, [queue]);

  const [registrationButtonTitle, setRegistrationButtonTitle] = useState('');
  useEffect(() => {
    setRegistrationButtonTitle(
      `Registration Status:\n${
        registrationState.token
          ? 'Registered'
          : 'Registration error, check your token in config.js'
      }`,
    );
  }, [registrationState.token]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <ScrollView>
          <SectionHeader>Active Controllers</SectionHeader>
          {queue.robots && Object.keys(queue.robots).length ? (
            Object.entries(queue.robots).map(([k, {allocated, remaining}]) => (
              <Row
                key={allocated.id}
                title={`${k} — ${allocated.name}`}
                value={`${(remaining / 1000).toFixed(0)} sec`}
                bold={allocated.id === registrationState.id}
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
            queue.queue.map(user => (
              <Row
                key={user.id}
                title={user.name}
                bold={user.id === registrationState.id}
              />
            ))
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
          <Button title={registrationButtonTitle} active={false} />
          <Button
            title={queuingButtonTitle}
            active={queuingActive}
            onPress={queueUp}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
});
