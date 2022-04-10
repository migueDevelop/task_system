import mongoose from "mongoose";
/**Functionalities:
 * Schema: documents
 * Model: collections
 */

const taskSchema = mongoose.Schema(
  {
    //create schema
    title: {
      //Elements and conditions
      type: String,
      require: true, //Element is require
      unique: true, //Can't repeat
      trim: true, //Remove spaces
    },
    description: {
      type: String,
      require: true,
    },
    done: {
      type: Boolean,
      default: false, //As default it is set to false unless it changes.
    },
  },
  {
    //this property allow us to show the properties 'updatedAt' and 'createdAt'.
    timestamps: true,
    versionKey: false, //Eliminates the '__v:0' set as default.
  }
);

//export model
export default mongoose.model("Task", taskSchema);
