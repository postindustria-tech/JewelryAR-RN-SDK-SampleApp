import * as React from 'react';
import { View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ArView } from 'jewelry-ar-react-native-sdk';



const Stack = createNativeStackNavigator();

const HomeScreen = ({ navigation }) => {
  return (
    <Button
      title="Open AR View"
      onPress={() =>
        navigation.navigate('AR', { modelId: '73' })
      }
    />
  );
};

const ArScreen = ({ navigation, route }) => {
  return (
    <ArView
      style={{ position: 'absolute', left: 0, right: 0, top: 0, bottom: 0 }}
      host="https://stage-api-ar.postindustria.com/v1"
      apiKey="644d9b714772fc7572eaef012ea8392888889562bcfd374eecbe6c0f3906f7fc"
      modelId={route.params.modelId}
    />
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Welcome' }}
        />
        <Stack.Screen name="AR" component={ArScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
