"use client"
import LivestockCropsChart from "./LivestockCropsChart";
import RevenueExpensesChart from "./RevenueExpensesChart";

export default function Charts() {
    const livestock = 1567;
    const crops = 958;
    const months = ["Jan", "Feb", "March", "April", "May"]
    const revenue = [1000, 1200, 1200, 1500, 2000]
    const expenses = [800, 900, 700, 1000, 1200]

    

  return (
    <div className="flex flex-col w-[99%]  md:flex-row md:text-sm justify-between items-center  gap-4 pt-4 lg:text-base">
      <div className="w-full md:w-[45%]  bg-green-100 shadow p-5">
        <p>Revenue Trends</p>
        <RevenueExpensesChart months={months} revenue={revenue} expenses={expenses} />
      </div>
      <div className="w-full  md:w-[45%]  bg-green-100 shadow p-5"    >
        <p>Production Summary</p>
        <LivestockCropsChart livestock={livestock} crops={crops}/>
      </div>
    </div>
  )
}

