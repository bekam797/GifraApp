import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import ImageItem from './ImageItem';

const Items = ({item, setSelectedImg, imgId, setImgId}) => {
  const navigation = useNavigation();

  if (item.id === imgId) {
    setSelectedImg(item);
  }

  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('Details', {
          params: {
            itemObj: setSelectedImg,
          },
        });
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
