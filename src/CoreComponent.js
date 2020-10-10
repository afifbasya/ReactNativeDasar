import React from 'react';
import { View, Text, Image, ScrollView, TextInput } from 'react-native';
import Cat from './assets/cat.png'

const CoreComponent = () => {
  return (
    <ScrollView>
      <Text>Some text</Text>
      <View>
        <Text>Some more text</Text>
        <Image
          source={Cat}
          style={{ width: 200, height: 200 }}
        />
      </View>
      <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1
        }}
        defaultValue="You can type in me"
      />
    </ScrollView>
  );
}

export default CoreComponent;
