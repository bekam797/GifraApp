import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Text, ActivityIndicator} from 'react-native';
import axios from 'axios';
import Header from '../components/Header';
import FlatComponent from '../components/FlatComponent';

const API_KEY = 'SSK25JIcl9G3XhS8iRuJ3dLPeHvMXqO9';
const LIMIT = 4;

const GifraContainer = () => {
  const [data, setData] = useState([]);
  const [textValue, setTextValue] = useState('');
  const [imgId, setImgId] = useState(null);
  const [selectedImg, setSelectedImg] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      setData([]);
      try {
        const res = await axios.get(
          `https://api.giphy.com/v1/gifs/search?q=${
            !textValue ? 'cats' : textValue
          }&limit=${LIMIT}&api_key=${API_KEY}`,
        );

        console.log('ressssss:', res.data.data.length);
        if (res.data.data.length > 0) {
          setData(res.data.data);
        }
        setIsLoading(false);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [textValue]);

  // console.log('img Idddd', selectedImgId);
  // console.log('selectedImg: ', selectedImg);

  // console.log('data: ', data);
  console.log(data?.length === 0, ':::data?.length === 0 ');
  return (
    <View>
      <Header textValue={textValue} setTextValue={setTextValue} />
      <View style={styles.container}>
        {isLoading ? (
          <View style={styles.spinner}>
            <ActivityIndicator size="large" />
          </View>
        ) : data?.length === 0 ? (
          <View style={styles.noResultCont}>
            <Text style={styles.noResult}>
              No results for {`{${textValue}}`}
            </Text>
          </View>
        ) : (
          <FlatComponent
            data={data}
            setSelectedImg={setSelectedImg}
            imgId={imgId}
            setImgId={setImgId}
            selectedImg={selectedImg}
          />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    backgroundColor: 'red',
  },
  container: {
    padding: 8,
  },
  spinner: {
    height: '85%',
    justifyContent: 'center',
  },
  noResultCont: {
    height: '90%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  noResult: {
    color: '#FFF',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

export default GifraContainer;
