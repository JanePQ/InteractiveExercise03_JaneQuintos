const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const CourseSchema = new Schema({
    created: {
        type: Date,
        default: Date.now
    },
    courseCode: {
        type: String,
        default: '',
        trim: true,
        required: 'Course code cannot be blank'
    },
    courseName: {
        type: String,
        default: '',
        trim: true,
        required: 'Course name cannot be blank'
    },
    section: {
        type: String,
        default: '',
        trim: true,
        required: 'Section cannot be blank'
    },
    semester: {
        type: String,
        default: '',
        trim: true,
        required: 'Course semester cannot be blank'
    },
    creator: {
        type: Schema.ObjectId,
        ref: 'User'
    }
});
mongoose.model('Article', ArticleSchema);
