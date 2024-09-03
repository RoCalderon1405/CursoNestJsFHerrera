import { IsOptional, IsString, IsUUID } from 'class-validator';

export class DeleteCarDto {
  @IsString()
  @IsUUID()
  @IsOptional()
  readonly id?: string;
}
