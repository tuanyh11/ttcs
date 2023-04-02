import React, { useState } from "react";
import ArrowDown from "../../assets/icons/ArrowDown";
import ArrowUpIcon from "../../assets/icons/ArrowUpIcon";
import Calendar from "../../assets/icons/Calendar";
import CartIcon from "../../assets/icons/CartIcon";
import ComputerScreenIcon from "../../assets/icons/ComputerScreenIcon";
import TableIcon from "../../assets/icons/TableIcon";
import UserIcon from "../../assets/icons/UserIcon";
import { HeadingV1 } from "../../Components";
import { DayPicker, SelectSingleEventHandler } from "react-day-picker";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { useQueries } from "@tanstack/react-query";
import {
  productTotalStatistics,
  userTotalStatistics,
} from "../../api/statistic";
import { getStatisticOrderTotal, getStatisticProductSales } from "../../api/order.api";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);



const Home = () => {
  const [selected, setSelected] = useState<Date>(new Date());
  const [isOpenCalendar, setIsOpenCalendar] = useState(false);
  const [
    { data: productStatistic },
    { data: userTotalStatisticData },
    { data: productStatisticSales },
    { data: orderStatistic },
  ] = useQueries({
    queries: [
      {
        queryFn: productTotalStatistics,
        queryKey: ["productTotalStatistics"],
        refetchOnWindowFocus: false,
      },
      {
        queryFn: userTotalStatistics,
        queryKey: ["userTotalStatistics"],
        refetchOnWindowFocus: false,
      },
      {
        queryFn: getStatisticProductSales,
        queryKey: ["product-statistic-sales"],
        refetchOnWindowFocus: false,
      },
      {
        queryFn: getStatisticOrderTotal,
        queryKey: ["statistic-order-total"],
        refetchOnWindowFocus: false,
      }
    ],
  });
  const percentChange = productStatistic?.percentChange as number;
  const totalProduct = productStatistic?.totalProducts;

  const percentChangeUser = userTotalStatisticData?.percentChange as number;
  const totalUsers = userTotalStatisticData?.totalUsers;

  const totalItemsSales = productStatisticSales?.total_items_sold
  const percentChangeProductSales = productStatisticSales?.product_sales?.[0].percent_change as number;

  const totalOrders = orderStatistic?.totalOrderAmount
  const percentChangeOrder = orderStatistic?.percentChange as number;

  const currentMonthSales = productStatisticSales?.product_sales?.[0].current_month_sales
  const previousMonthSales = productStatisticSales?.product_sales?.[0].previous_month_sales

  const chartData = productStatisticSales?.chartData

  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Products Sales",
        data: chartData || [],
        fill: true,
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(75,192,192,1)",
      },
    ],
  };

  return (
    <div>
      <div className="col-span-12 mt-8">
        <HeadingV1 title="General Report" />

        <div className="grid grid-cols-12 gap-6 mt-5">
          <div className="col-span-12 sm:col-span-6 xl:col-span-3 intro-y">
            <div className="relative zoom-in before:content-[''] before:w-[90%] before:shadow-[0px_3px_20px_#0000000b] before:bg-slate-50 before:h-full before:mt-3 before:absolute before:rounded-md before:mx-auto before:inset-x-0 before:dark:bg-darkmode-400/70">
              <div className="p-5 box">
                <div className="flex">
                  <CartIcon />
                  <div className="ml-auto">
                    <div
                      className={`cursor-pointer ${
                        percentChangeProductSales > 0
                          ? "bg-success"
                          : percentChangeProductSales < 0
                          ? "bg-danger"
                          : "bg-gray-500"
                      } py-[3px] flex rounded-full capitalize text-white text-xs pl-2 pr-1 items-center font-medium`}
                    >
                      {percentChangeProductSales === 0
                        ? "No change"
                        :  
                            percentChangeProductSales > 0 ?<>{percentChangeProductSales}% <ArrowUpIcon /></>  :<>{Math.abs(percentChangeProductSales)}% <ArrowDown /></>
                          }
                    </div>
                  </div>
                </div>
                <div className="mt-6 text-3xl font-medium leading-8">{totalItemsSales}</div>
                <div className="mt-1 text-base text-slate-500">Item Sales</div>
              </div>
            </div>
          </div>

          <div className="col-span-12 sm:col-span-6 xl:col-span-3 intro-y">
            <div className="relative zoom-in before:content-[''] before:w-[90%] before:shadow-[0px_3px_20px_#0000000b] before:bg-slate-50 before:h-full before:mt-3 before:absolute before:rounded-md before:mx-auto before:inset-x-0 before:dark:bg-darkmode-400/70">
              <div className="p-5 box">
                <div className="flex">
                  <TableIcon />
                  <div className="ml-auto">
                    <div
                      className={`cursor-pointer ${
                        percentChangeOrder > 0
                          ? "bg-success"
                          : percentChangeOrder < 0
                          ? "bg-danger"
                          : "bg-gray-500"
                      } py-[3px] flex rounded-full capitalize text-white text-xs pl-2 pr-1 items-center font-medium`}
                    >
                      {percentChangeOrder === 0
                        ? "No change"
                        :  
                            percentChangeOrder > 0 ?<>{percentChangeOrder}% <ArrowUpIcon /></>  :<>{Math.abs(percentChangeOrder)}% <ArrowDown /></>
                          }
                    </div>
                  </div>                </div>
                <div className="mt-6 text-3xl font-medium leading-8">{totalOrders}</div>
                <div className="mt-1 text-base text-slate-500">New Orders</div>
              </div>
            </div>
          </div>

          <div className="col-span-12 sm:col-span-6 xl:col-span-3 intro-y">
            <div className="relative zoom-in before:content-[''] before:w-[90%] before:shadow-[0px_3px_20px_#0000000b] before:bg-slate-50 before:h-full before:mt-3 before:absolute before:rounded-md before:mx-auto before:inset-x-0 before:dark:bg-darkmode-400/70">
              <div className="p-5 box">
                <div className="flex">
                  <ComputerScreenIcon />

                  <div className="ml-auto">
                    <div
                      className={`cursor-pointer ${
                        percentChange > 0
                          ? "bg-success"
                          : percentChange < 0
                          ? "bg-danger"
                          : "bg-gray-500"
                      } py-[3px] flex rounded-full capitalize text-white text-xs pl-2 pr-1 items-center font-medium`}
                    >
                      {percentChange === 0
                        ? "No change"
                        :  
                            percentChange > 0 ?<>{percentChange}% <ArrowUpIcon /></>  :<>{Math.abs(percentChange)}% <ArrowDown /></>
                          }
                    </div>
                  </div>
                </div>
                <div className="mt-6 text-3xl font-medium leading-8">
                  {totalProduct}
                </div>
                <div className="mt-1 text-base text-slate-500">
                  Total Products
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-12 sm:col-span-6 xl:col-span-3 intro-y">
            <div className="relative zoom-in before:content-[''] before:w-[90%] before:shadow-[0px_3px_20px_#0000000b] before:bg-slate-50 before:h-full before:mt-3 before:absolute before:rounded-md before:mx-auto before:inset-x-0 before:dark:bg-darkmode-400/70">
              <div className="p-5 box">
                <div className="flex">
                  <UserIcon />
                  <div className="ml-auto">
                    <div
                      className={`cursor-pointer ${
                        percentChangeUser > 0
                          ? "bg-success"
                          : percentChangeUser < 0
                          ? "bg-danger"
                          : "bg-gray-500"
                      } py-[3px] flex rounded-full capitalize text-white text-xs pl-2 pr-1 items-center font-medium`}
                    >
                      {percentChangeUser === 0
                        ? "No change"
                        :  
                            percentChangeUser > 0 ?<>{percentChangeUser}% <ArrowUpIcon /></>  :<>{Math.abs(percentChangeUser)}% <ArrowDown /></>
                          }
                    </div>
                  </div>
                </div>
                <div className="mt-6 text-3xl font-medium leading-8">
                  {totalUsers}
                </div>
                <div className="mt-1 text-base text-slate-500">
                  Unique Visitor
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="col-span-12 mt-8 lg:col-span-6">
        <div className="items-center block h-10 intro-y sm:flex">
          <h2 className="mr-5 text-lg font-medium truncate">Sales Report</h2>
          <div
            role="button"
            onClick={() => setIsOpenCalendar(!isOpenCalendar)}
            className="relative mt-3 sm:ml-auto sm:mt-0 text-slate-500"
          >
            <div className="absolute inset-y-0 left-0 z-10 top-1/2 -translate-y-1/2  ">
              <Calendar />
            </div>
            <input
              type="text"
              onChange={(e) => setSelected(new Date())}
              className="disabled:bg-slate-100 !pl-10 disabled:cursor-not-allowed dark:disabled:bg-darkmode-800/50 dark:disabled:border-transparent [&amp;[readonly]]:bg-slate-100 [&amp;[readonly]]:cursor-not-allowed [&amp;[readonly]]:dark:bg-darkmode-800/50 [&amp;[readonly]]:dark:border-transparent transition duration-200 ease-in-out w-full text-sm border-slate-200 shadow-sm rounded-md placeholder:text-slate-400/90 focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus:border-primary focus:border-opacity-40 dark:bg-darkmode-800 dark:border-transparent dark:focus:ring-slate-700 dark:focus:ring-opacity-50 dark:placeholder:text-slate-500/80  sm:w-56 !box"
              value={selected?.toLocaleString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric",
              })}
            />
            {isOpenCalendar && (
              <DayPicker
                mode="single"
                className="date-sales-picker"
                selected={selected}
                onSelect={setSelected as SelectSingleEventHandler}
                // footer={footer}
              />
            )}
          </div>
        </div>
        <div className="p-5 mt-12 intro-y box sm:mt-5">
          <div className="flex flex-col md:flex-row md:items-center">
            <div className="flex">
              <div>
                <div className="text-lg font-medium text-primary dark:text-slate-300 xl:text-xl">
                  {currentMonthSales}
                </div>
                <div className="mt-0.5 text-slate-500">This Month</div>
              </div>
              <div className="w-px h-12 mx-4 border border-r border-dashed border-slate-200 dark:border-darkmode-300 xl:mx-5"></div>
              <div>
                <div className="text-lg font-medium text-slate-500 xl:text-xl">
                  {previousMonthSales}
                </div>
                <div className="mt-0.5 text-slate-500">Last Month</div>
              </div>
            </div>
          </div>

          <div className="">
            <Line data={data} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
