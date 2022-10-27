import React, { useState, useEffect } from "react";
import { View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, Pressable, Modal } from "react-native";
import Svg, { Path } from 'react-native-svg';

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import styles from './styles';
import Header from '../../components/Header'

const API_URL = 'http://192.168.0.103:3000';
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
function retornaDado(dado, change) {
    return (
        <View>
            <TextInput
                style={styles.input}
                placeholder={dado}
                onChangeText={change}
            />
            <Svg style={styles.icon} width="16" height="16" viewBox="0 0 24 24">
                <Path d="M13.628,4.371l6,6L6.6,23.4l-5.35.591A1.125,1.125,
                      0,0,1,.006,22.751L.6,17.4Zm9.712-.893L20.522.66a2.251,2.251,
                      0,0,0-3.183,0L14.688,3.311l6,6L23.34,6.661A2.251,2.251,0,0,
                      0,23.34,3.478Z" transform="translate(0.001 -0.001)"
                    fill="#132d46" />
            </Svg>
        </View>
    );
}

const Usuario = (props) => {

    const funcId = props.navigation.getParam('funcId');

    const [funcionario, setFuncionario] = useState([]);
    const [nome, setNome] = useState('');
    const [telefone, setTelefone] = useState('');
    const [endereco, setEndereco] = useState('');
    const [nascimento, setNascimento] = useState('');
    const [email, setEmail] = useState('');

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
        colaborador: {
            id: funcId,
            nome: nome,
            telefone: telefone,
            endereco: endereco,
            nascimento: nascimento,
            email: email
        }
    };

    const onAtualizar = () => {

        fetch(`${API_URL}/colaboradores/${funcId}`,
            {
                method: 'PUT',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(dados)
            }).then(res => {
                try {
                    if (res.status !== 200) {
                        setIsError(true);
                        setMessage('Erro ao atualizar os dados!');
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

            <View style={styles.container} >
                <View style={styles.borderDadosPessoais}>

                    <KeyboardAvoidingView behavior="padding"  >
                        <View behavior="padding" style={styles.backTitle}>
                            <Text style={styles.title}>Dados Pessoais</Text>
                        </View>

                        <KeyboardAwareScrollView
                            resetScrollToCoords={{ x: 0, y: 0 }}
                            scrollEnabled={true}
                        >
                            {retornaDado(funcionario.nome, setNome)}
                            {retornaDado(funcionario.setTelefone)}
                            {retornaDado(funcionario.endereco, setEndereco)}
                            {retornaDado(funcionario.nascimento, setNascimento)}
                            {retornaDado(funcionario.email, setEmail)}

                        </KeyboardAwareScrollView>
                    </KeyboardAvoidingView>
                </View>
                {retornaModal()}
                {btn(props, onAtualizar)}
            </View>

        </View>

    );
}

export default Usuario;
