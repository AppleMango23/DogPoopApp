import { AppLoading } from 'expo';
import { Asset } from 'expo-asset';
import * as Font from 'expo-font';
import React, { useState } from 'react';
import { Platform, StatusBar, StyleSheet, View, Text,TouchableOpacity} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import {Header} from 'react-native-elements';
// import AppNavigator from './navigation/AppNavigator';
import ReactNativeParallaxHeader from 'react-native-parallax-header';

const IS_IPHONE_X = 812;
const STATUS_BAR_HEIGHT = Platform.OS === 'ios' ? (IS_IPHONE_X ? 44 : 20) : 0;
const HEADER_HEIGHT = Platform.OS === 'ios' ? (IS_IPHONE_X ? 88 : 64) : 64;
const NAV_BAR_HEIGHT = HEADER_HEIGHT - STATUS_BAR_HEIGHT;

export default function App(props) {


  const [isLoadingComplete, setLoadingComplete] = useState(false);
  
  renderNavBar = () => (
    <View style={styles.navContainer}>
      <View style={styles.statusBar} />
      <View style={styles.navBar}>
        <TouchableOpacity style={styles.iconLeft} onPress={() => {}}>
          <Ionicons name="md-add-circle-outline" size={32} color="white" />
        </TouchableOpacity>
        <Text style={{justifyContent:'center',color:'white',fontSize:26}}>Hey</Text>
        <TouchableOpacity style={styles.iconRight} onPress={() => {}}>
        <Ionicons name="md-search" size={32} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  )
  contentInsdie = () => (
    <View>
      <Text style={{color:'red',fontSize:35}}>Hey</Text>
      <Text style={{color:'red',fontSize:35}}>Hey</Text>
      <Text style={{color:'red',fontSize:35}}>Hey</Text>
      <Text style={{color:'red',fontSize:35}}>Hey</Text>
      <Text style={{color:'red',fontSize:35}}>Hey</Text>
      <Text style={{color:'red',fontSize:35}}>Hey</Text>
      <Text style={{color:'red',fontSize:35}}>Hey</Text>
      <Text style={{color:'red',fontSize:35}}>Hey</Text>
      <Text style={{color:'red',fontSize:35}}>Hey</Text>
      <Text style={{color:'red',fontSize:35}}>Hey</Text>
      <Text style={{color:'red',fontSize:35}}>Hey</Text>
      <Text style={{color:'red',fontSize:35}}>Hey</Text>
      <Text style={{color:'red',fontSize:35}}>Hey</Text>
      <Text style={{color:'red',fontSize:35}}>Hey</Text>
      <Text style={{color:'red',fontSize:35}}>Hey</Text>
      <Text style={{color:'red',fontSize:35}}>Hey</Text>
      <Text style={{color:'red',fontSize:35}}>Hey</Text>
      <Text style={{color:'red',fontSize:35}}>Hey</Text>
      <Text style={{color:'red',fontSize:35}}>Hey</Text>
      <Text style={{color:'red',fontSize:35}}>Hey</Text>
    </View>
  )

  return (
    <View style={styles.container}>
      <ReactNativeParallaxHeader
        headerMinHeight={HEADER_HEIGHT+13}
        headerMaxHeight={250}
        extraScrollHeight={20}
        navbarColor="#3498db"
        title={<Text style={{justifyContent:'center',color:'white',fontSize:26}}>HoLooo</Text>}
        titleStyle={styles.titleStyle}
        // backgroundImage={images.background}
        backgroundImageScale={1.2}
        renderNavBar={renderNavBar}
        renderContent={contentInsdie}
        containerStyle={styles.container}
        contentContainerStyle={styles.contentContainer}
        innerContainerStyle={styles.container}
        scrollViewProps={{
          // onScrollBeginDrag: () => 
          // alert('onScrollBeginDrag'),
          onScrollEndDrag: () => console.log('onScrollEndDrag'),
        }}
        alwaysShowTitle={false}
        alwaysShowNavBar={false}
      />
      {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
      
    </View>
  );
}

async function loadResourcesAsync() {
  await Promise.all([
    Asset.loadAsync([
      require('./assets/images/robot-dev.png'),
      require('./assets/images/robot-prod.png'),
    ]),
    Font.loadAsync({
      // This is the font that we are using for our tab bar
      ...Ionicons.font,
      // We include SpaceMono because we use it in HomeScreen.js. Feel free to
      // remove this if you are not using it in your app
      'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
    }),
  ]);
}

function handleLoadingError(error) {
  // In this case, you might want to report the error to your error reporting
  // service, for example Sentry
  console.warn(error);
}

function handleFinishLoading(setLoadingComplete) {
  setLoadingComplete(true);
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   backgroundColor: '#fff',
  //   justifyContent:'center',
  //   alignItems:'center'
  // },
  container: {
    
    flex: 1,
  },
  contentContainer: {
    flexGrow: 1,
  },
  navContainer: {
    height: HEADER_HEIGHT,
    marginHorizontal: 10,
  },
  statusBar: {
    height: STATUS_BAR_HEIGHT,
    backgroundColor: 'transparent',
  },
  navBar: {
    paddingTop:27,
    height: NAV_BAR_HEIGHT,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: 'transparent',
  },
  titleStyle: {
    paddingTop:5,
    color: 'white',
    fontWeight: 'bold',
    fontSize: 25,
  },
});
