import React from "react";
import { StyleSheet, View, Text } from "react-native";
import Svg, { Path } from 'react-native-svg';

import styles from './styles';

export default function Logo() {
    return (
        <View style={styles.container}>
            <Svg style={styles.logo} width="88" height="80">
                <Path d="M65.926,80.033a15.017,15.017,0,0,1-15-15v-9h-12v9a15,
                15,0,1,1-15-15h9v-12h-9a15,15,0,1,1,15-15v9h12v-9a15,15,0,1,1,
                15,15h-9v12h9a15,15,0,1,1,0,30Zm-9-24v9a9,9,0,1,0,9-9Zm-33,0a9,9,
                0,1,0,9,9v-9Zm15-6h12v-12h-12Zm18-18h9a9,9,0,1,0-9-9Zm-33-18a9,9,0,
                1,0,0,18h9v-9a9.01,9.01,0,0,0-9-9Z" 
                fill="#132d46" />
            </Svg>

            <Text style={styles.title}>Gerenciamento de feedbacks</Text>
        </View>
            
    );
}
