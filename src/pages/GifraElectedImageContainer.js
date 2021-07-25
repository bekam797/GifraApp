import React, {useState, useContext, useEffect} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  RefreshControl,
} from 'react-native';
import FlatComponent from '../components/FlatComponent';
import ImageItem from '../components/ImageItem';
import {useNavigation} from '@react-navigation/native';
import BackIcon from '../icons/Back.svg';
import EyeIcon from '../icons/Eye.svg';
import InitialContext from '../context/InitialContext';

const wait = timeout => {
  return new Promise(resolve => setTimeout(resolve, timeout));
};

const GifraElectedImageContainer = props => {
  const [imgId, setImgId] = useState(null);
  const [filteredData, setfilteredDAta] = useState(false);
  const navigation = useNavigation();
  const {imgDetailsObj, searchData} = useContext(InitialContext);
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);

  useEffect(() => {
    let filterdData = searchData.filter(item => item.id !== imgDetailsObj.id);
    setfilteredDAta(filterdData);
  }, [searchData, imgDetailsObj.id]);

  return (
    <View style={styles.root}>
      <SafeAreaView>
        <ScrollView
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }>
          <View style={styles.imgContainer}>
            <ImageItem
              url={imgDetailsObj?.images?.fixed_height?.url}
              stylesProp={styles.img}
            />
            <View style={styles.photoView}>
              <EyeIcon />
              <Text style={styles.photoViewText}>12,032 views</Text>
            </View>
            <TouchableOpacity
              style={styles.buttonContainer}
              onPress={() => navigation.goBack()}>
              <View style={styles.buttun}>
                <BackIcon />
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.avatarContainer}>
            <View style={styles.avatar}>
              <Text style={styles.avatarText}>UN</Text>
            </View>
            <View style={styles.userContainer}>
              <Text style={styles.userName}>
                {imgDetailsObj?.username !== ''
                  ? imgDetailsObj?.username
                  : 'UserName'}
              </Text>
              <Text style={styles.displayName}>{`${
                imgDetailsObj?.username !== ''
                  ? `@${imgDetailsObj?.username}`
                  : '@UserName'
              }`}</Text>
            </View>
          </View>
          <Text style={styles.text}>Related GIFs</Text>
          <FlatComponent
            data={filteredData.length && filteredData}
            imgId={imgId}
            setImgId={setImgId}
          />
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    marginTop: 30,
    padding: 8,
    justifyContent: 'center',
    position: 'relative',
  },
  imgContainer: {
    marginBottom: 18,
    position: 'relative',
  },
  img: {
    height: 359,
    borderRadius: 24,
  },
  buttonContainer: {
    position: 'absolute',
    top: 8,
    left: 8,
  },
  buttun: {
    width: 48,
    height: 48,
    marginBottom: 10,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopRightRadius: 60,
    borderBottomRightRadius: 60,
    borderTopLeftRadius: 60,
    borderBottomLeftRadius: 60,
  },
  buttonIcon: {
    textAlign: 'center',
  },
  photoView: {
    width: 155,
    padding: 10,
    backgroundColor: 'rgba(23, 24, 26, 0.38)',
    position: 'absolute',
    alignItems: 'center',
    bottom: 8,
    left: 104,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    borderRadius: 24,
  },
  photoViewText: {
    color: '#fff',
    marginLeft: 8,
  },
  avatarContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  avatar: {
    width: 48,
    height: 48,
    marginBottom: 10,
    backgroundColor: 'grey',
    borderWidth: 2,
    justifyContent: 'center',
    borderTopRightRadius: 60,
    borderBottomRightRadius: 60,
    borderTopLeftRadius: 60,
    borderBottomLeftRadius: 60,
  },
  avatarText: {
    textAlign: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 17,
    lineHeight: 22,
  },
  userContainer: {
    flex: 1,
    marginLeft: 8,
  },
  userName: {
    color: '#fff',
    fontSize: 17,
    lineHeight: 22,
  },
  displayName: {
    color: '#fff',
    fontSize: 12,
    lineHeight: 15,
  },
});

export default GifraElectedImageContainer;
