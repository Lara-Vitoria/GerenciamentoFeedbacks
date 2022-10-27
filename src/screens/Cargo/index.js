import React, { Component, useState, useEffect } from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";
import Svg, { Path } from 'react-native-svg';

import styles from './styles';
import Header from '../../components/Header'
import Footer from '../../components/Footer'

const API_URL = 'http://192.168.0.103:3000';
function retornaBorda(data) {
    return (
        <View style={styles.backTitle}>
            <Text style={styles.titleHistorico}>Historico {data}</Text>
        </View>
    );
}
function dadoHistorico( dado) {
    return (
        <View>
            {dado == null ? 
                <Text style={[styles.input, styles.naoInformado]}>Não informado</Text> 
                :
                <Text style={styles.input}>{dado}</Text> 
            }
            
        </View>
    );
}
const Cargo = (props) => {

    const funcId = props.navigation.getParam('funcId');
    const historicoId = props.navigation.getParam('historicoId');

    const [funcionario, setFuncionario] = useState([]);
    const [historico, setHistorico] = useState([]);

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

    useEffect(() => {
        fetch(`${API_URL}/historicos/${historicoId}`, { method: 'GET' })
            .then((response) => response.json())
            .then((responseJson) => {
                setHistorico(responseJson);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);
    
    return (
        <View>
            <Header navigation={props.navigation} func={funcionario}/>

            <View style={styles.container}>
                <View style={styles.border}>
                    {retornaBorda(historico.dataInicio)}

                    <View style={styles.btnGroup}>

                        {dadoHistorico(historico.cargos)}
                        {dadoHistorico(historico.dataInicio)}
                        {dadoHistorico(historico.dataFim)}

                    </View>
                </View>

                <Footer style={styles.footer} navigation={props.navigation} func={funcionario}/>
            </View>

        </View>

    );
}

export default Cargo;