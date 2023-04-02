import { ProductInterface } from "./product.interface";
export interface ShippingAddress {
  name: string;
  address: string;
  city: string;
  state: string;
  country: string;
  postal_code: string;
  amount: number;
}

export interface OrderInterface {
  _id?: string;
  products: ProductInterface[];
  total: number;
  shipping_address: ShippingAddress;
  status: "pending payment" | "pending delivery" | "completed" | "canceled";
  createdAt: Date;
}

export interface ProductSaleInterface {
  current_month: number;
  current_year: number;
  previous_month: number;
  previous_year: number;
  chartData: number[];
  product_sales: [
    {
      current_month_sales: number;
      percent_change: number;
      previous_month_sales: number;
      product_id: number;
      product_name: number;
      sales_trend: "no-change" | "up" | "down";
      total_quantity: 2;
    }
  ];

  total_items_sold: 2;
}

export interface OrderStatisticsInterface {
  currentMonthTotal: number;
  previousMonthTotal: number;
  totalOrderAmount: number;
  percentChange: number;
  ordersTrend: number;
}
