import React from "react";
import { View, Text } from "react-native";
import Svg, { Path } from 'react-native-svg';

import styles from './styles';

function exibeNome(funcionario) {
    return (
        <View>
            <Text style={styles.nomeTexto}>{funcionario?.nome}</Text>
        </View>
    );
}

function exibeCargo(funcionario) {
    return (
        <View>
            <Text style={styles.cargoTexto}>{funcionario?.cargoAtual}</Text>
        </View>

    );
}

function exibeUserIcon(props) {
    return (
        <View>
            <Svg onPress={() => props.navigation.navigate('Usuario', {funcId: props.func.id})}
            style={styles.userIcon} width="80" height="80" viewBox="0 0 72 72">
                <Path d="M36,40.5A20.25,20.25,0,1,0,15.75,20.25,
                20.255,20.255,0,0,0,36,40.5ZM54,45H46.252a24.479,
                24.479,0,0,1-20.5,0H18A18,18,0,0,0,0,63v2.25A6.752,
                6.752,0,0,0,6.75,72h58.5A6.752,6.752,0,0,0,72,
                65.25V63A18,18,0,0,0,54,45Z" fill="#fff" />
            </Svg>
        </View>);
}

const Header = (props) => {

    return (
        <View style={styles.container}>

            {exibeUserIcon(props)}

            {exibeNome(props?.func)}

            {exibeCargo(props?.func)}

        </View>

    );
}

export default Header;