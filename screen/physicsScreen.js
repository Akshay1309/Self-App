import * as React from 'react';
import { Text, View, TouchableOpacity, StyleSheet, ScrollView, Linking,Image} from 'react-native';
import { RFValue } from "react-native-responsive-fontsize";

export default class PhysicsScreen extends React.Component {
  render() {
    return (
      <View style={{ backgroundColor:'yellow',flex:1 }}>
         <View style = {{flexDirection: 'row'}}>
  <TouchableOpacity onPress={()=>this.props.navigation.navigate('HomeScreen')}>
  <Image style = {{width:50,height:50,resizeMode:'contain'}} source = {require('../assets/BackArrow.png')}/>
  
  </TouchableOpacity>
    <Text style = {styles.title}>Physics</Text>
    </View>
        <ScrollView style={{ alignItems: 'center' }}>
          <Text style={styles.buttonText}> Particle Motion of Mechanical Waves

(i) Transverse Waves

Particle motion is perpendicular to the direction of wave motion. This type of wave is a mechanical wave.

E.g.Light and Mexican wave in a stadium.

(ii) Longitudinal waves

Particles travel parallel to the direction of wave motion by means of successive compressions or elongations. This is also a mechanical wave.

E.g. Sound waves in the air.

Characteristics of Sound Waves
1. Wavelength
The distance between two successive crests or troughs (or) successive compressions and rarefactions is called wavelength (λ). The SI unit of wavelength is meter (m).

2. Time period
The time taken by two consecutive compressions or rarefactions to cross a fixed point is called a Time period (T). The SI unit of time in seconds (s).

3. Amplitude
The magnitude of disturbance in a medium on either side of the mean value is called an amplitude (A). As shown in the figure below, the unit of amplitude will be the density or pressure. Distance between mean position and crest (maximum displacement).

4. Pitch
The number of compressions or rarefactions per unit time. Directly proportional to frequency.

5. Volume
The volume or loudness of a sound depends on the amplitude. The force with which an object is made to vibrate gives the loudness.
          </Text>
        </ScrollView>
        <View style={{ alignItems: 'center', marginTop: 20 }}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => Linking.openURL('https://5k6yls.csb.app/')}
          >
            <Text style={{ color: 'white', fontSize: 20, textAlign: 'center' }}>Quiz</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    color: 'red',
    textAlign: 'center',
    fontSize: RFValue(40),
    fontFamily: 'Cursive',
    marginLeft:50
  },
  buttonText: {
    fontFamily: 'Bubblegum-Sans',
    color: 'red',
    textAlign: 'left',
    fontSize: 25,
  },
  button: {
    borderWidth: 1,
    width: 200,
    height: 50,
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 30,
    borderRadius: 10,
    backgroundColor: 'black',
  },
});
