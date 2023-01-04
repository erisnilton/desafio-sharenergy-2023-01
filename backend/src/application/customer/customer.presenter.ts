import { Customer } from 'src/domain/customer/customer.entity';
import { Paged } from 'src/domain/_shared/paged';

export namespace CustomerPresenter {
  export function present(customer: Customer | Paged<Customer>) {
    console.log('customer', customer);

    if (customer instanceof Paged) {
      return new Paged(
        customer.items.map(present),
        customer.total,
        customer.offset,
        customer.limit,
      );
    }
    return {
      id: customer.id.value,
      name: customer.name,
      email: customer.email.value,
      phone: customer.phone.toString(),
      cpf: customer.cpf.toString(),
      address: customer.address.toString(),
      created_at: customer.created_at,
      updated_at: customer.updated_at,
    };
  }
}
