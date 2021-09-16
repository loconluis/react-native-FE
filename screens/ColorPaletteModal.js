import React, { useCallback, useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  FlatList,
  Switch,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { COLOR_MODAL } from '../constants';

const ColorPaletteModal = ({ navigation }) => {
  const [paletteName, setPaletteName] = useState('');
  const [colors, setColors] = useState([]);

  const handleOnChangeValueSwitch = useCallback((value, item, index) => {
    if (value) {
      setColors((current) => [...current, { ...item, position: index }]);
    } else {
      setColors((current) =>
        current.filter((c) => c.colorName !== item.colorName),
      );
    }
  }, []);

  const handleOnSubmitColors = () => {
    if (paletteName === '' || colors.length < 3) {
      Alert.alert('Should enter a name for the palette and at least 3 colors');
    } else {
      const newPalette = buildColorsObject();
      navigation.navigate('Home', { newPalette });
    }
  };

  const buildColorsObject = () => {
    const newPalette = {
      paletteName,
      colors: colors.sort((a, b) => a.position - b.position),
    };

    return newPalette;
  };

  const renderItem = ({ item, index }) => {
    return (
      <View style={[styles.listItemContainer, styles.borderBox]}>
        <Text style={styles.listItemText}>{item.colorName}</Text>
        <Switch
          value={!!colors.find((c) => c.colorName === item.colorName)}
          onValueChange={(value) =>
            handleOnChangeValueSwitch(value, item, index)
          }
        />
      </View>
    );
  };

  return (
    <View style={styles.screen}>
      <FlatList
        keyExtractor={(item, index) => item.hexCode + '_' + index}
        data={COLOR_MODAL}
        renderItem={renderItem}
        ListHeaderComponent={
          <View style={styles.container}>
            <Text style={styles.inputTitle}>Name of your color Palette</Text>
            <TextInput
              style={[styles.input, styles.borderBox]}
              value={paletteName}
              onChangeText={setPaletteName}
              placeholder="Navy Colors"
            />
          </View>
        }
        ListFooterComponent={
          <View>
            <TouchableOpacity
              style={styles.button}
              onPress={handleOnSubmitColors}
            >
              <Text style={styles.buttonText}>Submit!</Text>
            </TouchableOpacity>
          </View>
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    backgroundColor: '#fff',
  },
  container: {
    padding: 10,
  },
  inputTitle: {
    marginBottom: 10,
    fontSize: 15,
  },
  borderBox: {
    borderWidth: 1,
    borderColor: '#CAD1D4',
  },
  input: {
    padding: 10,
    borderRadius: 5,
  },
  listItemContainer: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 20,
    justifyContent: 'space-between',
    alignContent: 'center',
  },
  listItemText: {
    margin: 0,
    padding: 0,
    fontSize: 15,
    lineHeight: 30,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#841584',
    padding: 20,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 15,
    fontWeight: 'bold',
  },
});

export default ColorPaletteModal;
