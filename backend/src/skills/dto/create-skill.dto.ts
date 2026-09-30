import { IsString, IsNotEmpty, IsInt, Min, Max } from 'class-validator';

export class CreateSkillDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  category: string;

  @IsInt()
  @Min(1)
  @Max(10)
  level: number;
}