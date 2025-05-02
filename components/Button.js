import { TouchableOpacity, Text } from 'react-native'

const Button = ({text, textColor, backgroundColor}) => {
    return (
        <TouchableOpacity style={{  borderRadius: 74 , height: 60, justifyContent: 'center', 
        alignItems: 'center', width:'85%', backgroundColor: backgroundColor, paddingHorizontal: 20, marginTop: 20, alignSelf:'center'}}>
            <Text style={{color: 'white', fontWeight: 'bold', color: textColor}}>
                
                {text}

            </Text>
        </TouchableOpacity>
    
            

    )
}

export default Button