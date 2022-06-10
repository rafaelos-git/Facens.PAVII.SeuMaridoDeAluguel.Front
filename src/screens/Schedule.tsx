import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { Image, View, StyleSheet, Text, SafeAreaView, ScrollView, TouchableOpacity, Platform, Modal, TouchableWithoutFeedback, Alert } from 'react-native';

import { BackButton } from '../components/BackButton'

import colors from '../styles/colors';
import fonts from '../styles/fonts';

export function Schedule(){
    const navigation = useNavigation()
    const route = useRoute()
    const [schedule, setSchedule] = useState([])
    const [showFilterModal, setShowFilterModal] = useState(false)
    const [selectedSchedule, setSelectedSchedule] = useState('')

    const showFilter = (selectedTime: string) => {
        setSelectedSchedule(selectedTime)
        setShowFilterModal(!showFilterModal)
    }

    const onCancel = () => {
        setShowFilterModal(!showFilterModal)
    }

    const onConfirm = () => {
        console.log('to aqui')
        //@ts-ignore
        route.params.worker.horarios.map((item, index) => {
            if (item == selectedSchedule) {
                //@ts-ignore
                route.params.worker.horarios.splice(index, 1)
            }
        })

        Alert.alert('Sucesso!', 'Agendamento realizado com sucesso!')
        //@ts-ignore
        navigation.navigate('Home' as never, {horarios: route.params.worker.horarios})
    }

    return(
        <SafeAreaView style={styles.container}>
            <Modal transparent={true} visible={showFilterModal} animationType='slide' onRequestClose={onCancel}>
                <TouchableWithoutFeedback onPress={onCancel}>
                    <View style={styles.filterModalBackground}>

                    </View>
                </TouchableWithoutFeedback>
                <View style={styles.filterModalContainer}>
                    <View style={styles.filterModalTitleBar}>
                        <Text style={styles.filterModalTitle}>
                            Deseja confirmar seu agendamento para às {selectedSchedule}?
                        </Text>
                    </View>
                    <View style={styles.filterModalButtonBar}>
                        <TouchableOpacity style={styles.filterModalButton} onPress={onCancel}>
                            <Text style={styles.filterModalButtonText}>
                                Cancelar
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.filterModalButton} onPress={onConfirm}>
                            <Text style={styles.filterModalButtonText}>
                                Confirmar
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <TouchableWithoutFeedback onPress={onCancel}>
                    <View style={styles.filterModalBackground}>

                    </View>
                </TouchableWithoutFeedback>
            </Modal>
            <View style={styles.backBar}>
                {/* @ts-ignore */}
                <BackButton back='Profile' params={route.params.worker} color='preto'/>
            </View>
            <View style={styles.perfilContainer}>
                <View style={styles.nameBar}>
                    <View style={styles.namePosition}>
                        <Text style={styles.name}>Horários Disponíveis</Text>
                    </View>
                </View>
            </View>
            <View style={styles.body}>
                {
                    //@ts-ignore
                    route.params.worker.horarios.map((item, index) => {
                        return(
                            <TouchableOpacity 
                                //@ts-ignore
                                key={index}
                                style={styles.button}
                                onPress={()  => showFilter(item)}
                            >
                                <Text style={styles.buttonText}>{item}</Text>
                            </TouchableOpacity>
                        )
                    })
                }
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    perfilContainer: {
      flex: 0.2,
    },
    body: {
      flex: 1.8,
      alignItems: 'center',
      justifyContent: 'center',
    },
    serviceBar: {
      flex: 0.7,
      alignItems: 'center',
      justifyContent: 'center',
    },
    avatar: {
      width:160,
      height:160,
      borderRadius:100,
      borderWidth:2,
      borderColor:'#ffffff',
    },
    name: {
      fontSize: 24,
      fontFamily: fonts.perfilName,
      textAlign: 'center',
    },
    skill: {
      fontSize: 16,
      fontFamily: fonts.perfilName,
      marginTop: 10,
    },
    description: {
      margin: 10,
      fontSize: 12,
      fontFamily: fonts.perfilText,
      marginTop: 20,
      textAlign: 'center'
    },
    experiences: {
      flex: 1,
      flexDirection: 'row',
    },
    imgExperiences: {
      width: "50%",
      height:"100%",
      borderWidth:2,
      borderColor:'#ffffff',
    },
    button: {
        width: '90%',
        height: '10%',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10,
        borderWidth: 1,
        backgroundColor: '#000',
    },
    buttonText: {
      fontFamily: fonts.perfilName,
      fontSize: 16,
      color: colors.white,
    },
    nameBar: {
      flex: 1.2,
      alignItems: 'center',
      justifyContent: 'center',
    },
    backBar: {
      marginTop: 40,
      marginLeft: 20,
      flex: 0.1,
    },
    back: {
    },
    namePosition: {
      flex: 0.8,
    },
    infoBar: {
      flex: 1,
    },
    filterModalBackground: {
        flex: 1,
        backgroundColor: "rgba(0,0,0,0.7)",
    },
    filterModalContainer: {
        flex: 1.5,
        backgroundColor: colors.white,
    },
    filterModalTitleBar: {
        flex: 1.5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    filterModalButtonBar: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'row',
    },
    filterModalTitle: {
        color: '#000',
        fontSize: 27,
        fontFamily: fonts.perfilText,
        textAlign: 'center',
    },
    filterModalButton: {
        flex: 1,
        alignItems: 'center',
    },
    filterModalButtonText: {
        color: colors.body_dark,
        fontFamily: fonts.perfilText,
        fontSize: 20,
    },
});