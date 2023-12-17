import { useState } from "react";
import { StyleSheet, Text, View,TextInput,Button } from "react-native";

export default function App() {

  const [enteredGoalText,setEnteredText]=useState('');
  const [courseGoals,setCourseGoals]=useState([]);

  function goalInputHandler(enteredText){
    setEnteredText(enteredText);
  };

  function addGoalHandler(){
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      enteredGoalText,
    ]);
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputSection}>
        <TextInput style={styles.inputText} placeholder="enter the task!" onChangeText={goalInputHandler}></TextInput>
        <Button title="Submit" onPress={addGoalHandler}></Button>
      </View>
      <View style={styles.listContainer}>
          {courseGoals.map((goal) => <Text key={goal}>{goal}</Text> 
          )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    flex:1,
    paddingTop:50,
    paddingHorizontal:16
  },
  inputSection:{
    flex:1,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    paddingBottom:24,
    borderBottomWidth:2,
  },
  inputText:{
    width:'75%',
    borderWidth:1,
    borderRadius:25,
    borderColor:'#cccccc',
    padding:10,
    paddingLeft:18,
    marginRight:5
  },
  listContainer:{
    flex:6,
    paddingTop:15,
  }
});
