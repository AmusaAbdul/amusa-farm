
const Filter = ({ filter, setFilter }: { filter: string, setFilter: (filter: string) => void }) => {
    return (
        <section className="bg-green-100 mt-6 w-full  p-5 shadow " >
            <form onSubmit={(e) => e.preventDefault()} className="flex items-center justify-between gap-4 text-sm lg:text-base">
                <div className="flex items-center gap-2 w-[60%] " >
                    <label htmlFor="Filter by Type">Filter by Type:</label>
                    <select id="Filter by Type" value={filter} onChange={(e) => setFilter(e.target.value)} className="border border-gray-300 w-[50%]   rounded-md px-2 py-1">
                        <option value="All">All</option>
                        <option value="Corn">Corn</option>
                        <option value="Cassava">Cassava</option>
                        <option value="Plantain">Plantain</option>
                        <option value="Cocoa">Cocoa</option>
                        <option value="Pawpaw">Pawpaw</option>
                        <option value="Pepper">Pepper</option>
                        <option value="Tomato">Tomato</option>
                        <option value="Sugarcane">Sugarcane</option>
                    </select>
                </div>
            </form>
        </section>
    )
}

export default Filter
