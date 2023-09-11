import { Module } from '@nestjs/common'
import { ClientsModule, Transport } from '@nestjs/microservices'

@Module({
    imports: [
        ClientsModule.register([
            {
                name: 'KAFKA_SERVICE',
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
            }
        ]),
    ],
})
export class KafkaModule { }
