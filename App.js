import { StyleSheet, Text, View } from 'react-native';
import Title from './src/components/title';
import Form from './src/components/Form';

export default function App() {
  return (
    <View style={styles.container}>
      <Form/>
      <Title/>
    </View>
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
