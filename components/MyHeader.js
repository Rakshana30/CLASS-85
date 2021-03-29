import React, { Component} from 'react';
import { Header,Icon,Badge } from 'react-native-elements';
import { View, Text, StyeSheet ,Alert} from 'react-native';
import  db from '../config';
import { render } from 'react-dom';
import ThemedListItem from 'react-native-elements/dist/list/ListItem';

export default class MyHeader extends Component{
   constructor(props){
       super(props)

       this.state={
           value : ""
       }
   }
 
   getNumberOfUnreadNotification(){
       db.collection('all_notifications').where('notification_status','==',"unread")
       .onSnapshot((snapshot)=>{
           var unread = snapshot.docs.map((doc)=>doc.data())
           this.setState({
               value : unread.length
           })
       })
   }

   componentDidMount(){
       this.getNumberOfUnreadNotification()
   }

   bellIconWithBadge=()=>{
       return(
           <View>
               <Icon name='bell' type = 'font-awesome' color = "green" size = {25}
               onPress = {()=>this.props.navigation.navigate('Notification')} />

               <Badge value = {this.state.vale} containerStyle = {{position : 'absolute',top:-4,right:-4}} />
           </View>
       )
   }
   



render(){
return(
<Header
leftComponent = {<Icon name = 'bars' type = 'font-awesome' color = "orange"
 onPress = {()=>this.props.navigation.toggleDrawer()}/>}

centerComponent = {{text: props.title , style :{ color:'purple', fontSize:20,fontWeight:"bold"}}}

rightComponent = {<this.bellIconWithBadge {...this.props} />}

backgroundColor = "pink"
/>


)


}

}


