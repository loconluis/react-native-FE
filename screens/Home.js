import React from 'react';
import { View, FlatList } from 'react-native';
import PalettePreview from '../components/PalettePreview';
import * as PALETTES from '../constants';

const Home = ({ navigation }) => {
  const handleOnPress = (item) => {
    navigation.navigate('ColorPalette', {
      paleteName: item.name,
      colors: PALETTES[item.id],
    });
  };

  const renderNavigationItem = ({ item }) => {
    return (
      <PalettePreview
        handleOnPress={() => handleOnPress(item)}
        palette={item}
      />
    );
  };
  return (
    <View>
      <FlatList
        keyExtractor={(item, index) => `${item.name}_${index}`}
        data={PALETTES.COLOR_PALETTES}
        renderItem={renderNavigationItem}
      />
    </View>
  );
};

export default Home;
