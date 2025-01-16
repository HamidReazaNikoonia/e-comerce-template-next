import { Address, IProduct, AddressResponse } from '@/types/Product';

const API_BASE_URL = 'http://localhost:9000/v1';
const API_TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NzJmM2FhMjVhOWVjZjJlYjdkYzFlYWIiLCJpYXQiOjE3MzY3MDkzNjgsImV4cCI6MTczNzI0OTM2OCwidHlwZSI6ImFjY2VzcyJ9._nWLL6tKWCuSZVVeMAtxBSGZAKv8E4DudnHpTLsc2-E';




async function getUserAddress() {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        `Bearer ${API_TOKEN}`,
    },
  };

  const response = fetch(
    `${API_BASE_URL}/order/shipping_address`,
    options
  )
    .then((response) => response.json())
    .catch((err) => console.error(err));

  return response;
}

async function submitAddres(address: Address) {
  console.log({findTitle: address})
  const options = {
    method: "POST",
    headers: {
      accept: "application/json",
      'Content-Type': 'application/json',
      Authorization:
        `Bearer ${API_TOKEN}`,
    },
    body: JSON.stringify(address)
  };

  const response = fetch(
    `${API_BASE_URL}/order/shipping_address`,
    options
  )
    .then((response) => response.json())
    .catch((err) => console.error(err));

  return response;
}


// async function deleteProductInCart({cartItemId}: {cartItemId: string}) {
//   const options = {
//     method: "DELETE",
//     headers: {
//       accept: "application/json",
//       'Content-Type': 'application/json',
//       Authorization:
//         `Bearer ${API_TOKEN}`,
//     }
//   };

//   const response = fetch(
//     `${API_BASE_URL}/cart/${cartItemId}`,
//     options
//   )
//     .then((response) => response.json())
//     .catch((err) => console.error(err));

//   return response;
// }



export async function getUserAddressRequest() {
  const data = await getUserAddress();
  return data;
}

export async function submitAddresRequest(body: Address): Promise<AddressResponse> {
  const data = await submitAddres(body);
  return data;
}

// export async function deleteProductInCartRequest(body: {cartItemId: string}) {
//   const data = await deleteProductInCart(body);
//   return data;
// }

