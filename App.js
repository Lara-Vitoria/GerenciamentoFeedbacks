import React from 'react';
import { View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';



import ListaFuncinarios from './src/screens/ListaFuncionarios';
import AddFuncionario from './src/screens/AddFuncionario';
import DadosPessoais from './src/screens/DadosPessoais';
import DadosProfissionais from './src/screens/DadosProfissionais';
import Feedbacks from './src/screens/Feedbacks';
import Cargo from './src/screens/Cargo';
import AddCargo from './src/screens/AddCargo';
import AddFeedback from './src/screens/AddFeedback';
import Usuario from './src/screens/Usuario';
import Login from './src/screens/Login';
import Cadastro from './src/screens/Cadastro';

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}


const AppNavigator = createStackNavigator({
  Login: {
    screen: Login,
    navigationOptions: {
      headerShown: false,
    }
  },
  Cadastro: {
    screen: Cadastro,
    navigationOptions: {
      headerShown: false,
    }
  },
  ListaFuncinarios: {
    screen: ListaFuncinarios,
    navigationOptions: {
      headerShown: false,
    }
  },
  AddFuncionario: {
    screen: AddFuncionario,
    navigationOptions: {
      headerShown: false,
    }
  },
  DadosPessoais: {
    screen: DadosPessoais,
    navigationOptions: {
      headerShown: false,
    }
  },
  DadosProfissionais: {
    screen: DadosProfissionais,
    navigationOptions: {
      headerShown: false,
    }
  },
  Feedbacks: {
    screen: Feedbacks,
    navigationOptions: {
      headerShown: false,
    }
  },
  Cargo: {
    screen: Cargo,
    navigationOptions: {
      headerShown: false,
    }
  },
  AddCargo: {
    screen: AddCargo,
    navigationOptions: {
      headerShown: false,
    }
  },
  AddFeedback: {
    screen: AddFeedback,
    navigationOptions: {
      headerShown: false,
    }
  },
  Usuario: {
    screen: Usuario,
    navigationOptions: {
      headerShown: false,
    }
  },
});

const AppContainer = createAppContainer(AppNavigator);