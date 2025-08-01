import { UserService } from './user.service';
import { UserDto } from './dtos/create-user.dto';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    create(body: UserDto): Promise<{
        message: string;
        data: import("./entities/user.model").User;
    }>;
}
