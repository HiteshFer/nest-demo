/* eslint-disable prettier/prettier */

import { Injectable } from '@nestjs/common';
import { MysqlService } from '../../services/mysql/mysql.service';
import { RedisService } from '../../services/redis/redis.service';

@Injectable()
export class UserService {
  constructor(
    private readonly mysqlService: MysqlService,
    private readonly redisService: RedisService,
  ) {}

  async getUsers(): Promise<any[]> {
    const cachedUsers = await this.redisService.get('users');
    if (cachedUsers) {
      return cachedUsers;
    }

    const users = await this.mysqlService.getUsers();
    await this.redisService.set('users', JSON.stringify(users));
    return users;
  }
}
