import UserModel from './user';

export default interface TaskModel {
    id: number;
    parentId: number | null;
    name: string;
    description: string;
    responsible: UserModel;
    requiredAmount: number;
    assigned: Array<UserModel>;
    inProgress: boolean;
    completed: boolean;
}
