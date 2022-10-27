import React, { useState, useEffect } from "react";
import { FlatList, View, Text, TouchableOpacity, Pressable } from "react-native";
import Svg, { Path } from 'react-native-svg';

import styles from './styles';
import Logo from '../../components/Logo'

const API_URL = 'http://192.168.0.103:3000';

function addFuncionario(props) {
    return (
        <View style={styles.addFunc}>
            <Svg xmlns="http://www.w3.org/2000/svg" width="48" height="48"
            onPress={() => props.navigation.navigate('AddFuncionario')}>
                <Path d="M25.861,19.773H21.6V15.514a.915.915,0,
                    0,0-1.829,0v4.259H15.514a.876.876,0,0,0-.915.915.885.885,
                    0,0,0,.915.915h4.259v4.259a.886.886,0,0,0,.915.915.91.91,
                    0,0,0,.915-.915V21.6h4.259a.915.915,0,0,0,0-1.829Z"
                    fill="#fff" />

                <Path d="M20.688,6.841A13.841,13.841,0,1,1,10.9,10.9a13.755,
                    13.755,0,0,1,9.792-4.054m0-2.154a16,16,0,1,0,16,16,16,16,
                    0,0,0-16-16Z" fill="#fff" />
            </Svg>

            <Text style={styles.text}>Adicionar funcionario</Text>
        </View>
    );
}

function retornaListaFuncionario(props, item) {
    return (
        <TouchableOpacity
            style={styles.btn}
            title="Funcionario"
            onPress={() => props.navigation.navigate('DadosPessoais',{funcId: item.id})}>
            <Svg style={styles.iconFunc} width="48" height="48" >
                <Path d="M24,27A13.5,13.5,0,1,0,10.5,13.5,13.5,
                        13.5,0,0,0,24,27Zm12,3H30.834a16.32,16.32,0,0,
                        1-13.669,0H12A12,12,0,0,0,0,42v1.5A4.5,4.5,0,0,
                        0,4.5,48h39A4.5,4.5,0,0,0,48,43.5V42A12,12,0,0,0,36,30Z"
                    fill="#132d46" />
            </Svg>
            <Text style={styles.textBtn}>{item.nome}</Text>
        </TouchableOpacity>
    );
}


const ListaFuncionarios = (props) => {

    const [funcionario, setFuncionario] = useState([]);

    useEffect(() => {
        fetch(`${API_URL}/colaboradores/`, { method: 'GET' })
            .then((response) => response.json())
            .then((responseJson) => {
                setFuncionario(responseJson);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    return (
        <View style={styles.container}>
            <Logo />

            {addFuncionario(props)}
            <FlatList
                data={funcionario}
                keyExtractor={item => item.id}
                renderItem={({ item }) => retornaListaFuncionario(props, item)}

            />
        </View>
    );

}

export default ListaFuncionarios;
