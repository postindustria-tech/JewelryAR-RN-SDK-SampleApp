import * as React from 'react';
import { View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ArView } from 'jewelry-ar-react-native-sdk';



const Stack = createNativeStackNavigator();

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Button
        title="Open AR View (with ID)"
        onPress={() =>
          navigation.navigate('AR', { modelId: '73' })
        }
      />
      <Button
        title="Open AR View (with Name)"
        onPress={() =>
          navigation.navigate('AR', { modelName: 'loreto' })
        }
      />
      <Button
        title="Open AR View (with CustomID)"
        onPress={() =>
          navigation.navigate('AR', { modelCustomId: 'CID324895' })
        }
      />
    </View>
  );
};

const ArScreen = ({ navigation, route }) => {
  return (
    <ArView
      style={{ position: 'absolute', left: 0, right: 0, top: 0, bottom: 0 }}
      apiURL="https://stage-api-ar.postindustria.com/v1"
      apiKey="spWyH9aA-OEL-Bl27KHAeQ"
      modelId={route.params.modelId}
      modelCustomId={route.params.modelCustomId}
      modelName={route.params.modelName}
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
