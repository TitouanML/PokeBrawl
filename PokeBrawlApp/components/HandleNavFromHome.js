
import { Bouton } from "./Bouton";


export function HandleNavFromHome({navigation, profileName}){
    if(profileName === null){
        return(
        <Bouton
          action = {()=>navigation.navigate("NewProfil")}
          largeur={"50%"}
          hauteur={50}
          contenu={"Nouveau profil"}
        />
    )
    }else{
        return(
            <Bouton
              action = {()=>navigation.navigate("Combat")}
              largeur={"50%"}
              hauteur={50}
              contenu={"Combattre"}
            />
        )
    }
}