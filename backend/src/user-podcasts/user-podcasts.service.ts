import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { MinioClientService } from 'src/minio-client/minio-client.service'
import { IUserPodcast } from './interfaces/user-podcast.interface'

@Injectable()
export class UserPodcastsService {
    constructor(
        @InjectModel('UserPodcast')
        private readonly userPodcastModel: Model<IUserPodcast>,
        private minioClientService: MinioClientService,
    ) {}

    async getAllUserPodcasts(userId: string): Promise<IUserPodcast[]> {
        try {
            const allUserPodcasts = await this.userPodcastModel.find({
                creatorId: userId,
            })
        } catch (error) {
            return error
        }
    }
}
