import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.container1}>
        <View style={styles.view11}>
          
        </View>
        <View style={styles.view12}>

        </View>
        <View style={styles.view13}>

        </View>
      </View>

      <View style={styles.container2}>
          <View style={styles.view21}>

          </View>
          <View style={styles.view22}>

          </View>
      </View>

      <View style={styles.container3}>
        <View style={styles.view31}>

        </View>
        <View style={styles.view32}>

        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: "stretch",
    justifyContent: 'center',
    margin: 10,
  },
  container1: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#0000',
  
  },
  container2: {
    flex: 1.5,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  container3: {
    flex: 4,
    flexDirection:'row',
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  view11: {
    flex: 1,
    backgroundColor: '#f11',
    alignItems: 'center',
    justifyContent: 'center',
  },
  view12: {
    flex: 2,
    backgroundColor: '#bbbb',
    alignItems: 'center',
    justifyContent: 'center',
  },
  view13: {
    flex: 2,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  view21: {
    flex: 1,
    backgroundColor: '#1ddd',
    alignItems: 'center',
    justifyContent: 'center',
  },
  view22: {
    flex: 1,
    backgroundColor: '#555',
    alignItems: 'center',
    justifyContent: 'center',
  },
  view31: {
    flex: 1,
    backgroundColor: '#129',
    alignItems: 'center',
    justifyContent: 'center',
  },
  view32: {
    flex: 1,
    backgroundColor: '#faa',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
