import * as React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text} from 'react-native';

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
  const [currentTime] = React.useState<Date>(new Date());

  function isItCoffeeTime() {
    if (
      (currentTime.getHours() >= 8 && currentTime.getHours() <= 9) ||
      (currentTime.getHours() >= 12 && currentTime.getHours() <= 13) ||
      currentTime.getTime() >= currentTime.setHours(17, 30)
    ) {
      return false;
    }
    return true;
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <Text>
          Time:{' '}
          {currentTime.toLocaleString('en-us', {
            hour: 'numeric',
            minute: '2-digit',
          })}
        </Text>
        <Text>Is it coffee time? {isItCoffeeTime() ? 'Yes' : 'No'}</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
