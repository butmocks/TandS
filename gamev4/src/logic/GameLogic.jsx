// Example: Example of SQLite Database in React Native
// https://aboutreact.com/example-of-sqlite-database-in-react-native
// Screen to view single user

import React, { useState } from 'react';
import { Text, View, SafeAreaView } from 'react-native';
import Mytextinput from './components/Mytextinput';
import Mybutton from './components/Mybutton';
import { openDatabase } from 'react-native-sqlite-storage';

// var db = openDatabase({ name: '../UserDatabase.db' });
var db = openDatabase({ name: '../data/gamedb.db' });

// const ViewUser = () => {
//   let [inputUserId, setInputUserId] = useState('');
//   let [userData, setUserData] = useState({});



const ViewTask = () => {
  let [inputTaskId, setInputTaskId] = useState('');
  let [taskData, setTaskData] = useState({});


  let searchTask = () => {
    console.log(inputTaskId);
    setTaskData({});
    db.transaction((tx) => {
      tx.executeSql(
        'SELECT * FROM whitegame where task_id = ?',
        [inputTaskId],
        (tx, results) => {
          var len = results.rows.length;
          console.log('len', len);
          if (len > 0) {
            setTaskData(results.rows.item(0));
          } else {
            alert('No task found');
          }
        }
      );
    });
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, backgroundColor: 'white' }}>
        <View style={{ flex: 1 }}>
          <Mytextinput
            placeholder="Enter task Id"
            onChangeText={
              (inputTaskId) => setInputTaskId(inputTaskId)
            }
            style={{ padding: 10 }}
          />
          <Mybutton title="Search User" customClick={searchTask} />
          <View
            style={{
              marginLeft: 35,
              marginRight: 35,
              marginTop: 10
            }}>
            <Text>User Id: {taskData.user_id}</Text>
            <Text>User Task: {taskData.user_name}</Text>

          </View>
        </View>
        <Text
          style={{
            fontSize: 18,
            textAlign: 'center',
            color: 'grey'
          }}>
          Example of SQLite Database in React Native
        </Text>
        <Text
          style={{
            fontSize: 16,
            textAlign: 'center',
            color: 'grey'
          }}>
          www.aboutreact.com
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default ViewTask;