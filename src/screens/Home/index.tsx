import React, {useState} from 'react'
import { Alert, FlatList, Text, TextInput, TouchableOpacity, View } from "react-native"
import {styles} from "./styles"
import { Participant } from "../../components/Participant"

export function Home(){

  const [participants, setPartipants] = useState(['André Luís']);

  function handleParticipantAdd(){
    if(participants.includes('André')){
      return Alert.alert('Participante existe','Já existe um participante na lista com esse nome.')
    }

    setPartipants(prevState => [ ...prevState,'Ana']);
  }

  function handleParticipantRemove(name:string){
    Alert.alert('Remover', `Remover o participante ${name}?`,[
      {
        text: 'Sim',
        onPress: () => Alert.alert('Deletado!')
      },
      {
        text: 'Não',
        style: 'cancel'
      }
    ])
  }

  return(
    <View style={styles.container}>
      <Text style={styles.eventName}>
          Nome do evento
      </Text>

      <Text
        style={styles.eventDate}
      >
        Sexta, 4 de novembro de 2022.
      </Text>
      <View style={styles.form}>
        <TextInput 
        style={styles.input}
        placeholder="Nome do participante"
        placeholderTextColor="#6B6B6B"
        />

        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>
              +
          </Text>
        </TouchableOpacity>
      </View>

      <FlatList 
        keyExtractor={item=> item}
        data={participants}
        renderItem={({item}) => ( 
          <Participant 
            key={item}
            name={item} 
            onRemove={() => handleParticipantRemove(item)}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={()=>(
          <Text style={styles.listEmptyText}>
            Ninguém chegou no evento ainda? Adicione participantes a sua lista de presença
          </Text>
        )}
      />
      
    </View>
    
  )
}