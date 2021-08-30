import React, { useState, useEffect } from 'react';
import { View, Text, SafeAreaView, FlatList, StyleSheet, Button } from 'react-native';
import axios from 'axios'

export default function VisualizarAvaliaces({ navigation }){
    const [review, setReview] = useState([])

    useEffect(() => {
        const requestListReview = () => {
            axios.get('http://192.168.100.11:8080/review/reviewList?email=avrovedder@inf.ufsm.br')
            .then(function (response) {
                const data = response.data

                const listReview = []

                data.map((element) => {
                    listReview.push(element)
                })

                setReview(listReview)
            })
            .catch(function (error) {
                console.log(error);
            })
        }

        requestListReview()
    }, [])

    const Item = ({ item }) => (
        <View style={styles.item}>
            <Text style={styles.text}>Rua: {item.address.street}</Text>
            <Text style={styles.text}>Cidade: {item.address.city}</Text>
            <Text style={styles.text}>CEP: {item.address.postalCode}</Text>
            <Button
                style={styles.botao}
                title="Exportar" 
                onPress={ () => navigation.navigate('ExportarAvaliacao', { item })}
            />
        </View>
    );

    const renderItem = ({ item }) => (
        <Item item={item} />
    );

    return(
        <SafeAreaView style={styles.container}> 
            <FlatList
                data={review}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
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