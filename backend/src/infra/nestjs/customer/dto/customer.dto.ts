import { ApiProperty } from '@nestjs/swagger';

export class CustomerDto {
  @ApiProperty()
  id: string;
  @ApiProperty()
  name: string;
  @ApiProperty()
  email: string;
  @ApiProperty()
  phone: string;
  @ApiProperty()
  address: string;
  @ApiProperty()
  cpf: string;
  @ApiProperty()
  created_at: string;
  @ApiProperty()
  updated_at: string;
}
