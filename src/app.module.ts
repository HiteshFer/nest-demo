/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { MysqlService } from './services/mysql/mysql.service';
import { RedisService } from './services/redis/redis.service';
import { UserController } from './modules/user/user.controller';
import { UserService } from './modules/user/user.service';
import { LoggerService } from './services/logger/logger.service';

@Module({
  imports: [],
  controllers: [UserController],
  providers: [UserService, MysqlService, RedisService, LoggerService],
})
export class AppModule {}
