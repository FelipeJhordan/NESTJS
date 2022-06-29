import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GuardianController } from './guardian.controller';
import { GuardianEntity } from './guardian.entity';
import { GuardianService } from './guardian.service';

@Module({
  imports: [TypeOrmModule.forFeature([GuardianEntity])],
  controllers: [GuardianController],
  providers: [GuardianService],
})
export class GuardianModule {}
