"use client"

const Card = () => {
    const livestock = 958;
    const crops = 1567;
    // const months = ["Jan", "Feb", "March", "April", "May"]
    const revenue = [5000, 7200, 9000, 9500, 12000]
    const expenses = [1500, 2200, 1700, 1600, 2600]

    const averageRevenue = revenue.reduce((acc, curr) => acc + curr, 0) / revenue.length;

    const averageExpenses = expenses.reduce((acc, curr) => acc + curr, 0) / expenses.length;
    
  return (
    <div className="flex text-sm justify-between items-center w-full gap-4 pt-4 lg:text-base">
        <div className="bg-green-100 flex gap-1 shadow h-full p-4 w-[22%] ">
            <div className="flex justify-center items-center">🐄</div>
            <div>
                <p className="text-xs">Total Livestock</p>
                <h2 className="font-bold">{livestock}</h2>
            </div>
        </div>
        <div className="bg-green-100 flex gap-1 shadow h-full  p-4 w-[22%]">
            <div className="flex justify-center items-center">🌽</div>
            <div>
                <p className="text-xs">Total Crops</p>
                <h2 className="font-bold">{crops}</h2>
            </div>
        </div>
        <div className="bg-green-100 flex gap-1 shadow h-full  p-4 w-[22%]">
            <div className="flex justify-center items-center">💰</div>
            <div>
                <p className="text-xs">Monthly Revenue</p>
                <h2 className="font-bold">${averageRevenue}</h2>
            </div>
        </div>
        <div className="bg-green-100 flex gap-1 shadow h-full p-4 w-[22%]">
            <div className="flex justify-center items-center">🔻</div>
            <div>
                <p className="text-xs">Monthly Expenses</p>
                <h2 className="font-bold">${averageExpenses}</h2>
            </div>
        </div>      
    </div>
  )
}

export default Card
