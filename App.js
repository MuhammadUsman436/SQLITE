import React from 'react';
import { View } from 'react-native';
import AddUserForm from './AddUserForm';
import GetUserForm from './GetUserForm';

const App = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <AddUserForm />
      <GetUserForm />
    </View>
  );
};

export default App;
