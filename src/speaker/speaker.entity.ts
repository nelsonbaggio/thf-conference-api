import { Entity, Column, BaseEntity, ObjectIdColumn } from 'typeorm';

@Entity()
export class Speaker extends BaseEntity {

    @ObjectIdColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    profilePic: string;

    @Column()
    twitter: string;

    @Column()
    about: string;

    @Column()
    location: string;

    @Column()
    phone: string;

}