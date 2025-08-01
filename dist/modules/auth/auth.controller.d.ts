import { AuthService } from './auth.service';
import { UserDto } from '../user/dtos/create-user.dto';
import { LoginDto } from './dtos/login-user.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    signUp(body: UserDto): Promise<{
        message: string;
        token: string;
        data: {
            email: string;
            username: string;
        };
    }>;
    signin(body: LoginDto): Promise<{
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
