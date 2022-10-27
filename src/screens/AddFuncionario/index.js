import React, { useState, useEffect } from "react";
import { TouchableOpacity, View, Text, TextInput, Pressable, Modal } from "react-native";

import styles from './styles';

const API_URL = 'http://192.168.0.103:3000';
function retornaBorda() {
    return (
        <View style={styles.backTitle}>
            <Text style={styles.title}>Novo Colaborador</Text>
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
function infoFuncionario(placeholder, change) {
    return (
        <View>
            <TextInput
                style={styles.input}
                placeholder={placeholder}
                onChangeText={change} />
        </View>
    );
}

const AddFuncionario = (props) => {

    const [nome, setNome] = useState('');
    const [telefone, setTelefone] = useState('');
    const [endereco, setEndereco] = useState('');
    const [email, setEmail] = useState('');
    const [nascimento, setNascimento] = useState('');
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

    const dados = {
        colaborador: {
            nome: nome,
            telefone: telefone,
            endereco: endereco,
            email: email,
            nascimento: nascimento
        }
    };

    const onAdicionar = () => {
        fetch(`${API_URL}/colaboradores/`,
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
                        setMessage('Erro ao cadastrar colaborador!');
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
        <View style={styles.backContainer}>
            <View style={styles.container}>
                <View style={styles.border}>
                    {retornaBorda()}

                    <View >

                        {infoFuncionario("Nome", setNome)}
                        {infoFuncionario("Telefone", setTelefone)}
                        {infoFuncionario("Endereço", setEndereco)}
                        {infoFuncionario("Email", setEmail)}
                        {infoFuncionario("Data de Nascimeto", setNascimento)}

                        {retornaModal()}
                    </View>
                </View>

                {btn(props, onAdicionar)}
            </View>

        </View>

    );
}

export default AddFuncionario;
