import { AddressFields } from 'src/domain/_shared/value-object/address.vo';
import { ApiProperty } from '@nestjs/swagger';

export class AddressDto implements AddressFields {
  @ApiProperty()
  street: string;
  @ApiProperty()
  number: string;
  @ApiProperty()
  complement: string;
  @ApiProperty()
  neighborhood: string;
  @ApiProperty()
  city: string;
  @ApiProperty()
  state: string;
  @ApiProperty()
  country: string;
  @ApiProperty()
  zipCode: string;
  @ApiProperty()
  reference: string;
}
