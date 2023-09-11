import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { MicroserviceOptions, Transport } from '@nestjs/microservices'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  await app.connectMicroservice<MicroserviceOptions>(
    {
      transport: Transport.TCP,
      options: {
        host: 'localhost',
        port: 3000,
      },
    },
  )

  await app.connectMicroservice<MicroserviceOptions>(
    {
      transport: Transport.KAFKA,
      options: {
        client: {
          clientId: 'kafkaSample',
          brokers: ['localhost:9092'],
        },
        consumer: {
          groupId: 'kafkaSample',
        },
      },
    },
  )

  await app.listen(process.env.PORT)
}
bootstrap()
