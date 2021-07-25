import React, {useState} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import FlatComponent from '../components/FlatComponent';
import ImageItem from '../components/ImageItem';
import {useNavigation} from '@react-navigation/native';
import BackIcon from '../icons/Back.svg';
import EyeIcon from '../icons/Eye.svg';

const GifraElectedImageContainer = props => {
  const [textValue, setTextValue] = useState('');
  const [imgId, setImgId] = useState(null);
  const [selectedImg, setSelectedImg] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigation = useNavigation();

  const url =
    'https://media3.giphy.com/media/13borq7Zo2kulO/200.gif?cid=a40b805djevrzwf15k4kki8rowbf9fxv6275e65y0jrwyghq&rid=200.gif&ct=g';

  // Dummy Data
  const data = [
    {
      images: {
        fixed_height: {
          url: 'https://media3.giphy.com/media/13borq7Zo2kulO/200.gif?cid=a40b805djevrzwf15k4kki8rowbf9fxv6275e65y0jrwyghq&rid=200.gif&ct=g',
        },
      },
    },
    {
      images: {
        fixed_height: {
          url: 'https://media3.giphy.com/media/13borq7Zo2kulO/200.gif?cid=a40b805djevrzwf15k4kki8rowbf9fxv6275e65y0jrwyghq&rid=200.gif&ct=g',
        },
      },
    },
    {
      images: {
        fixed_height: {
          url: 'https://media3.giphy.com/media/13borq7Zo2kulO/200.gif?cid=a40b805djevrzwf15k4kki8rowbf9fxv6275e65y0jrwyghq&rid=200.gif&ct=g',
        },
      },
    },
    {
      images: {
        fixed_height: {
          url: 'https://media3.giphy.com/media/13borq7Zo2kulO/200.gif?cid=a40b805djevrzwf15k4kki8rowbf9fxv6275e65y0jrwyghq&rid=200.gif&ct=g',
        },
      },
    },
  ];

  return (
    <View style={styles.root}>
      <View style={styles.imgContainer}>
        <ImageItem url={url} stylesProp={styles.img} />
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
          <Text style={styles.avatarText}>BM</Text>
        </View>
        <View style={styles.userContainer}>
          <Text style={styles.userName}>Beka</Text>
          <Text style={styles.displayName}>@Beka12</Text>
          {/* <Text style={styles.userName}>
              {item.username !== '' ? item.username : 'UserName'}
            </Text>
            <Text style={styles.displayName}>{`${
              item.username !== '' ? `@${item.username}` : '@UserName'
            }`}</Text> */}
        </View>
      </View>
      <Text style={styles.text}>Related GIFs</Text>
      <FlatComponent
        data={data}
        setSelectedImg={setSelectedImg}
        imgId={imgId}
        setImgId={setImgId}
        selectedImg={selectedImg}
      />
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
