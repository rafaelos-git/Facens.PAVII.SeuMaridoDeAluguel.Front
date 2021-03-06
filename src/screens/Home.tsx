import React, { useState, useEffect } from 'react'
import { StyleSheet, Image, View, Text, TextInput, TouchableOpacity, Keyboard, SafeAreaView } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'
import MapView, {Marker, Callout} from 'react-native-maps';
import { requestForegroundPermissionsAsync, getCurrentPositionAsync } from 'expo-location'
import { useNavigation, useRoute } from '@react-navigation/native';

import workersCadastred from '../utils/workers'

export function Home (){
    const navigation = useNavigation()
    const route = useRoute()
    const [workers, setWorkers] = useState([])
    const [currentRegion, setCurrentRegion] = useState(null); // Sem região inicial
    const [skills, setSkills] = useState('');

    useEffect(() => {
        async function loadInitialPosition() {
            const { status } = await requestForegroundPermissionsAsync();
      
            if (status === 'granted') {
                const { coords } = await getCurrentPositionAsync({});
        
                const { latitude, longitude } = coords;
        
                setCurrentRegion({
                    //@ts-ignore
                    latitude,
                    longitude,
                    // Cálculos navais, zoom
                    latitudeDelta: 0.01, 
                    longitudeDelta: 0.01,
                })
            }
      
        }
        loadInitialPosition()
    }, [])

    useEffect(() => {
        loadWorkers()
    }, [])

    function loadWorkers(){
        var searchedSkillsWorker: any = []

        workersCadastred.map((item, index) => {
            if (item.skills.includes(skills)) {
                searchedSkillsWorker.push(item)
            }
        })

        // if (!route.params) {
        //     workersCadastred.map((item, index) => {
        //         if (item.skills.includes(skills)) {
        //             searchedSkillsWorker.push(item)
        //         }
        //     })
        // } else {
        //     workersCadastred.map((item, index) => {
        //         //@ts-ignore
        //         if (item.id != route.params.worker.id) {
        //             if (item.skills.includes(skills)) {
        //                 searchedSkillsWorker.push(item)
        //             }
        //         }
        //         //@ts-ignore
        //         if ((route.params.worker.skills).includes(skills)) {
        //             //@ts-ignore
        //             searchedSkillsWorker.push(route.params.worker)
        //         }
        //     })
        // }

    
        Keyboard.dismiss()
    
        setWorkers(searchedSkillsWorker as never)
        //setupWebsocket();
    }
    
    function handleRegionChanged(region: any) {
        // console.log(region)
        setCurrentRegion(region);
    
    }
    
    if(!currentRegion) {
        // Só vai exibir o mapa, quando carregar a informação da localização do usuário
        return null;
    }
    
    return(
        <SafeAreaView style={styles.container}>
            <MapView onRegionChangeComplete={handleRegionChanged} initialRegion={currentRegion} style={styles.map}>
                {workers.map(worker => (
                    <Marker 
                        //@ts-ignore
                        key={worker.id}
                        coordinate={{
                            //@ts-ignore
                            longitude: worker.location.coordinates[0],
                            //@ts-ignore
                            latitude:worker.location.coordinates[1]
                        }}>
                        <Image
                            style={styles.avatar}
                            //@ts-ignore
                            source={worker.avatar_url}
                        />
                        
                        <Callout style={styles.callout} onPress={() => {
                            // Navegação
                            //@ts-ignore
                            navigation.navigate('Profile' as never, {worker: worker} )
                            
                        }}>
                            <View style={styles.callout}>
                            {/* @ts-ignore */}
                            <Text style={styles.devName}>{worker.name}</Text>
                            {/* @ts-ignore */}
                            <Text style={styles.devBio}>{worker.bio}</Text>
                            {/* @ts-ignore */}
                            <Text style={styles.workerSkills}>{worker.skills}</Text>
                            </View>
                        </Callout>
                    </Marker>
                ))}
            </MapView>

                    <View style={styles.searchForm}>
                        <TextInput 
                            style={styles.searchInput}
                            placeholder="Busca por especialidade..."
                            placeholderTextColor="#999"
                            autoCapitalize="words"
                            autoCorrect={false}
                            value={skills}
                            onChangeText={setSkills}
                        />

                        <TouchableOpacity onPress={loadWorkers} style={styles.loadButton}>
                            <MaterialIcons name={'my-location'} size={20} color="#FFF"/>
                        </TouchableOpacity>
                    </View>
            </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    map:{
        //marginTop: 30,
        flex: 1
    },
    avatar: {
        width:54,
        height:54,
        borderRadius:50,
        borderWidth:2,
        borderColor:'#fff',
    },
    callout:{
        width:260,
    },
    devName: {
        fontWeight:'bold',
        fontSize:16,
    },
    devBio:{
        color:'#666',
        marginTop:5,
    },
    workerSkills:{
        marginTop:5,
        fontWeight:'bold',
    },
    searchForm: {
        position:"absolute",
        top:50,
        left:20,
        right:20,
        zIndex:5, // Força o botão a ficar por cima do mapa
        flexDirection:'row',
    },
    searchInput:{
        flex:1,
        height:50,
        backgroundColor:'#fff',
        color: '#333',
        borderRadius:25,
        paddingHorizontal:20,
        fontSize:16,
        elevation: 3,
    },
    loadButton: {
        width:50,
        height:50,
        backgroundColor:'#2678d8',
        borderRadius:25,
        justifyContent:"center",
        alignItems:"center",
        marginLeft:15,
        elevation:3,
    }
})