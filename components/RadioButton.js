import { useState, useEffect } from 'react'
import { View, Text, Pressable } from 'react-native'
import styles from '../Styles'

export default function RadioButton({options, onPress}) {

  const [value, setValue] = useState(null);
 
  useEffect(() => {
    setValue(options[0].value)
  },[])

  const handlePress = (selected) => {
    setValue(selected);
    onPress(selected);
  }

  return (
    <>
    {
      options.map((item, index) => (
        <View key={index} style={styles.buttonContainer}>
          <Text style={styles.dropdownLabel}>{item.label}</Text>
          <Pressable style={styles.circle} onPress={() => handlePress(item.value)}>
            {value === item.value && <View style={styles.checkedCircle}/> }
          </Pressable>
        </View>
      ))
    }
    </>
  )  
}
  