import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const TaskItem = ({task, onToggleComplete, onDelete}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => onToggleComplete(task.id)}>
        <Text style={[styles.task, task.completed && styles.completed]}>
          {task.name}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.deleteButton} onPress={() => onDelete(task.id)}>
        <Text style={styles.delete}>Delete</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  task: {
    fontSize: 18,
  },
  completed: {
    textDecorationLine: 'line-through',
    color: 'gray',
  },
  deleteButton: {
    borderWidth: 1,
    borderColor: 'pink',
    backgroundColor: 'grey',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
  },
  delete: {
    color: 'white',
  },
});

export default TaskItem;
