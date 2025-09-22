// ------------------------ Todo ------------------------
export type Todo = {
  _id: string;
  title: string;
  description: string;
  isDone: boolean;
  createdAt: string;
  updatedAt: string;
  __v: number;
};

// If your API wraps todos in a "data" array
export type TodoResponse = {
  data: Todo[];
};

// ------------------------ Avatar ------------------------
// Avatar type
export type Avatar = {
  url: string;
  localPath: string;
  _id: string;
};

// User type
export type User = {
  _id: string;
  avatar: Avatar;
  username: string;
  email: string;
  role: "ADMIN" | "USER"; // can extend if more roles
  loginType: "EMAIL_PASSWORD" | "GOOGLE" | "GITHUB"; // extend if needed
  isEmailVerified: boolean;
  createdAt: string;
  updatedAt: string;
  __v: number;
};

// Data wrapper type
export type RegisterData = {
  user: User;
  accessToken: string;
  refreshToken: string;
};
export type LoginData = {
  username: string;
  password: string;
};
// Generic API response type
export type ApiResponse<T> = {
  statusCode: number;
  data: T | null;
  success: boolean;
  errors?: Record<string, string>[];
  message: string;
};
