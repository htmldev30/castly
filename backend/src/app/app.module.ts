import {
    Module,
    NestModule,
    MiddlewareConsumer,
    RequestMethod,
} from '@nestjs/common'
import { AuthenticationMiddleware } from '../common/authentication.middleware'
import { MongooseModule } from '@nestjs/mongoose'
import { ConfigModule } from '@nestjs/config'

// Customs
import keys from '../config/keys'
import { UserModule } from 'src/user/user.module'
import { UserPodcastsModule } from '../user-podcasts/user-podcasts.module'
import { MinioClientModule } from '../minio-client/minio-client.module'

@Module({
    imports: [
        MinioClientModule,
        UserPodcastsModule,
        ConfigModule.forRoot({ isGlobal: true }),
        MongooseModule.forRoot(`${keys.MONGO_DB_URI}`, {
            useNewUrlParser: true,
        }),
        UserModule,
    ],
    controllers: [],
    providers: [],
})
export class AppModule implements NestModule {
    configure(consumer: MiddlewareConsumer): MiddlewareConsumer | void {
        consumer
            .apply(AuthenticationMiddleware)
            .exclude(
                { method: RequestMethod.GET, path: '/' },
                { method: RequestMethod.GET, path: '/explore' },
                { method: RequestMethod.GET, path: '/user' },
            )
            .forRoutes('*')
    }
}