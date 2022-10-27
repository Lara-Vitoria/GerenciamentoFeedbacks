import React, { Component, useState, useEffect } from "react";
import { Modal, View, Text, TextInput, TouchableOpacity, Pressable } from "react-native";
import Svg, { Path } from 'react-native-svg';

import styles from './styles';
import Header from '../../components/Header';

const API_URL = 'http://192.168.0.103:3000';
function contornoCargo() {
    return (
        <View style={styles.backTitle}>
            <Text style={styles.titleCargo}>Cargo</Text>

        </View>
    );
}
function inputCargo(placeholder, change) {
    return (
        <View style={styles.btnGroup}>
            <TextInput
                style={styles.input}
                placeholder={placeholder}
                onChangeText={change} />
            <Svg style={styles.icon}
                xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24">
                <Path d="M13.628,4.371l6,6L6.6,23.4l-5.35.591A1.125,1.125,0,0,1,.006,22.751L.6,
                17.4Zm9.712-.893L20.522.66a2.251,2.251,0,0,0-3.183,0L14.688,3.311l6,6L23.34,
                6.661A2.251,2.251,0,0,0,23.34,3.478Z" transform="translate(0.001 -0.001)"
                    fill="#132d46" />
            </Svg>

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

const AddCargo = (props) => {
    const funcId = props.navigation.getParam('funcId');

    const [funcionario, setFuncionario] = useState('');
    const [novoCargo, setNovoCargo] = useState('');
    const [dataInicial, setDataInicial] = useState('');
    const [dataFinal, setDataFinal] = useState('');

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
        historico: {
            colaboradorId: funcId,
            cargos: novoCargo,
            dataInicio: dataInicial,
            dataFim: dataFinal
        }
    };

    const onAdicionar = () => {
        fetch(`${API_URL}/historicos/`,
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
                        setMessage('Erro ao cadastrar cargo!');
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
            <Header navigation={props.navigation} func={funcionario}/>
            <View style={styles.container}>
                <View style={styles.borderHistorico}>

                    {contornoCargo()}
                    {inputCargo("Novo Cargo", setNovoCargo)}
                    {inputCargo("Data inicial", setDataInicial)}
                    {inputCargo("Data final", setDataFinal)}
                    
                    {retornaModal()}
                </View>


                {btn(props, onAdicionar)}
            </View>
        </View>

    );
}

export default AddCargo;