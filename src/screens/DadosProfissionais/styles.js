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
    borderHistorico:{
        width: "85%",
        height: "16.5%",
        borderWidth: 1,
        borderStyle: "solid",
        borderRadius: 30,
        borderColor: '#132d46',
        backgroundColor: '#fff',
        top: 60,
        left: 30
    },
    backTitle:{
        width: "50%",
        height: "10%",
        backgroundColor: '#fff',
        top: -16,
        left: 85
    },
    titleHistorico:{
        top: 5,
        left: 24,
        letterSpacing: 3,
    },
    titleIconHistorico:{
        top: -8,
        left: 140,
    },
    input:{
        backgroundColor: '#B1BACC',
        borderRadius: 50,
        width: "80%",
        padding: 0,
        paddingLeft:16,
        top:12,
        left: 30,
        marginBottom:20
    },
    icon:{
        top: -35,
        left: 270,
    },
    borderFeedback:{
        width: "85%",
        height: "17%",
        borderWidth: 1,
        borderStyle: "solid",
        borderRadius: 30,
        borderColor: '#132d46',
        backgroundColor: '#fff',
        top: 130,
        left: 30
    },
    btnGroupFeedback:{
        marginTop: 10
    },
    inputFeedback:{
        backgroundColor: '#B1BACC',
        borderRadius: 50,
        width: "80%",
        padding: 0,
        paddingLeft:16,
        left: 30,
        top: 10,
        marginBottom:20
    },
    iconFeedback:{
        left: 220, 
        top: 8
    },
    iconTitleFeedback:{
        top: -16,
        left: 140,
    },
    textFeedback:{
        top: -12,
        left: 4,
        color: '#132d46',
        letterSpacing: 3,
    }

});

export default styles