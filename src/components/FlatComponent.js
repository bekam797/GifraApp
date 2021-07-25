import React from 'react';
import {FlatList, SafeAreaView} from 'react-native';
import Items from '../components/Items';

const numColumns = 2;

const FlatComponent = ({
  data,
  setSelectedImg,
  imgId,
  setImgId,
  selectedImg,
}) => (
  <SafeAreaView>
    <FlatList
      data={data}
      renderItem={({item}) => {
        return (
          <Items
            item={item}
            setSelectedImg={setSelectedImg}
            imgId={imgId}
            setImgId={setImgId}
            selectedImg={selectedImg}
            numColumns={numColumns}
          />
        );
      }}
      keyExtractor={(item, index) => index.toString()}
      numColumns={numColumns}
    />
  </SafeAreaView>
);

export default FlatComponent;
