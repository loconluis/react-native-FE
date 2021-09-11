import React from 'react';
import { View, StyleSheet } from 'react-native';

const ColorMiniBox = ({ hexCode }) => {
  const bgColor = {
    backgroundColor: hexCode,
  };

  return <View style={[styles.blocks, bgColor]} />;
};

const styles = StyleSheet.create({
  blocks: {
    padding: 15,
    marginRight: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 1,
    elevation: 2,
  },
});

export default ColorMiniBox;
