import { Module } from '@nestjs/common';
import { getDataSourceToken, TypeOrmModule } from '@nestjs/typeorm';
import { CreateRouteUseCase } from 'src/@core/application/create-route.use-case';
import { ListAllRoutesUseCase } from 'src/@core/application/list-all-routes.use-case';
import { Route } from 'src/@core/domain/route.entity';
import { RouteRepositoryInterface } from 'src/@core/domain/route.repository';
import { RouteInMemoryRepository } from 'src/@core/infra/db/in-memory/route-in-memory.repository';
import { RouteTypeOrmRepository } from 'src/@core/infra/db/typeorm/route-typeorm.repository';
import { RouteSchema } from 'src/@core/infra/db/typeorm/route.schema';
import { DataSource } from 'typeorm';
import { RoutesController } from './routes.controller';
import { RoutesService } from './routes.service';

@Module({
  imports: [TypeOrmModule.forFeature([RouteSchema])],
  controllers: [RoutesController],
  providers: [
    RoutesService,
    {
      provide: RouteTypeOrmRepository,
      useFactory: (DataSource: DataSource) => {
        return new RouteTypeOrmRepository(DataSource.getRepository(Route));
      },
      inject: [getDataSourceToken()],
    },
    {
      provide: RouteInMemoryRepository,
      useClass: RouteInMemoryRepository,
    },
    {
      provide: CreateRouteUseCase,
      useFactory: (routeRepository: RouteRepositoryInterface) => {
        return new CreateRouteUseCase(routeRepository);
      },
      inject: [RouteTypeOrmRepository],
    },
    {
      provide: ListAllRoutesUseCase,
      useFactory: (routeRepo: RouteRepositoryInterface) => {
        return new ListAllRoutesUseCase(routeRepo);
      },
      inject: [RouteTypeOrmRepository],
    },
  ],
})
export class RoutesModule {}
