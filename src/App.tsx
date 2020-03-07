import React from 'react';
import './App.css';

import DayModel from './models/day';
import TaskModel from './models/task';
import UserModel from './models/user';

import Day from './components/day';

interface BaseProps {};
interface BaseState {
  days: Array<DayModel>;
};

class App extends React.Component<BaseProps, BaseState> {
  readonly state: BaseState = {
    days: this.initDays(),
  }

  initDays() {
    const days: Array<DayModel> = [];

    const dayStrings = [
      '2020-05-11',
      '2020-05-12',
      '2020-05-13',
      '2020-05-14',
    ];

    const user: UserModel  = {
      id: 0,
      nickname: 'BluePrint',
      phone: '0737565044',
      email: 'martin.bjorling@birdie.org',
      admin: true,
    }

    const task: TaskModel = {
      id: 0,
      parentId: null,
      name: 'Test',
      description: 'Test task',
      responsible: user,
      requiredAmount: 2,
      assigned: [user, user],
      inProgress: false,
      completed: false
    }

    const taskList: Array<TaskModel> = [];

    for (let index = 0; index < 5; index++) {
      taskList.push(task);
    }

    let date: DayModel;

    dayStrings.forEach(day => {
      date = {
        id: 0,
        date: new Date(day),
        tasks: taskList
      };
      days.push(date);
    });

    return days;
  }

  render() {
    console.log(this.state.days);
    return (
      <div className="App">
        {this.state.days.map((day, index) => {
          return (
            <Day key={index} day={day} />
          );
        })}
      </div>
    );
  }
}

export default App;
