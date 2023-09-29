import * as React from 'react';
import {Text,View,StyleSheet,TouchableOpacity,Linking,Image} from 'react-native'
import { RFValue } from "react-native-responsive-fontsize";

export default class MathsScreen extends React.Component{
render(){
 return(
  <View style = {{backgroundColor:'yellow',flex:1}}>  
  <View style = {{flexDirection: 'row'}}>
  <TouchableOpacity onPress={()=>this.props.navigation.navigate('HomeScreen')}>
  <Image style = {{width:50,height:50,resizeMode:'contain'}} 
  source = {require('../assets/BackArrow.png')}/>
    
    </TouchableOpacity>
 <Text style = {styles.title}>Maths</Text>
    </View>
    <Text style = {styles.text}>  
      
    Cartesian System
The Cartesian system is a system for describing the position of a point in a plane. A point is located by referring to two perpendicular lines in a Cartesian system. The X-axis is the horizontal line XX’, and the Y-axis is the vertical line YY’.
Origin
The origin, indicated by the letter ‘O,’ is the place where the horizontal and vertical lines intersect. Here, positive directions are OX and OY, while negative directions are OX’ and OY’.
Coordinate Axes and Quadrants
The plane is divided into four sections by the X and Y axes. The quadrants (one-fourth section) are numbered I, II, III, and IV in anti-clockwise order from OX. The Cartesian plane, also known as the coordinate plane or the XY plane, comprises these axes and quadrants. These axes are also known as coordinate axes.





</Text>
    <View style = {{alignItems:'center', marginTop:20}} >
    <TouchableOpacity style = {styles.button}
    onPress={()=>Linking.openURL ('https://rdln6f.csb.app/')}>
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
    marginLeft:50,
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
