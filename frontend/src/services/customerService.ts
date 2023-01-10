import { getCustumers, update, create, remove } from "../api";
import { Customer } from "../model/customer";

export function getAllCustomers(): Promise<Customer[]> {
  return getCustumers()
    .then((response) => response.json())
    .then((data) => data.items);
}

export function insertCustomer(customer: any): Promise<Customer> {
  return create(customer);
}

export function updateCostumer(customer: any): Promise<Customer> {
  return update(customer);
}
export function deleteCustomer(id: string) {
  remove(id);
}
