import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import ColorBox from './ColorBox';
import { COLORS } from '../constants';

const ColorsScreen = () => {
  const renderColorBox = ({ item }) => (
    <ColorBox colorName={item.colorName} hexCode={item.hexCode} />
  );

  return (
    <View>
      <FlatList
        ListHeaderComponent={<Text style={styles.title}>Solarized</Text>}
        keyExtractor={(item) => item.colorName}
        data={COLORS}
        renderItem={renderColorBox}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default ColorsScreen;
