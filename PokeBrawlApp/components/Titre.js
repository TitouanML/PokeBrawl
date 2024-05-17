import {Text} from 'react-native';

export function Titre({taille, couleur, contenu}){
    return(
        <Text style={{fontSize : taille,color:couleur}}>{contenu}</Text>
    )
}