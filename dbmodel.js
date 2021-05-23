import mongoose  from'mongoose'

const tiktokschema=mongoose.Schema({
    url: String,
        channel: String,
        song: String,
    descript: String,
        likes: String,
    msgs: String,
        shares: String,
});

export default mongoose.model('Tiktokvideos',tiktokschema);