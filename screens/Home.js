import React, { useState, useEffect } from 'react';
import {
  View,
  FlatList,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import PalettePreview from '../components/PalettePreview';
import useFetch from '../hooks/useFetch';

const Home = ({ navigation, route }) => {
  const [palettes, setPalettes] = useState([]);
  const [data, status] = useFetch(
    'https://color-palette-api.kadikraman.vercel.app/palettes',
  );

  let newPalette = route.params ? route.params.newPalette : null;

  const handleOnPress = (item) => {
    navigation.navigate('ColorPalette', {
      paleteName: item.paletteName,
      colors: item.colors,
    });
  };

  useEffect(() => {
    if (newPalette) {
      setPalettes((current) => [newPalette, ...current]);
    } else {
      setPalettes(data);
    }
  }, [data, newPalette]);

  const renderNavigationItem = ({ item }) => {
    return (
      <PalettePreview
        handleOnPress={() => handleOnPress(item)}
        palette={item}
      />
    );
  };
  return (
    <View style={styles.container}>
      {status === 'fetching' ? (
        <Text>Fetching...</Text>
      ) : (
        <FlatList
          keyExtractor={(item, index) => `${item.name}_${index}`}
          data={palettes}
          renderItem={renderNavigationItem}
          ListHeaderComponent={
            <TouchableOpacity
              onPress={() => navigation.navigate('ColorPaletteModal')}
            >
              <Text style={styles.modalButton}>Open Modal Color Palette</Text>
            </TouchableOpacity>
          }
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#fff',
  },
  modalButton: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'navy',
    marginBottom: 10,
  },
});

export default Home;
