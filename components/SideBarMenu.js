import React,{Component} from 'react';
import {StyleSheet, View, Text,TouchableOpacity} from 'react-native';
import { DrawerItems} from 'react-navigation-drawer';
import firebase from 'firebase';

export default class SideBarMenu extends Component{
render(){
return (

<View style = {{flex:1}}>

<View style={styles.drawerItemsContainer}>
          <DrawerItems {...this.props}/>
        </View>

<View style={styles.logOutContainer}>
<TouchableOpacity style={styles.logOutButton}
 onPress={()=>{
     this.props.navigator.navigate('WelcomeScreen')
     firebase.auth().signOut()
 }}
>
</TouchableOpacity>

    
</View>

    </View>



)


}
}
var styles = StyleSheet.create({
    container : {
      flex:1
    },
    drawerItemsContainer:{
      flex:0.8
    },

})



