import { StyleSheet, Text, View } from 'react-native';
import Title from '.src/components/Title/index';
import Form from './src/components/form';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Fabiano e Helena</Text>
      <Title/>
      <Form/>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0e5e5',
    paddingTop: 80,
  },
});
