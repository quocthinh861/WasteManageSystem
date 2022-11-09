import { Double } from "mongodb";
import mongoose, { Schema, Document } from "mongoose";

export interface IMcp {
  mcpId: string;
  capacity: Double;
  location?: String;
}

export interface IMcpModel extends IMcp, Document {}

const McpSchema: Schema = new Schema(
  {
    mcpId: { type: String, require: true },
    capacity: { type: Double, require: false },
    location: String,
  },
  {
    collection: "MCP",
  }
);

export default mongoose.model<IMcpModel>("Mcp", McpSchema);
