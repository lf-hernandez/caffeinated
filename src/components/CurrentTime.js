import {Text} from 'react-native';
import * as React from 'react';

const CurrentTime = () => {
  const currentTime = new Date();

  return (
    <Text>
      Time:{' '}
      {currentTime.toLocaleString('en-us', {
        hour: 'numeric',
        minute: '2-digit',
      })}
    </Text>
  );
};

export default CurrentTime;
