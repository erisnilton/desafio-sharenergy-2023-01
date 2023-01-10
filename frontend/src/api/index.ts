import { Paged } from "./../../../backend/src/domain/_shared/paged";
import { Customer } from "../model/customer";

export function getDogs() {
  return fetch("https://random.dog/woof.json?filter=mp4,webm");
}

export function getUser(page: number, limit: number) {
  return fetch(`https://randomuser.me/api/?page=${page}&results=${limit}`);
}

export function getCustumers() {
  return fetch("http://localhost:3000/customers", {
    method: "GET",
  });
}

export function findCustumer(id: string) {
  return fetch(`http://localhost:3000/customers/${id}`, {
    method: "GET",
  });
}

export function create(customer: any): Promise<any> {
  return fetch("http://localhost:3000/customers", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      ...customer,
      address: {
        street: customer.street,
        number: customer.number,
        complement: customer.complement,
        neighborhood: customer.neighborhood,
        city: customer.city,
        state: customer.state,
        country: customer.country,
        zipCode: customer.zipCode,
        reference: customer.reference,
      },
    }),
  });
}

export function update(customer: any): Promise<any> {
  return fetch(`http://localhost:3000/customers/${customer.id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      ...customer,
      address: {
        street: customer.street,
        number: customer.number,
        complement: customer.complement,
        neighborhood: customer.neighborhood,
        city: customer.city,
        state: customer.state,
        country: customer.country,
        zipCode: customer.zipCode,
        reference: customer.reference,
      },
    }),
  });
}

export function remove(id: string) {
  return fetch(`http://localhost:3000/customers/${id}`, {
    method: "DELETE",
  });
}
