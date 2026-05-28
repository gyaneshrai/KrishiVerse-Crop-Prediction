import Dashboard from "./Dashboard";
import LandUsePieChart from "./LandPieChart";
function DashContaineer(){
    return(
        <div className="flex items-start space-x-42">  
           <div className="mt-4 w-2xl ml-14"> <Dashboard/></div>
           {/* <div className="ml-10" ><LandUsePieChart/></div> */}
        </div>
    );
}
export default DashContaineer