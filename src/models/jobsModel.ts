import { Document, model, Schema } from 'mongoose';
import { IEmployees } from './employeesModel';
import { IContractor } from './contractorsModel';


export interface IJobs extends Document {
    employees: IEmployees | string,
    contractors: IContractor | string,
    hour_to_work: number,
    start_date: string,
    name_jobs: string,
    worked_time: number
}

const jobsSchema: Schema = new Schema({
    employees: {
        type: Schema.Types.ObjectId, ref: 'Employees', required: true
    },
    contractors: {
        type: Schema.Types.ObjectId, ref: 'Contractors', required: true
    },
    hour_to_work: { type: Number, required: true },
    start_date: { type: String, required: true },
    name_jobs: { type: String, required: true },
    worked_time: { type: Number, required: true }
});

export default model<IJobs>('Jobs', jobsSchema);
