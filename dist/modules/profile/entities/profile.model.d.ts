import BaseEntity from 'src/utils/base.model';
import { User } from 'src/modules/user/entities/user.model';
export declare class Profile extends BaseEntity {
    firstName: string;
    gender: string;
    lastName: string;
    user: User;
}
