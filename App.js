import React, { useState } from "react";
import {SafeAreaView, View, Text, StyleSheet, Button, Image} from 'react-native';
import {Picker} from '@react-native-picker/picker'; 


export default function App() {

  const [FoodValue, setFoodValue] = useState("00")
  const [FoodQuantity, setFoodQuantitySelectedValue] = useState("0")
  const [DrinkValue, setDrinkValue] = useState("00")
  const [DrinkQuantity, setDrinkQuantitySelectedValue] = useState("0")
  const [calculatedValue, setCalculatedValue] = useState("Press the above button to calculate");

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.row1}>
        <Text style={styles.heading}> Calorie Counting App </Text>
      </View>
      <View style={styles.imageContainer}>
        <Image source={require('./assets/Brand-logo.png')} style={styles.image}/>
      </View>
      <View style={styles.row2}>
        <Picker 
          style={styles.picker1}
          selectedValue={FoodValue}
          onValueChange={(itemValue, itemIndex) => setFoodValue(itemValue)}>
            <Picker.Item label="Select Food" value="0" />
            <Picker.Item label="Apple-52" value="val-Apple-52" />
            <Picker.Item label="Orange-28" value="val-Orange-28" />
            <Picker.Item label="Kiwi-20" value="val-Kiwi-20" />
            <Picker.Item label="Dates-20" value="val-Dates-20" />
        </Picker>
        <Picker 
          style={styles.picker2}
          selectedValue={FoodQuantity}
          onValueChange={(itemValue, itemIndex) => setFoodQuantitySelectedValue(itemValue)}>
            <Picker.Item label="Qty" value="0" />
            <Picker.Item label="1" value="1" />
            <Picker.Item label="2" value="2" />
            <Picker.Item label="3" value="3" />
            <Picker.Item label="4" value="4" />
            <Picker.Item label="5" value="5" />
        </Picker>
      </View>
      <View style={styles.row3}>
        <Picker 
          style={styles.picker3}
          selectedValue={DrinkValue}
          onValueChange={(itemValue, itemIndex) => setDrinkValue(itemValue)}>
            <Picker.Item label="Select Drink" value="00" />
            <Picker.Item label="Orange Juice-25" value="val-OrangeJuice-25" />
            <Picker.Item label="Soda-28" value="val-Soda-28" />
            <Picker.Item label="Coke-28" value="val-Coke-28" />
            <Picker.Item label="Water-10" value="val-Water-10" />
        </Picker>
        <Picker 
          style={styles.picker4}
          selectedValue={DrinkQuantity}
          onValueChange={(itemValue, itemIndex) => setDrinkQuantitySelectedValue(itemValue)}>
            <Picker.Item label="Qty" value="0" />
            <Picker.Item label="1" value="1" />
            <Picker.Item label="2" value="2" />
            <Picker.Item label="3" value="3" />
            <Picker.Item label="4" value="4" />
            <Picker.Item label="5" value="5" />
        </Picker>
      </View>
      <View>
        <Button
          title="CALCULATE"
          onPress={() => {
            const lastChar1 = FoodValue.slice(-2);
            const charToIntForPicker1 = parseInt(lastChar1);
            const charToIntForPicker2 = parseInt(FoodQuantity);
            const lastChar2 = DrinkValue.slice(-2);
            const charToIntForPicker3 = parseInt(lastChar2);
            const charToIntForPicker4 = parseInt(DrinkQuantity);
            setCalculatedValue("Total Calorie Count: " + (charToIntForPicker1 * charToIntForPicker2 + charToIntForPicker3 * charToIntForPicker4) + " KCal");
          }}
        />
        <Text style={styles.result}>{calculatedValue}</Text>
      </View>
      <View style={styles.footer}>
        <Text style={styles.footerText}>App developed by: Bryan (45706875), Isaac (47530332), Shuangze (46311106), Yuchen (44379455)</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fcad44'
  },
  heading: {
    fontSize:25,
    textAlign: 'center',
    fontWeight:'bold',
    marginTop: 30
  },
  result:{
    fontSize:20,
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 5,
    color: '#097969'
  },
  imageContainer: {
    flex: 2,
    marginTop: 1,
  },
  image: {
    width: '100%',
    height:'135%',
  },
  //The main dropdown styles 
  row2:{
    flexDirection: 'row',
    marginTop: 0,
  },
  row3:{
    flexDirection: 'row',
    marginTop: 1,
    marginBottom: 2,
  },
  picker1:{
    flex:2
  },
  picker2:{
    flex:1
  },
  picker3:{
    flex:2
  },
  picker4:{
    flex:1
  },
  footer:{
    bottom: 0,
    backgroundColor: '#ABA7A7',
  },
  footerText:{
    fontSize: 15,
    textAlign: 'center',
    fontWeight: 'Bold',
  }
});