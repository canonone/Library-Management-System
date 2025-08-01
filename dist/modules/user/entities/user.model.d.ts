import BaseEntity from 'src/utils/base.model';
import { Profile } from 'src/modules/profile/entities/profile.model';
export declare enum AccountType {
    USER = "user",
    ADMIN = "admin"
}
export declare class User extends BaseEntity {
    password: string;
    email: string;
    username: string;
    accountType: AccountType;
    profile: Profile;
}
