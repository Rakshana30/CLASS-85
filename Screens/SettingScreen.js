import React,{Component} from 'react';
import {StyleSheet, Text, TouchableOpacity, TextInput, 
        View, Alert, KeyboardAvoidingView} from 'react-native'
import MyHeader from '../components/MyHeader'
import db from '../config'
import firebase from 'firebase'

export default class SettingScreen extends Component{

    constructor(){
        super()
        this.state={
          emailId:'',
          firstName:'',
          lastName:'',
          address:'',
          contact:'',
          docId:''  
        }
    }


    getUserDetails=()=>{
        var email = firebase.auth().currentUser.email;
        db.collection('users').where('email_id','==',email).get()
        .then(snapshot => {
          snapshot.forEach(doc => {
          var data = doc.data()
            this.setState({
              emailId   : data.email_id,
              firstName : data.first_name,
              lastName  : data.last_name,
              address   : data.address,
              contact   : data.contact,
              docId     : doc.id
            })
          });
        })
      }
    componentDidMount(){
        this.getUserDetails()
      }

      updateUserDetails=()=>{
        db.collection('users').doc(this.state.docId)
        .update({
          "first_name": this.state.firstName,
          "last_name" : this.state.lastName,
          "address"   : this.state.address,
          "contact"   : this.state.contact,
        })
    
        Alert.alert("Profile Updated Successfully")
    
      }

   render(){
       return(
           <View style={Styles.container}>
               <MyHeader title = "settings" navigation ={this.props.navigation}  />
               <View style={styles.formContainer}>
                   <TextInput style={styles.formTextInput}
                   placeholder={"firstName"}
                   maxLength ={8}
                   onChangeText={(text)=>{
                     this.setState({
                       firstName: text
                     })
                   }}
                   value ={this.state.firstName}
                   />

<TextInput style={styles.formTextInput}
                   placeholder={"lasttName"}
                   maxLength ={8}
                   onChangeText={(text)=>{
                     this.setState({
                       lastName: text
                     })
                   }}
                   value ={this.state.lastName}
                   />

<TextInput style={styles.formTextInput}
                   placeholder={"address"}
                  multiline = {TabRouter}
                   onChangeText={(text)=>{
                     this.setState({
                       address: text
                     })
                   }}
                   value ={this.state.address}
                   />

<TextInput style={styles.formTextInput}
                   placeholder={"contact"}
                   maxLength ={10}
                   keyboardType = {'numeric'}
                   onChangeText={(text)=>{
                     this.setState({
                       contact: text
                     })
                   }}
                   value ={this.state.contact}
                   />
<TouchableOpacity style={styles.button}
onPress={()=>{
    this.updateUserDetails()
}}
>
<Text style = {style.buttonText}>save</Text>
</TouchableOpacity>




                   
               </View>
           </View>
       )
   } 

}
