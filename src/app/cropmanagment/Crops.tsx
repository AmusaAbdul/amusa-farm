'"use client"'

const Crops = ({ filter }: { filter: string }) => {
  const crops = [
    { id: 1, type: "Corn", Species: "Sweet Corn", Date: "3 days", Quantity: "25kg", action: "View Details" },
    { id: 2, type: "Cassava", Species: "Yellow cassava", Date: "2 weeks", Quantity: "1 ton", action: "View Details" },
    { id: 3, type: "Plantain", Species: "French type", Date: "2 days", Quantity: "26 bunch", action: "View Details" },
    { id: 4, type: "Pawpaw", Species: "Red pawpaw", Date: "1 week", Quantity: "36 pieces", action: "View Details" },
    { id: 5, type: "Sugarcane", Species: "White sugarcane", Date: "3 weeks", Quantity: "123 piece", action: "View Details" },
    { id: 6, type: "Tomato", Species: "Cherry tomato", Date: "1 day", Quantity: "67kg", action: "View Details" },
    { id: 7, type: "Pepper", Species: "Bell pepper", Date: "3 days", Quantity: "123kg", action: "View Details" },

  ]

  const filteredCrops = filter === "All" ? crops : crops.filter(crop => crop.type === filter);

  return (
    <div className="bg-green-100 mt-6 w-full  p-5 shadow overflow-y-auto max-h-80 ">

      <table className="w-full mt-4   md:text-sm text-md  lg:text-base">
        <thead className="">
          <tr className="text-left bg-green-200 border-b p-2  text-sm  lg:text-base">
            <th className="p-2">No.</th>
            <th className="p-2">Type</th>
            <th className="p-2">Species</th>
            <th className="p-2">Date Added</th>
            <th className="p-2">Quantity</th>
            <th className="p-2">Actions</th>
          </tr>
        </thead>

        {filteredCrops.map(type => (
          <tbody key={type.id}>
            <tr className="bg-green-200 border-b p-2 text-sm  lg:text-base">
              <td className="p-2">{type.id}</td>
              <td className="p-2">{type.type}</td>
              <td className="p-2">{type.Species}</td>
              <td className="p-2">{type.Date}</td>
              <td className="p-2">{type.Quantity}</td>
              <td className="p-2">
                <button className={`bg-green-500 text-xs text-white px-2 py-1 rounded lg:text-base`}>{type.action}</button>
              </td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  )
}


export default Crops

