import { Text, View, TextInput, Button, Alert, ScrollView } from 'react-native';
import { useEffect, useState } from "react";
import { Picker } from '@react-native-picker/picker';
import RadioButton from './components/RadioButton';
import styles from './Styles'

export default function App() {

  const [bottles, setBottles] = useState(1);
  const [hours, setHours] = useState(1);
  const [weight, setWeight] = useState('');
  const [gender, setGender] = useState();
  const [promille, setPromille] = useState('');

  useEffect(() => {
    setGender(gendersArray[0].value)
  },[])

  const gendersArray = [
    {label: 'Female', value: 0.6},
    {label: 'Male', value: 0.7}
  ];

  const bottlesArray = [];
  const maxBottles = 24;
  for (let i = 1; i < maxBottles + 1; i++) {
    bottlesArray.push({label: i > 1 ? i + ' bottles' : i + ' bottle', value: i});
  };

  const hoursArray = [];
  const maxHours = 24;
  for (let i = 1; i < maxHours + 1; i++) {
    hoursArray.push({label: i > 1 ? i + ' hours' : i + ' hour', value: i});
  };

  function handleCalculation() {
    if (weight !== '' && weight > 20 && weight < 250) {
      calculate();
    }
    else {
      setWeight('');
      Alert.alert(
        "Error on calculation",
        "Please enter the weight correctly", 
      );
    }
  }

  function calculate() {
    let gramsConsumed = bottles * 0.33 * 8 * 4.5;
    let result = (gramsConsumed - weight / 10 * hours) / (weight * gender);
    setPromille(result > 0 ? result.toFixed(2) : 0);
  }


  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <Text style={styles.heading}>Alcometer</Text>
        </View>
        <View>
          <Text style={styles.label}>Weight</Text>
          <TextInput 
            value={weight} 
            style={styles.input} onChangeText={text => setWeight(text)} 
            placeholder='Enter weight in kg' 
            keyboardType='decimal-pad'>
          </TextInput>
          <Text style={styles.label}>Gender</Text>
          <RadioButton options={gendersArray} onPress={(value) => {setGender(value)}}/>
          <Text style={styles.label}>Consumed bottles of beer</Text>
          <Picker 
            mode="dropdown"
            style={styles.picker}
            selectedValue={bottles}
            onValueChange={(itemValue) => setBottles(itemValue)}
          >
            {bottlesArray.map((b, i) => (
              <Picker.Item key={i} label={b.label} value={b.value} />
            ))} 
          </Picker>
          <Text style={styles.label}>Time since starting to drink</Text>
          <Picker 
            mode="dropdown"
            style={styles.picker}
            selectedValue={hours}
            onValueChange={(itemValue) => setHours(itemValue)}
          >
            {hoursArray.map((h, i) => (
              <Picker.Item key={i} label={h.label} value={h.value} />
            ))} 
          </Picker>
          <Button title='Calculate' onPress={handleCalculation}/>
        </View>
        { promille !== '' &&
          <View style={styles.result}>
            <Text style={[promille < 0.5 ? styles.green : promille >= 0.5 && promille <= 1 ? styles.yellow : styles.red]}>
              {promille}
            </Text>
            {promille > 1.5 && <Text style={styles.red}>Go to sleep ur drunk af</Text>}
          </View>
        }
      </ScrollView>
    </View>
  );
}