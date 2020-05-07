import { Controller, Post, HttpCode, Body, Get, Query, Delete, Put, Param } from '@nestjs/common';
import { MarketService } from 'src/services/market/market.service';
import { Market } from 'src/models/market.model';

@Controller('markets')
export class MarketsController {
  constructor(private marketService: MarketService) {}

  @Post()
  @HttpCode(204)
  create(@Body() market: Market) {
    this.marketService.create(market);
  }

  @Get('filterBy')
  searchWithNameCategoryAndLocation(@Query() query): Promise<Market[]> {
    const { search, lat, lng } = query;
    return this.marketService.searchByNameCategoryAndLocation(search, lng, lat);
  }

  @Get()
  async getAll(): Promise<Market[]> {
    return this.marketService.findAll();
  }

  @Get(':id')
  async findById(@Param() params): Promise<Market> {
    const { id } = params;
    return this.marketService.findById(id);
  }

  @Put(':id')
  async updateById(@Param() params, @Body() market: Market): Promise<Market> {
    const { id } = params;
    return this.marketService.updateById(id, market);
  }

  @Delete(':id')
  @HttpCode(204)
  async deleteById(@Param() params): Promise<any> {
    const { id } = params;
    return this.marketService.deleteById(id);
  }
}
