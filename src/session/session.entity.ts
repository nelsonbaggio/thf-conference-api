import { Column, PrimaryGeneratedColumn, Entity } from 'typeorm';

@Entity()
export class Session {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    timeStart: string;

    @Column()
    timeEnd: string;

    @Column()
    location: string;

    @Column()
    tracks: string;

    @Column()
    description: string;

    @Column()
    speakerName: string;
}