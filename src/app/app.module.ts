import { Module } from '@nestjs/common';
import { GuardianModule } from '../modules/guardian/guardian.module';
import { PetModule } from '../modules/pet/pet.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    PetModule,
    GuardianModule,
    ConfigModule.forRoot({
      isGlobal: true,
      expandVariables: true,
    }),
    TypeOrmModule.forRoot(),
  ],
})
export class AppModule {}
