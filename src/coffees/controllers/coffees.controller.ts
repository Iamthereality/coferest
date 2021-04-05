import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { CoffeesService } from '../services/coffees.service';
import { Coffee } from '../entities/coffee.entity';

@Controller('coffees')
export class CoffeesController {
  constructor(private readonly coffeesService: CoffeesService) {}

  @Get()
  public findAll(@Query() paginationQuery): Array<Coffee> {
    // const { limit, offset } = paginationQuery;
    return this.coffeesService.findAll();
  }

  @Get(':id')
  public findOne(@Param('id') id: string): Coffee {
    return this.coffeesService.findOne(id);
  }

  @Post()
  public createNewCoffee(@Body() body: Coffee): Coffee {
    return this.coffeesService.createNewCoffee(body);
  }

  @Patch(':id')
  public update(@Param('id') id: string, @Body() body: Coffee): Coffee {
    return this.coffeesService.update(id, body);
  }

  @Delete(':id')
  public remove(@Param('id') id: string): Array<Coffee> {
    return this.coffeesService.delete(id);
  }
}
