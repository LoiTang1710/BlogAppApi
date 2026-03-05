import mongoose from "mongoose";

/**
 * TODO: Validation cho model trước khi đổ data vào database
 */
const blogSchema = new mongoose.Schema({

    title:{
        type: String,
        required: true,
        trim: true
    },
    content: {
        type: String,
        require: true,
        trim: true
    },
    category: {
        type: String,
        require: true,
        trim: true
    },
    tags: [{
        type: String,
        require: true
    }]

},
{
    timestamps: true // tu dong tao createdAt va updateAt
}
)
const Blog = mongoose.model("Blog", blogSchema)
export default Blog
