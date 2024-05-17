import { Text, StyleSheet, Image, View, ImageBackground } from "react-native";
import { Titre } from "./Titre";

export function DisplayBottomHome({
  isConnected,
  profileName,
  level,
  dps,
  hp,
  killCounter,
  deathCounter,
}) {
  const styles = StyleSheet.create({
    mainContainer: {
      height: "50%",
      position: "absolute",
      bottom: 0,
      width: "100%",
      backgroundColor: "aliceblue",
      zIndex: -6,
    },

    image: {
      width: "30%",
      height: "38%",
      position: "absolute",
      left: "35%",
      bottom: 0,
      opacity: 0.6,
      zIndex: -5,
    },

    statsContainer: {
      width: "100%",
      height: "50%",
      display: "flex",
      flexDirection: "column",
    },
    statsPartOne: {
      marginBottom: 50,
      marginTop: 25,
      fontSize: 20,
    },
    statsPartTwo: {
      fontSize: 20,
    },

    profileName: {
      width: "100%",
      textAlign: "center",
    },
  });

  if (isConnected) {
    return (
      <>
        <Text style={styles.profileName}>
          <Titre contenu={profileName} taille={25} />
        </Text>
        <View style={styles.mainContainer}></View>
        <Image
          source={require("../assets/images/trainer_fromFront.webp")}
          resizeMode="cover"
          style={styles.image}
        />
        <View style={styles.statsContainer}>
          <Text style={styles.statsPartOne}>
            Niv : {level} {"\n"}
            Points d'attaque : {dps} {"\n"}
            {"\n"}
            Points de vie : {hp}
          </Text>
          <Text style={styles.statsPartTwo}>
            Nombre de pokémons tués : {killCounter} {"\n"}
            Nombre d'échecs : {deathCounter}
          </Text>
        </View>
      </>
    );
  } else {
    return (
      <>
        <Text style={styles.profileName}>
          <Titre contenu={"Pas de profil"} taille={25} />
        </Text>
        <View style={styles.mainContainer}></View>
        <Image
          source={require("../assets/images/trainer_fromFront.webp")}
          resizeMode="cover"
          style={styles.image}
        />
        <View style={styles.statsContainer}>
          <Text style={styles.statsPartOne}>
            Niv : ?? {"\n"}
            Points d'attaque : ?? {"\n"}
            {"\n"}
            Points de vie : ??
          </Text>
          <Text style={styles.statsPartTwo}>
            Nombre de pokémons tués : ?? {"\n"}
            Nombre d'échecs : ??
          </Text>
        </View>
      </>
    );
  }
}
