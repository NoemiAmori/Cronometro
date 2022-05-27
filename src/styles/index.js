// Para que possamos utilizar o StyleSheet, temos que importa-lo
import { StyleSheet } from 'react-native';

// O nome do nosso grupo de estilo é styles
const styles = StyleSheet.create({
    container:{
      flex:1,
      alignItems:'center',
      justifyContent: 'center',
      backgroundColor: 'yellow'
    },
    timer:{
      marginTop:-160,
      color: '#FFF',
      fontSize: 65,
      fontWeight: 'bold'
    },
    btnArea:{
      flexDirection: 'row',
      marginTop: 70,
      height: 40
    },
    btn:{
      flex:1,
      justifyContent:'center',
      alignItems: 'center',
      backgroundColor: '#FFF',
      height: 40,
      margin: 17,
      borderRadius: 9
    },
    btnTexto:{
      fontSize: 20,
      fontWeight: 'bold',
      color: '#00aeef'
    },
    areaUltima:{
      marginTop: 40,
    },
    textoCorrida:{
      fontSize:25,
      fontStyle:'italic',
      color: '#FFF'
    }
  });

  // Para que nosso arquivo possa ser importado, temos que exportar ele
  // Utilizamos export default + o nome do nosso grupo de estilos
  export default styles; 