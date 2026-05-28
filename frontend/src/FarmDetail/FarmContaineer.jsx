 import { Link } from "react-router-dom";



 export default function FarmContaineer() {
    return (
        <div className="p-12 max-w-2xl m-14 ml-20 ">
        <div className="bg-white rounded-lg shadow-lg p-6 border border-black h-[300px] w-[300px] ml-28">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 ml-10">Farm Details</h2>
            <p>
                <un>
                    <li>Farm Dashboard</li>

                    <li>Land Details</li>
                    <li> Farmer Details Form</li>
                </un>
              <div className="m-5 mt-10 ml-16"> 
              <Link className="px-4 py-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition" to="/form"> Click Me!</Link>
                </div> 
            </p>
        </div>
      </div>
      


    );  
}