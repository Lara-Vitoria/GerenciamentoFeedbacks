import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#132D46',
        width: "100%",
        height: "100%",
    },
    input:{
        backgroundColor: '#fff',
        borderRadius: 50,
        width: "80%",
        padding:8,
        paddingLeft: 16,
        left: 40,
        marginBottom: 56
    },
    inputGroup:{
        top: 100,
    },
    text:{
        color: '#fff',
        fontSize: 15,
        letterSpacing: 3,
        marginBottom: 20
    },
    textCadastro:{
        color: '#fff',
        fontSize: 15,
        fontWeight: 'bold',
        letterSpacing: 3,
    },
    textBtn: {
        letterSpacing: 3,
        fontSize: 20,
        top: 10,
        left: 34,
        color: '#132D46',
    },
    textGroup:{
        top: 230,
        justifyContent: 'center',
        alignItems: 'center'
    },
    btn: {
        top: 120,
        left: 140,
        borderRadius: 50,
        width: "35%",
        height: "6%",
        backgroundColor: "#fff",
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