// import React, {useEffect, useState} from 'react';
// import {SafeAreaView, FlatList, Button, StyleSheet} from 'react-native';
// import TaskItem from '../components/TaskItem';
// import {getTasks, saveTasks} from '../services/taskService';

// const HomeScreen = ({navigation}) => {
//   const [tasks, setTasks] = useState([]);

//   useEffect(() => {
//     const fetchTasks = async () => {
//       const tasks = await getTasks();
//       setTasks(tasks);
//     };
//     fetchTasks();
//   }, []);

//   const toggleComplete = async taskId => {
//     const updatedTasks = tasks.map(task =>
//       task.id === taskId ? {...task, completed: !task.completed} : task,
//     );
//     setTasks(updatedTasks);
//     await saveTasks(updatedTasks);
//   };

//   const deleteTask = async taskId => {
//     const updatedTasks = tasks.filter(task => task.id !== taskId);
//     setTasks(updatedTasks);
//     await saveTasks(updatedTasks);
//   };

//   return (
//     <SafeAreaView style={styles.container}>
//       <Button
//         title="Add Task"
//         onPress={() => navigation.navigate('TaskForm')}
//       />
//       <FlatList
//         data={tasks}
//         keyExtractor={item => item.id.toString()}
//         renderItem={({item}) => (
//           <TaskItem
//             task={item}
//             onToggleComplete={toggleComplete}
//             onDelete={deleteTask}
//           />
//         )}
//       />
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 12,
//     backgroundColor: '#dcdcdc',
//     textAlign: 'blue',
//   },
// });

// export default HomeScreen;
import React, {useEffect, useState} from 'react';
import {SafeAreaView, FlatList, Button, StyleSheet, Text, View} from 'react-native';
import TaskItem from '../components/TaskItem';
import {getTasks, saveTasks} from '../services/taskService';

const HomeScreen = ({navigation}) => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      const tasks = await getTasks();
      setTasks(tasks);
    };
    fetchTasks();
  }, []);

  const toggleComplete = async taskId => {
    const updatedTasks = tasks.map(task =>
      task.id === taskId ? {...task, completed: !task.completed} : task,
    );
    setTasks(updatedTasks);
    await saveTasks(updatedTasks);
  };

  const deleteTask = async taskId => {
    const updatedTasks = tasks.filter(task => task.id !== taskId);
    setTasks(updatedTasks);
    await saveTasks(updatedTasks);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Task Manager</Text>
      </View>
      <Button
        title="Add Task"
        onPress={() => navigation.navigate('TaskForm')}
        color="#841584"
      />
      <FlatList
        data={tasks}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <TaskItem
            task={item}
            onToggleComplete={toggleComplete}
            onDelete={deleteTask}
          />
        )}
        contentContainerStyle={styles.list}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  header: {
    padding: 17,
    backgroundColor: 'grey',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
  list: {
    padding: 1,
  },
});

export default HomeScreen;
