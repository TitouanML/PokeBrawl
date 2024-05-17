import { TouchableOpacity,View,Text, Image } from "react-native";


export function BackButton(){
    return(
        <TouchableOpacity style = {{display:"flex"}}>
            <Image style = {{ width:35, height : 30, marginTop : 10, marginRight:"23%", marginLeft:"5%"}} source = {require('../assets/images/arrowBack.png')} />
        </TouchableOpacity>
    )
}