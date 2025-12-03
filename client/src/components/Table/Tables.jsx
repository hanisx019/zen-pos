import { useNavigate } from "react-router-dom";
import { tableData } from "../../constants/tableData";


const Tables = ({ tableStatus , setTableStatus }) => {

  const navigate = useNavigate();

  return (
    <div  className="flex flex-wrap gap-4">
      {tableData.filter(table=>{
        if(tableStatus==='All') return table;
        else if(tableStatus==='Available' && table.status==='Available') return table;
        else if(tableStatus==='Booked' && table.status==='Booked') return table;
      })
      .map((table) => (
        <div onClick={()=>{if(table.status==='Available') return navigate('/menu')}} key={table.id} className="bg-[#09090B] w-[350px] h-[170px] mt-6 rounded-lg   py-4 flex flex-col cursor-pointer ">
          <div className="flex justify-between px-5 py-2">
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
