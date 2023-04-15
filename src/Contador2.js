import React, {useState} from 'react'
import { Text, Button } from 'react-native'

export default comp => {

    const [numero, setNumero] = useState(comp.inicial)

    const inc = () => setNumero(numero * 2)
    const dec = () => setNumero(numero / 2)
    return ( 
        <>
            <Text>{numero}</Text>
            <Button title=" *2 " onPress={inc}/>
            <Button title=" /2 " onPress={dec}/>
        </>
    )
}