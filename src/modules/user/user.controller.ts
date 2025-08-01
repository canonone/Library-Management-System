import { Controller, Body, Post, Get, Param } from '@nestjs/common';
import { UserService } from './user.service';
import { UserDto } from './dtos/create-user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('/register')
  async create(@Body() body: UserDto) {
    const user = await this.userService.createUser(body);
    const payload = {
      message: 'Account created successfully',
      data: user,
    };
    return payload;
  }
}
