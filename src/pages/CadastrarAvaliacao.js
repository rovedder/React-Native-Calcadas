import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import ChatBot from 'react-native-chatbot';

export default function CadastrarAvaliacao(){
    return(
        <SafeAreaView>
            <ChatBot steps={steps} />
        </SafeAreaView>
    );
}

 
const steps = [
    {
        id:'0',
        message:'Olá, seja bem-vindo a avaliação de calçadas de Santa maria! Informe o CEP:',
        trigger:'1'
      },
      {
        id:'1',
        user:true,
        trigger:'4'
      },
      {
        id:'4',
        message:'A calçada está pavimentada?',
        trigger:'5'
      },
      {
        id: '5',
        options: [
          { value: 1, label: 'SIM, TOTALMENTE', trigger: '9' },
          { value: 2, label: 'SIM, NA MAIOR PARTE', trigger: '9' },
          { value: 3, label: 'SIM, NA MENOR PARTE', trigger: '9' },
          { value: 4, label: 'NÃO', trigger: '13' },
          { value: 5, label: 'NÃO TENHO CERTEZA', trigger: '13' },
        ], 
       },
       {
         id:'9',
         message:'O pavimento da calçada é regular e firme, sem buracos?',
         trigger: '10'
       },
       {
        id: '10',
        options: [
          { value: 1, label: 'SIM, TOTALMENTE', trigger: '11' },
          { value: 2, label: 'SIM, NA MAIOR PARTE', trigger: '11' },
          { value: 3, label: 'SIM, NA MENOR PARTE', trigger: '11' },
          { value: 4, label: 'NÃO', trigger: '11' },
          { value: 5, label: 'NÃO TENHO CERTEZA', trigger: '11' },
        ], 
       },
       {
        id:'11',
        message:'O pavimento da calçada é antiderrapante?',
        trigger: '12'
      },
      {
        id: '12',
        options: [
          { value: 1, label: 'SIM, TOTALMENTE', trigger: '13' },
          { value: 2, label: 'SIM, NA MAIOR PARTE', trigger: '13' },
          { value: 3, label: 'SIM, NA MENOR PARTE', trigger: '13' },
          { value: 4, label: 'NÃO', trigger: '13' },
          { value: 5, label: 'NÃO TENHO CERTEZA', trigger: '13' },
        ], 
       },
    {
        id: '13',
        message: 'Há degraus ou desníveis na calçada?',
        trigger: '14',
    },
    {
        id: '14',
        options: [
          { value: 1, label: 'SIM, TOTALMENTE', trigger: '15' },
          { value: 2, label: 'SIM, NA MAIOR PARTE', trigger: '15' },
          { value: 3, label: 'SIM, NA MENOR PARTE', trigger: '15' },
          { value: 4, label: 'NÃO', trigger: '21' },
          { value: 5, label: 'NÃO TENHO CERTEZA', trigger: '21' },
        ], 
       },
       {
        id: '15',
        message: 'Quando há degraus ou desníveis eles são no máximo 0,5cm?',
        trigger: '16',
    },
    {
        id: '16',
        options: [
          { value: 1, label: 'SIM, TOTALMENTE', trigger: '17' },
          { value: 2, label: 'SIM, NA MAIOR PARTE', trigger: '17' },
          { value: 3, label: 'SIM, NA MENOR PARTE', trigger: '17' },
          { value: 4, label: 'NÃO', trigger: '19' },
          { value: 5, label: 'NÃO TENHO CERTEZA', trigger: '19' },
        ], 
       },
       {
        id: '17',
        message: 'Quando há degraus ou desníveis, eles são entre 0,5cm e 2cm?',
        trigger: '18',
    },
    {
        id: '18',
        options: [
          { value: 1, label: 'SIM, TOTALMENTE', trigger: '19' },
          { value: 2, label: 'SIM, NA MAIOR PARTE', trigger: '19' },
          { value: 3, label: 'SIM, NA MENOR PARTE', trigger: '19' },
          { value: 4, label: 'NÃO', trigger: '21' },
          { value: 5, label: 'NÃO TENHO CERTEZA', trigger: '21' },
        ], 
       },
       {
        id: '19',
        message: 'Quando há degraus ou desníveise de 0,5cm a 2cm, há uma rampa com até 50% de inclinação?',
        trigger: '20',
    },
    {
        id: '20',
        options: [
          { value: 1, label: 'SIM, TOTALMENTE', trigger: '21' },
          { value: 2, label: 'SIM, NA MAIOR PARTE', trigger: '21' },
          { value: 3, label: 'SIM, NA MENOR PARTE', trigger: '21' },
          { value: 4, label: 'NÃO', trigger: '21' },
          { value: 5, label: 'NÃO TENHO CERTEZA', trigger: '21' },
        ], 
       },
       {
        id: '21',
        message: 'A calçada possui inclinações transversais?',
        trigger: '22',
    },
    {
        id: '22',
        options: [
          { value: 1, label: 'SIM, TOTALMENTE', trigger: '23' },
          { value: 2, label: 'SIM, NA MAIOR PARTE', trigger: '23' },
          { value: 3, label: 'SIM, NA MENOR PARTE', trigger: '23' },
          { value: 4, label: 'NÃO', trigger: '25' },
          { value: 5, label: 'NÃO TENHO CERTEZA', trigger: '25' },
        ], 
       },
       {
        id: '23',
        message: 'As inclinações transversais são de no máximo 3%?',
        trigger: '24',
    },
    {
        id: '24',
        options: [
          { value: 1, label: 'SIM, TOTALMENTE', trigger: '25' },
          { value: 2, label: 'SIM, NA MAIOR PARTE', trigger: '25' },
          { value: 3, label: 'SIM, NA MENOR PARTE', trigger: '25' },
          { value: 4, label: 'NÃO', trigger: '25' },
          { value: 5, label: 'NÃO TENHO CERTEZA', trigger: '25' },
        ], 
       },
       {
        id: '25',
        message: 'A calçada acompanha a inclinação longitudinal da via?',
        trigger: '26',
    },
    {
        id: '26',
        options: [
          { value: 1, label: 'SIM, TOTALMENTE', trigger: '27' },
          { value: 2, label: 'SIM, NA MAIOR PARTE', trigger: '27' },
          { value: 3, label: 'SIM, NA MENOR PARTE', trigger: '27' },
          { value: 4, label: 'NÃO', trigger: '27' },
          { value: 5, label: 'NÃO TENHO CERTEZA', trigger: '27' },
        ], 
       },
       {
        id: '27',
        message: 'A calçada possui faixa livre para circulação de pedestres com largura mínima de 1,20m?',
        trigger: '28',
    },
    {
        id: '28',
        options: [
          { value: 1, label: 'SIM, TOTALMENTE', trigger: '29' },
          { value: 2, label: 'SIM, NA MAIOR PARTE', trigger: '29' },
          { value: 3, label: 'SIM, NA MENOR PARTE', trigger: '29' },
          { value: 4, label: 'NÃO', trigger: '29' },
          { value: 5, label: 'NÃO TENHO CERTEZA', trigger: '29' },
        ], 
       },
       
       {
        id: '29',
        message: 'Há obstáculos verticais, tais como placas, beirais, ramos de árvores?',
        trigger: '30',
    },

    {
        id: '30',
        options: [
          { value: 1, label: 'SIM, TOTALMENTE', trigger: '31' },
          { value: 2, label: 'SIM, NA MAIOR PARTE', trigger: '31' },
          { value: 3, label: 'SIM, NA MENOR PARTE', trigger: '31' },
          { value: 4, label: 'NÃO', trigger: '33' },
          { value: 5, label: 'NÃO TENHO CERTEZA', trigger: '33' },
        ], 
       },

       {
        id: '31',
        message: 'A altura livre de obstáculos da calçada é de no mínimo 2,10m?',
        trigger: '32',
    },

    {
        id: '32',
        options: [
          { value: 1, label: 'SIM, TOTALMENTE', trigger: '33' },
          { value: 2, label: 'SIM, NA MAIOR PARTE', trigger: '33' },
          { value: 3, label: 'SIM, NA MENOR PARTE', trigger: '33' },
          { value: 4, label: 'NÃO', trigger: '33' },
          { value: 5, label: 'NÃO TENHO CERTEZA', trigger: '33' },
        ], 
       },

       {
        id: '33',
        message: 'Há mobiliário urbano(canteiros, bancos, lixeiras, etc) na calçada?',
        trigger: '34',
    },

    {
        id: '34',
        options: [
          { value: 1, label: 'SIM, TOTALMENTE', trigger: '35' },
          { value: 2, label: 'SIM, NA MAIOR PARTE', trigger: '35' },
          { value: 3, label: 'SIM, NA MENOR PARTE', trigger: '35' },
          { value: 4, label: 'NÃO', trigger: '37' },
          { value: 5, label: 'NÃO TENHO CERTEZA', trigger: '37' },
        ], 
       },

       {
        id: '35',
        message: 'O mobiliário urbano encontra-se na faixa de serviço, fora da faixa livre de circulação de pedestres?',
        trigger: '36',
    },
    {
        id: '36',
        options: [
          { value: 1, label: 'SIM, TOTALMENTE', trigger: '37' },
          { value: 2, label: 'SIM, NA MAIOR PARTE', trigger: '37' },
          { value: 3, label: 'SIM, NA MENOR PARTE', trigger: '37' },
          { value: 4, label: 'NÃO', trigger: '37' },
          { value: 5, label: 'NÃO TENHO CERTEZA', trigger: '37' },
        ], 
       },

       {
        id: '37',
        message: 'Há árvores e vegetação na calçada?',
        trigger: '38',
    },
    {
        id: '38',
        options: [
          { value: 1, label: 'SIM, TOTALMENTE', trigger: '39' },
          { value: 2, label: 'SIM, NA MAIOR PARTE', trigger: '39' },
          { value: 3, label: 'SIM, NA MENOR PARTE', trigger: '39' },
          { value: 4, label: 'NÃO', trigger: '39' },
          { value: 5, label: 'NÃO TENHO CERTEZA', trigger: '39' },
        ], 
       },

       {
        id: '39',
        message: 'As árvores e vegetação encontram-se na faixa de serviço, fora da faixa livre de circulação de pedestres?',
        trigger: '40',
    },
    {
        id: '40',
        options: [
          { value: 1, label: 'SIM, TOTALMENTE', trigger: '41' },
          { value: 2, label: 'SIM, NA MAIOR PARTE', trigger: '41' },
          { value: 3, label: 'SIM, NA MENOR PARTE', trigger: '41' },
          { value: 4, label: 'NÃO', trigger: '41' },
          { value: 5, label: 'NÃO TENHO CERTEZA', trigger: '41' },
        ], 
       },

       {
        id: '41',
        message: 'As raízes, espinhos e outros elementos das árvores e vegetação encontram-se fora da faixa livre de circulação e das áreas de circulação de pedestres adjacentes?',
        trigger: '42',
    },

    {
        id: '42',
        options: [
          { value: 1, label: 'SIM, TOTALMENTE', trigger: '43' },
          { value: 2, label: 'SIM, NA MAIOR PARTE', trigger: '43' },
          { value: 3, label: 'SIM, NA MENOR PARTE', trigger: '43' },
          { value: 4, label: 'NÃO', trigger: '43' },
          { value: 5, label: 'NÃO TENHO CERTEZA', trigger: '43' },
        ], 
       },

       {
        id: '43',
        message: 'Há pontos de embarque e desembarque de transporte público na calçada?',
        trigger: '44',
    },
    {
        id: '44',
        options: [
          { value: 1, label: 'SIM, TOTALMENTE', trigger: '45' },
          { value: 2, label: 'SIM, NA MAIOR PARTE', trigger: '45' },
          { value: 3, label: 'SIM, NA MENOR PARTE', trigger: '45' },
          { value: 4, label: 'NÃO', trigger: '47' },
          { value: 5, label: 'NÃO TENHO CERTEZA', trigger: '47' },
        ], 
       },

       {
        id: '45',
        message: 'Os pontos de embarque e desembarque de transporte público encontram-se fora da faixa livre de circulação de pedestres?',
        trigger: '46',
    },

    {
        id: '46',
        options: [
          { value: 1, label: 'SIM, TOTALMENTE', trigger: '47' },
          { value: 2, label: 'SIM, NA MAIOR PARTE', trigger: '47' },
          { value: 3, label: 'SIM, NA MENOR PARTE', trigger: '47' },
          { value: 4, label: 'NÃO', trigger: '47' },
          { value: 5, label: 'NÃO TENHO CERTEZA', trigger: '47' },
        ], 
       },

       {
        id: '47',
        message: 'Há acesso de veículos aos lotes ou à estacionamentos na calçada?',
        trigger: '48',
    },

    {
        id: '48',
        options: [
          { value: 1, label: 'SIM, TOTALMENTE', trigger: '49' },
          { value: 2, label: 'SIM, NA MAIOR PARTE', trigger: '49' },
          { value: 3, label: 'SIM, NA MENOR PARTE', trigger: '49' },
          { value: 4, label: 'NÃO', trigger: '55' },
          { value: 5, label: 'NÃO TENHO CERTEZA', trigger: '55' },
        ], 
       },

       {
        id: '49',
        message: 'Os desníveis ocasiacionados pelo acesso de veículos encontram-se fora da faixa livre de circulação de pedestres?',
        trigger: '50',
    },

    {
        id: '50',
        options: [
          { value: 1, label: 'SIM, TOTALMENTE', trigger: '51' },
          { value: 2, label: 'SIM, NA MAIOR PARTE', trigger: '51' },
          { value: 3, label: 'SIM, NA MENOR PARTE', trigger: '51' },
          { value: 4, label: 'NÃO', trigger: '51' },
          { value: 5, label: 'NÃO TENHO CERTEZA', trigger: '51' },
        ], 
       },

       {
        id: '51',
        message: 'Há alarme, com sinalização sonora e visual, na saída de garagens e acesso de veículos?',
        trigger: '52',
    },

    {
        id: '52',
        options: [
          { value: 1, label: 'SIM, TOTALMENTE', trigger: '53' },
          { value: 2, label: 'SIM, NA MAIOR PARTE', trigger: '53' },
          { value: 3, label: 'SIM, NA MENOR PARTE', trigger: '53' },
          { value: 4, label: 'NÃO', trigger: '53' },
          { value: 5, label: 'NÃO TENHO CERTEZA', trigger: '53' },
        ], 
       },

       {
        id: '53',
        message: 'O portão de acesso a estacionamentos e garagem funciona sem interferir na faixa livre de circulação de pedestres?',
        trigger: '54',
    },

    {
        id: '54',
        options: [
          { value: 1, label: 'SIM, TOTALMENTE', trigger: '55' },
          { value: 2, label: 'SIM, NA MAIOR PARTE', trigger: '55' },
          { value: 3, label: 'SIM, NA MENOR PARTE', trigger: '55' },
          { value: 4, label: 'NÃO', trigger: '55' },
          { value: 5, label: 'NÃO TENHO CERTEZA', trigger: '55' },
        ], 
       },

       {
        id: '55',
        message: 'Há obras existentes sobre o passeio?',
        trigger: '56',
    },

    {
        id: '56',
        options: [
          { value: 1, label: 'SIM, TOTALMENTE', trigger: '57' },
          { value: 2, label: 'SIM, NA MAIOR PARTE', trigger: '57' },
          { value: 3, label: 'SIM, NA MENOR PARTE', trigger: '57' },
          { value: 4, label: 'NÃO', trigger: '59' },
          { value: 5, label: 'NÃO TENHO CERTEZA', trigger: '59' },
        ], 
       },

       {
        id: '57',
        message: 'Mesmo com as obras sobre o passeio, há garantia de faixa livre de 1,20m de circulação?',
        trigger: '58',
    },
    {
        id: '58',
        options: [
          { value: 1, label: 'SIM, TOTALMENTE', trigger: '59' },
          { value: 2, label: 'SIM, NA MAIOR PARTE', trigger: '59' },
          { value: 3, label: 'SIM, NA MENOR PARTE', trigger: '59' },
          { value: 4, label: 'NÃO', trigger: '59' },
          { value: 5, label: 'NÃO TENHO CERTEZA', trigger: '59' },
        ], 
       },

       {
        id: '59',
        message: 'Há sinalização tátil direcional na calçada?',
        trigger: '60',
    },

    {
        id: '60',
        options: [
          { value: 1, label: 'SIM, TOTALMENTE', trigger: '61' },
          { value: 2, label: 'SIM, NA MAIOR PARTE', trigger: '61' },
          { value: 3, label: 'SIM, NA MENOR PARTE', trigger: '61' },
          { value: 4, label: 'NÃO', trigger: '63' },
          { value: 5, label: 'NÃO TENHO CERTEZA', trigger: '63' },
        ], 
       },

       {
        id: '61',
        message: 'A sinalização tátil direcional é antiderrapante, com relevo e contrastante?',
        trigger: '62',
    },
    {
        id: '62',
        options: [
          { value: 1, label: 'SIM, TOTALMENTE', trigger: '63' },
          { value: 2, label: 'SIM, NA MAIOR PARTE', trigger: '63' },
          { value: 3, label: 'SIM, NA MENOR PARTE', trigger: '63' },
          { value: 4, label: 'NÃO', trigger: '63' },
          { value: 5, label: 'NÃO TENHO CERTEZA', trigger: '63' },
        ], 
       },

       {
        id: '63',
        message: 'Há sinalização tátil de alerta na calçada em mudanças de direção, opções ou interferências de percuso?',
        trigger: '64',
    },
    {
        id: '64',
        options: [
          { value: 1, label: 'SIM, TOTALMENTE', trigger: '65' },
          { value: 2, label: 'SIM, NA MAIOR PARTE', trigger: '65' },
          { value: 3, label: 'SIM, NA MENOR PARTE', trigger: '65' },
          { value: 4, label: 'NÃO', trigger: '67' },
          { value: 5, label: 'NÃO TENHO CERTEZA', trigger: '67' },
        ], 
       },

       {
        id: '65',
        message: 'A sinalização tátil de alerta é antiderrapante, com relevo cor contrastante?',
        trigger: '66',
    },

    {
        id: '66',
        options: [
          { value: 1, label: 'SIM, TOTALMENTE', trigger: '67' },
          { value: 2, label: 'SIM, NA MAIOR PARTE', trigger: '67' },
          { value: 3, label: 'SIM, NA MENOR PARTE', trigger: '67' },
          { value: 4, label: 'NÃO', trigger: '67' },
          { value: 5, label: 'NÃO TENHO CERTEZA', trigger: '67' },
        ], 
       },
       

       {
        id:'67',
        message: 'Obrigado pela avaliação!',
        end:true
      }

];
 

