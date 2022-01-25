import { Guardian } from 'src/domain/models/guardian';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { PetEntity } from './pet.entity';

@Entity({ name: 'guardians' })
export class GuardianEntity implements Guardian {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @OneToMany((type) => PetEntity, (pet) => pet.guardian, { eager: true })
  pets: PetEntity[];
}
