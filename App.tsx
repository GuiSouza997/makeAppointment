// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image , Pressable} from 'react-native';
import { themeApp } from './global/style';
import logoTesoura from './assets/salao.png';
import logoCabeloCurto from './assets/cabelo-masculino-curto.png';
import logoCabeloLongo from './assets/alisador.png';
export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.containerImage}>
        <Image source={logoTesoura} style={styles.imageLogoLeft} />
        <Image source={logoCabeloCurto} style={styles.imageLogoRight} />
      </View>
      <View style={styles.containerImageCenter}>
        <Image source={logoCabeloLongo} style={styles.imageCenter} />
      </View>
      <Text style={styles.containerText}>Make Appointment</Text>
      <Text style={styles.descriptionText}>Agendamento de Serviços</Text>
      {/* <Button title="Agendar Horário" onPress={ () => console.log("cliquei")} color={ themeApp.colors.colorButtonPrimary } /> */}
      <Pressable style={styles.containerButtonCenter} onPress={ () => console.log("cliquei")}>
        <Text style={{color: themeApp.colors.colorTextWhite, textAlign: 'center', marginTop: 15, fontWeight: "400", fontSize: 18}}> Agendar Horário</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: themeApp.colors.primaryColorTheme,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  imageLogoLeft:{
    width: 62.7,
    height: 65
  },
  imageLogoRight:{
    width: 62.7,
    height: 65,
    marginLeft: 20
  },
  imageCenter: {
    width: 87.9,
    height: 88.4,
    marginLeft: 30,
    marginTop: -10
  },
  containerText: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    top: '35%',
    left: '30%',
    fontSize: 18
  },
  descriptionText: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 18,
    color: themeApp.colors.secundaryColorText,
    left: '22%',
  },
  containerImage:{
    flexDirection: 'row',
    alignItems: 'center' ,
    justifyContent: 'center',
    top: "60%"
  },
  containerImageCenter:{
    flexDirection: 'row',
    alignItems: 'center' ,
    justifyContent: 'center',
    top: "65%"
  },
  containerButtonCenter:{
    width: 232,
    height:56,
    backgroundColor: themeApp.colors.colorButtonPrimary,
    left: "22%",
    bottom: "25%",
    borderRadius: 15,
  }
});
