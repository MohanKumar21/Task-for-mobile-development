import React from 'react';
import { Text, View,Button,TouchableOpacity,StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const HomeScreen=(props) =>{
    return (
        <View style={{
            margin:30,
            height:56
        }}>
            <TouchableOpacity onPress={() => props.navigation.navigate('comp')} 
             >
                <Text style={styles.Text}>Tap to show the list</Text>
            </TouchableOpacity>
            
        </View>
        
        
    )
}
const styles=StyleSheet.create({
   Text: {
        height: 75,
        fontSize:30,
       fontStyle:'italic',
       textAlign:'center',
        width:'90%',
        borderRadius:10,
        backgroundColor : "rgb(152,251,152)",
        textAlignVertical:'center',
        textAlign:'right',
        marginLeft:60}}
)
export default HomeScreen;