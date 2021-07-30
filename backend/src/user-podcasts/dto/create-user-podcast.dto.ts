export class CreateUserPodcastDto {
    readonly title: string
    readonly description: string
    readonly episode: number
    readonly podcastCoverFile: string
    readonly podcastAudioFile: string
    readonly creatorName: string
    readonly podcastId: string
    readonly creatorId: string
}
