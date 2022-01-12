import { StyleSheet, Text, View } from 'react-native';
import Calculatrice from "./src/components/Calculatrice";

export default function App() {
  return (
    <Calculatrice/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
