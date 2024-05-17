import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { Titre } from "./Titre";

export function Bouton({ action, contenu, largeur, hauteur, taillePolice }) {
  const s = StyleSheet.create({
    insideText: {
      fontSize: taillePolice,
    },

    bouton: {
      width: largeur,
      height: hauteur,
      backgroundColor: "#FF6262",
      borderRadius:5,
      display:"flex",
      justifyContent:"center",
      alignItems:"center",
    },
  });
  return (
    <TouchableOpacity onPress={action} style={s.bouton}>
      <Titre couleur={"white"} taille={25} contenu={contenu} />
    </TouchableOpacity>
  );
}
