'use server'; 

import { RegisterFormData } from "../todo-app/(auth)/register/_components/Index";
import { ApiResponse, LoginData, RegisterData, User } from "../todo-app/types/action";



export default async function   registerUserAction( payload : RegisterFormData): Promise<ApiResponse<User | null>> {
  try {
    console.log('payload: ', payload);
     console.log('process.env.NEXT_PUBLIC_BASE_URL: ', process.env.NEXT_PUBLIC_BASE_URL);
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/users/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json", // 👈 Important
      },
      body: JSON.stringify(payload),
    });

    const data = (await response.json()) as ApiResponse<User>;
    return data;
  } catch (error) {
    return {
      statusCode: 500,
      data: null,
      success: false,
      message: (error as Error).message || "Something went wrong",
    };
  } 
}
export  async function loginUserAction(
  payload: LoginData
): Promise<ApiResponse<RegisterData | null>> {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json", // 👈 Important
      },
      body: JSON.stringify(payload),
    });

    const data = (await response.json()) as ApiResponse<RegisterData>;
    console.log('data: ', data);
    return data;
  } catch (error) {
    return {
      statusCode: 500,
      data: null,
      success: false,
      message: (error as Error).message || "Something went wrong",
    };
  }
}

//  registerUserAction; 