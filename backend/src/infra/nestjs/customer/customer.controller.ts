import { Id } from 'src/domain/_shared/value-object/id.vo';
import { UpdateCustomerDto } from './dto/update-customer-dto';
import { ErrorDto } from './dto/error-dto';
import { CustomerDto } from './dto/customer.dto';
import { CreateCustomerDto } from './dto/create-customer-dto';
import { PagedParams } from './../../../domain/_shared/paged';
import { FindCustomerById } from 'src/application/customer/story/find-customer-by-id.story';
import { CreateCustomer } from './../../../application/customer/story/create-customer.story';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Patch,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { CustomerPresenter } from 'src/application/customer/customer.presenter';
import { FindAllCustomers } from 'src/application/customer/story/find-all-customers.story';
import { DeleteCustomer } from 'src/application/customer/story/delete-customer.story';
import { UpdateCustomer } from 'src/application/customer/story/update-customer.story';
import { InjectPagination } from 'src/infra/nestjs/decorators/inject-pagination';
import {
  ApiOperation,
  ApiOkResponse,
  ApiNotFoundResponse,
  ApiNoContentResponse,
  ApiCreatedResponse,
  ApiParam,
  ApiTags,
} from '@nestjs/swagger';
import { PagedDto } from './dto/paged-dto';

@Controller('/customers')
@ApiTags('customers')
export class CustomerController {
  constructor(
    readonly createCustomerHandler: CreateCustomer.Handler,
    readonly findAllCustomersHandler: FindAllCustomers.Handler,
    readonly findCustomerByIdHandler: FindCustomerById.Handler,
    readonly deleteCustomerHandler: DeleteCustomer.Handler,
    readonly updateCustomerHandler: UpdateCustomer.Handler,
  ) {}

  @Post()
  @ApiOperation({
    summary: 'Create a new customer',
  })
  @ApiCreatedResponse({
    type: CustomerDto,
    description: 'Returns the created customer',
  })
  async create(@Body() body: CreateCustomerDto) {
    const customer = await this.createCustomerHandler.execute(
      new CreateCustomer.Command({
        name: body.name,
        email: body.email,
        phone: body.phone,
        address: body.address,
        cpf: body.cpf,
      }),
    );
    return CustomerPresenter.present(customer);
  }

  @Get()
  @ApiOperation({
    summary: 'Find all customers',
  })
  @ApiOkResponse({
    type: PagedDto(CustomerDto),
    description: 'Returns a list of customers',
  })
  async findAll(@InjectPagination() pagination: PagedParams) {
    const customers = await this.findAllCustomersHandler.execute(
      new FindAllCustomers.Command({ pagination }),
    );
    return CustomerPresenter.present(customers);
  }

  @Get(':id')
  @ApiParam({
    name: 'id',
    description: 'Customer id',
  })
  @ApiOperation({
    summary: 'Find customer by id',
  })
  @ApiOkResponse({
    type: CustomerDto,
    description: 'Returns a customer',
  })
  @ApiNotFoundResponse({
    type: ErrorDto,
    description: 'Customer not found',
  })
  async findById(@Param('id') id: string) {
    const customer = await this.findCustomerByIdHandler.execute(
      new FindCustomerById.Command(id),
    );
    return CustomerPresenter.present(customer);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiParam({
    name: 'id',
    description: 'Customer id',
  })
  @ApiOperation({
    summary: 'Delete customer by id',
  })
  @ApiNoContentResponse({
    description: 'Customer deleted',
  })
  @ApiNotFoundResponse({
    type: ErrorDto,
    description: 'Customer not found',
  })
  async delete(@Param('id') id: string) {
    await this.deleteCustomerHandler.execute(new DeleteCustomer.Command(id));
  }

  @Patch(':id')
  @ApiParam({
    name: 'id',
    description: 'Customer id',
  })
  @ApiOperation({
    summary: 'Update customer by id',
  })
  @ApiOkResponse({
    type: CustomerDto,
    description: 'Customer updated',
  })
  @ApiNotFoundResponse({
    type: ErrorDto,
    description: 'Customer not found',
  })
  async update(@Param('id') id: string, @Body() body: UpdateCustomerDto) {
    const customer = await this.updateCustomerHandler.execute(
      new UpdateCustomer.Command({
        id,
        name: body.name,
        email: body.email,
        phone: body.phone,
        address: body.address,
        cpf: body.cpf,
      }),
    );
    return CustomerPresenter.present(customer);
  }
}
