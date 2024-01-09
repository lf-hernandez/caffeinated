import * as React from 'react';
import {SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import IsItCoffeeTime from './components/IsItCoffeTIme';
import CurrentTime from './components/CurrentTime';

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  scrollView: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
});

const App = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <CurrentTime />
        <IsItCoffeeTime />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
