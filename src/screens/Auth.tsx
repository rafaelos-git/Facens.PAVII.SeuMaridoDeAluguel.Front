import React, { useState } from 'react'
import { 
    SafeAreaView, 
    Text, 
    TouchableOpacity, 
    StyleSheet, 
    View, 
    KeyboardAvoidingView, 
    Platform, 
    TextInput, 
    Alert,
    ImageBackground,
    Image
} from 'react-native'

import AsyncStorage from '@react-native-async-storage/async-storage'
import { useNavigation } from '@react-navigation/core'
import { AntDesign, Ionicons } from '@expo/vector-icons'
import axios from 'axios'

import colors from '../styles/colors'
// import fonts from '../styles/fonts'
import api from '../services/api';

import loginImage from '../assets/login.png'
import { Home } from './Home'
import fonts from '../styles/fonts'

export function Auth() {
    const navigation = useNavigation()
    const [isFocusedEmail, setIsFocusedEmail] = useState(false)
    const [isFocusedPassword, setIsFocusedPassword] = useState(false)
    const [isFilledEmail, setIsFilledEmail] = useState(false)
    const [isFilledPassword, setIsFilledPassword] = useState(false)
    const [email, setEmail] = useState<string>()
    const [password, setPassword] = useState<string>()
    const [login, setLogin] = useState([])
    const [secure, setSecure] = useState(true)

    function handleInputBlur(name: string) {
        if (name === 'email'){
            setIsFocusedEmail(false)
            setIsFilledEmail(!!email)
        } else if (name === 'password') {
            setIsFocusedPassword(false)
            setIsFilledPassword(!!password)
        }
    }

    function handleInputFocus(name: string) {
        if(name === 'email')
            setIsFocusedEmail(true)
        else if (name === 'password')
            setIsFocusedPassword(true)
    }

    function handleInputChangeEmail(value: string) {
        setIsFilledEmail(!!value)
        setEmail(value) 
    }

    function handleInputChangePassword(value: string){
        setIsFilledPassword(!!value)
        setPassword(value)
    }

    async function signin() {
        try{
            const response = await api.post('/login', {
                email,
                password
            })

            let nivelAcesso = response.data.user.acess_level
    
            setLogin(response.data.user)
            console.log(nivelAcesso)

            AsyncStorage.setItem('loginInfo', JSON.stringify(nivelAcesso))
            
            axios.defaults.headers.common['Authorization'] = response.data.token

            navigation.navigate('Home' as never)
        } catch(err){
            Alert.alert('Ops! Ocorreu um Problema!', 'Usuário ou senha incorretos!')
        }
    }

    const validations = []
    validations.push(email && email.includes('@'))
    validations.push(password && password.length >= 5)

    const validForm = validations.reduce((t, a) => t && a)

    return(
        //<ImageBackground source={loginImage} style={styles.background} imageStyle={{ opacity: 0.8 }}>
            <SafeAreaView style={styles.container}>
                <KeyboardAvoidingView style={styles.wrapper} behavior={Platform.OS == 'ios' ? 'padding' : 'height'} enabled>
                    <View style={styles.form}>
                        <Image source={loginImage} style={styles.image}/>
                        <TextInput 
                            style={[
                                styles.input,
                                (isFocusedEmail || isFilledEmail) && { borderColor: colors.blue_custom }
                            ]} 
                            placeholder='Email'
                            placeholderTextColor={'#9e9a9a'}
                            onBlur={() => handleInputBlur('email')}
                            onFocus={() => handleInputFocus('email')}
                            onChangeText={handleInputChangeEmail}
                            secureTextEntry={false}
                        />
                        <View style={styles.bar}>
                            <TextInput 
                                style={[
                                    styles.input,
                                    (isFocusedPassword || isFilledPassword) && { borderColor: colors.blue_custom }
                                ]} 
                                placeholder='Password'
                                placeholderTextColor={'#9e9a9a'}
                                onBlur={() => handleInputBlur('password')}
                                onFocus={() => handleInputFocus('password')}
                                onChangeText={handleInputChangePassword}
                                secureTextEntry={secure}
                            />
                            <TouchableOpacity
                                onPress={() => setSecure(!secure)}
                            >
                                { secure &&
                                    <Ionicons name="eye" size={24} color="black" style={{marginTop: 50}}/>
                                }
                                { !secure &&
                                    <Ionicons name="eye-off" size={24} color="black" style={{marginTop: 50}}/>
                                }
                                
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity 
                            style={[styles.button, validForm ? {} : { backgroundColor: '#AAA' }]} 
                            activeOpacity={0.7} 
                            onPress={signin}
                            disabled={!validForm}
                        >
                            <Text style={styles.buttonText}>
                                <Text>
                                    Enter{'\t\t'}
                                </Text>
                                <AntDesign style={styles.buttonText} name='arrowright'/>
                            </Text>
                        </TouchableOpacity>
                    </View>
                </KeyboardAvoidingView>
            </SafeAreaView>
        //</ImageBackground>
    )
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        width: '100%',
    },
    container: {
        flex: 1,
        // borderWidth: 1,
    },
    title: {
        fontFamily: fonts.heading,
        fontSize: 38,
        fontWeight: 'bold',
        color: colors.blue_custom,
    },
    bar: {
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    button: {
        marginTop: 50,
        backgroundColor: colors.blue_custom,
        justifyContent: 'center',
        borderRadius: 16,
        alignItems: 'center',
        height: 70,
        width: 150,
    },
    buttonText: {
        fontFamily:fonts.text,
        color: colors.white,
        fontSize: 24,
    },
    wrapper: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 20,
        borderWidth: 1,
    },
    input: {
        borderBottomWidth: 1,
        borderColor: '#9e9a9a',
        color: '#000',
        width: '100%',
        fontSize: 18,
        marginTop: 50,
        padding: 10,
    },
    form: { 
        backgroundColor: 'transparent', 
        width: '100%',
        height: '65%',
        borderRadius: 20,  
        padding: 20, 
        alignItems: 'center',
        // borderWidth: 1
    },
    forgotButton: {
        marginTop: 20,
        justifyContent: 'center',
        borderRadius: 5,
        padding: 5,
    },
    forgotText: {
        fontFamily:fonts.text,
        color: '#9e9a9a',
        fontSize: 18
    },
    image: {
        marginTop: 40,
        width: 100,
        height: 100,
    },
})

