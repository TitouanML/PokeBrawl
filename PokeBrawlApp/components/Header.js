import { Text, View, StyleSheet} from "react-native";
import { Titre } from "./Titre";
import { BackButton } from "./BackButton";

export const s = StyleSheet.create({
  headerBg: {
    backgroundColor: "#FF6262",
    width: "100%",
    height: 80,
    textAlign:"center",
    display : "flex",
    alignItems:"center",
    justifyContent : "center"
  },

  headerBgBackButton : {
    backgroundColor: "#FF6262",
    width: "100%",
    height: 80,
    textAlign:"center",
    display : "flex",
    flexDirection:"row",
    alignItems:"center",
    justifyContent : "left",

  }
});

export function Header({trigger }) {
  if (trigger ) {
    return (
        <View style={s.headerBgBackButton}>
          <Titre couleur={"aliceblue"} taille={30} contenu={"PokeBrawl"} />
        </View>
      );
  } else {
    return (
      <View style={s.headerBg}>
        <Titre couleur={"aliceblue"} taille={30} contenu={"PokeBrawl"}/>
      </View>
    );
  }
}
