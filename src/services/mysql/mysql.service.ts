/* eslint-disable prettier/prettier */
// src/services/mysql/mysql.service.ts
import { Injectable } from '@nestjs/common';
import * as mysql from 'mysql2/promise';
import config from '../../config';

@Injectable()
export class MysqlService {
  private pool: mysql.Pool;

  constructor() {
    this.pool = mysql.createPool(config.mysql);
  }

  async getUsers(): Promise<any[]> {
    const connection = await this.pool.getConnection();
    const [rows] = await connection.query('SELECT * FROM employees.employee');
    connection.release();
    return rows as mysql.RowDataPacket[];
  }
}
