import { Entity, Column, OneToOne, JoinColumn } from 'typeorm';
import BaseEntity from 'src/utils/base.model';
import { User } from 'src/modules/user/entities/user.model';

@Entity()
export class Profile extends BaseEntity {
  @Column()
  firstName: string;

  @Column()
  gender: string;

  @Column()
  lastName: string;

  @OneToOne(() => User, (user) => user.profile)
  @JoinColumn()
  user: User;
}
