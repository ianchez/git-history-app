import { IsNotEmpty, IsString } from 'class-validator';

export class GetCommitsRequest {
  @IsString()
  @IsNotEmpty()
  username: string;

  @IsString()
  @IsNotEmpty()
  repo: string;
}
