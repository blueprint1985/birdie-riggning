import UserModel from './user';

export default interface TaskModel {
    id: number;
    day_id: number;
    name: string;
    description: string;
    responsible: UserModel;
    requiredAmount: number;
    assigned: Array<UserModel>;
    inProgress: boolean;
    completed: boolean;
}
