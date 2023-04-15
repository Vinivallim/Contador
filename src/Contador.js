import React, {useState} from 'react'
import { Text, Button } from 'react-native'

export default comp => {

    const [numero, setNumero] = useState(comp.inicial)

    const inc = () => setNumero(numero + 25)
    const dec = () => setNumero(numero - 25)
    return ( 
        <>
            <Text style={{ fontSize: 20 }}>{numero}</Text>
            <Button title=" + " onPress={inc}/>
            <Button title=" - " onPress={dec}/>
        </>
    )
}
