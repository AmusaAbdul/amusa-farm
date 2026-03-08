'"use client"'


const activities = () => {


  const activities = [
    { id: 1, date: "Jun 12, 2026", activity: "Harvesting", type: "Crops", status: "Completed" },
    { id: 2, date: "Jun 10, 2026", activity: "Vaccinated 20 Goat", type: "Vaccination", status: "In Progress" },
    { id: 3, date: "Jun 8, 2026", activity: "Added 20 Cows", type: "Livestock", status: "Added" },
    { id: 4, date: "Jun 6, 2026", activity: "Purchase new tractor", type: "Machinery", status: "Expense" },
    { id: 5, date: "Jun 4, 2026", activity: "Sold 40kg of Corn", type: "Sales", status: "Sale" }
  ]


  return (
    <div className="bg-green-100 mt-6 w-full  p-5 shadow  ">
      <h1 className="  font-bold md:text-sm text-md  lg:text-base ">Recent Activities</h1>
      <div className="overflow-y-auto max-h-80">
        <table className="w-full mt-4   md:text-sm text-md h-8 lg:text-base">
          <thead className="">
            <tr className="text-left text-sm bg-green-200 border-b p-2 lg:text-base">
              <th className="p-2">Date</th>
              <th className="p-2">Activity</th>
              <th className="p-2">Type</th>
              <th className="p-2">Status </th>
            </tr>
          </thead>

          {activities.map(activity => (
            <tbody key={activity.id}>
              <tr className="bg-green-200 border-b p-2 text-sm  lg:text-base">
                <td className="p-2">{activity.date}</td>
                <td className="p-2">{activity.activity}</td>
                <td className="p-2">{activity.type}</td>
                <td className="p-2">
                  <button className={`bg-green-500 text-white px-2 py-1 text-xs rounded  ${activity.status === "In Progress" ? "bg-yellow-500" : ""} ${activity.status === "Sale" ? "bg-purple-500" : ""} ${activity.status === "Expense" ? "bg-red-500" : ""} lg:text-base `}>{activity.status}</button>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </div>
  )
}


export default activities
