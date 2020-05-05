import { Module, HttpModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MarketService } from './services/market/market.service';
import { MarketsController } from './controllers/markets/markets.controller';
import { UsersService } from './services/users/users.service';

@Module({
  imports: [HttpModule],
  controllers: [AppController, MarketsController],
  providers: [AppService, MarketService, UsersService],
})
export class AppModule {}
