import * as React from 'react';
import {Text,View,StyleSheet,TouchableOpacity,Linking,Image} from 'react-native'
import { RFValue } from "react-native-responsive-fontsize";

export default class ChemistryScreen extends React.Component{
render(){
  return(
  <View style = {{backgroundColor:'yellow',flex:1}}>  
  <View style = {{flexDirection: 'row'}}>
  <TouchableOpacity onPress={()=>this.props.navigation.navigate('HomeScreen')}>
  <Image style = {{width:50,height:50,resizeMode:'contain'}} 
  source = {require('../assets/BackArrow.png')}/>
    
    </TouchableOpacity>
     <Text style = {styles.title}>Chemistry</Text>
    </View>
    <Text style = {styles.text}> 
     Laws of Chemical Combination:
    
    
    1. Law of Conservation of Mass

    a) According to the law of conservation of mass, matter can neither be created nor destroyed in a chemical reaction. It remains conserved. The mass of reactants will be equal to the mass of products.

b) The mass of reactants will be equal to the mass of products.

    2. Law of Constant Proportions
  a) A pure chemical compound containing the same elements combined together in a fixed proportion by mass is given by the law of definite proportions.
b) For e.g., If we take water from a river or from an ocean, both have oxygen and hydrogen in the same proportion.




</Text>
    <View style = {{alignItems:'center', marginTop:20}} >
    <TouchableOpacity style = {styles.button}
    onPress={()=>Linking.openURL ('https://wtqznd.csb.app/')}>
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
backgroundColor:'black'
  }
})