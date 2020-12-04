import React, {useEffect, useState} from 'react'
import { Text, View, TouchableOpacity } from "react-native";
import { Provider as PaperProvider } from 'react-native-paper';
import { NavigationContainer } from "@react-navigation/native";
import Navigation from "./src/navigation/Navigation";
import firebase from "./src/utils/Firebase";
import { decode, encode } from "base-64";
import "firebase/auth";

if(!global.btoa) global.btoa=encode;
if(!global.atob) global.atob=decode;

export default function App() {
  const [user, setUser] = useState(undefined)
  useEffect(() => {
    firebase.auth().onAuthStateChanged((response)=>
    {
      setUser(response);
    });
  }, []);

  if(user === undefined) return null;
  return (
    <PaperProvider>
      <NavigationContainer>
        <Navigation>
        </Navigation>
        {user ? <Logout></Logout> : <Text>No estas logueado</Text>}
      </NavigationContainer>
    </PaperProvider>
  );
}
function Logout() {
  const logout = () =>
  {
    firebase.auth().signOut();
  }
  return(
    <View>
      <Text>Estas logueado</Text>
      <TouchableOpacity onPress={logout}><Text>Cerrar sesión</Text></TouchableOpacity> 
    </View>
  )
  
}

