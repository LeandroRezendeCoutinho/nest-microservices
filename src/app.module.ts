import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { ConfigModule } from '@nestjs/config'
import { KafkaModule } from './kafka/kafka.module'

@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true,
  }), KafkaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
