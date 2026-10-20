import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as fs from 'fs';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
    }),
  );

  const config = new DocumentBuilder()
    .setTitle('WisataKu API')
    .setDescription('Dokumentasi API untuk aplikasi WisataKu')
    .setVersion('1.0')
    .addTag('destinasi')
    .build();

  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('api/docs', app, document);

  fs.writeFileSync(
    './openapi.json',
    JSON.stringify(document, null, 2),
  );

  await app.listen(3000);
}

bootstrap();