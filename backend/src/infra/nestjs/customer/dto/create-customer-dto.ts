import { CreateCustomer } from 'src/application/customer/story/create-customer.story';
import { AddressFields } from 'src/domain/_shared/value-object/address.vo';
import { ApiProperty } from '@nestjs/swagger';
import { AddressDto } from './address-dto';

export class CreateCustomerDto implements CreateCustomer.Command {
  @ApiProperty()
  name: string;
  @ApiProperty()
  email: string;
  @ApiProperty()
  phone: string;
  @ApiProperty()
  address: AddressDto;
  @ApiProperty()
  cpf: string;
}
