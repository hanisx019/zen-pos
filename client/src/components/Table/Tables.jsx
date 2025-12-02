import { tableData } from "../../constants/tableData";

const Tables = () => {
  return (
    <div className="flex flex-wrap gap-4">
      {tableData.map((table) => (
        <div key={table.id} className="bg-[#09090B] w-[350px] h-[170px] mt-6 rounded-lg   py-4 flex flex-col cursor-pointer ">
        <div className="flex justify-between  px-5 py-2">
            <p className="text-white font-semibold text-md">{table.name}</p>
            <div className="flex items-center gap-2 bg-green-950 text-green-500 py-1 px-2 justify-center rounded-md mb-2 text-xs">{table.status}</div>
        </div>

        <div className="flex justify-center">
            <div className="bg-blue-700 size-14 flex items-center justify-center font-bold  text-white rounded-full">
                {table.initial}
            </div>
        </div>
        </div>
      ))}

    </div>
  );
};

export default Tables;
