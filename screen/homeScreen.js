import * as React from 'react';
import {Text,View,TouchableOpacity,StyleSheet} from 'react-native'
import { RFValue } from "react-native-responsive-fontsize";


export default class HomeScreen extends React.Component{
render(){
  return(
      <View style = {{backgroundColor:'green',flex:1}}>
      <Text style = {styles.title}>WELCOME</Text>
      <TouchableOpacity style = {styles.button}
onPress={()=>this.props.navigation.navigate('BiologyScreen')}>
      <Text style = {styles.buttonText}>BiologyScreen</Text> </TouchableOpacity>

      <TouchableOpacity style = {styles.button}
onPress={()=>this.props.navigation.navigate('ChemistryScreen')}>
      <Text style = {styles.buttonText}>ChemistryScreen</Text> </TouchableOpacity>

      <TouchableOpacity style = {styles.button}
onPress={()=>this.props.navigation.navigate('PhysicsScreen')}>
      <Text style = {styles.buttonText}>PhysicsScreen</Text> </TouchableOpacity>

      <TouchableOpacity style = {styles.button}
onPress={()=>this.props.navigation.navigate('MathsScreen')}>
      <Text style = {styles.buttonText}>MathsScreen</Text> </TouchableOpacity>


      <TouchableOpacity style = {styles.button}
onPress={()=>this.props.navigation.navigate('VideoScreen')}>
      <Text style = {styles.buttonText}>VideoScreen</Text> </TouchableOpacity>

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
  },
  buttonText:{
    fontFamily: "Bubblegum-Sans",
      color:'red',
textAlign:'center',
fontSize:25,
  },
  button:{
    borderWidth:1,
    width:200,
    height:50,
    justifyContent:'center',
    alignSelf:'center',
    marginTop:40,
borderRadius:10,
backgroundColor:'black'
  }
})