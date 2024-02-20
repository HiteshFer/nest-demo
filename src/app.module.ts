/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { MysqlService } from './services/mysql/mysql.service';
import { RedisService } from './services/redis/redis.service';
import { UserController } from './modules/user/user.controller';
import { UserService } from './modules/user/user.service';

@Module({
  imports: [],
  controllers: [UserController],
  providers: [UserService, MysqlService, RedisService],
})
export class AppModule {}
