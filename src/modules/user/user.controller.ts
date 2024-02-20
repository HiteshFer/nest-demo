/* eslint-disable prettier/prettier */
import { Controller, Get, Render } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async getUsers(): Promise<any[]> {
    return await this.userService.getUsers();
  }

  @Get('/data')
  @Render('index')
  getHello(): object {
    return { title: 'Hello', subtitle: 'Subtitle' };
  }
}
