import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity,View,Text, Image } from "react-native";
import { Bouton } from "./Bouton";

export function BackButton({ action}){
    return(
        
        <TouchableOpacity style = {{display:"flex"}} onPress= {action}>
            <Image style = {{ width:35, height : 30, marginTop : 10, marginRight:"23%", marginLeft:"5%"}} source = {require('../assets/images/arrowBack.png')} />
        </TouchableOpacity>
    )
}