import { useRef, useState } from "react";

function App() {
  const [otp, setOtp] = useState(Array(6).fill(""));
  const inputRef = useRef([]);

  const handlekeyDownFunc=(e,index)=>{
    if(e.key==="Backspace" && !otp[index] && index>0){
      inputRef.current[index-1].focus();
    }
  }

  const handleChangeFun=(value,index)=>{
    const newOtp=[...otp];
    newOtp[index]=value;
    setOtp(newOtp)
    if(value!=="" && index<otp.length-1){
      inputRef.current[index+1].focus()
    }
  }
  return (
    <div className="flex items-center justify-center w-screen h-screen">
      <div className="w-1/2 h-1/2 shadow-2xl">
        <h1 className="font-bold text-2xl text-center py-2 text-blue-400">
          Otp Verification
        </h1>
        <div className="flex items-center justify-center py-10">
          {otp.map((digit,index) => (
            <input
              type="text"
              key={index}
              ref={(el)=>inputRef.current[index]=el}
              onChange={(e)=>handleChangeFun(e.target.value,index)}
              onKeyDown={(e)=>handlekeyDownFunc(e,index)}
              maxLength={1}
              value={digit}
              className="text-center h-10 w-10 border-2 border-gray-400 focus:outline-slate-600 rounded-md m-2"
            />
          ))}
        </div>
        <button onClick={()=>{
          const val=otp.reduce((item,acc)=>item+acc,'');
          alert(`Otp Value is ${val}`)
        }} className="flex align-center m-auto p-2 border-2 rounded-md bg-blue-400">Submit</button>
      </div>
    </div>
  );
}

export default App;
