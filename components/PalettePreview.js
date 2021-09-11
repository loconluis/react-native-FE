import React from 'react';
import { Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import ColorMiniBox from './ColorMiniBox';

const PalettePreview = ({ handleOnPress, palette }) => {
  const renderBlocks = ({ item }) => {
    return <ColorMiniBox hexCode={item.hexCode} />;
  };

  return (
    <TouchableOpacity onPress={handleOnPress}>
      <Text style={styles.text}>{palette.name}</Text>
      <FlatList
        style={styles.list}
        keyExtractor={(_item) => _item.hexCode}
        data={palette.top5}
        renderItem={renderBlocks}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  list: { flexDirection: 'row', marginLeft: 10 },

  blocks: {
    padding: 15,
    marginLeft: 5,
    marginBottom: 10,
  },
});

export default PalettePreview;
