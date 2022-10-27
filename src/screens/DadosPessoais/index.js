import React, { Component, useState, useEffect } from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";
import Svg, { Path } from 'react-native-svg';

import styles from './styles';
import Header from '../../components/Header'
import Footer from '../../components/Footer'

const API_URL = 'http://192.168.0.103:3000';
function retornaDado(dado) {
    return (
        <View>
            <Text style={styles.input}>
                {dado}
            </Text>
        </View>
    );
}
const  DadosPessoais = (props) => {

    const funcId = props.navigation.getParam('funcId');

    const [funcionario, setFuncionario] = useState([]);
    useEffect(() => {
        fetch(`${API_URL}/colaboradores/${funcId}`, { method: 'GET' })
            .then((response) => response.json())
            .then((responseJson) => {
                setFuncionario(responseJson);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

        return (
            <View>
                <Header navigation={props.navigation} func={funcionario}/>
                <View style={styles.container}>
                    <View style={styles.borderDadosPessoais}>
                        <View style={styles.backTitle}>
                            <Text style={styles.title}>Dados Pessoais</Text>
                        </View>

                        <View style={styles.btnGroup}>

                            {retornaDado(funcionario.telefone)}
                            {retornaDado(funcionario.endereco)}
                            {retornaDado(funcionario.nascimento)}
                            {retornaDado(funcionario.email)}

                        </View>
                    </View>

                    <Footer navigation={props.navigation} func={funcionario}/>
                </View>


            </View>

        );
}

export default DadosPessoais;