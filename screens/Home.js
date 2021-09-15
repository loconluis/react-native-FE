import React from 'react';
import { View, FlatList, Text } from 'react-native';
import PalettePreview from '../components/PalettePreview';
import useFetch from '../hooks/useFetch';

const Home = ({ navigation }) => {
  const [data, status] = useFetch(
    'https://color-palette-api.kadikraman.vercel.app/palettes',
  );

  const handleOnPress = (item) => {
    console.log('item color', item);
    navigation.navigate('ColorPalette', {
      paleteName: item.paletteName,
      colors: item.colors,
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
      {status == 'fetching' ? (
        <Text>Fetching...</Text>
      ) : (
        <FlatList
          keyExtractor={(item, index) => `${item.name}_${index}`}
          data={data}
          renderItem={renderNavigationItem}
        />
      )}
    </View>
  );
};

export default Home;
