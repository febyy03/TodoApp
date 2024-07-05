import React, {useState} from 'react';
import {View, TextInput, Button, StyleSheet} from 'react-native';
import {getTasks, saveTasks} from '../services/taskService';

const TaskFormScreen = ({route, navigation}) => {
  const {task, isEditing} = route.params || {};
  const [name, setName] = useState(task ? task.name : '');
  const [category, setCategory] = useState(task ? task.category : 'personal');

  const handleSave = async () => {
    const tasks = await getTasks();
    if (isEditing) {
      const updatedTasks = tasks.map(t =>
        t.id === task.id ? {...t, name, category,} : t,
      );
      await saveTasks(updatedTasks);
    } else {
      const newTask = {
        id: Date.now(),
        name,
        category,
        completed: false,
      };
      await saveTasks([...tasks, newTask]);
    }
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Task Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Category (e.g. work, group, personal)"
        value={category}
        onChangeText={setCategory}
      />
      <Button title="Save Task" onPress={handleSave} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    color: 'blue',
  },
  input: {
    height: 40,
    borderColor: 'grey',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 7,
    backgroundColor: 'grey',
  },
});

export default TaskFormScreen;



