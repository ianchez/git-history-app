import { IsNotEmpty, IsString } from 'class-validator';

export class GetCommitsQuery {
  @IsNotEmpty()
  @IsString()
  username: string;

  @IsNotEmpty()
  @IsString()
  repo: string;
}
