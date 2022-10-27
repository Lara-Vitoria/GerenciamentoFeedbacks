import React, { useState } from "react";
import { Modal, Pressable, View, Text, TouchableOpacity } from "react-native";
import { TextInput } from "react-native-gesture-handler";

import styles from './styles';
import Logo from '../../components/Logo';

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

const Login = (props) => {

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const [isError, setIsError] = useState(false);
    const [message, setMessage] = useState('');
    const [modalVisible, setModalVisible] = useState(false);

    const onLogin = () => {
        const dados = {
            usuario: {
                senha: senha,
                email: email,
            }
        };

        fetch(`${API_URL}/usuarios/login`, {
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
                    setMessage('Erro ao realizar ao logar');
                    setModalVisible(true)
                } else {
                    props.navigation.navigate('ListaFuncinarios');
                }
                
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
        <View style={styles.container}>
            <Logo />

            <View style={styles.inputGroup}>
                {retornaInput("Email", setEmail)}
                {retornaInput("Senha", setSenha)}
            </View>

            {retornaModal()}

            <TouchableOpacity
                onPress={onLogin}
                style={styles.btn}>
                <Text style={styles.textBtn}>Entrar</Text>
            </TouchableOpacity>

            <View style={styles.textGroup}>
                <Text style={styles.text}>Não possui uma conta?</Text>
                <TouchableOpacity
                    onPress={() => props.navigation.navigate('Cadastro')}
                >
                    <Text style={styles.textCadastro}>Se cadastre aqui!</Text>
                </TouchableOpacity>
            </View>

        </View>

    );
}

export default Login;