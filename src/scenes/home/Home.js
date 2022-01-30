import React from 'react'
import PropTypes from 'prop-types'
import {
  StyleSheet, Text, View, StatusBar,
} from 'react-native'
import Button from 'components/Button'
import { colors } from 'theme'

const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.lightGrayPurple,
    marginTop:"-70%"
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  buttonStyle: {
    marginBottom:10,
    width:"70%",
  }
})

const Home = ({ navigation }) => (
  <View style={styles.root}>
    <StatusBar barStyle="light-content" />
    <Text style={styles.title}>Strona domowa</Text>
    <Button
      style={styles.buttonStyle}
      title="Lista aut"
      color="white"
      backgroundColor={colors.lightPurple}
      onPress={() => {
        navigation.navigate('CarList', { from: 'Home' })
      }}
    />
    <Button
      style={styles.buttonStyle}
      title="dodaj auto"
      color="white"
      backgroundColor={colors.lightPurple}
      onPress={() => {
        navigation.navigate('AddCar', { from: 'Home' })
      }}
    />
  </View>
)

Home.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }),
}

Home.defaultProps = {
  navigation: { navigate: () => null },
}

export default Home
