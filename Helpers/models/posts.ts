import { Schema, model, models } from 'mongoose'
const commentSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    comment: {
        type: String,
        required: true
    }
});
const PostSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    banner: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    categories: { type: Array },
    tags: { type: Array },
    date: {
        type: Date,
        default: Date.now
    },
    comments: { commentSchema }
})


const Posts = models.User || model("Posts", PostSchema)
export default Posts