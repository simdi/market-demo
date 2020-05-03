require('dotenv').config();
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common/pipes/validation.pipe';

const PORT = process.env.PORT || 8001;
console.log('Config', process.env.GOOGLE_MAPS_API_KEY);

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // app.setGlobalPrefix("/v1/api")
  app.useGlobalPipes(new ValidationPipe({
    // skipMissingProperties: true,
    forbidNonWhitelisted: true,
    whitelist: true,
    transform: true
  }));
  await app.listen(PORT);
}
bootstrap();
