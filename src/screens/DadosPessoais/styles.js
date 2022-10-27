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
    borderDadosPessoais:{
        width: "85%",
        height: "34%",
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
        width: "83%",
        padding:8,
        paddingLeft: 16,
        left: 30,
        marginBottom: 40,
    },
    
});

export default styles