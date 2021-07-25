import React, {useState, useEffect, useContext} from 'react';
import {StyleSheet, View, Text, ActivityIndicator} from 'react-native';
import axios from 'axios';
import Header from '../components/Header';
import FlatComponent from '../components/FlatComponent';
import InitialContext from '../context/InitialContext';

const API_KEY = 'SSK25JIcl9G3XhS8iRuJ3dLPeHvMXqO9';
let LIMIT = 10;

const GifraContainer = () => {
  const [data, setData] = useState([]);
  const [textValue, setTextValue] = useState('');
  const [imgId, setImgId] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const {handleSaveData} = useContext(InitialContext);

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

        if (res.data.data.length > 0) {
          setData(res.data.data);
          handleSaveData(res.data.data);
        }
        setIsLoading(false);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [textValue, handleSaveData]);

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
          <FlatComponent data={data} imgId={imgId} setImgId={setImgId} />
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
