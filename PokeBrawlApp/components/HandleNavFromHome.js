import profileName from '../App';
import { Bouton } from "./Bouton";


export function HandleNavFromHome({navigation, profileName}){
    console.log(profileName);
    if(profileName === null){
        return(
        <Bouton
          action = {()=>navigation.navigate("NewProfil")}
          largeur={"50%"}
          hauteur={50}
          contenu={"Nouveau profil"}
          taillePolice={20}
        />
    )
    }else{
        return(
            <Bouton
              action = {()=>navigation.navigate("Combat")}
              largeur={"50%"}
              hauteur={50}
              contenu={"Combattre"}
              taillePolice={20}
            />
        )
    }
}