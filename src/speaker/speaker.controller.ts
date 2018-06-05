import { Controller, Get, Post, Body } from '@nestjs/common';
import { SpeakerService } from './speaker.service';
import { Speaker } from './speaker.entity';

@Controller('speakers')
export class SpeakerController {

    constructor(private readonly spearkerService: SpeakerService) { }

    @Get()
    public async findAll() {
        return await this.spearkerService.getSpeakers();
    }

    @Post()
    public async create(@Body() body: Speaker) {
        this.spearkerService.create(body);
    }
}