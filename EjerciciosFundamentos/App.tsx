import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CustomInput from './src/components/CustomInput';

export default function App() {
  const [usuario, setUsuario] = useState("");
  const [edad, setEdad] = useState("");

  const tareas = [{id:1, desc:"Regar la plantas"}, {id:2, desc:"Ir al super"},
      {id:3, desc:"Pagar deudas"},{id:4, desc:"Comprar regalo del dia de la madre"}];

  return (
    <View style={styles.container}>
      <CustomInput 
      value= {usuario} 
      onChange={setUsuario}
      placeholder={'Ingresa tu nombre de usuario'}
      />
      <CustomInput 
      type='number'
      value= {edad} 
      onChange={setEdad}
      placeholder={'Ingresa tu edad'}
      />
      {usuario && <Text style={styles.text}>Hola, {usuario}! </Text>}
      {edad && <Text style={styles.text}>Eres {parseInt(edad)>=18? "mayor de edad" : "menor de edad"}</Text>}
      <StatusBar style="auto" />

      <View>
        <Text style={styles.text}>Tareas por hacer: </Text>
        {tareas.map((tarea) => {
            return (
              <Text style={[styles.text, styles.listItem]} key={tarea.id}>{tarea.desc}</Text>
          );
        })}
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d29d9d',
    alignItems: 'center',
    justifyContent: 'center',
  },
  listItem:{
    borderColor:"#000",
    borderWidth:1,
    paddingHorizontal: 15,
    borderRadius:9,
    backgroundColor:"#99ccff",
    marginTop: 10
  },
  text:{
    fontSize:24
  }
});
