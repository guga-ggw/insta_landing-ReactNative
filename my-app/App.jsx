import { StatusBar } from 'expo-status-bar';
import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';


export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
      </View>
      
      <View style={styles.content}>
        <Image
          source={require('./Images/logo.png')} 
          style={styles.image}
        />
        <Text style={styles.title}>Welcome to Instagram</Text>
        <Text style={styles.subtitle}>Connect with friends and the world around you.</Text>
        
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
        
        <Text style={styles.loginLink}>Already have an account? Log in</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    padding: 20,
    alignItems: 'center',
  },
  logo: {
    width: 120,
    height: 40,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '80%',
    height: 200,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 20,
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 20,
  },
  button: {
    backgroundColor: 'blue',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  loginLink: {
    marginTop: 20,
    color: 'blue',
    textDecorationLine: 'underline',
  },
});
