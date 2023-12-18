import React, { useState } from 'react';
import { View } from 'react-native';
import { Text, TextInput, Button } from 'react-native-paper';
import { getUserById } from './DatabaseHelper';

const GetUserForm = () => {
  const [userId, setUserId] = useState('');
  const [userData, setUserData] = useState(null);

  const handleGetUser = () => {
    if (userId) {
      getUserById(parseInt(userId, 10), (user) => {
        console.log('User Details:', user);
        setUserData(user);
      });
    } else {
      console.error('Please enter user ID.');
    }
  };

  return (
    <View style={{ margin: 16 }}>
      <Text style={{ fontSize: 20, marginBottom: 16 }}>Get User by ID</Text>

      <TextInput
        label="User ID"
        value={userId}
        onChangeText={(text) => setUserId(text)}
        keyboardType="numeric"
        style={{ marginBottom: 16 }}
      />

      <Button mode="contained" onPress={handleGetUser} style={{ marginBottom: 16, borderRadius:8, width:250 }}>
        Get User
      </Button>

      {userData && (
        <View>
          <Text>User Details</Text>
          <Text>Name: {userData.name}</Text>
          <Text>Age: {userData.age}</Text>
          <Text>Address: {userData.address}</Text>
        </View>
      )}
    </View>
  );
};

export default GetUserForm;
