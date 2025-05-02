import { Image, StyleSheet, Platform, View, ScrollView, Text  } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import Button from '../../components/Button';
import Textbox from '../../components/Textbox';

export default function Login() {
  return (
    <SafeAreaView style={styles.container}>
      
      <ScrollView>
        <Image resizeMode='contain' style={{height: 146, width: 122 , alignSelf:'center', marginVertical:30}} source={require('../../assets/images/logo.png')}/>

        <View>
          <Text style={{ fontSize: 38, fontWeight: 'bold', textAlign:'center', color:'white'}}>drive it</Text>
        </View>
         <Textbox text={''} textColor={'black'} backgroundColor={'white'}/>
         <Textbox text={''} textColor={'black'} backgroundColor={'white'}/>

        <View style={{ marginTop: 20, marginBottom: 20, alignItems:'center'}}>
          <Text style={{color:'white', fontSize: 14, fontFamily:'Poppins', fontWeight: 400}}>Forgot Password</Text>
        </View>  

        <Button text={'LOG IN'} textColor={'white'} backgroundColor={'black'}/>
      
      </ScrollView>
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#304FFE',
    

  },
  header: {
    height: 38,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {

    fontSize: 24,
    fontWeight: 'bold',
  },
});
