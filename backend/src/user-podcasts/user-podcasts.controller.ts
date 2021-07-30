import {
    Controller,
    Get,
    Post,
    Param,
    Res,
    ParseUUIDPipe,
    HttpStatus,
    UseInterceptors,
} from '@nestjs/common'
import { FileFieldsInterceptor } from '@nestjs/platform-express'
import { errorFormatter } from 'src/user/others/error.formatter'
import { UserPodcastsService } from './user-podcasts.service'

@Controller('user-podcasts')
export class UserPodcastsController {
    constructor(private userPodcastsService: UserPodcastsService) {}
    @Get('/:userId')
    async getAllUserPodcasts(
        @Res() res,
        @Param('userId', new ParseUUIDPipe()) userId: string,
    ) {
        const allUserPodcasts =
            await this.userPodcastsService.getAllUserPodcasts(userId)
        if (allUserPodcasts instanceof Error) {
            const formattedError = errorFormatter(allUserPodcasts)
            return res
                .status(HttpStatus.BAD_REQUEST)
                .send({ error: formattedError })
        }

        return res
            .status(HttpStatus.OK)
            .send({ allUserPodcasts: allUserPodcasts })
    }
}
