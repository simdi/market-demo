import { Controller, Post, HttpCode, Body, Get, Query } from '@nestjs/common';
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
}
