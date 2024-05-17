import { Text, View, Image, StyleSheet, TextInput } from "react-native";
import { Header } from "../components/Header";
import { useNavigation } from "@react-navigation/native";
import { Bouton } from "../components/Bouton";
import { useState } from "react";

export function NewProfil({ route }) {
  

  const [inputingText, setText] = useState("");
  const { profileName, setProfileName } = route.params;
  const navigation = useNavigation();
  const styles = StyleSheet.create({
    button: {
      paragraph: {
        fontSize: 18,
        textAlign: "center",
        marginTop: 30,
      },

      mainContainer: {
        height: "50%",
        width: "100%",
        paddingRight: 15,
        paddingLeft: 15,
      },

      input: {
        borderWidth: 1,
        borderRadius: 5,
        height: 60,
        width: "75%",
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: 50,
      },

      marginTop: 20,
      marginLeft: "auto",
      marginRight: "auto",
    },
  });
  return (
    <>
      <Header />
      <View>
        <View style={styles.mainContainer}>
          <Text style={styles.paragraph}>
            Avant de débuter votre aventure je crois qu’il m’est nécessaire de
            connaître votre nom ! {"\n"} Alors veuillez le renseigner dans le
            champs ci dessous !
          </Text>
          <TextInput
            value={inputingText}
            onChange={setText}
            style={styles.input}
          />
          <View style={styles.button}></View>
        </View>
        <Bouton
          largeur={200}
          hauteur={60}
          contenu={"Confirmer"}
          style={styles.button}
          taillePolice={20}
          action={setProfileName("")}
        />
      </View>
    </>
  );
}
