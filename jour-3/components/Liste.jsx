import { useState, useEffect } from "react";
import React from "react";
import { StyleSheet, Text, View, FlatList, Image } from "react-native";

const Liste = () => {
  const [country, setCountry] = useState([]);

  const renderItem = ({ item }) => {
    return (
      <View style={styles.CardStyle}>
        <Text style={styles.textStyle}>{`The Country Name : ${item.name}`}</Text>
        <Text style={styles.textStyle}>{`The Capital : ${item.capital}`}</Text>
        <Image style={styles.image} source={item.flag} />
      </View>
    );
  };

  useEffect(() => {
    fetch(`http://restcountries.eu/rest/v2/all`)
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        setCountry(response);
      });
  }, []);
  return (
    <View style={styles.container}>
      {/* {country.map((element) => {
        return (<View >
          <Text style={styles.textStyle}>
          {element.name}
          {element.capital}</Text></View>)
      })}  */}
      <FlatList
        data={country}
        renderItem={renderItem}
        keyExtractor={(item) => item.key}
      />
    </View>
  );
};
export default Liste;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 22,
  },
  textStyle: {
    margin: 3,
    padding: 8,
    borderColor: "#fff",
    borderStyle: "solid",
    borderWidth: 2,
    color: "#fff",
    borderRadius: 15,
    textAlign: "center",
    fontSize: 22,
  },
  sepaT: {
    width: 250,
    height: 25,
    borderColor: "gray",
    borderStyle: "solid",
    borderWidth: 2,
  },
  CardStyle: {
    backgroundColor: "green",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    height: 400,
    width: 450,
    borderRadius: 30,
  },
  image: {
    height: 200,
    width: 400,
    marginTop: 8,
    borderRadius: 15,
  },
});
