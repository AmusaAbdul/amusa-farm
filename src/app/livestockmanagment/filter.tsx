"use client"

const filter = ({ filter, setFilter }: { filter: string; setFilter: (value: string) => void }) => {

  return (
    <section className="bg-green-100 mt-6 w-full  p-5 shadow">
      <form onSubmit={(e) => e.preventDefault()} className="flex items-center text-sm justify-between gap-4 lg:text-base">
        <div className="flex items-center gap-2 w-[60%]" >
          <label htmlFor="Filter by Type">Filter by Type:</label>
          <select id="Filter by Type" value={filter} onChange={(e) => setFilter(e.target.value)} className="border border-gray-300 w-[50%]   rounded-md px-2 py-1">
            <option value="All">All</option>
            <option value="Cow">Cattle </option>
            <option value="Goat">Goat</option>
            <option value="Poultry">Poultry</option>
            <option value="Fish">Fish</option>
            <option value="Pig">Pig</option>
          </select>
        </div>
      </form>
    </section>
  )
}

export default filter
