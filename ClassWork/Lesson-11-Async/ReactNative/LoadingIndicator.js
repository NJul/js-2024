import React from 'react';
import { View, ActivityIndicator } from 'react-native';

// Окремий компонент для індикатора завантаження
const LoadingIndicator = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <ActivityIndicator size="large" color="#0000ff" />
    </View>
  );
};

export default LoadingIndicator;
