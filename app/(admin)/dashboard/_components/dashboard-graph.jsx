"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
  Legend,
  LineChart,
  Line,
  Pie,
  PieChart
} from "recharts";

export const GraphDashboard = ({ bookings }) => {
  // Function to calculate total amount per month
  const calculateMonthlyTotal = () => {
    const monthlyTotals = {};

    // Initialize monthlyTotals with zero values for all months
    for (let month = 1; month <= 12; month++) {
      monthlyTotals[month] = 0;
    }

    // Iterate over bookings
    bookings.forEach((booking) => {
      // Extract month from reservation start date
      const month = new Date(booking.reserve.start).getMonth() + 1; // Months are zero-indexed, so add 1
      const totalPrice = parseFloat(
        booking.reserve.totalprice.replace('"', "")
      ); // Remove quotes and parse as float

      // Add totalPrice to the corresponding month
      monthlyTotals[month] += totalPrice;
    });

    return monthlyTotals;
  };

  // Calculate total amount per month
  const monthlyTotals = calculateMonthlyTotal();

  // Create an array containing all 12 months and their corresponding total amounts
  const data = Array.from({ length: 12 }, (_, index) => ({
    month: index + 1, // Month index starts from 0, so add 1 to get month number
    totalAmount: monthlyTotals[index + 1] || 0, // Use total amount from monthlyTotals; if undefined, default to 0
  }));

  return (
    <ResponsiveContainer width="100%" height={350}>
      <LineChart data={data}>
        <XAxis
          dataKey="month"
          stroke="#888888"
          fontSize={12}
          tickLine={true}
          axisLine={true}
          label={{ value: "Month", position: "insideBottom", offset: -10 }}
        />
        <YAxis
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          label={{
            value: "Total Amount ($)",
            angle: -90,
            position: "insideLeft",
          }}
        />
        <Tooltip formatter={(value) => `$${value}`} />
        <Legend />
        <Line
          dataKey="totalAmount"
          fill="currentColor"
          radius={[4, 4, 0, 0]}
          className="fill-primary"
        />
      </LineChart>
    </ResponsiveContainer>
  );
};
