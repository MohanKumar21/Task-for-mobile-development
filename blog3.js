import React from 'react';
import { Text, View,Button,StyleSheet } from 'react-native';
 
const comp1 =(props) =>{
    const paramid = props.navigation.getParam('id');
    const name =props.navigation.getParam('name')
    return (
        <View style={{
            margin:25,
            padding:15,
            fontSize:35,
            justifyContent:'center',
            height:'90%'
        }}>
            
        
            
            <Text style={styles.text}>The item you have choosen is {name} </Text>
    
                
            

           
        </View>
    )
};

const styles=StyleSheet.create({
    text:{
        fontSize:25,
        height:80,
        fontStyle:'italic',
         width: '100%', 
         backgroundColor: 'rgb(255,245,254)',
         borderColor:'brown',
         borderRadius:12,
         borderWidth:5,
         textAlign:'center'
    }
})


export default comp1;