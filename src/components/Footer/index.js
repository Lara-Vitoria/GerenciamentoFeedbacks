import React from "react";
import { View, TouchableOpacity } from "react-native";
import Svg, { Path } from 'react-native-svg';

import styles from './styles';

function btnDadosPessoais(props){
    return(
        <TouchableOpacity
                title="Dados Pessoais"
                onPress={() => props.navigation.navigate('DadosPessoais', {funcId: props.func.id})}>

                <Svg style={styles.iconUser} width="24" height="24" viewBox="0 0 24 24">
                    <Path d="M12,13.5A6.75,6.75,0,1,0,5.25,6.75,6.752,6.752,0,
                        0,0,12,13.5ZM18,15H15.417a8.16,8.16,0,0,1-6.834,
                        0H6a6,6,0,0,0-6,6v.75A2.251,2.251,0,0,0,2.25,24h19.5A2.251,
                        2.251,0,0,0,24,21.75V21A6,6,0,0,0,18,15Z" fill="#fff" />
                </Svg>
            </TouchableOpacity>
    );
}

function btnDadosProfissionais(props){
    return(
        <TouchableOpacity
                title="Dados Profissionais"
                onPress={() => props.navigation.navigate('DadosProfissionais', {funcId: props.func.id})}>

                <Svg style={styles.iconBook} width="24" height="24" viewBox="0 0 24 24">
                    <Path d="M24,16.875V1.125A1.211,1.211,0,0,0,22.714,0H5.143C2.3,0,0,
                     2.016,0,4.5v15C0,21.984,2.3,24,5.143,24H22.714A1.211,1.211,0,0,0,24,
                     22.875v-.75a1.086,1.086,0,0,0-.477-.877,9.167,9.167,0,0,1,0-3.5A1.071,
                     1.071,0,0,0,24,16.875ZM6.857,6.281A.3.3,0,0,1,7.179,6H18.536a.3.3,0,0,
                     1,.321.281v.938a.3.3,0,0,1-.321.281H7.179a.3.3,0,0,1-.321-.281Zm0,
                     3A.3.3,0,0,1,7.179,9H18.536a.3.3,0,0,1,.321.281v.938a.3.3,0,0,
                     1-.321.281H7.179a.3.3,0,0,1-.321-.281ZM20.432,21H5.143a1.616,1.616,0,
                     0,1-1.714-1.5A1.623,1.623,0,0,1,5.143,18H20.432A14.775,14.775,0,0,0,
                     20.432,21Z" fill="#fff" />
                </Svg>
        </TouchableOpacity>
    );
}
export default function Footer(props) {
    return (
        <View style={styles.container}>
            
            {btnDadosPessoais(props)}

            {btnDadosProfissionais(props)}
        </View>

    )
}


