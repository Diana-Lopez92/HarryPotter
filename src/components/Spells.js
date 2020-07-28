import React, { useState } from 'react';
import {View, Text, Button, TextInput, ScrollView } from 'react-native';
import {getSpell} from '../services/Service';


export default Spells = (props) => {

  const [spell, setSpell] = useState('')
  const [spellInfo, setspellInfo] = useState([])
  const [name, setName] = useState('')

  const spellSearch = () => { 
    console.log('Spell: ', spell);
    getSpell(spell)
    .then(response => (setspellInfo(response), console.log('Response Recibida: ', response)))
    .catch(err => (console.log(err), setMessage('Spell not found'))); // Error

    console.log('Lista: ',  spellInfo);
    spellInfo.forEach(item => console.log('Name: ', item.name)) 
    spellInfo.forEach(item => console.log('Name del State: ', item.name))
    console.log('Longitud: ', spellInfo.length)
    
    if(spellInfo.length>0){
        spellInfo.forEach(item => setName(item.spell))
        console.log('Valor de Name: ', name)
        console.log(spellInfo.forEach(element => element.spell))
    }

  }

  const capitalizeText = (text) => {
    return text.charAt(0).toUpperCase() + text.slice(1);
  }
  
  

  return(
    <View >        
        
        <View style={{marginTop:30}}>
            <Button onPress={() => spellSearch()} title="Show Spells"></Button>  
        </View>

        <View>
            <ScrollView>
                {
                    spellInfo.length >= 1 ? 

                    spellInfo.map((element) => {
                        return(
                            <View style={styles.resultContainer2}>
                                <Text style={styles.resultText} key={element._id}>Spell: {element.spell}</Text>
                                <Text style={styles.resultText} key={element._id}>Effect: {capitalizeText(element.effect)}</Text>
                                <Text style={styles.resultText} key={element._id}>Type: {element.type}</Text>
                                
                            </View>
                        )
                    })
                    
                    :
                    <View style={styles.resultContainer2}>
                        <Text style={styles.resultText}>Loading ...</Text>
                    </View> 
                }

            </ScrollView>

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
    resultContainer2: {
        marginTop: 20,        
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
