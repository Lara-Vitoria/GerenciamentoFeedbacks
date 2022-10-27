import { StyleSheet, Dimensions } from "react-native";
const window = Dimensions.get('window');

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#132d46',
        width: "100%",
        height: "100%",
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        top: -50,
    },
    borderCadastro:{
        width: "85%",
        height: window.height -500,
        borderWidth: 1,
        borderStyle: "solid",
        borderRadius: 30,
        borderColor: '#fff',
        backgroundColor: '#132d46',
        top: 50,
        left: 30
    },
    backTitle:{
        width: "50%",
        height: "10%",
        backgroundColor: '#132d46',
        top: -30,
        left: 85
    },
    title:{
        top: 17,
        left: 45,
        letterSpacing: 3,
        color: '#fff'
    },
    input:{
        backgroundColor: '#fff',
        borderRadius: 50,
        width: "80%",
        padding:8,
        paddingLeft: 16,
        left: 30,
        marginBottom: 30
    },
    btnGroup:{
        top: 70,
        alignItems: 'center'
    },
    textBtn:{
        letterSpacing: 3,
    },
    btnCadastro:{
        backgroundColor: '#fff',
        borderRadius: 50,
        width: "50%",
        padding:8,
        paddingLeft: 20,
    },
    btnCancelar:{
        backgroundColor: '#fff',
        borderRadius: 50,
        width: "50%",
        padding:8,
        paddingLeft: 40,
        marginTop: 40
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