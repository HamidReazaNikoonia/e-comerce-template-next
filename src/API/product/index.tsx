import { IProduct } from '@/types/Product';

interface FilterParams {
  search?: string;
  sort?: string;
  category?: string;
  brand?: string;
  price_from?: number;
  price_to?: number;
}

interface ProductsResponse {
  data: {
    count: number;
    products: IProduct[];
  }
}


async function getCategories() {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer ....",
    },
  };

  const response = fetch(
    `http://localhost:9000/v1/product/categories`,
    options
  )
    .then((response) => response.json())
    .catch((err) => console.error(err));

  return response;
}



async function getProducts(params: FilterParams = {}): Promise<ProductsResponse> {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer ....",
    },
  };

  // Only include non-empty parameters in the request
  const filteredParams = Object.fromEntries(
    Object.entries(params).filter(([_, value]) => value !== undefined && value !== '')
  );

  console.log({ filteredParams })

  const response = fetch(
    `http://localhost:9000/v1/product?${new URLSearchParams(filteredParams)}`,
    options
  )
    .then((response) => response.json())
    .catch((err) => console.error(err));

  return response;
}

export async function getProductsRequest(params: FilterParams) {
  const data = await getProducts(params);
  return data;
}

export async function getCategoriesRequest() {
  const data = await getCategories();
  return data;
}
