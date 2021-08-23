import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // Configuración del prefijo
  app.setGlobalPrefix('api');

  // Configuracion del puerto de manera dinámica
  await app.listen(AppModule.port);
}
bootstrap();
