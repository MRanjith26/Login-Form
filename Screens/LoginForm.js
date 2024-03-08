import React, {useState} from 'react';
import {View,Text,StyleSheet, TouchableOpacity, Button, TextInput} from 'react-native';

function LoginForm(){
const [name, setName]= useState('')
const [password, setPassword] = useState('')

return(
    <View style={styles.loginContainer}>
        <View style={styles.inputContainer}>
            <TextInput
            style={styles.input}
            placeholder="username"
            value={name}
            onChange={(text)=>{
                setName(text)
            }}
        />        
      </View>
        <View style={styles.inputContainer}>
            <TextInput
            style={styles.input}
            placeholder="password"
            // for password
            secureTextEntry
            value={password}
            onChange={(text)=>{
                setPassword(text)
            }}
            />
        </View>
        <TouchableOpacity style={styles.button} >
             <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
    </View>
)
}

const styles=StyleSheet.create ({
   loginContainer: {
    padding:20,
    borderColor: "gray",
    borderWidth:2,
    borderRadius:10,
    display:'flex',
    flexDirection:'column',
    justifyContent:'center', 
    alignItems:'center',
   },
   inputContainer:{
    marginTop:10,
    marginBottom:10,
   },
   input: {
    borderColor: "gray",
    width: 300,
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    fontFamily:'Open Sans',
    fontSize:16,
    color:'#000000',
   },
   button: {
    backgroundColor:'#000000',
    padding:12,
    borderRadius:9,
    marginTop:20,
    width:200,
   },
   buttonText: {
    fontFamily:'Open Sans',
    color:'#ffffff',
    fontSize:12,
    textAlign:'center',
   }
})
export default LoginForm