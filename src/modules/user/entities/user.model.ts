import { Entity, Column, OneToOne } from 'typeorm';
import BaseEntity from 'src/utils/base.model';
import { Profile } from 'src/modules/profile/entities/profile.model';

export enum AccountType {
  USER = 'user',
  ADMIN = 'admin',
}

@Entity('users')
export class User extends BaseEntity {
  @Column({ nullable: true })
  password: string;

  @Column()
  email: string;

  @Column()
  username: string;

  @Column({
    type: 'enum',
    enum: AccountType,
    default: AccountType.USER,
  })
  accountType: AccountType;

  @OneToOne(() => Profile, (profile) => profile.user)
  profile: Profile;
}
