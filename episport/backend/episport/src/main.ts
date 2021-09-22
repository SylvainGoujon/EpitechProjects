import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cookieParser from 'cookie-parser';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    "origin": "http://localhost:3000", 
    "credentials": true
  });
  app.use(cookieParser());
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
    forbidNonWhitelisted: true
  }));

  const config = new DocumentBuilder()
    .setTitle('Episport Documentation')
    .setDescription(
      'All response as the same format:' + '<br />' +
      '{' + '<br />' +
      '    success : boolean,' + '<br />' +
      '    message : string,'  + '<br />' +
      '    body: any'  + '<br />' +
      '}'  + '<br />' +
      'The return type of body is specified for each route'
    )
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(5000);
}

bootstrap();
