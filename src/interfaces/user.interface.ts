export interface UserTotalStatisticInterface {
  currentMonthUsers: number;
  previousMonthUsers: number;
  totalUsers: number;
  percentChange: number;
}


export interface UserInterface {
  _id?: string;
  userName: string;
  email: string;
  admin: boolean;
  createdAt?: string;
  confirmPassword?: string;
  password?: string;
}