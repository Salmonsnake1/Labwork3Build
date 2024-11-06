import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { auth } from '../firebase';

const HomeScreen = () => {
  const navigation = useNavigation();

  
  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.replace("Login");
      })
      .catch(error => alert(error.message));
  };

  
  const handleGoToTodo = () => {
    navigation.navigate("ToDo"); 
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleGoToTodo} style={styles.todoButton}>
        <Text style={styles.todoButtonText}>Go to To-Do List</Text>
      </TouchableOpacity>

      <View style={styles.bottomContainer}>
        <Text>Email: {auth.currentUser?.email}</Text>
        <TouchableOpacity onPress={handleSignOut} style={styles.button}>
          <Text style={styles.buttonText}>Sign Out</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  todoButton: {
    backgroundColor: '#34A853',
    width: '60%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    position: 'absolute',
    top: '40%',
  },
  todoButtonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },
  bottomContainer: {
    position: 'absolute',
    bottom: 30,
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#0782F9',
    width: '60%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },
});