const PROJECT_NAME = process.env.NEXT_PUBLIC_PROJECT_NAME || "sepah";

export const SERVER_API_TOKEN = localStorage.getItem(`${PROJECT_NAME}-access`) ;
export const SERVER_API_URL = 'http://localhost:9000/v1'