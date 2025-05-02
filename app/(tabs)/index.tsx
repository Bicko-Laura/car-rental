import { Image, StyleSheet, Platform, View, ScrollView, Text, TextInput,TouchableOpacity  } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import Button from '../../components/Button';
import Textbox from '../../components/Textbox';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>

        <View>
        <TextInput style={{borderRadius: 74 , height: 60, justifyContent: 'center', 
        alignItems: 'center', width:'85%', backgroundColor: 'white', paddingHorizontal: 20,
         marginTop: 20, alignSelf:'center'}} placeholder='Search for a car'/>

        </View >
        <ScrollView horizontal={true} style={styles.carType}>
        <TouchableOpacity style={{backgroundColor: '#304FFE', padding: 10, borderRadius: 8, marginHorizontal: 15, 
          marginVertical: 20,width: 151,height: 161,}}>
          <Image resizeMode='contain' style={{width:'100%', height:'70%'}} source={require('../../assets/images/image 6.png')}/>
          <Text style={{fontSize: 16,fontWeight: '400',color: 'white', alignSelf:'center', marginBottom: 3}}>Standard</Text>
          <Text style={{fontSize: 16,fontWeight: '400',color:'white', alignSelf:'center', marginBottom: 3 }}>56</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.carButton}>
          <Image resizeMode='contain' style={{width:'100%', height:'70%'}} source={require('../../assets/images/image 7.png')}/>
          <Text style={styles.carButtonText}>Prestige</Text>
          <Text style={styles.carButtonText}>22</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.carButton}>
          <Image resizeMode='contain' style={{width:'80%', height:'70%'}} source={require('../../assets/images/image 8.png')}/>
          <Text style={styles.carButtonText}>SUV</Text>
          <Text style={styles.carButtonText}>34</Text>
        </TouchableOpacity>

       </ScrollView>
       <View>
          <Text style={{fontSize: 14, fontWeight: 400, fontFamily:'Poppins', color:'black', paddingLeft: 20}}>Available vehicles</Text>
        </View>

        <View>
          <TouchableOpacity style={styles.car}>
          <View style={{flexDirection:'row', gap: 10, marginHorizontal: 20, marginVertical: 10}}>
            <Text style={{fontSize:34, fontWeight: 800, fontFamily:'Gilroy', marginRight: 75}}>Toyota</Text>
            <Text style={{color:'#304FFE', fontSize:34, fontWeight:300}}>$350</Text>
          </View>

          <View style={{flexDirection:'row', gap: 10, marginHorizontal: 20, marginVertical: 10}}>
            <Text style={{fontSize:14, fontWeight: 400, fontFamily:'Poppins', marginRight: 165,color:'#7D8EA3'}}>Yaris iA</Text>
            <Text style={{fontSize:14, fontWeight: 400, fontFamily:'Poppins', color:'#7D8EA3'}}>/month</Text>
          </View>

          <View style={{flexDirection:'row', gap: 10, marginHorizontal: 20, marginVertical: 10}}>
            <Text style={{fontSize:14, fontWeight: 400, fontFamily:'Poppins', marginRight: 150,color:'black'}}>Engine</Text>
            <Text style={{color:'black', fontSize:14, fontWeight:400}}>4-Cyl 1.5 Liter</Text>
          </View>

          <Image resizeMode='contain' style={{height:'65%', width:'100%'}} source={require('../../assets/images/car.png')}/>


          </TouchableOpacity>
          <TouchableOpacity style={styles.car}> 
          <View style={{flexDirection:'row', gap: 10, marginHorizontal: 20, marginVertical: 10}}>
            <Text style={{fontSize:34, fontWeight: 800, fontFamily:'Gilroy', marginRight: 75}}>Hyundai</Text>
            <Text style={{color:'#304FFE', fontSize:34, fontWeight:300}}>$250</Text>
          </View>

          <View style={{flexDirection:'row', gap: 10, marginHorizontal: 20, marginVertical: 10}}>
            <Text style={{fontSize:14, fontWeight: 400, fontFamily:'Poppins', marginRight: 165,color:'#7D8EA3'}}>i20</Text>
            <Text style={{fontSize:14, fontWeight: 400, fontFamily:'Poppins', color:'#7D8EA3'}}>/month</Text>
          </View>

          <View style={{flexDirection:'row', gap: 10, marginHorizontal: 20, marginVertical: 10}}>
            <Text style={{fontSize:14, fontWeight: 400, fontFamily:'Poppins', marginRight: 150,color:'black'}}>Engine</Text>
            <Text style={{color:'black', fontSize:14, fontWeight:400}}>6-Cyl 1.0 Liter</Text>
          </View>

          <Image resizeMode='contain' style={{height:'65%', width:'100%'}} source={require('../../assets/images/Screenshot 2025-05-02 042813.png')}/>
          
          
          </TouchableOpacity>
          
        </View>

      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: ' #F5F5F5',
  },
  carType:{
    flexDirection: 'row',
  },
  carButton:{
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 8,
    marginHorizontal: 15,
    marginVertical: 20,
    width: 151,
    height: 161,
  },
  carButtonText:{
    fontSize: 16,
    fontWeight: '400',
    color: 'black',
    alignSelf: 'center',
    fontFamily: 'Poppins',
    marginBottom: 3,
    
  },
  car:{
    backgroundColor: 'white',
    borderRadius: 35,
    marginHorizontal: 20,
    marginVertical: 20,
    width:'90%',
    height: 355,
  }
})
