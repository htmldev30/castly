import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { MinioClientModule } from 'src/minio-client/minio-client.module'
import { UserPodcastSchema } from './schema/user-podcast.schema'
import { UserPodcastsController } from './user-podcasts.controller'
import { UserPodcastsService } from './user-podcasts.service'

@Module({
    imports: [
        MinioClientModule,
        MongooseModule.forFeature([
            { name: 'UserPodcast', schema: UserPodcastSchema },
        ]),
    ],
    providers: [UserPodcastsService],
    controllers: [UserPodcastsController],
})
export class UserPodcastsModule {}
