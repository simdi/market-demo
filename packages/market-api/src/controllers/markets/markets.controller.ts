import { Controller, Post, HttpCode, Body, Get } from '@nestjs/common';
import { MarketService } from 'src/services/market/market.service';
import { Market } from 'src/models/market.model';
import { MarketDTO } from 'src/dtos/marketDTO.dto';

@Controller('markets')
export class MarketsController {
  constructor(private marketService: MarketService) {}

  @Post()
  @HttpCode(204)
  create(@Body() market: MarketDTO) {
    console.log(market);
    this.marketService.create(market);
  }

  @Get()
  async getAll(): Promise<Market[]> {
    return this.marketService.findAll();
  }
}
