require('dotenv').config();
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common/pipes/validation.pipe';

const PORT = process.env.PORT || 8001;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.setGlobalPrefix("/api/v1");
  app.useGlobalPipes(new ValidationPipe({
    // skipMissingProperties: true,
    forbidNonWhitelisted: true,
    whitelist: true,
    transform: true
  }));
  await app.listen(PORT);
}
bootstrap();
