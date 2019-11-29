import { AppLoading } from 'expo';
import { Asset } from 'expo-asset';
import * as Font from 'expo-font';
import React, { useState } from 'react';
import { Platform, StyleSheet, View, Text,TouchableOpacity,Image,Modal} from 'react-native';
import { Ionicons,Foundation } from '@expo/vector-icons';
// import AppNavigator from './navigation/AppNavigator';
import ReactNativeParallaxHeader from 'react-native-parallax-header';
import * as Animatable from 'react-native-animatable';

const IS_IPHONE_X = 812;
const STATUS_BAR_HEIGHT = Platform.OS === 'ios' ? (IS_IPHONE_X ? 44 : 20) : 0;
const HEADER_HEIGHT = Platform.OS === 'ios' ? (IS_IPHONE_X ? 88 : 64) : 64;
const NAV_BAR_HEIGHT = HEADER_HEIGHT - STATUS_BAR_HEIGHT;

export default function App(props) {


  const [modalVisible, setModalVisible] = useState(false);
  const [animationButton, setAnimationButton] = useState("");
  const [tickAnimation, setTickAnimation] = useState("");

  renderNavBar = () => (
    <View style={styles.navContainer}>
      <View style={styles.statusBar} />
      <View style={styles.navBar}>
      <Foundation name="guide-dog" size={39} color="white" />
      <Text style={{justifyContent:'center',color:'white',fontSize:25}}>Status:</Text>
      <Text style={{textAlign:'right',color:'#00FF00',fontSize:18,marginLeft:9}}>Done walking</Text>
        <TouchableOpacity style={styles.iconLeft} onPress={() => {}}>
          {/* <Ionicons name="md-add-circle-outline" size={32} color="white" /> */}
        </TouchableOpacity>
        {/* <Text style={{justifyContent:'center',color:'white',fontSize:32}}>Hey</Text> */}
        <TouchableOpacity style={styles.iconRight} onPress={() => {}}>
        {/* <Ionicons name="md-search" size={32} color="white" /> */}
        </TouchableOpacity>
      </View>
    </View>
  )

  tickOrNo = () =>{
    if(tickAnimation == 'rubberBand'){
      return(
        <>
        <Animatable.View animation={tickAnimation} iterationCount={1} direction="alternate" style={{alignItems:'center'}}>
            <Ionicons name="ios-checkmark-circle" size={125} color="white" />
        </Animatable.View>
        <Text style={{color:'white',fontSize:20}}>Thank you for telling us that!</Text>
        </>
      )
    }
    else{
      null
    }
    
    
  }

  handleClick = () => setAnimationButton(true)

  contentInsdie = () => 
  (
    <View>
      <Animatable.View animation={animationButton} iterationCount={1} direction="alternate" onAnimationEnd={()=>{setAnimationButton("")}}>
        <TouchableOpacity style={{flexDirection:'row',marginTop:15}} onPress={()=>{
            setAnimationButton("shake")
        }}>
          <View style={{width:60,height:60,borderRadius:100,backgroundColor:'orange',marginLeft:15,justifyContent:'center',alignItems:'center'}}><Foundation name="guide-dog" size={39} color="white" /></View>
          <Text style={{fontSize:25,paddingTop:10,paddingLeft:8}}>Zooo down you go</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{flexDirection:'row',marginTop:15}} onPress={()=>{
            setAnimationButton("shake")
        }}>
          <View style={{width:60,height:60,borderRadius:100,backgroundColor:'cyan',marginLeft:15}}></View>
          <Text style={{fontSize:25,paddingTop:10,paddingLeft:8}}>Up and down you go</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{flexDirection:'row',marginTop:15}} onPress={()=>{
            setAnimationButton("shake")
        }}>
          <View style={{width:60,height:60,borderRadius:100,backgroundColor:'blue',marginLeft:15}}></View>
          <Text style={{fontSize:25,paddingTop:10,paddingLeft:8}}>Up and down you go</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{flexDirection:'row',marginTop:15}} onPress={()=>{
            setAnimationButton("shake")
        }}>
          <View style={{width:60,height:60,borderRadius:100,backgroundColor:'purple',marginLeft:15}}></View>
          <Text style={{fontSize:25,paddingTop:10,paddingLeft:8}}>Up and down you go</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{flexDirection:'row',marginTop:15}} onPress={()=>{
            setAnimationButton("shake")
        }}>
          <View style={{width:60,height:60,borderRadius:100,backgroundColor:'orange',marginLeft:15}}></View>
          <Text style={{fontSize:25,paddingTop:10,paddingLeft:8}}>Up and down you go</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{flexDirection:'row',marginTop:15}} onPress={()=>{
            setAnimationButton("shake")
        }}>
          <View style={{width:60,height:60,borderRadius:100,backgroundColor:'yellow',marginLeft:15}}></View>
          <Text style={{fontSize:25,paddingTop:10,paddingLeft:8}}>Up and down you go</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{flexDirection:'row',marginTop:15}} onPress={()=>{
            setAnimationButton("shake")
        }}>
          <View style={{width:60,height:60,borderRadius:100,backgroundColor:'orange',marginLeft:15}}></View>
          <Text style={{fontSize:25,paddingTop:10,paddingLeft:8}}>Up and down you go</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{flexDirection:'row',marginTop:15}} onPress={()=>{
            setAnimationButton("shake")
        }}>
          <View style={{width:60,height:60,borderRadius:100,backgroundColor:'orange',marginLeft:15}}></View>
          <Text style={{fontSize:25,paddingTop:10,paddingLeft:8}}>Up and down you go</Text>
        </TouchableOpacity>

        
      </Animatable.View>
    </View>
  )
  var modalBackgroundStyle = {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    
  };

  return (
    <View style={styles.container}>
      {/* Flatlist will setting up here */}
      <ReactNativeParallaxHeader
        headerMinHeight={HEADER_HEIGHT+13}
        headerMaxHeight={400}
        extraScrollHeight={20}
        navbarColor="#989898"
        backgroundImage={{uri: 'https://w.wallhaven.cc/full/4g/wallhaven-4g3xzd.jpg'}}
        title={
          <TouchableOpacity onPress={()=>{setModalVisible(true)}}>
          <Image source={require('./assets/images/angelPro.jpg')} style={{width:310,height:310,borderRadius:150}} />
          </TouchableOpacity>
      }
        titleStyle={styles.titleStyle}
        backgroundColor="#404040"
        backgroundImageScale={1.2}
        renderNavBar={renderNavBar}
        renderContent={contentInsdie}
        containerStyle={styles.container}
        contentContainerStyle={styles.contentContainer}
        innerContainerStyle={styles.container}
        scrollViewProps={{
          onScrollEndDrag: () => console.log('onScrollEndDrag'),
        }}
        alwaysShowTitle={false}
        alwaysShowNavBar={false}
      />
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setTickAnimation("");
          setModalVisible(false);
        }}>
      
      <TouchableOpacity activeOpacity={1.0} style={[styles.containerModal, modalBackgroundStyle]} onPress={()=>{
        setModalVisible(false);
        setTickAnimation("");
      }}>
        {tickOrNo()}
      </TouchableOpacity>

      <View style={{backgroundColor:'rgba(0, 0, 0, 0.5)',height:150,alignItems:'center',justifyContent:'center'}}>
      <Animatable.View animation={"rubberBand"} iterationCount={1} direction="alternate" onAnimationEnd={()=>{setAnimationButton("")}} style={{backgroundColor:'white',justifyContent:'space-between',flexDirection:'row',borderRadius:10,height:100,width:'90%',alignItems:'center',paddingLeft:15,paddingRight:25}}>

        <TouchableOpacity onPress={()=>{alert('test')}}>
          <View style={{alignItems:'center'}}>
            <Ionicons name="ios-add-circle-outline" size={35} color="black" />
            <Text>Status</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>{alert('test')}}>
          <View style={{alignItems:'center'}}>
            <Ionicons name="ios-sunny" size={35} color="black" />
            <Text>Morning walk</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>{alert('test')}}>
          <View style={{alignItems:'center'}}>
            <Ionicons name="ios-cloudy-night" size={35} color="black" />
            <Text>Night walk</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>{setTickAnimation('rubberBand')}}>
          <View style={{alignItems:'center'}}>
            <Ionicons name="ios-walk" size={35} color="black" />
            <Text>Extra walk</Text>
          </View>
        </TouchableOpacity>
         
        </Animatable.View>
      </View>
      </Modal>

      {/* Bottom navigation */}
      <View style={{backgroundColor:'white',height:64,borderTopColor:'black',borderTopWidth:0.2,flexDirection:'row',justifyContent:'space-between',padding:5,paddingLeft:76,paddingRight:76}}>
      <TouchableOpacity onPress={()=>{alert('test')}}>
        <View style={{justifyContent:'center',alignItems:'center'}}>
          <Ionicons name="md-list-box" size={35} color="grey" />
          <Text>List</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={()=>{alert('test')}}>
        <View style={{justifyContent:'center',alignItems:'center'}}>
          <Ionicons name="md-timer" size={35} color="grey" />
          <Text>Timeline</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={()=>{alert('test')}}>
        <View style={{justifyContent:'center',alignItems:'center'}}>
          <Ionicons name="md-settings" size={35} color="grey" />
          <Text>Setting</Text>
        </View>
      </TouchableOpacity>
      </View>
            
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
  container: {
    flex: 1,
  },
  containerModal:{
    flex:1,alignItems:'center',justifyContent:'center',
  },
  contentContainer: {
    flexGrow: 1
    
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
  boxContainer: {
    backgroundColor: "#3BD0F5",
    height: 100,
    width: 100,
    alignItems: "center",
    justifyContent: "center"
  },
  
});
