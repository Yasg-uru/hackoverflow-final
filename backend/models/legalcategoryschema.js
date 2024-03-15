import { Schema, model } from "mongoose";

const categorySchema = new Schema({
  name: { type: String, required: true, unique: true },
  description: { type: String },
  articles: [
    {
      title: { type: String, required: true },
      content: { type: String, required: true },

      tags: [{ type: String }],
      references: [{ type: String }],
    },
  ],
});

const Category = model("Category", categorySchema);

export default Category;
