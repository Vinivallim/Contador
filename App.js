import React from 'react'
import { View, StyleSheet } from 'react-native'
import Contador from './src/Contador'
import Contador2 from './src/Contador2'

export default () => ( 
    <View style={style.App}> 
        <Contador inicial={500}/> 
        <Contador2 inicial={2}/>
    </View>
    
) 

const style = StyleSheet.create({
    App: { 
        backgroundColor: '#AC9', 
        flexGrow: 1, 
        justifyContent: "center", 
        alignItems: "center" 
    } 
})