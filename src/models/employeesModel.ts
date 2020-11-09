import  { Document, model, Schema } from 'mongoose';


export interface IEmployees extends Document {
  name: string,
  lastname: string,
  nit: number,
  type_contract: string,
  birth_date: string,
  address: string,
  phone: number,
  email: string
}

const employeesSchema: Schema = new Schema({
  name: { type: String, required: true },
  lastname: { type: String, required: true },
  nit: { type: Number, required: true, unique: true },
  type_contract: { type: String, required: true },
  birth_date: { type: String, required: true },
  address: { type: String, required: true },
  phone: { type: Number, required: true },
  email: { type: String, required: true, unique: true }
});

export default model<IEmployees>('Employees', employeesSchema);

