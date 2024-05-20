import mongoose from "mongoose";

const courseSchema = mongoose.Schema({
    name: String,
    price: Number,
    category: String,
    image: String,
    main_teacher: String,
});
const Course = mongoose.model("Course", courseSchema);

export default Course;