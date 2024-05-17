import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import PokemonClassic from "./assets/images/font/PokemonClassic.ttf";
import { SafeAreaView } from 'react-native-safe-area-context';
import {useFonts} from 'expo-font';
import { Titre } from './components/Titre';
import { Header } from './components/Header';


export default function App() {

  const fontName = "PokemonClassic";
  const [isFontLoaded] = useFonts({
    fontName : PokemonClassic
  });

  return (<>
  
      {isFontLoaded ? <Titre contenu={"Test"} couleur={"black"} taille={20} /> : null}
  </> );
}

