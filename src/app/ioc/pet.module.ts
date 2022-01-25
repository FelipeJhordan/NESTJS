import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PetController } from '../../presentation/controllers/pet.controller';
import { PetEntity } from '../../infra/typeorm/entities/pet.entity';
import { PetService } from 'src/app/usecases/pet.service';

@Module({
  imports: [TypeOrmModule.forFeature([PetEntity])],
  controllers: [PetController],
  providers: [PetService],
})
export class PetModule {}
