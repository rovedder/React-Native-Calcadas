import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';

export default function CadastrarAvaliacao(){
    return(
        <SafeAreaView>
        <View> 
            <Text>
                CPF:
            </Text>
        </View>
           <View> 
           <Text>
               Email:
           </Text>
       </View>
        </SafeAreaView>
    );
}