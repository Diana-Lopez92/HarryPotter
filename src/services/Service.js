import axios from 'axios'

async function getCharacter(character){

    const key = '$2a$10$W5mgS99VkD5WNSWNCMZB4Ors8KPCcFrdMyb/9OJxMnRZVDL2BUtVq';
    //const name = 'Hermione Granger';
    console.log('Info recibida: ', character);
    try{
        //const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
        const response = await axios.get(`https://www.potterapi.com/v1/characters?key=${key}\&name=${character}`)
        return response.data
    } catch (err) {
        throw err;
    }
}

async function getSpell(spell){

    const key = '$2a$10$W5mgS99VkD5WNSWNCMZB4Ors8KPCcFrdMyb/9OJxMnRZVDL2BUtVq';
    //const name = 'Hermione Granger';
    console.log('Info recibida: ', spell);
    try{
        //const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
        const response = await axios.get(`https://www.potterapi.com/v1/spells?key=${key}\&spell=${spell}`)
        return response.data
    } catch (err) {
        throw err;
    }
}

module.exports = {
    getCharacter,
    getSpell
}