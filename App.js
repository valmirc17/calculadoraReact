import React, { useState } from 'react';
import { SafeAreaView, View, Text, StyleSheet, TextInput } from 'react-native';
import { Button, Provider as PaperProvider, DefaultTheme } from 'react-native-paper';

export default function App() {
  const [value1, setValue1] = useState('');
  const [value2, setValue2] = useState('');
  const [result, setResult] = useState('');

  const handleOperation = (operation) => {
    const num1 = parseFloat(value1);
    const num2 = parseFloat(value2);

    if (isNaN(num1) || isNaN(num2)) {
      setResult('Insira números válidos');
      return;
    }

    switch (operation) {
      case 'add':
        setResult((num1 + num2).toString());
        break;
      case 'subtract':
        setResult((num1 - num2).toString());
        break;
      case 'multiply':
        setResult((num1 * num2).toString());
        break;
      case 'divide':
        if (num2 === 0) {
          setResult('Divisão por zero não permitida');
        } else {
          setResult((num1 / num2).toString());
        }
        break;
      default:
        setResult('');
    }
  };

  const clearAll = () => {
    setValue1('');
    setValue2('');
    setResult('');
  };

  return (
    <PaperProvider theme={theme}>
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Calculadora</Text>

        {/* Inputs */}
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          placeholder="Primeiro valor"
          value={value1}
          onChangeText={setValue1}
        />
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          placeholder="Segundo valor"
          value={value2}
          onChangeText={setValue2}
        />

        {/* Botões das operações */}
        <View style={styles.buttonRow}>
          <Button mode="contained" onPress={() => handleOperation('add')} style={styles.button_add}>
            +
          </Button>
          <Button mode="contained" onPress={() => handleOperation('subtract')} style={styles.button_sub}>
            -
          </Button>
          <Button mode="contained" onPress={() => handleOperation('multiply')} style={styles.button_mult}>
            *
          </Button>
          <Button mode="contained" onPress={() => handleOperation('divide')} style={styles.button_div}>
            /
          </Button>
        </View>

        {/* Botão de limpar */}
        <Button mode="contained" onPress={clearAll} style={styles.clearButton}>
          Limpar
        </Button>

        {/* Resultado */}
        {result !== '' && (
          <Text style={styles.resultText}>Resultado: {result}</Text>
        )}
      </SafeAreaView>
    </PaperProvider>
  );
}

// Tema
const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary:'#FF5F70',
    accent: '#f8b195',
    background: '#fefefe',
    surface: '#ffddd2',
    text: '#355c7d',
    buttonText: '#ffffff',
    add: '#64A5FF',
    sub: '#C4FF6D',
    mult: '#FFC66B',
    div: '#9160FF'
  },
};

// Estilos da aplicação
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    color: theme.colors.text,
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 12,
    paddingHorizontal: 10,
    fontSize: 18,
    width: '100%',
    backgroundColor: '#fff',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 20,
  },
  button_add:{
    marginHorizontal: 5,
    width: 60,
    backgroundColor: theme.colors.add,
  },
  button_sub:{
    marginHorizontal: 5,
    width: 60,
    backgroundColor: theme.colors.sub,
  },
  button_mult:{
    marginHorizontal: 5,
    width: 60,
    backgroundColor: theme.colors.mult,
  },
  button_div:{
    marginHorizontal: 5,
    width: 60,
    backgroundColor: theme.colors.div,
  },
  clearButton: {
    backgroundColor: theme.colors.primary,
    marginBottom: 20,
  },
  resultText: {
    fontSize: 20,
    color: theme.colors.text,
    marginTop: 20,
  },
});
