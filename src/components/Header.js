import React from 'react';
import {StyleSheet, View, Text, TextInput, Pressable} from 'react-native';
import SearchIcon from '../icons/Search.svg';
import Cross from '../icons/Cross.svg';

const Header = ({setTextValue, textValue}) => {
  return (
    <View style={styles.root}>
      <View style={styles.fixto}>
        <View style={{width: textValue.length > 0 ? '75%' : '100%'}}>
          <SearchIcon style={styles.searchIcon} />
          <TextInput
            style={styles.input}
            placeholder="Search GIPHY"
            onChangeText={e => setTextValue(e)}
            value={textValue}
            placeholderTextColor="#FFFFFF"
          />
        </View>
        {textValue.length > 0 && (
          <Pressable onPress={() => setTextValue('')}>
            <Cross style={styles.crossIcon} />
          </Pressable>
        )}
        {textValue.length > 0 && (
          <Pressable style={styles.btn} onPress={() => setTextValue('')}>
            <Text style={styles.text}>Cancel</Text>
          </Pressable>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    padding: 8,
    position: 'relative',
  },
  fixto: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  input: {
    padding: 18,
    height: 56,
    backgroundColor: '#17181A',
    borderColor: 'rgba(255, 255, 255, 0.12)',
    borderRadius: 16,
    color: '#fff',
    paddingLeft: 48,
  },
  searchIcon: {
    position: 'absolute',
    top: 18,
    left: 18,
    zIndex: 2,
  },
  crossIcon: {
    position: 'absolute',
    top: 18,
    right: 18,
    zIndex: 2,
  },
  btn: {
    width: 80,
    height: 56,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 8,
  },
  text: {
    fontSize: 15,
    lineHeight: 20,
  },
});

export default Header;
