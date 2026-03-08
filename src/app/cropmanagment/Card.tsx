"use client"

const Cards = () => {
    const crops = 958;
    const species = 28;

  return (
    <div className="flex text-sm justify-between items-center w-full gap-4 pt-4 lg:text-base">
        <div className="bg-green-100 flex gap-1 shadow h-full p-4 w-[48%] ">
            <div className="flex justify-center items-center">🌽</div>
            <div>
                <p className="text-xs">Total Crops</p>
                <h2 className="font-bold">{crops}</h2>
            </div>
        </div>
        <div className="bg-green-100 flex gap-1 shadow h-full  p-4 w-[48%]">
            <div className="flex justify-center items-center"></div>
            <div>
                <p className="text-xs">Total Species</p>
                <h2 className="font-bold">{species}</h2>
            </div>
        </div>     
    </div>
  )
}

export default Cards
