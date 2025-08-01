import { Injectable, NotFoundException } from '@nestjs/common';
import { UserService } from '../user/user.service';
import * as bcrypt from 'bcryptjs';
import { hash } from 'bcryptjs';
import { UserDto } from '../user/dtos/create-user.dto';
import { JwtService } from '@nestjs/jwt';
import { LoginDto } from './dtos/login-user.dto';
import { GenerateToken } from './interface/utility';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async register(body: UserDto) {
    const { password, ...result } = body;
    const check = await this.userService.findByEmail(body.email);
    if (check) {
      throw new NotFoundException('user already exist');
    }

    const hashedPassword = await hash(password, 10);
    body.password = hashedPassword;
    const user = await this.userService.createUser(body);
    const jwtPayload = { sub: user.id, email: user.email };
    const token = this.generateToken(jwtPayload);
    return {
      message: 'User account created successfully',
      token: token,
      data: { ...result },
    };
  }

  async validateUser(password: string, email: string) {
    const user = await this.userService.findByEmail(email);
    if (!user) {
      throw new NotFoundException('user does not exist');
    }

    const extinguisher = await bcrypt.compare(password, user.password);
    if (!extinguisher) {
      throw new NotFoundException('incorrect password');
    }
    return user;
  }

  private generateToken(payload: GenerateToken) {
    return this.jwtService.sign(payload);
  }

  async loginUser(loginDto: LoginDto) {
    const user = await this.userService.findByEmail(loginDto.email);
    if (!user) {
      throw new NotFoundException('user does not exist');
    }
    const { password, ...result } = user;
    const payload = { sub: user.id, email: user.email };
    const token = this.generateToken(payload);
    return {
      message: 'Login successfully',
      token: token,
      data: { ...result },
    };
  }
}
