import PokemonClassic from "./assets/images/font/PokemonClassic.ttf";
import { SafeAreaView } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {useFonts} from 'expo-font';
import Accueil from "./screens/Accueil";
import React from 'react'
import CombatScreen from "./screens/CombatScreen";
import { NewProfil } from "./screens/NewProfil";
import { Header } from "./components/Header";

export default function App() {

  const [isFontLoaded] = useFonts({
    "PokemonClassic" : PokemonClassic
  });

  const Stack = createNativeStackNavigator();
  
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Accueil">
        <Stack.Screen options = {{headerShown:false}} name="Accueil" component={Accueil}/>
        <Stack.Screen options = {{headerTintColor:"white", headerStyle:{backgroundColor : "#FF6262"}, headerShown:false, headerTitle: () => <Header trigger={true}/>}} name="Combat" component={CombatScreen}/>
        <Stack.Screen options = {{headerShown:false}} name="NewProfil" component={NewProfil}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

