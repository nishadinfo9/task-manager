import mongoose, { ObjectId, Schema } from "mongoose";

export interface Task extends Document {
  owner: ObjectId;
  title: string;
  description?: string;
  priority: "Low" | "Medium" | "High";
  status: "Pending" | "In Progress" | "Completed";
  dueDate?: Date;
  createdAt: Date;
  updatedAt: Date;
  createdBy: string;
  assignedTo?: string;
  tags?: string[];
}

const taskSchema: Schema<Task> = new Schema(
  {
    owner: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    title: {
      type: String,
      required: [true, "Title is required"],
    },
    description: {
      type: String,
      default: "",
    },
    priority: {
      type: String,
      enum: ["Low", "Medium", "High"],
      required: [true, "Priority is required"],
    },
    status: {
      type: String,
      enum: ["Pending", "In Progress", "Completed"],
      required: [true, "Status is required"],
      default: "Pending",
    },
    dueDate: {
      type: Date,
      default: [true, "status is required"],
    },
    assignedTo: {
      type: String,
      default: "",
    },
    tags: {
      type: [String],
      default: [],
    },
  },
  { timestamps: true }
);

const taskModel =
  (mongoose.models.Task as mongoose.Model<Task>) ||
  mongoose.model<Task>("Task", taskSchema);
export default taskModel;
