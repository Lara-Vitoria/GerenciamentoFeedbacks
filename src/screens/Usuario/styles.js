import { StyleSheet, Dimensions } from "react-native";
const window = Dimensions.get('window');

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#fff',
        width: "100%",
        height: "100%",
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        top: -50,
    },
    borderDadosPessoais:{
        width: "85%",
        height: window.height -400,
        borderWidth: 1,
        borderStyle: "solid",
        borderRadius: 30,
        borderColor: '#132d46',
        backgroundColor: '#fff',
        top: 40,
        left: 30
    },
    backTitle:{
        width: "50%",
        height: "10%",
        backgroundColor: '#fff',
        top: -30,
        left: 85
    },
    title:{
        top: 17,
        left: 10,
        letterSpacing: 3,
    },
    input:{
        backgroundColor: '#B1BACC',
        borderRadius: 50,
        width: "80%",
        padding:8,
        paddingLeft: 16,
        top:8,
        left: 30,
        marginBottom: 16
    },
    icon:{
        top: -45,
        left: 270,
    },
    btnGroupSC:{
        width: "100%",
        top: 130,
        left:32
    },
    btnCancelar:{
        backgroundColor: '#B1BACC',
        borderRadius: 50,
        width: "30%",
        top: -38,
        left: 220
    },
    textCancelar:{
        padding: 8,
        paddingLeft: 30
    },
    btnSalvar:{
        backgroundColor: '#132d46',
        borderRadius: 50,
        width: "30%",
    },
    textSalvar:{
        color:"#fff",
        padding: 8,
        paddingLeft: 40
    },
    mensagem:{
        color: '#132d46',
        top: -20
    },
    modalView: {
        margin: 20,
        top: 300,
        backgroundColor: "#fff",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
      },
      button: {
        borderRadius: 20,
        width: '100%',
        padding: 10,
        marginTop: 10,
        elevation: 2,
        backgroundColor: "#132d46",
        alignItems: 'center'
      },
      btnText:{
        color: "#fff",
        
      }
});

export default styles