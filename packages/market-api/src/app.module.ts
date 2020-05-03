import { Module, HttpModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MarketService } from './services/market/market.service';
import { MarketsController } from './controllers/markets/markets.controller';

@Module({
  imports: [HttpModule],
  controllers: [AppController, MarketsController],
  providers: [AppService, MarketService],
})
export class AppModule {}
