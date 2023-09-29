import * as React from 'react';
import {Text,TouchableOpacity,View,StyleSheet,Linking,Image} from 'react-native'
import { RFValue } from "react-native-responsive-fontsize";

export default class BiologyScreen extends React.Component{
render(){
  return(
  <View style = {{backgroundColor:'yellow',flex:1}}>  
  <View style = {{flexDirection: 'row'}}>
  <TouchableOpacity onPress={()=>this.props.navigation.navigate('HomeScreen')}>
  <Image style = {{width:50,height:50,resizeMode:'contain'}} source = {require('../assets/BackArrow.png')}/>
  
  </TouchableOpacity>
    <Text style = {styles.title}>Biology</Text>
    </View>
    <Text style = {styles.text}> Plant Tissues: 
Plant tissues are of various types, and they are made up of similar types of cells. They are different from animal tissues since there are several differences between animal and plant cells. Meristematic tissues and permanent tissues are the two types of plant tissues.
Animal Tissues: Animal tissues are made up of animal cells. These tissues are usually not rigid since the cells do not have cell walls.


</Text>

    <View style = {{alignItems:'center', marginTop:20}} >
    <TouchableOpacity style = {styles.button}
    onPress={()=>Linking.openURL ('https://dx42pz.csb.app/')}>
    <Text style = {{color:'white',fontSize:20,textAlign:'center'}}>Quiz</Text></TouchableOpacity>
     </View>
    </View>

   
    
)
}
}

const styles = StyleSheet.create({
title:{
      color: "Red",
    textAlign: "center",
    fontSize: RFValue(40),
    fontFamily: "Cursive",
    marginLeft:50
  },
  text:{
    fontFamily: "Bubblegum-Sans",
      color:'red',
textAlign:'left',
fontSize:25,
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
backgroundColor:'black'
  }

})
