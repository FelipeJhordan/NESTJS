import { Module } from '@nestjs/common';
import { GuardianModule } from './modules/guardian/guardian.module';
import { PetModule } from './modules/pet/pet.module';

@Module({
  imports: [PetModule, GuardianModule],
})
export class AppModule {}
