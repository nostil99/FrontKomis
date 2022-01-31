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

const ContractsList = ({ route, navigation }) => {
  const [document, setDocument] = useState([]);
  const [filter, setFilter] = useState('');

  const carApiHost = "http://10.0.2.2:8080/api/SaleAndPurchaseContract"
  const axios = require('axios');
  useEffect(() => {
    getDocumnet()
  }, [])

  const clearString = (value) => {
    return value.replace(/\s/g, '').toLowerCase();
  }

  const checkName = (value) => {
    return clearString(value.idClient.toString()).indexOf(clearString(filter)) >= 0
  }

  const onChangeSearch = query => setFilter(query);

  const filterData = () => {

    return [...new Set(document.filter(checkName))];
  }
  const getDocumnet = () => {
    axios.get(carApiHost).then((response) => {
      setDocument(response.data);
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
              navigation.navigate('ContractDetails' , {item})

            }



            }
            key = {index}
            title={item.idClient + " " + item.idEmployee}

            />)}
          </List.Section>

        </ScrollView>
    </>
  )
}


ContractsList.propTypes = {
  route: PropTypes.shape({
    params: PropTypes.shape({ from: PropTypes.string }),
  }),
  navigation: PropTypes.shape({
    goBack: PropTypes.func,
  }),
}

ContractsList.defaultProps = {
  route: { params: { from: '' } },
  navigation: { goBack: () => null },
}

export default ContractsList
