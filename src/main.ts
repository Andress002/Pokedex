import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('api/v2'); //es un método que agrega un prefijo URL a todas las rutas de tu aplicación

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, //elimina propiedades que NO existen en el DTO
      forbidNonWhitelisted: true, //En lugar de eliminar propiedades extra, lanza un error si llegan.
      transform: true, //Convierte el payload entrante en una instancia del DTO, y permite conversiones de tipo.
      transformOptions: {
        enableImplicitConversion: true, //permite que NestJS convierta automáticamente los tipos de datos entrantes según el tipo del DTO, sin decoradores extra.
      },
    }),
  );

  await app.listen(process.env.PORT ?? 3000);
  console.log(`App runnig on port ${process.env.PORT}`);
}
bootstrap();
