import { Pet } from 'src/domain/models/pet';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { GuardianEntity } from './guardian.entity';

@Entity({ name: 'pets' })
export class PetEntity implements Pet {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  id_guardian: string;

  @ManyToOne((type) => GuardianEntity, (guardian) => guardian.pets, {})
  @JoinColumn({ name: 'id_guardian' })
  guardian: GuardianEntity;
}
