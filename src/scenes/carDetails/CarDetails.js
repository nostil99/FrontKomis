import React, {useEffect, useState} from 'react'
import PropTypes from 'prop-types'
import {Platform, SafeAreaView, ScrollView, SliderComponent, StyleSheet, View} from "react-native";
import {List, TextInput, Text, Searchbar, Button} from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
const styles = StyleSheet.create({
  title: {
    fontSize: 22,
    marginLeft:"5%",
    marginBottom:8
  },
  input:{
    width:"70%",
    marginHorizontal:"12.5%",
    height:40,
    marginBottom:20,
  }
})

const CarDetails = ({ route, navigation }) => {
  const storeData = async (value) => {
    try {
      const jsonValue = JSON.stringify(value)
      await AsyncStorage.setItem('storage_Key', jsonValue)
      console.log("pobranie async")
    } catch (e)
    {
      // saving error
    }
  }

  useEffect(()=>{
    storeData(route?.params?.item)
  },[])
  const value = route?.params?.item

  return (

    <SafeAreaView style={styles.root}>
        <ScrollView>
          <View style={{marginBottom:30}}>

          </View>
          <Text style={styles.title}>
           Auto {value.manufacturer}  {value.model}
          </Text>
          <Text style={styles.title}>
           Vin {value.vin}
          </Text>
          <Text style={styles.title}>
           Rok {value.year}
          </Text>
          <Text style={styles.title}>
            dostepnosc {value.reserved = true? "dostepne" : "niedostepne"}
          </Text>
          <Text style={styles.title}>
            status Kradziezy: {value.stolen = true? "nie kradzione" : "kradzione"}
          </Text>
          <Text style={styles.title}>
            Uszkodzenia: {value.carIsDamaged = true? "nie" : "tak"}
          </Text>
          <Button style={{
            backgroundColor:"#aa002292",
            width: "70%",
            marginTop:20,
            marginHorizontal: "15%"
          }}
          onPress={()=>{
            navigation.navigate('CarModify')
          }}>zmodyfikuj </Button>
        </ScrollView>
    </SafeAreaView>


  )
}


CarDetails.propTypes = {
  route: PropTypes.shape({
    params: PropTypes.shape({ from: PropTypes.string }),
  }),
  navigation: PropTypes.shape({
    goBack: PropTypes.func,
  }),
}

CarDetails.defaultProps = {
  route: { params: { from: '' } },
  navigation: { goBack: () => null },
}

export default CarDetails
