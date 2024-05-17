import { Text, View, StyleSheet, TextInput } from "react-native";
import { useState } from "react";
import { Bouton } from "./Bouton";

export function DisplayTopNewProfil() {
  const [inputingText, setText] = useState("");
  const styles = StyleSheet.create({
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

    button: {
      marginTop: 20,
      marginLeft : "auto",
      marginRight : "auto"
    },
  });
  return (
    <>
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
        <View style={styles.button}>
        </View>
      </View>
    </>
  );
}
