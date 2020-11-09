  import {Document, model , Schema} from 'mongoose';

  export interface IContractor extends Document {
    name : string,
    lastname : string,
    nit :  number,
    birth_date : string,
    address : string,
    phone : number,
    email : string,
    company : string
  }

  const contractorSchema : Schema = new Schema({
    name: { type: String, required : true},
    lastname: { type: String, required : true},
    nit: { type: Number, required : true, unique : true},
    birth_date : { type: String, required : true},
    address : { type: String, required : true},
    phone: { type: Number, required : true},
    email : { type: String, required : true, unique : true},
    company : { type: String, required : true}
  });

  export default model<IContractor>('Contractor', contractorSchema);
