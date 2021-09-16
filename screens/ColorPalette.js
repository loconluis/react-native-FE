import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import ColorBox from '../components/ColorBox';

const ColorPalette = ({ route }) => {
  const { colors } = route.params;

  const renderColorBox = ({ item }) => (
    <ColorBox colorName={item.colorName} hexCode={item.hexCode} />
  );

  return (
    <View style={styles.container}>
      <FlatList
        keyExtractor={(item) => item.colorName}
        data={colors}
        renderItem={renderColorBox}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginBottom: 10,
    paddingTop: 10,
    backgroundColor: '#FFFFFF',
  },
});

export default ColorPalette;
