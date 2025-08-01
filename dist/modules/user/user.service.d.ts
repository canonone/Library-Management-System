import { Repository } from 'typeorm';
import { User } from './entities/user.model';
import { updateUserDto } from './dtos/update-user.dto';
export declare class UserService {
    private repo;
    constructor(repo: Repository<User>);
    createUser(body: Partial<User>): Promise<User>;
    findById(id: string): Promise<User | null>;
    findByEmail(email: string): Promise<User | null>;
    findAll(): Promise<User[]>;
    deleteUser(id: string): Promise<import("typeorm").DeleteResult>;
    updateUser(id: string, dto: updateUserDto): Promise<User>;
}
