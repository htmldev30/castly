import { Test, TestingModule } from '@nestjs/testing'
import { UserPodcastsService } from './user-podcasts.service'

describe('UserPodcastsService', () => {
    let service: UserPodcastsService

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [UserPodcastsService],
        }).compile()

        service = module.get<UserPodcastsService>(UserPodcastsService)
    })

    it('should be defined', () => {
        expect(service).toBeDefined()
    })
})
