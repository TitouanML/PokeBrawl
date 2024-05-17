import { DisplayBottomHome } from "./DisplayBottomHome";

export function HandleStatsHome({profileName, hp, dps, level, killCounter, deathCounter}){
    if(profileName == null){
        console.log("Pas encore de profil")
        return <DisplayBottomHome isConnected={false}/>
    }else {
        console.log("utilisateur connecté")
        return <DisplayBottomHome isConnected={true} hp={hp} level={level} dps={dps} killCounter={killCounter} deathCounter={deathCounter}/>
    }
}