import { useState } from "react";
import { Text, TextInput, TouchableOpacity, View, StyleSheet, KeyboardTypeOptions} from "react-native";

type Props = {
    type?: "text" | "email" | "password" | "number";
    placeholder?: string;
    value?: string;
    onChange: (text:string)=> void;
}

export default function CustomInput ({type, placeholder="", value="", onChange}:Props){

    const keyboardType: KeyboardTypeOptions = 
        type === "email"? 'email-address' :
            type === "number" ? 'phone-pad':
                'default';

    return (
        <View style={styles.wrapper}>
        <View style={styles.inputContainer}>
            <TextInput
                placeholder={placeholder}
                value={value}
                onChangeText={onChange}
                style={styles.input}
                keyboardType={keyboardType}
            />

        </View>
        </View>
    );
}

const styles = StyleSheet.create({
    wrapper:{
        marginBottom:10
    },
    inputContainer:{
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 15,
        borderColor:'#000',
        borderWidth: 1,
        borderRadius:9,
        backgroundColor:'#f0f0f0',
        marginTop: 10
    },
    input:{
        width: '80%',
        paddingHorizontal: 10,
        paddingVertical: 10,
    }
});