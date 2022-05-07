import React from 'react';
import { Image,  StyleSheet, Text, SafeAreaView } from 'react-native';

export function Profile() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={{color: '#888', fontSize: 18}}> 
        To share a photo from your phone with a friend, just press the button below!
      </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});