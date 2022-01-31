import React, {useEffect, useState} from 'react'
import PropTypes from 'prop-types'
import {Platform, SafeAreaView, ScrollView, SliderComponent, StyleSheet, View} from "react-native";

import axios from "axios";
import {List, TextInput, Text, Searchbar, Button} from 'react-native-paper';

const styles = StyleSheet.create({
  title: {
    fontSize: 14,
    marginBottom: 20,
    textAlign:"center"
  },
  input:{
    width:"70%",
    marginHorizontal:"12.5%",
    marginBottom:20,
  }
})

const AddCar = ({ route, navigation }) => {


  const [marka, setMarka] = React.useState("");
  const [model, setModel] = React.useState("");
  const [VIN, setVIN] = React.useState("");
  const [Year, setYear] = React.useState("");
  const [disable,setDistable] = useState(false)

  const carApiHost = "http://10.0.2.2:8080/api/Car"
  const axios = require('axios');

  const addCar = () => {
    if(marka && model && VIN && Year){
    setDistable(true)
    alert("dodano auto")
    axios.post(carApiHost,{

      carDamage:[],
      carIsDamaged:false,
      manufacturer:marka.toString(),
      model:model.toString(),
      reserved:false,
      stolen:false,
      vin:VIN.toString(),
      year:Year.toString(),
    }).then((response ) => {
      setDistable(false)
    }).catch(error =>{
      setDistable(false)
      console.log(error)
    })
      }
    else{
      alert("nie wszystkie pola sa wypelnione")
    }
  }

  return (

    <SafeAreaView style={styles.root}>
        <ScrollView>
          <View style={{margin:20}}>
          </View>
          <TextInput
            style={styles.input}
            label="Marka"
            value={marka}
            onChangeText={text => setMarka(text)}
          />

          <TextInput
            style={styles.input}
            label="Model"
            value={model}
            onChangeText={text => setModel(text)}
          />

          <TextInput
            style={styles.input}
            label="VIN"
            value={VIN}
            onChangeText={text => setVIN(text)}
          />

          <TextInput
            style={styles.input}
            label="Rok"
            value={Year}
            onChangeText={text => setYear(text)}
          />

          <Button
            disable={disable}

            onPress={addCar}
            style={{
              borderColor:"red",
              borderWidth:1,
              marginTop:20,

              width: "60%",
              marginHorizontal: "20%",
              borderRadius:15,
              backgroundColor:"#1122cc55"
            }}>dodaj auto</Button>
        </ScrollView>
    </SafeAreaView>


  )
}


AddCar.propTypes = {
  route: PropTypes.shape({
    params: PropTypes.shape({ from: PropTypes.string }),
  }),
  navigation: PropTypes.shape({
    goBack: PropTypes.func,
  }),
}

AddCar.defaultProps = {
  route: { params: { from: '' } },
  navigation: { goBack: () => null },
}

export default AddCar
