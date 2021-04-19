import { Column, Entity,PrimaryGeneratedColumn } from "typeorm";


@Entity('users')
class User{
    @PrimaryGeneratedColumn('increment')
    id: string;
    @Column()
    name: string;
    @Column()
    birthDate: Date;
    @Column()
    image: string
};

export {User};