import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios'

export default function VisualizarAvaliaces(){
    const [review, setReview] = useState([])

    useEffect(() => {
        axios.get('http://192.168.100.10:8080/review/reviewList?email=avrovedder@inf.ufsm.br')
        .then(function (response) {
            // handle success
            console.log(response.data);
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .then(function () {
            // always executed
        });

    }, [])

    return(
        <View> 
            <Text>VisualizarAvaliaces</Text>
        </View>
    );
}