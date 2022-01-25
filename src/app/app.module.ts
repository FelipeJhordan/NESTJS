import { Module } from '@nestjs/common';
import { GuardianModule } from './ioc/guardian.module';
import { PetModule } from './ioc/pet.module';
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
