import { StyleSheet, Text, TextInput, View } from 'react-native';
import { useState } from 'react';

const Input = ({ label, isSecureEntry = false , error = " " , onChange }) => {

    const [input, setInput] = useState('');

    const onHandleCHangeText = (text) => {
        setInput(text)
        onChange(text)
    }

    return (
        <View style={styles.inputContainer}>
            <Text style={styles.label}>{label}</Text>
            <TextInput
                style={styles.textInput}
                onChangeText={onHandleCHangeText}
                secureTextEntry={isSecureEntry}
                value={input}
            />
            {error && <Text style={styles.error}>{error}</Text>}
        </View>
    )
}

export default Input;

const styles = StyleSheet.create({
    inputContainer:{
    },
    label:{
        fontSize:20,
        paddingVertical:20
    },
    textInput:{
        fontSize:20,
        padding:10,
        backgroundColor: 'white',
        borderRadius:30,
        width:'auto',
        height:'auto',
        borderColor: 'black',
        borderWidth: 0.3,
    }
})
