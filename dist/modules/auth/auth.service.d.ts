import { UserService } from '../user/user.service';
import { UserDto } from '../user/dtos/create-user.dto';
import { JwtService } from '@nestjs/jwt';
import { LoginDto } from './dtos/login-user.dto';
export declare class AuthService {
    private userService;
    private readonly jwtService;
    constructor(userService: UserService, jwtService: JwtService);
    register(body: UserDto): Promise<{
        message: string;
        token: string;
        data: {
            email: string;
            username: string;
        };
    }>;
    validateUser(password: string, email: string): Promise<import("../user/entities/user.model").User>;
    private generateToken;
    loginUser(loginDto: LoginDto): Promise<{
        message: string;
        token: string;
        data: {
            email: string;
            username: string;
            accountType: import("../user/entities/user.model").AccountType;
            profile: import("../profile/entities/profile.model").Profile;
            id: string;
            createAt: Date;
            updatedAt: Date;
        };
    }>;
}
