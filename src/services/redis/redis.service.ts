/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import * as Redis from 'ioredis';
import config from '../../config';

@Injectable()
export class RedisService {
  private client: Redis.Redis;

  constructor() {
    this.client = new Redis.Redis(config.redis);
  }

  async set(key: string, value: any, expiresIn: number = 3600): Promise<void> {
    await this.client.set(key, JSON.stringify(value), 'EX', expiresIn);
  }

  async get(key: string): Promise<any> {
    const data = await this.client.get(key);
    return data ? JSON.parse(data) : null;
  }
}
