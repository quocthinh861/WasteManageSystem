import { Double } from "mongodb";
import mongoose, { Schema, Document } from "mongoose";

export interface IEmployee {
  employeeId: string;
  name: Double;
  phone: String;
  email: String
  hiredDate: Date
}

export interface IVehicleModel extends IEmployee, Document {}

const McpSchema: Schema = new Schema(
  {
    employeeId: { type: String, require: true },
    name: { type: String, require: true },
    email: { type: String, require: false },
    phone: { type: BigInt, require: false },
    hiredDate: { type: Date, require: false },
  },
  {
    collection: "Employee",
  }
);

export default mongoose.model<IVehicleModel>("Employee", McpSchema);
