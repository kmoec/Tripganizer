import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Button, Text, TextInput } from 'react-native-paper'

interface Props {
  navigation: any
}

const PasswordRecovery = ({ navigation }: Props) => {
  return (
      <View style={styles.mainContainer}>
        <View style={styles.contentContainer}>
          <Text style={styles.title}>
              Recover your password
          </Text>
          <TextInput
              style={ styles.fieldStyle_1 }
              label='Email Address'
              mode='outlined'
          />
          <Button icon="account-plus" mode="contained" style={styles.buttonStyle}>
            Reset Password
          </Button>
          <Button icon="arrow-left-circle" mode="contained"
              style={styles.backButtonStyle}
              onPress={() => navigation.navigate('Launch')}>
            Back
          </Button>
        </View>
      </View>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#5C8FA4'
  },
  contentContainer: {
    width: '100%',
    height: '100%',
    paddingTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#5C8FA4'
  },
  title: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontFamily: 'Khmer Sangam MN', // not supported on android
    fontSize: 25,
    lineHeight: 84,
    fontWeight: 'bold'
  },
  fieldStyle_1: {
    width: 260,
    marginTop: 15
  },
  buttonStyle: {
    width: 200,
    marginTop: 50
  },
  backButtonStyle: {
    width: 200,
    marginTop: 25
  }
})

export default PasswordRecovery
