import { Module, HttpModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MarketService } from './services/market/market.service';

@Module({
  imports: [HttpModule],
  controllers: [AppController],
  providers: [AppService, MarketService],
})
export class AppModule {}
