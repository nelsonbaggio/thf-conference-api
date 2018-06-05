import { Injectable } from '@nestjs/common';
import { Speaker } from './speaker.entity';

@Injectable()
export class SpeakerService {

    create(speaker: Speaker): any {
        Speaker.save(speaker);
    }

    getSpeakers(): Promise<Array<Speaker>> {
        return Speaker.find();
    }

}
