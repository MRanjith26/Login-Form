import React from 'react';
import LoginForm from './Screens/LoginForm';

import {
  // render without being covered by the device hardware
  SafeAreaView,
  // for styles
  StyleSheet,
} from 'react-native';

const App = () => (
  <SafeAreaView style={styles.container}>
    <LoginForm />
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
