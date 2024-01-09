import {Text} from 'react-native';
import * as React from 'react';

const IsItCoffeeTime = () => {
  const currentTime = new Date();
  let result = '';

  if (
    (currentTime.getHours() >= 8 && currentTime.getHours() <= 9) ||
    (currentTime.getHours() >= 12 && currentTime.getHours() <= 13) ||
    currentTime.getTime() >= currentTime.setHours(17, 30)
  ) {
    result = 'No';
  } else {
    result = 'Yes';
  }

  return (
    <Text>
      <Text>Is it coffee time?</Text>
      <Text> {result}</Text>
    </Text>
  );
};

export default IsItCoffeeTime;
