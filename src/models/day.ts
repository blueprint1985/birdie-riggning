import TaskModel from './task';

export default interface DayModel {
    id: number;
    date: Date;
    tasks: Array<TaskModel>;
}
