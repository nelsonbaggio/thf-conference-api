import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SpeakerController } from 'speaker/speaker.controller';
import { SpeakerService } from 'speaker/speaker.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SessionController } from 'session/session.controller';
import { SessionService } from 'session/session.service';

@Module({
  imports: [TypeOrmModule.forRoot()],
  controllers: [AppController, SpeakerController, SessionController],
  providers: [AppService, SpeakerService, SessionService],
})
export class AppModule { }
