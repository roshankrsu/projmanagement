import mongoose, { Schema } from "mongoose";
const  projectNoteSchema = new Schema({
       project: {
        type: Object.Types.ObjectId,
        ref: "Project",
        required: true
       },
       createdBy: {
        type: Object.Types.ObjectId,
        ref: "User",
        required: true
       },
       Content: {
        type: String,
        required: true
       }
}, {timestamps: true})

export const ProjectNote = mongoose.model("ProjectNote", projectNoteSchema)