import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { Button, TextInput as PaperTextInput } from 'react-native-paper';
import { insertUser, createTable } from './DatabaseHelper';

const AddUserForm = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [address, setAddress] = useState('');

  useEffect(() => {
    createTable();
  }, []);

  const handleAddUser = () => {
    if (name && age && address) {
      insertUser(name, parseInt(age, 10), address, (userId) => {
        alert(`User added with ID: ${userId}`);

        setName('');
        setAge('');
        setAddress('');
      });
    } else {
      console.error('Please enter all fields.');
    }
  };

  return (
    <View style={{ margin: 16 }}>
      <Text style={{ fontSize: 20, marginBottom: 16 }}>Add User</Text>

      <PaperTextInput
        label="Name"
        value={name}
        onChangeText={(text) => setName(text)}
        style={{ marginBottom: 16 }}
      />

      <PaperTextInput
        label="Age"
        value={age}
        onChangeText={(text) => setAge(text)}
        keyboardType="numeric"
        style={{ marginBottom: 16 }}
      />

      <PaperTextInput
        label="Address"
        value={address}
        onChangeText={(text) => setAddress(text)}
        style={{ marginBottom: 16 }}
      />

      <Button mode="contained" onPress={handleAddUser} style={{ marginTop: 16, borderRadius:8, width:250 }}>
        Add User
      </Button>
    </View>
  );
};

export default AddUserForm;
