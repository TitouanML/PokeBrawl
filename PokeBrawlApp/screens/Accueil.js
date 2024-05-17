import { Text, View, StyleSheet } from "react-native";
import { Titre } from "../components/Titre";
import { Header } from "../components/Header";
import { Bouton } from "../components/Bouton";
import { HandleStatsHome } from "../components/HandleStatsHome";
import { HandleNavFromHome } from "../components/HandleNavFromHome";
import {useState, useEffect} from 'react';
import { UserContext } from "../App";

const s = StyleSheet.create({
    text : {
      fontSize : 15,
      textALign : "center",
    },

    containerTopHome : {
      display : "flex",
      flexDirection : "column",
      justifyContent : "top",
      alignItems : "center",
      gap:50,
      paddingTop:50,
      backgroundColor : "grey",
      flex:1,
      zIndex : -6
    }
  })



export default function Accueil({ navigation }) {

  const [profileName,setProfileName] = useState(null);
  const [level,setLevel] = useState(null);
  const [hp,setHp] = useState(null);
  const [dps,setDps] = useState(null);
  const [killCounter,setKillCounter] = useState(null);
  const [deathCounter, setDeathCounter] = useState(null);
  const [xp,setXp] = useState(null);

  return (
    <>
      <Header trigger={false} />
      <View style = {s.containerTopHome}>
        <Titre contenu={"Bienvenue sur PokeBrawl"} taille={20} />
        <Text style = {s.text}>L’appli qui permet aux dresseurs de se défouler sur les pokemons</Text>
        <HandleNavFromHome navigation = {navigation} profileName={profileName}/>
      </View>
      
      <HandleStatsHome/>
    </>
  );
}
