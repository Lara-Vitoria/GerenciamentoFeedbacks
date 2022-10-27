import React, {  useState, useEffect } from "react";
import {  View, Text } from "react-native";

import styles from './styles';
import Header from '../../components/Header'
import Footer from '../../components/Footer'

const API_URL = 'http://192.168.0.103:3000';
function retornaBorda(data) {
    return (
        <View style={styles.backTitle}>
            <Text style={styles.titleFeedback}>Feedback {data}</Text>


        </View>
    );
}
function pontosFeedback(dado) {
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
const Feedbacks = (props) => {

    const funcId = props.navigation.getParam('funcId');
    const feedbackId = props.navigation.getParam('feedbackId');

    const [funcionario, setFuncionario] = useState([]);
    const [feedback, setFeedback] = useState([]);

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
        fetch(`${API_URL}/feedbacks/${feedbackId}`, { method: 'GET' })
            .then((response) => response.json())
            .then((responseJson) => {
                setFeedback(responseJson);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);
    
    return (
        <View>
            <Header navigation={props.navigation} func={funcionario}/>

            <View style={styles.container}>
                <View style={styles.borderFeedback}>
                    {retornaBorda(feedback.data)}

                    <View style={styles.btnGroup}>

                        {pontosFeedback(feedback.pontosPositivos)}
                        {pontosFeedback(feedback.pontosNegativos)}
                        {pontosFeedback(feedback.acoesEsperadas)}
                        {pontosFeedback(feedback.metas)}

                    </View>
                </View>

                <Footer style={styles.footer} navigation={props.navigation} func={funcionario}/>
            </View>

        </View>

    );
}

export default Feedbacks;