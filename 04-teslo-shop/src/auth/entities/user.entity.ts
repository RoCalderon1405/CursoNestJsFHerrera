import { IsArray, IsBoolean, IsString } from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn('increment')
  id: string;

  @Column('text', {
    unique: true,
  })
  @IsString()
  email: string;

  @Column('text')
  @IsString()
  password: string;

  @Column('text')
  @IsString()
  fullName: string;

  @Column('bool', {
    unique: true,
  })
  @IsBoolean()
  isActive: boolean;

  @Column('text', {
    array: true,
    default: ['user'],
  })
  @IsArray()
  roles: string[];
}
