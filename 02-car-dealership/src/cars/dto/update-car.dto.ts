import { IsOptional, IsString, IsUUID } from 'class-validator';

export class UpdateCarDto {
  @IsString()
  @IsUUID()
  @IsOptional()
  readonly id?: string;
  
  @IsString()
  @IsOptional()
  @IsString()
  @IsOptional()
  readonly model?: string;
}
