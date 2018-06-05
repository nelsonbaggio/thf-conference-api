import { Injectable } from '@nestjs/common';
import { Speaker } from './speaker.entity';

@Injectable()
export class SpeakerService {

    public create(speaker: Speaker): any {
        Speaker.save(speaker);
    }

    public getSpeakers(): Promise<Array<Speaker>> {
        return Speaker.find();
    }

}
