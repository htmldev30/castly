import { Test, TestingModule } from '@nestjs/testing';
import { UserPodcastsController } from './user-podcasts.controller';

describe('UserPodcastsController', () => {
  let controller: UserPodcastsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserPodcastsController],
    }).compile();

    controller = module.get<UserPodcastsController>(UserPodcastsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
