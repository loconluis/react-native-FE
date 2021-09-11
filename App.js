import React from 'react';
import { View, SafeAreaView, StyleSheet } from 'react-native';
import ColorList from './components/ColorList';

const App = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <ColorList />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    padding: 10,
  },
});

export default App;
