import { Module } from '@nestjs/common';
import { PetService } from './pet.service';

@Module({
  imports: [],
  controllers: [],
  providers: [PetService],
})
export class PetModule {}
