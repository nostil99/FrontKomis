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

const ContractDetails = ({ route, navigation }) => {
  const storeData = async (value) => {
    try {
      const jsonValue = JSON.stringify(value)
      await AsyncStorage.setItem('storage_Key', jsonValue)
      console.log("pobranie async")
      console.log(value)
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
           KlientID: {value.idClient}
          </Text>
          <Text style={styles.title}>
            idEmployee: {value.idEmployee}
          </Text>
          <Text style={styles.title}>
            idCar: {value.idCar}
          </Text>
          <Text style={styles.title}>
            creationDate: {value.creationDate}
          </Text>
          <Text style={styles.title}>
            amount: {value.amount} zl
          </Text>
          <Button style={{
            backgroundColor:"rgba(0,238,230,0.83)",
            width: "70%",
            marginTop:20,
            marginHorizontal: "15%"
          }}
                  color={"rgb(0,0,0)"}
          onPress={()=>{

          }}>zmodyfikuj </Button>
        </ScrollView>
    </SafeAreaView>


  )
}


ContractDetails.propTypes = {
  route: PropTypes.shape({
    params: PropTypes.shape({ from: PropTypes.string }),
  }),
  navigation: PropTypes.shape({
    goBack: PropTypes.func,
  }),
}

ContractDetails.defaultProps = {
  route: { params: { from: '' } },
  navigation: { goBack: () => null },
}

export default ContractDetails
