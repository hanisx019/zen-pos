import { RxCross2 } from "react-icons/rx";
import { useState } from "react"; 

const CreateOrder = ({form,setForm}) => {


  const [counter, setCounter] = useState(0);
  const [cname, setCname] = useState('');
  const [cphone, setCphone] = useState('');

  const Increment=({})=>{
      setCounter(counter+1);
  }
  const Decrement=()=>{
    if(counter>0){
      setCounter(counter-1);
    }
  }

  const handleForm=(e)=>{
    e.preventDefault();
    console.log(cname,cphone,counter);
    setCname('');
    setCphone('');
    setCounter(0);
    setForm(false);
  }



  return (
    <div className={`${form?'fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50 ':''}`}>
    <div className={` text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10  h-[390px]  w-[380px] bg-neutral-800 rounded-lg ${form==false?'hidden':''}`}>
        <div className="flex justify-between p-5">
            <p>Create Order</p>
            <RxCross2 className="cursor-pointer" onClick={()=>setForm(false)}/>
        </div>
        <hr/>
        <form onSubmit={handleForm} className="p-4">
            <div className="text-sm mb-2">Customer Name</div>
            <input value={cname} onChange={(e)=>setCname(e.target.value)} className="text-sm mb-2 bg-[#1212123d] w-full p-2 rounded-md outline-none" type='text' placeholder="Enter customer name"/>

            <div className="text-sm mb-2">Customer Phone</div>
            <input value={cphone} onChange={(e)=>setCphone(e.target.value)}  className="text-sm mb-2 bg-[#1212123d] w-full p-2 rounded-md outline-none" type='tel' placeholder="+91-9999999999"/>

            <div className="text-sm mb-2">Guest</div>
            <div className="flex justify-between items-center text-center p-2 bg-[#1212123d] rounded-md px-4 select-none">
                <div onClick={Decrement} className="text-yellow-500 cursor-pointer ">-</div><p>{counter} <span>Person</span></p><div onClick={Increment} className="text-yellow-500 cursor-pointer">+</div>
            </div>

            <button className="w-[91%] bg-yellow-500 p-2 text-white rounded-md absolute bottom-4 left-1/2 -translate-x-1/2" type="submit">Create Order</button>

        </form>
        
    </div>
    </div>
  )
}

export default CreateOrder