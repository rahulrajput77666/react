let Timedate= ()=>{
  let time=new Date();
  return (
   <p>the current Date is {time.toLocaleDateString()} And time {time.toLocaleTimeString()}</p>
  );
}
export default Timedate;  
