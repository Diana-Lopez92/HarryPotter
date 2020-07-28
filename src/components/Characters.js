import React, { useState } from 'react';
import {View, Text, Button, TextInput, Image, FlatList} from 'react-native';
import {getCharacter} from '../services/Service';


export default Characters = (props) => {

  const [character, setCharacter] = useState('')
  const [characterInfo, setCharacterInfo] = useState([])
  const [message, setMessage] = useState('Please enter the full name')

  const search = () => {
    if(!character){
        setMessage('Please enter the full name')
        return
    }
    else{ 
        console.log('Character: ', character);
        getCharacter(character)
        .then(response => (setCharacterInfo(response), console.log('Response Recibida: ', response)))
        .catch(err => (console.log(err), setMessage('Character not found'))); // Error

        console.log('Lista: ',  characterInfo);
        setCharacter('')
    } 
  }

  const capitalizeText = (text) => {
      return text.charAt(0).toUpperCase() + text.slice(1);
  }

  const capitalizeTextInput = (text) => {
      return text.split(' ').map( w =>  w.substring(0,1).toUpperCase() + w.substring(1)).join(' ')
  }
  
  

  return(
    <View >
        <TextInput placeholder={message} style={styles.input} onChangeText={value => setCharacter(capitalizeTextInput(value))} value={character}></TextInput>
        <Button onPress={() => search()} title="Search"></Button>  

        <View style={styles.resultContainer}>
            {
                characterInfo.length >= 1 ? 

                characterInfo.map(element => {
                    return(
                        <View>
                            <Text style={styles.resultText} key={element.id}>Name: {element.name}</Text>
                            <Text style={styles.resultText} key={element.id}>House: {element.house}</Text>
                            <Text style={styles.resultText} key={element.id}>Patronus: {element.patronus ? capitalizeTextInput(element.patronus) : ''}</Text>
                            <Text style={styles.resultText} key={element.id}>Specie: {element.species ? capitalizeTextInput(element.species) : ''}</Text>
                            <Text style={styles.resultText} key={element.id}>Blood Status: {element.bloodStatus ? capitalizeTextInput(element.bloodStatus) : ''}</Text>
                            <Text style={styles.resultText} key={element.id}>Role: {element.role ? capitalizeTextInput(element.role) : ''}</Text>
                            <Text style={styles.resultText} key={element.id}>School: {element.school}</Text>
                            <Text style={styles.resultText} key={element.id}>Dumbledore's Army: {element.dumbledoresArmy === true ? 'Yes':'No'}</Text>
                            <Text style={styles.resultText} key={element.id}>Order of the Phoenix: {element.orderOfThePhoenix === true ? 'Yes':'No'}</Text>
                            <Text style={styles.resultText} key={element.id}>Wand: {element.wand ? capitalizeTextInput(element.wand) : ''}</Text>
                        </View>
                    )
                })
                
                : 
                <Text style={styles.resultText}>Loading ...</Text>
            }

        </View>

    </View>

  )
}

const styles = {
    searchContainer: {

    },
    input: {
        marginTop: 30,
        color: 'black',
        fontWeight: 'bold',
        textAlign: 'center',
        backgroundColor: 'white',
        opacity: 0.8
    },
    resultContainer: {
        marginTop: 70,        
        backgroundColor: 'white',
        opacity: 0.8
    },
    resultText: {
        color: 'black',
        fontWeight: 'bold',
        marginHorizontal: 20,
        padding: 10
    }
}
