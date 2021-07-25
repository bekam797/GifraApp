import React from 'react';
import {StyleSheet, Image} from 'react-native';

const ImageItem = ({url, stylesProp}) => {
  return (
    <Image
      source={{
        uri: url,
      }}
      style={[styles.img, stylesProp]}
    />
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    margin: 4,
  },
  img: {
    width: '100%',
    borderRadius: 8,
  },
});

export default ImageItem;
