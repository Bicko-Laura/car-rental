import { TouchableOpacity, TextInput } from 'react-native'

const Textbox = ({text, textColor, backgroundColor}) => {
    return (
        <TouchableOpacity style={{  borderRadius: 74 , height: 60, justifyContent: 'center', 
        alignItems: 'center', width:'85%', backgroundColor: backgroundColor, paddingHorizontal: 20, marginTop: 20, alignSelf:'center'}}>
            <TextInput style={{color: 'white', fontWeight: 'bold', color: textColor, fonSize: 14, fontWeight:400, fontFamily:'Poppins'}}>
                
                {text}

            </TextInput>
        </TouchableOpacity>
    
            

    )
}

export default Textbox