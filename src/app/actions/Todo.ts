"use server";

import { RegisterFormData } from "../todo-app/(auth)/register/_components/Index";
import {
  ApiResponse,
  LoginData,
  RegisterData,
  Todo,
  User,
} from "../todo-app/types/action";

export default async function registerUserAction(
  payload: RegisterFormData
): Promise<ApiResponse<User | null>> {
  try {
    console.log("payload: ", payload);
    console.log(
      "process.env.NEXT_PUBLIC_BASE_URL: ",
      process.env.NEXT_PUBLIC_BASE_URL
    );
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/users/register`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json", // 👈 Important
        },
        body: JSON.stringify(payload),
      }
    );

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
export async function loginUserAction(
  payload: LoginData
): Promise<ApiResponse<RegisterData | null>> {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/users/login`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json", // 👈 Important
        },
        body: JSON.stringify(payload),
      }
    );

    const data = (await response.json()) as ApiResponse<RegisterData>;
    console.log("data: ", data);
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
export const fetchTodos = async (): Promise<ApiResponse<Todo[]>> => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/todos`);
    const data: ApiResponse<Todo[]> = await res.json();
    return data;
  } catch (error: any) {
    return {
      statusCode: 500,
      success: false,
      data: null,
      message: error?.message || "Something went wrong",
    };
  }
};

// ---------------- Add a new todo ----------------
export const addTodo = async (
  todo: Partial<Todo>
): Promise<ApiResponse<Todo>> => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/todos`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(todo),
    });
    const data: ApiResponse<Todo> = await res.json();
    return data;
  } catch (error: any) {
    return {
      statusCode: 500,
      success: false,
      data: null,
      message: error?.message || "Something went wrong",
    };
  }
};

// ---------------- Update a todo ----------------
export const updateTodo = async (
  id: string,
  todo: Partial<Todo>
): Promise<ApiResponse<Todo>> => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/todos/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(todo),
    });
    const data: ApiResponse<Todo> = await res.json();
    return data;
  } catch (error: any) {
    return {
      statusCode: 500,
      success: false,
      data: null,
      message: error?.message || "Something went wrong",
    };
  }
};

// ---------------- Delete a todo ----------------
export const deleteTodo = async (id: string): Promise<ApiResponse<null>> => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/todos/${id}`, {
      method: "DELETE",
    });
    const data: ApiResponse<null> = await res.json();
    return data;
  } catch (error: any) {
    return {
      statusCode: 500,
      success: false,
      data: null,
      message: error?.message || "Something went wrong",
    };
  }
};
