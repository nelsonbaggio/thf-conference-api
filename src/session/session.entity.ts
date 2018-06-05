import { Column, PrimaryGeneratedColumn, Entity, BaseEntity } from 'typeorm';

@Entity()
export class Session extends BaseEntity {

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