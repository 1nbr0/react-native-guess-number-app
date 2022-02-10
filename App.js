import React, {useState, useRef} from 'react';
import { StyleSheet, View, Text, Button, TextInput, Pressable } from 'react-native';
import { Layout } from './src/components/Layout';
import { Title } from './src/components/Title';

export default function App() {

  const [started, setStarted] = useState(false);
  const [status, setStatus] = useState("");
  const [answer, setAnswer] = useState(0);
  const [rightAnswer, setRightAnswer] = useState(0);

  const result = () => {
    const formValid = answer >= 0;
    if (!formValid) {
      return;
    }
    if ( answer === rightAnswer) {
      setStatus(`Félicitation ! 🥳 \nVous avez trouvé : ${rightAnswer}` );
      setStarted(false)
    } else if ( answer < rightAnswer) {
      setStatus(`${answer} Est trop petit ... 🤡`);
    } else {
      setStatus(`${answer} Est trop grand ! 🤪`);
    }
  }

  const start = ( min=1, max=100 ) => {
    setRightAnswer(Math.floor(Math.random() * (max - min) + min))
    setStarted(true)
  }

  const handlePressStart = () => {
    start()
    setAnswer(0)
    setStatus("")
  }

  return (
    <Layout>
      <View style={styles.container}>
        <Title before={'Guess '} text={'A Number'} />
        <Text style={styles.instruction}>De 0 à 100</Text>
        { started && (
        <>
        <View style={styles.inputContainer}>
          <TextInput 
              value={answer ? answer.toString() : ""}
              keyboardType='number-pad'
              style={styles.input}
              placeholder='Enter Number' 
              onChangeText={(newNumber) => setAnswer(parseInt(newNumber))} />
        </View> 
        <View>
        <Text style={styles.textAnswer}>Votre réponse : {answer}</Text>
      </View>
      <View style={styles.game}>
        <Pressable style={styles.confirmInputButton} onPress={() => result()} >
          <Text style={styles.confirmInputButtonText}>Confirmer</Text>
        </Pressable>
      </View>
        </>
        )
        }
      <View style={styles.containerStatus}>
        <Text style={styles.textStatus}>{status}</Text>
      </View>
      <Pressable style={styles.startButton} onPress={() => handlePressStart()} >
        <Text style={styles.startButtonText}>Start New Game</Text>
      </Pressable>
      </View>
    </Layout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: "5%",
  },
  instruction: {
    fontSize: 30,
  },
  game: {
    flexGrow: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: 10,
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderColor: "black",
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: 50,
    padding: 10,
    marginVertical: 15,
  },
  input: {
    flex: 1,
    width: 100,
  },
  textAnswer: {
    fontSize: 25,
  },
  confirmInputButton: {
    backgroundColor: 'gold',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
  confirmInputButtonText: {
    color: 'black',
    fontSize: 20,
    lineHeight: 25,
    padding: 10,
  },
  containerStatus: {
    flex: 1,
    alignItems: 'center',
  },
  textStatus: {
    fontSize: 20,
  },
  startButton: {
    position: 'absolute',
    right: '5%',
    bottom: '5%',
    backgroundColor: 'gold',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
  startButtonText: {
    color: 'black',
    fontSize: 20,
    lineHeight: 25,
    padding: 10,
  },
});
