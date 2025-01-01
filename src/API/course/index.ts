import { ICourseTypes } from '@/types/Course';


const API_BASE_URL = 'http://localhost:9000/v1';
const API_TOKEN = 'YOUR_API_TOKEN_HERE';

interface FilterParams {
  search?: string;
  sort?: string;
  category?: string;
  brand?: string;
  price_from?: number;
  price_to?: number;
}

interface CourseResponse {
  data: {
    count: number;
    courses: ICourseTypes[];
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
    `${API_BASE_URL}/course/category`,
    options
  )
    .then((response) => response.json())
    .catch((err) => console.error(err));

  return response;
}



async function getCourses(params: FilterParams = {}): Promise<CourseResponse> {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
  }
}

  // Only include non-empty parameters in the request
  const filteredParams = Object.fromEntries(
    Object.entries(params).filter(([_, value]) => value !== undefined && value !== '')
  );

  console.log({ filteredParams })

  const response = fetch(
    `http://localhost:9000/v1/course?${new URLSearchParams(filteredParams)}`,
    options
  )
    .then((response) => response.json())
    .catch((err) => console.error(err));

  return response;
}



// export async function getComments(page: number, productId: string) {
//   const options = {
//     method: 'GET',
//     headers: {
//       accept: 'application/json',
//       Authorization: `Bearer ${API_TOKEN}`,
//     },
//   };

//   const response = await fetch(
//     `${API_BASE_URL}/product/${productId}/hamid/review?page=${page}`,
//     options
//   );

//   if (!response.ok) {
//     throw new Error('Network response was not ok');
//   }

//   return response.json();
// }


// export async function submitComment(commentData: { text: string, productId: string, rating: number, name?: string }) {
//   const options = {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//       Authorization: `Bearer ${API_TOKEN}`,
//     },
//     body: JSON.stringify(commentData),
//   };

//   const response = await fetch(
//     `${API_BASE_URL}/product/${commentData.productId}/hamid/review?page`,
//     options
//   );

//   if (!response.ok) {
//     throw new Error('Network response was not ok');
//   }

//   return response.json();
// }


export async function getCoursesRequest(params: FilterParams) {
  const data = await getCourses(params);
  return data;
}

export async function getCategoriesRequest() {
  const data = await getCategories();
  return data;
}


// export async function getCommentsRequest({page, productId}) {
//   const data = await getComments(page, productId);
//   return data;
// }


// export async function submitCommentRequest(commentData) {
//   const data = await submitComment(commentData);
//   return data;
// }