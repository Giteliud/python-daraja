import { StatusBar } from 'expo-status-bar';
import { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';

class MyFirstExpoApp extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <View style={{flex:1, borderWidth:2, borderColor:"red", marginTop:28, flexDirection:"column"}}>
        <View style={{flex:1, borderWidth:1, borderColor:"black", flexDirection:'row', justifyContent:"space-around", alignItems:"center"}}>
          <View style={{flex:1, borderWidth:1, backgroundColor:'#9FAB90', borderColor:"green", marginHorizontal:5, justifyContent:"center", alignItems:"center", height: 50+"%"}}>
            <Text>Icon</Text>
          </View>
          <View style={{flex:9, borderWidth:1, borderColor:"green", marginHorizontal:5, justifyContent:"center", alignItems:"flex-start", height: 50+"%", paddingLeft:10}}>
            <Text>Search Bar</Text>
          </View>
        </View>
        <View style={{flex:1.5, borderWidth:1, borderColor:"black", flexDirection:"row", alignItems:"center", justifyContent:"flex-start"}}>
          <View style={{width:20+"%", height: 70+"%", borderWidth:1, marginRight:10, borderRadius:15, backgroundColor:"#E2ECD9"}}>
            <View style={{flex:8, alignItems:"center", justifyContent:"center"}}>
              <Text>Icon</Text>
            </View>
            <View style={{flex:2, alignItems:"center", justifyContent:"center"}}>
              <Text>
                Groceries
              </Text>
            </View>
            
          </View>
          <View style={{width:20+"%", height: 70+"%", borderWidth:1, marginRight:10, borderRadius:15, backgroundColor:"#FFFDFB"}}>
          <View style={{flex:8, alignItems:"center", justifyContent:"center"}}>
              <Text>Icon</Text>
            </View>
            <View style={{flex:2, alignItems:"center", justifyContent:"center"}}>
              <Text>
                Repairs
              </Text>
            </View>
          </View>
          <View style={{width:20+"%", height: 70+"%", borderWidth:1, marginRight:10, borderRadius:15, backgroundColor:"#F1E6E2"}}>
          <View style={{flex:8, alignItems:"center", justifyContent:"center"}}>
              <Text>Icon</Text>
            </View>
            <View style={{flex:2, alignItems:"center", justifyContent:"center"}}>
              <Text style={{fontSize:11}}>
                Gas Deliveries
              </Text>
            </View>
          </View>
        </View>
        <View style={{flex:3.5, borderWidth:1, borderColor:"black", flexDirection:"column", justifyContent:"flex-start", alignItems:"flex-start"}}>
          <View>
            <View style={{flex:1, borderWidth:1, borderColor:"red", flexDirection:"row", justifyContent:"space-between"}}>
              <TouchableOpacity style={{flex:1, alignItems:"center", borderWidth:1, marginRight:5, marginTop:2, marginBottom:2, backgroundColor:"#D55248", justifyContent:"center"}}><Text style={{color:"white"}}>New Products</Text></TouchableOpacity>
              <TouchableOpacity style={{flex:1, alignItems:"flex-end", borderWidth:1, marginTop:2, marginBottom:2}}><Text style={{color:"#D55248", paddingRight:15}}>See All</Text></TouchableOpacity>
              
            </View>
            <View style={{flex:9, flexDirection:"row", borderWidth:1, width:100+"%"}}>
            <View style={{flex:1, flexDirection:"column", borderWidth:1, borderRadius:15, alignItems:"center",justifyContent:"center", marginRight:10}}>
            <View style={{flex:1, borderWidth:1, width:90+"%", flexDirection:"row", justifyContent:"flex-end"}}><Text>@</Text></View>
            <View style={{flex:5, borderWidth:1, justifyContent:"center", alignItems:"center", width:90+"%"}}><Text>Image</Text></View>
            <View style={{flex:3, paddingLeft:4, borderWidth:1, flexDirection:"column", alignItems:"flex-start",justifyContent:"space-around", width:100+"%"}}>
              <Text>Price Ksh. 20</Text>
              <Text style={{fontWeight:"800"}}>Kienyeji Mangoes</Text>
              <Text>3</Text>
            </View>
            <View style={{flex:1.5, width:100+"%",borderRadius:10, marginTop:2, backgroundColor:"#936B00", borderWidth:1, flexDirection:"row", justifyContent:"center", alignItems:"center"}}><Text>Add To Cart</Text></View>
            
          </View>
          <View style={{flex:1, flexDirection:"column", borderWidth:1, borderRadius:15, justifyContent:"center", alignItems:"center"}}>
          <View style={{flex:1, borderWidth:1, width:90+"%", flexDirection:"row", justifyContent:"flex-end"}}><Text>@</Text></View>
            <View style={{flex:5, borderWidth:1, justifyContent:"center", alignItems:"center", width:90+"%"}}><Text>Image</Text></View>
            <View style={{flex:3, paddingLeft:4, borderWidth:1, flexDirection:"column", alignItems:"flex-start",justifyContent:"space-around", width:100+"%"}}>
              <Text>Price Ksh. 300</Text>
              <Text style={{fontWeight:"800"}}>Water Refilling</Text>
              <Text>10 litres</Text>
            </View>
            <View style={{flex:1.5, width:100+"%",borderRadius:10, marginTop:2, backgroundColor:"#3F6505", borderWidth:1, flexDirection:"row", justifyContent:"center", alignItems:"center"}}><Text>Add To Cart</Text></View>
            
          </View>
            </View>
          </View>
          
        </View>
        <View style={{flex:4, borderWidth:1, borderColor:"black"}}>
          <Text>
            Box 4
          </Text>
        </View>
      </View>
    );
  }
  }


export default MyFirstExpoApp
