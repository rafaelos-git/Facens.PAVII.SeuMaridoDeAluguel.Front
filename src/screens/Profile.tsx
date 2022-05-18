import { useNavigation, useRoute } from '@react-navigation/native';
import React from 'react';
import { Image, View, StyleSheet, Text, SafeAreaView, ScrollView, TouchableOpacity, Platform } from 'react-native';

import { BackButton } from '../components/BackButton'

import colors from '../styles/colors';
import fonts from '../styles/fonts';

export function Profile() {
  const navigation = useNavigation()
  const route = useRoute()

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.backBar}>
        <BackButton back='Home' color='preto'/>
      </View>
      <View style={styles.perfilContainer}>
        <View style={styles.nameBar}>
          <View style={styles.namePosition}>
            {/* @ts-ignore */}
            <Text style={styles.name}>{route.params.worker.name}</Text>
          </View>
        </View>
        <View style={styles.infoBar}>
          {/* @ts-ignore */}
          <Image style={styles.avatar} source={route.params.worker.avatar_url}/>
          {/* @ts-ignore */}
          <Text style={styles.skill}>{route.params.worker.skills}</Text>
          {/* @ts-ignore */}
          <Text style={styles.description}>{route.params.worker.bio}</Text>
        </View>
      </View>
      <View style={styles.body}>
        <View style={styles.experiences}>
          {/* @ts-ignore */}
          <Image style={styles.imgExperiences} source={route.params.worker.pictures[0]}/>
          {/* @ts-ignore */}
          <Image style={styles.imgExperiences} source={route.params.worker.pictures[1]}/>
        </View>
        <View style={styles.experiences}>
          {/* @ts-ignore */}
          <Image style={styles.imgExperiences} source={route.params.worker.pictures[2]}/>
          {/* @ts-ignore */}
          <Image style={styles.imgExperiences} source={route.params.worker.pictures[3]}/>
        </View>
        <View style={styles.serviceBar}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Solicitar Serviço</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  perfilContainer: {
    flex: 1,
    // borderWidth: 1,
  },
  body: {
    flex: 1,
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
    // borderWidth: 1,
  },
  imgExperiences: {
    width: "50%",
    height:"100%",
    borderWidth:2,
    borderColor:'#ffffff',
  },
  button: {
    backgroundColor: '#000',
    justifyContent: 'center',
    borderRadius: 16,
    alignItems: 'center',
    height: '55%',
    width: '80%',
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
    // borderWidth: 1,
  },
  backBar: {
    marginTop: 40,
    marginLeft: 20,
    flex: 0.1,
    // borderWidth: 1,
  },
  back: {
  },
  namePosition: {
    flex: 0.8,
  },
  infoBar: {
    flex: 4,
    alignItems: 'center',
    justifyContent: 'center'
  }
});