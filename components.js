import React from 'react';
import { Text, View,Button,TouchableOpacity,FlatList,StyleSheet ,ScrollView} from 'react-native';

const grocery=[
    {name:'Meat' , index:'1'},
    {name:'Fish' , index:'2'},
    {name:'Oil' , index:'3'},
    {name:'Rice' , index:'4'},
    {name:'Bread' , index:'5'},
    {name:'Flour' , index:'6'},
    {name:'Butter' , index:'7'},
    {name:'Milk' , index:'8'},
    {name:'Eggs' , index:'9'},
    {name:'Cheese' , index:'10'},
    {name:'Onions' , index:'11'},
    {name:'Garlic' , index:'12'},
    {name:'Pulses' , index:'13'},
    {name:'Salt' , index:'14'},
    {name:'Pepper' , index:'15'},
    {name:'Herbs' , index:'16'},
    {name:'Honey' , index:'17'},
    {name:'Sugar' , index:'18'},
    {name:'Vinegar' , index:'19'},
    {name:'Almond' , index:'20'},

]



 
const comp =(props) =>{

    return (
        <ScrollView>
        <View>
            
            <FlatList data={grocery} renderItem={({item}) =>{
                return(
                    <TouchableOpacity  style={styles.text} onPress={() =>{
                        props.navigation.navigate('comp1',{id: item.index ,name: item.name})} }>
                        <Text style={{fontSize:30,textAlign:'center'}}>{item.name}</Text>
                    </TouchableOpacity>)
               
   }} />
        </View>
        </ScrollView>
    )
};

const styles=StyleSheet.create({
    text:{
        fontSize:120,
        height:45,
         width: '100%', 
         backgroundColor: 'rgb(255,245,254)',
         borderColor:'pink',
         borderBottomWidth:2,
         alignContent:'center'
    }
})


export default comp;