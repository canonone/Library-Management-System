import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.model';
import { updateUserDto } from './dtos/update-user.dto';

@Injectable()
export class UserService {
  constructor(@InjectRepository(User) private repo: Repository<User>) {}

  async createUser(body: Partial<User>) {
    const user = this.repo.create(body);
    return this.repo.save(user);
  }

  async findById(id: string) {
    return await this.repo.findOne({ where: { id } });
  }

  async findByEmail(email: string) {
    return await this.repo.findOne({ where: { email } });
  }

  async findAll() {
    return await this.repo.find();
  }

  async deleteUser(id: string) {
    const user = await this.findById(id);
    if (!user) {
      throw new NotFoundException('user does not exist');
    }
    return await this.repo.delete(id);
  }

  async updateUser(id: string, dto: updateUserDto) {
    const user = await this.repo.preload({
      id,
      ...dto,
    });
    if (!user) {
      throw new BadRequestException('could not perform this operation');
    }

    return this.repo.save(user);
  }
}
