import React, { useState, useEffect } from 'react';
import { View, Text, SafeAreaView, FlatList, StyleSheet, Button } from 'react-native';
import axios from 'axios'

export default function VisualizarAvaliaces({ navigation }){

    return(
        <SafeAreaView style={styles.container}> 
            
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      marginHorizontal: 8,
    },

    item: {
        backgroundColor: '#E0E0E0',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 10,
    },
    text: {
        fontWeight: "bold"
    },
    botao: {
        marginHorizontal: 20
    }

  });