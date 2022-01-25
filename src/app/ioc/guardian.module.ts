import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GuardianService } from 'src/app/usecases/guardian.service';
import { GuardianEntity } from 'src/infra/typeorm/entities/guardian.entity';
import { GuardianController } from '../../presentation/controllers/guardian.controller';

@Module({
  imports: [TypeOrmModule.forFeature([GuardianEntity])],
  controllers: [GuardianController],
  providers: [GuardianService],
})
export class GuardianModule {}
