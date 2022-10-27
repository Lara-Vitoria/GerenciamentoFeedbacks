import React, { Component, useState, useEffect } from "react";
import { TouchableOpacity, View, Text, TextInput, Pressable, Modal } from "react-native";
import Svg, { Path } from 'react-native-svg';

import styles from './styles';
import Header from '../../components/Header';

const API_URL = 'http://192.168.0.103:3000';
function retornaBorda() {
    return (
        <View style={styles.backTitle}>
            <Text style={styles.titleFeedback}>Feedback</Text>
        </View>
    );
}

function btn(props, funcao) {
    return (
        <View style={styles.btnGroupSC}>
            <TouchableOpacity
                style={styles.btnSalvar}
                onPress={funcao}
            >
                <Text style={styles.textSalvar}>Salvar</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.btnCancelar}
                onPress={() => props.navigation.pop()}
            >
                <Text style={styles.textCancelar}>Cancelar</Text>
            </TouchableOpacity>
        </View>
    );
}
function pontosFeedback(placeholder, change) {
    return (
        <View>
            <TextInput
                style={styles.input}
                placeholder={placeholder}
                onChangeText={change} />

            <Svg style={styles.icon} width="24" height="24">
                <Path d="M9.085,2.914l4,4L4.4,15.6.831,16A.75.75,0,0,1,
                0,15.168L.4,11.6Zm6.475-.6L13.681.44a1.5,1.5,0,0,0-2.122,
                0L9.792,2.207l4,4,1.767-1.767A1.5,1.5,0,0,0,15.559,2.319Z"
                    transform="translate(0.001 -0.001)" fill="#132d46" />
            </Svg>
        </View>
    );
}

const AddFeedback = (props) => {

    const funcId = props.navigation.getParam('funcId');
    
    const currentDate = new Date().toISOString().split('T')[0];
    const [funcionario, setFuncionario] = useState('');
    const [data] = useState(currentDate);

    const [pontosPositivos, setPontosPositivos] = useState('');
    const [pontosNegativos, setPontosNegativos] = useState('');
    const [acoesEsperadas, setAcoesEsperadas] = useState('');
    const [metas, setMetas] = useState('');

    const [isError, setIsError] = useState(false);
    const [message, setMessage] = useState('');
    const [modalVisible, setModalVisible] = useState(false);
    
    const getMessage = () => {
        const status = isError ? `Error: ` : `Success: `;
        return status + message;
    }

    function retornaModal() {
        return (
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => { setModalVisible(!modalVisible); }}
            >
                <View style={styles.modalView}>
                    <Text style={styles.mensagem}>{message ? getMessage() : null}</Text>

                    <Pressable
                        style={[styles.button, styles.buttonClose]}
                        onPress={() => {
                            setModalVisible(!modalVisible);
                            props.navigation.pop();
                        }}
                    >
                        <Text style={styles.btnText}>Fechar</Text>
                    </Pressable>
                </View>
            </Modal>
        );
    }

    useEffect(() => {
        fetch(`${API_URL}/colaboradores/${funcId}`, { method: 'GET' })
            .then((response) => response.json())
            .then((responseJson) => {
                setFuncionario(responseJson);
            })
            .catch((error) => {
                setIsError(true);
                setMessage('Erro ao retornar colaborador!');
                setModalVisible(true)
            });
    }, []);

    const dados = {
        feedback: {
            colaboradorId: funcId,
            data: data,
            pontosPositivos: pontosPositivos,
            pontosNegativos: pontosNegativos,
            acoesEsperadas: acoesEsperadas,
            metas: metas
        }
    };

    const onAdicionar = () => {
        fetch(`${API_URL}/feedbacks`,
            {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(dados)
            }).then(res => {
                try {
                    if (res.status !== 201) {
                        setIsError(true);
                        setMessage('Erro ao cadastrar feedback!');
                        setModalVisible(true)
                    } else {
                        setIsError(false);
                        setMessage('Salvo com sucesso!');
                        setModalVisible(true)
                    }

                } catch (err) {
                    console.log(err);
                };
            }).catch(err => { console.log(err) });

    }


    return (
        <View>
            <Header navigation={props.navigation} func={funcionario} />
            <View style={styles.container}>
                <View style={styles.borderFeedback}>
                    {retornaBorda()}

                    <View style={styles.btnGroup}>

                        {pontosFeedback("Pontos fortes", setPontosPositivos)}
                        {pontosFeedback("Pontos de Melhoria", setPontosNegativos)}
                        {pontosFeedback("Expectativas", setAcoesEsperadas)}
                        {pontosFeedback("Metas", setMetas)}

                        {retornaModal()}
                    </View>
                </View>

               {btn(props, onAdicionar)}
            </View>
        </View>

    );
}

export default AddFeedback;
