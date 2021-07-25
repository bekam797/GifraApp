import React, {useState} from 'react';
import {FlatList, RefreshControl, SafeAreaView} from 'react-native';
import Items from '../components/Items';

const numColumns = 2;

const wait = timeout => {
  return new Promise(resolve => setTimeout(resolve, timeout));
};

const FlatComponent = ({
  data,
  setSelectedImg,
  imgId,
  setImgId,
  selectedImg,
  handleLoadMore,
}) => {
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);

  return (
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
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        onEndReachedThreshold={0.4}
        onEndReached={handleLoadMore}
      />
    </SafeAreaView>
  );
};

export default FlatComponent;
