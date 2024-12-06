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


const API_BASE_URL = 'http://localhost:9000/v1';
const API_TOKEN = 'YOUR_API_TOKEN_HERE';

export async function getComments(page: number) {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${API_TOKEN}`,
    },
  };

  const response = await fetch(
    `${API_BASE_URL}/product/672f3bb2c149603001da12ad/hamid/review?page=${page}`,
    options
  );

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  return response.json();
}


export async function submitComment(commentData: { text: string }) {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${API_TOKEN}`,
    },
    body: JSON.stringify(commentData),
  };

  const response = await fetch(
    `${API_BASE_URL}/product/review`,
    options
  );

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  return response.json();
}


export async function getProductsRequest(params: FilterParams) {
  const data = await getProducts(params);
  return data;
}

export async function getCategoriesRequest() {
  const data = await getCategories();
  return data;
}


export async function getCommentsRequest({page}) {
  const data = await getComments(page);
  return data;
}


export async function submitCommentRequest(commentData) {
  const data = await submitComment(commentData);
  return data;
}
