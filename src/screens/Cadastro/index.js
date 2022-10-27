import React, { Component, useState } from "react";
import { Modal, Pressable, View, Text, TextInput, TouchableOpacity } from "react-native";
import Svg, { Path } from 'react-native-svg';

import styles from './styles';
import Logo from "../../components/Logo";

const API_URL = 'http://192.168.0.103:3000';
function retornaInput(placeholder, change) {
    return (
        <View>
            <TextInput
                style={styles.input}
                placeholder={placeholder}
                onChangeText={change} />

        </View>
    );
}

const Cadastro = (props) => {
    const [email, setEmail] = useState('');
    const [usuario, setUsuario] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmaSenha, setConfirmaSenha] = useState('');

    const [isError, setIsError] = useState(false);
    const [message, setMessage] = useState('');
    const [modalVisible, setModalVisible] = useState(false);

    const onCadastro = () => {
        const dados = {
            usuario: {
                email: email,
                senha: senha,
            }
        };

        if (senha !== confirmaSenha) {
            setIsError(true);
            setMessage('Senhas diferentes!');
            setModalVisible(true)
            return;
        }

        fetch(`${API_URL}/usuarios/cadastro`, {
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
                    setMessage('Erro ao realizar o cadastro');
                } else {
                    setIsError(false);
                    setMessage('Cadastro realizado com sucesso!');
                }
                setModalVisible(true)
            } catch (err) {
                setModalVisible(true)
                console.log(err);
            };
        }).catch(err => { console.log(err) });
    };

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
                        onPress={() => setModalVisible(!modalVisible)}
                    >
                        <Text style={styles.btnText}>Fechar</Text>
                    </Pressable>
                </View>
            </Modal>
        );
    }

    return (
        <View>

            <Logo />
            <View style={styles.container}>
                <View style={styles.borderCadastro}>
                    <View style={styles.backTitle}>
                        <Text style={styles.title}>Cadastro</Text>
                    </View>

                    <View style={styles.inputGroup}>

                        {retornaInput("Usuário", setUsuario)}
                        {retornaInput("Email", setEmail)}
                        {retornaInput("Senha", setSenha)}
                        {retornaInput("Confirma senha", setConfirmaSenha)}

                    </View >

                    {retornaModal()}

                    <View style={styles.btnGroup}>

                        <TouchableOpacity
                            onPress={onCadastro}
                            style={styles.btnCadastro}>
                            <Text style={styles.textBtn}>Se cadastrar!</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() => props.navigation.navigate('Login')}
                            style={styles.btnCancelar}>
                            <Text style={styles.textBtn}>Cancelar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>

    );
}

export default Cadastro;