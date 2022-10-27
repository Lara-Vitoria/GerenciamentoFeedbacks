import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#fff',
        width: "100%",
        height: "100%",
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        top: -50,
    },
    border:{
        width: "85%",
        height: "34%",
        borderWidth: 1,
        borderStyle: "solid",
        borderRadius: 30,
        borderColor: '#132d46',
        backgroundColor: '#fff',
        top: 60,
        left: 30
    },
    backTitle:{
        width: "75%",
        height: "10%",
        backgroundColor: '#fff',
        top: -16,
        left: 40
    },
    titleHistorico:{
        top: 5,
        left: 30,
        letterSpacing: 3,
    },
    input:{
        backgroundColor: '#B1BACC',
        borderRadius: 50,
        width: "80%",
        padding: 14,
        paddingLeft:16,
        top:10,
        left: 30,
        marginBottom:40
    },
    naoInformado:{
        fontStyle:'italic'
    }

});

export default styles