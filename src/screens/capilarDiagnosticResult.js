import React from 'react';
import 'react-native-gesture-handler';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
} from 'react-native';

import {
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import Headerr from '../components/header';
import Space from '../components/space';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    justifyContent: 'flex-start',
    flexDirection: 'column',
    backgroundColor: '#fff',
  },
  textResultado: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 20,
    left: 20,
  },

  textProblem: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 16,
    left: 20,
  },
  textProblemR: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 16,
    left: 20,
  },
  textSoluc: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 16,
    left: 20,
  },
  textSolucR: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 16,
    textAlignVertical: 'center',
    left: 20,
  },
  viewProblem: {
    backgroundColor: '#e8e8e8',
    height: 40,
  },
  viewSoluc: {
    backgroundColor: '#e8e8e8',
    height: 40,
  },
});

export default function capilarDiagnosticResult({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <Headerr navigation={navigation} />

      <Text style={styles.textResultado}>Resultado</Text>

      <Space />
      <View style={styles.viewProblem}>
        <Text style={styles.textProblem}>Os seus problemas:</Text>
      </View>

      <Space />
      <Text style={styles.textProblemR}>-Piolhos:</Text>

      <Space />
      <View style={styles.viewSoluc}>
        <Text style={styles.textSoluc}>Soluções:</Text>
      </View>

      <Space />
      <Text style={styles.textSolucR}>
        -Champo de tratamento de piolhos e lêndeas
      </Text>
      <Space />
      <Space />
      <Space />
      <Space />
      <Space />
      <Space />
      <Space />
      <Space />
    </SafeAreaView>
  );
}
