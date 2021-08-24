
import React from 'react';
import { View, Text, Button, StyleSheet, SafeAreaView, Image } from 'react-native';

export default function MenuPrincipal({ navigation }){
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.foto}>
            <Image
             style={styles.logo}
             source={require('../img/santa-maria.png')} />
            </View>
        <View style={styles.botao}>
            <Button
            title="Cadastrar Avaliação" 
            onPress={ () => navigation.navigate('CadastrarAvaliacao')}
            />
        </View>
        <View>
            <Button
            title="Visualizar Avaliações" 
            onPress={ () => navigation.navigate('VisualizarAvaliacoes')}
            />
        </View>
        </SafeAreaView>
        
    );
}



const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      marginHorizontal: 8,
    },

    botao: {
        marginBottom: 8
    },

    foto: {
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginBottom: 100
    },


  });