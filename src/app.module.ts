import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SpeakerController } from 'speaker/speaker.controller';
import { SpeakerService } from 'speaker/speaker.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forRoot()],
  controllers: [AppController, SpeakerController],
  providers: [AppService, SpeakerService],
})
export class AppModule { }
