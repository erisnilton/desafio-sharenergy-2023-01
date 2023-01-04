import { ApiProperty } from '@nestjs/swagger';

export class ErrorDto {
  @ApiProperty()
  name: string;
  @ApiProperty()
  message: string;
  @ApiProperty()
  cause: string;
}
