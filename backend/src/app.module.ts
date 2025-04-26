import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { StoriesModule } from './stories/stories.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'chatuser',
      password: 'secret',
      database: 'chatdb',
      autoLoadEntities: true,
      synchronize: true,
    }),
    StoriesModule,
  ],
})
export class AppModule {}
