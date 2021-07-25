import React, {useContext} from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import ImageItem from './ImageItem';
import InitialContext from '../context/InitialContext';

const Items = ({item, imgId, setImgId}) => {
  const navigation = useNavigation();
  const {handleGetImges} = useContext(InitialContext);

  if (item.id === imgId) {
    handleGetImges(item);
  }

  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('Details');
        setImgId(item.id);
      }}
      style={styles.root}>
      <ImageItem url={item.images.fixed_height.url} stylesProp={styles.img} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    margin: 4,
  },
  img: {
    height: 176,
    borderRadius: 8,
  },
});

export default Items;
