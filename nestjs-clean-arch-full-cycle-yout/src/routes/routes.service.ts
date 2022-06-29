import { Injectable } from '@nestjs/common';
import { CreateRouteUseCase } from 'src/@core/application/create-route.use-case';
import { ListAllRoutesUseCase } from 'src/@core/application/list-all-routes.use-case';
import { CreateRouteDto } from './dto/create-route.dto';

@Injectable()
export class RoutesService {
  constructor(
    private createUseCase: CreateRouteUseCase,
    private listAllUsecase: ListAllRoutesUseCase,
  ) {}

  create(createRouteDto: CreateRouteDto) {
    return this.createUseCase.execute(createRouteDto);
  }

  findAll() {
    return this.listAllUsecase.execute();
  }
}
