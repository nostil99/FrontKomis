import React, { useEffect, useState } from 'react'
import Button from 'components/Button'
import PropTypes from 'prop-types'
import { Platform, ScrollView, SliderComponent, StyleSheet, View } from "react-native";
import { colors } from "theme"
import axios from "axios";
import { List, TextInput, Text, Searchbar } from 'react-native-paper';

const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.lightGrayPurple,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
})

const CarList = ({ route, navigation }) => {
  const [car, setCar] = useState([]);
  const [filter, setFilter] = useState('');

  const carApiHost = "http://10.0.2.2:8080/api/Car"
  const axios = require('axios');
  useEffect(() => {
    getCar()
  }, [])

  const clearString = (value) => {
    return value.replace(/\s/g, '').toLowerCase();
  }

  const checkName = (value) => {
    return clearString(value.model).indexOf(clearString(filter)) >= 0
  }

  const onChangeSearch = query => setFilter(query);

  const filterData = () => {

    return [...new Set(car.filter(checkName))];
  }
  const getCar = () => {
    axios.get(carApiHost).then((response) => {
      setCar(response.data);
      //console.log(response.data);

    }).catch(error => {
      console.log(error)
    })
  }

  const goDetails = (item) => {
    console.log(item)
    console.log("item")
  }
  return (
    <>
      <Searchbar placeholder="wyszukaj"
                 OnChangeText={onChangeSearch}
                 value={filter}
      />
        <ScrollView>
          <List.Section title="lista aut">
            {
              filterData().map((item, index) =>
              <List.Item style = {
                {
                  borderWidth: 1,
                  width: "80%",
                  marginHorizontal: "10%",
                  marginBottom: 15,
                  borderRadius: 15,
                  backgroundColor: "#1100fa51",
                  textAlign:"center",

                }
              }
            onPress={()=>{
              navigation.navigate('CarDetails', {item})

            }



            }
            key = {index}
            title={item.manufacturer + " " + item.model}

            />)}
          </List.Section>

        </ScrollView>
    </>
  )
}


CarList.propTypes = {
  route: PropTypes.shape({
    params: PropTypes.shape({ from: PropTypes.string }),
  }),
  navigation: PropTypes.shape({
    goBack: PropTypes.func,
  }),
}

CarList.defaultProps = {
  route: { params: { from: '' } },
  navigation: { goBack: () => null },
}

export default CarList
