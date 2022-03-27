import mongoose from "mongoose"
const { Schema, SchemaTypes } = mongoose

const userSchema = new Schema({
  firstName: SchemaTypes.String,
  lastName: SchemaTypes.String,
  userName: SchemaTypes.String,
  email: SchemaTypes.String,
  password: SchemaTypes.String,
  profilePicture: SchemaTypes.String,
  gender: SchemaTypes.String,
})

export const User = mongoose.model("User", userSchema)
