import { Controller, Post, Get, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserDto } from '../user/dtos/create-user.dto';
import { LoginDto } from './dtos/login-user.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/register')
  async signUp(@Body() body: UserDto) {
    return await this.authService.register(body);
  }

  @Post('/login')
  async signin(@Body() body: LoginDto) {
    return await this.authService.loginUser(body);
  }
}
