import * as mongoose from 'mongoose'

export const UserPodcastSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Podcast must have a string'],
        maxlength: [128, 'Title is too long'],
        match: [
            /^(?![0-9_.-]+$)[ A-Za-zñáéíóúü0-9_.&-]*$/,
            'You may only use _ . - | Letters are required',
        ],
        trim: true,
    },
    description: {
        type: String,
        required: false,
        maxlength: [256, 'Description is too long'],
        trim: true,
    },
    episode: {
        type: Number,
        required: false,
    },
    podcastCoverFile: {
        type: String,
        required: [true, 'Podcast must have a cover'],
    },
    podcastAudioFile: {
        type: String,
        required: [true, 'Podcast must an audio file'],
    },
    creatorName: {
        type: String,
        required: [true, 'Username must be associated with podcast'],
    },
    podcastId: {
        type: String,
        required: true,
    },
    creatorId: {
        type: String,
        required: true,
    },
})
