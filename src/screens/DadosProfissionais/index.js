import React, { Component, useState, useEffect } from "react";
import { FlatList, View, Text, TextInput, TouchableOpacity } from "react-native";
import Svg, { Path } from 'react-native-svg';

import styles from './styles';
import Header from '../../components/Header'
import Footer from '../../components/Footer'

const API_URL = 'http://192.168.0.103:3000';
function svgAddCargo(props, idFunc) {
    return (
        <Svg style={styles.iconTitleFeedback}
            xmlns="http://www.w3.org/2000/svg"
            width="24" height="24" viewBox="0 0 40 40"
            onPress={() => props.navigation.navigate('AddCargo', { funcId: idFunc })}>
            <Path d="M25.861,19.773H21.6V15.514a.915.915,0,0,0-1.829,0v4.259H15.514a.876.876,
              0,0,0-.915.915.885.885,0,0,0,.915.915h4.259v4.259a.886.886,0,0,0,.915.915.91.91,
              0,0,0,.915-.915V21.6h4.259a.915.915,0,0,0,0-1.829Z" fill="#132d46" />
            <Path d="M20.688,6.841A13.841,13.841,0,1,1,10.9,10.9a13.755,13.755,0,0,1,
              9.792-4.054m0-2.154a16,16,0,1,0,16,16,16,16,0,0,0-16-16Z" fill="#132d46" />
        </Svg>
    );
}

function svgAddFeedback(props, idFeedback, idFunc) {
    return (
        <Svg style={styles.iconTitleFeedback}
            xmlns="http://www.w3.org/2000/svg"
            width="24" height="24" viewBox="0 0 40 40"
            onPress={() => props.navigation.navigate('AddFeedback', { feedbackId: idFeedback, funcId: idFunc })} >
            <Path d="M25.861,19.773H21.6V15.514a.915.915,0,0,0-1.829,0v4.259H15.514a.876.876,
              0,0,0-.915.915.885.885,0,0,0,.915.915h4.259v4.259a.886.886,0,0,0,.915.915.91.91,
              0,0,0,.915-.915V21.6h4.259a.915.915,0,0,0,0-1.829Z" fill="#132d46" />
            <Path d="M20.688,6.841A13.841,13.841,0,1,1,10.9,10.9a13.755,13.755,0,0,1,
              9.792-4.054m0-2.154a16,16,0,1,0,16,16,16,16,0,0,0-16-16Z" fill="#132d46" />
        </Svg>
    );
}

function contornoFeedback(props, feedbackId, funcionarioId) {
    return (
        <View style={styles.backTitle}>
            <Text style={styles.titleHistorico}>Feedbacks</Text>
            {svgAddFeedback(props, feedbackId, funcionarioId)}

        </View>
    );
}
function contornoHistorico(props, idFunc) {
    return (
        <View style={styles.backTitle}>
            <Text style={styles.titleHistorico}>Historico</Text>
            {svgAddCargo(props, idFunc)}
        </View>

    );
}
function exibeHistorico(props, item, historicoId, idFunc) {
    return (
        <TouchableOpacity
                style={styles.input}
                onPress={() => props.navigation.navigate('Cargo', { historicoId: historicoId, funcId: idFunc })}>
                <Svg style={styles.iconFeedback} width="24" height="24" >
                    <Path d="M21.784,15.353l-5.84-5.1a.878.878,0,0,1,0-1.363,
                                1.228,1.228,0,0,1,1.562,0l6.617,5.784A.878.878,0,0,1,24.155,
                                16l-6.644,5.824a1.225,1.225,0,0,1-1.562,0,.878.878,0,0,1,0-1.363Z"
                        fill="#132d46" />
                </Svg>
                <Text style={styles.textFeedback}>{item.cargos}</Text>
            </TouchableOpacity>
    );
}

function exibeFeedback(props, item, idFeedback, idFunc) {
    return (
            <TouchableOpacity
                style={styles.inputFeedback}
                onPress={() => props.navigation.navigate('Feedbacks', { feedbackId: idFeedback, funcId: idFunc })}>
                <Svg style={styles.iconFeedback} width="24" height="24" >
                    <Path d="M21.784,15.353l-5.84-5.1a.878.878,0,0,1,0-1.363,
                                1.228,1.228,0,0,1,1.562,0l6.617,5.784A.878.878,0,0,1,24.155,
                                16l-6.644,5.824a1.225,1.225,0,0,1-1.562,0,.878.878,0,0,1,0-1.363Z"
                        fill="#132d46" />
                </Svg>
                <Text style={styles.textFeedback}>Feedback {item.data}</Text>
            </TouchableOpacity>
        
    );
}
const DadosProfissionais = (props) => {

    const funcId = props.navigation.getParam('funcId');

    const [funcionario, setFuncionario] = useState([]);
    const [feedback, setFeedback] = useState([]);
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
        fetch(`${API_URL}/feedbacks/colaborador/${funcId}`, { method: 'GET' })
            .then((response) => response.json())
            .then((responseJson) => {
                setFeedback(responseJson);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []); 

    useEffect(() => {
        fetch(`${API_URL}/historicos/colaborador/${funcId}`, { method: 'GET' })
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
            <Header navigation={props.navigation} func={funcionario} />
            <View style={styles.container}>
                <View style={styles.borderHistorico}>
                    {contornoHistorico(props, funcionario.id)}

                    {historico == [] ? 
                        <Text style={styles.textFeedback}>Ainda não foi cadastrado nenhum cargo</Text>
                        :
                        <FlatList
                        data={historico}
                        keyExtractor={item => item.id}
                        renderItem={({ item }) => 
                        exibeHistorico(props, item, item.id, funcionario.id)}
                        showsVerticalScrollIndicator={false} />
                    }
                </View>

                <View style={styles.borderFeedback}>
  
                    {contornoFeedback(props, feedback.id, funcionario.id)}

                    {feedback == [] ? 
                        <Text style={styles.textFeedback}>Ainda não foi cadastrado nenhum feedback</Text>
                        :
                        <FlatList
                        data={feedback}
                        keyExtractor={item => item.id}
                        renderItem={({ item }) => 
                        exibeFeedback(props, item, item.id, funcionario.id)}
                        showsVerticalScrollIndicator={false} />
                    }
                    
                </View>
                <Footer navigation={props.navigation} func={funcionario} />
            </View>
        </View>

    );
}
export default DadosProfissionais;