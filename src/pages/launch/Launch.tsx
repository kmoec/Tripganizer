import React from 'react'
import { StyleSheet, ImageBackground, View } from 'react-native'
import { Button, Text } from 'react-native-paper'

interface Props {
  navigation: any
}

const Launch = ({ navigation }: Props) => {
  return (
      <View style={styles.container}>
        <ImageBackground source={require('../../../assets/world.png')}
          style={styles.backgroundImage} imageStyle={{ opacity: 1 }} resizeMode="contain" >
            <Text style={styles.title}>
              Tripganizer
            </Text>
            <View style={ styles.buttonContainer }>
              <Button icon="login" mode="contained" style={ styles.signinButtonStyle }
                onPress={() => navigation.navigate('Signin')}>
                Sign-in
              </Button>
              <Button icon="account-plus" mode="contained" style={styles.registerButtonStyle}
                onPress={() => navigation.navigate('Registration')}>
                Create an account
              </Button>
            </View>
          </ImageBackground>
      </View>
  )
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1
  },
  container: {
    flex: 1,
    backgroundColor: '#5C8FA4'
  },
  title: {
    color: '#F9F871',
    textAlign: 'center',
    fontFamily: 'Khmer Sangam MN', // not supported on android
    fontSize: 42,
    lineHeight: 84,
    fontWeight: 'bold',
    marginTop: '25%'
  },
  registerButtonStyle: {
    alignSelf: 'center',
    width: 200
  },
  signinButtonStyle: {
    alignSelf: 'center',
    width: 200,
    marginBottom: '10%'
  },
  buttonContainer: {
    alignSelf: 'center',
    bottom: '12%',
    position: 'absolute'
  }
})

export default Launch
