import * as React from 'react';
import {Text,View,StyleSheet,TouchableOpacity,Linking,Image,ScrollView} from 'react-native'
import { RFValue } from "react-native-responsive-fontsize";

export default class VideoScreen extends React.Component {
  render() {
    return (

      <ScrollView style = {{backgroundColor:'black',flex:1}}>
      
  <TouchableOpacity onPress={()=>this.props.navigation.navigate('HomeScreen')}>
  <Image style = {{width:50,height:50,resizeMode:'contain'}} source = {require('../assets/BackArrow.png')}/>
    
  </TouchableOpacity>



  
      <Text style = {styles.title}>Videos:                            Given Below are Some Videos associate with Class-9. for the videos all the credit goes to BYJUS</Text>
      <TouchableOpacity  onPress={() => Linking.openURL(' https://www.youtube.com/watch?v=7apzMjbyvKU&ab_channel=BYJU%27S-Class9%2610')}>
      <Text style = {{marginTop:100,marginLeft:120,color:'red',fontSize:30,textDecorationLine:'underline'}}>Physics</Text>
      </TouchableOpacity> 

      <TouchableOpacity  onPress={() => Linking.openURL(' https://www.youtube.com/watch?v=BQ1tqT76A1k&ab_channel=BYJU%27S-Class9%2610')}>
      <Text style = {{marginTop:30,marginLeft:105,color:'green',fontSize:30,textDecorationLine:'underline'}}>Chemistry</Text>
      </TouchableOpacity> 

      <TouchableOpacity  onPress={() => Linking.openURL('https://www.youtube.com/watch?v=j0kBsyZsfu4&ab_channel=BYJU%27S-Class9%2610')}>
      <Text style = {{marginTop:30,marginLeft:120,color:'yellow',fontSize:30,textDecorationLine:'underline'}}>Biology</Text>
      </TouchableOpacity> 

      <TouchableOpacity  onPress={() => Linking.openURL('https://www.youtube.com/watch?v=WLvYFkmXgEM&ab_channel=BYJU%27S-Class9%2610')}>
      <Text style = {{marginTop:30,marginLeft:130,color:'blue',fontSize:30,textDecorationLine:'underline'}}>Maths</Text>
      </TouchableOpacity> 
      
        </ScrollView>

    )
  }
}

const styles = StyleSheet.create({
title:{
      color: "white",
    textAlign: "center",
    fontSize: RFValue(40),
    fontFamily: "Cursive",
    marginLeft:-10,
    marginTop:30
  },
  text:{
    fontFamily: "Bubblegum-Sans",
      color:'red',
textAlign:'left',
fontSize:20,
marginTop:20,
  },
  button:{
    borderWidth:1,
    width:200,
    height:50,
    justifyContent:'center',
    alignSelf:'center',
    marginTop:30,
borderRadius:10,
backgroundColor:'black',
  }
  
})
