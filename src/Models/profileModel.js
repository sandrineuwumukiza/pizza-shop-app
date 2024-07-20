import mongoose from "mongoose"
 
const ProfileSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Type.ObjectId,
        ref: 'User'

    },
    location: {
        type: String,

    }
})
const Profile = mongoose.model('Profile', ProfileSchema);

export default Profile;

