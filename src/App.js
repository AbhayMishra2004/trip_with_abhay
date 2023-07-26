import React , {useState} from "react" ; 
import data from './data' ; 
import Tours from "./components/Tours"; 



const App = () => {

    const[tours , setTours] = useState(data) ;

    // AGAR 0 CARD HO JAYE TO , REFRESH BUTTON 
    if(tours.length == 0)
    {
        return (

              <div className="refresh h-[100vh] flex justify-center flex-col items-center ">

                    {/* HEADING OF THE REFRESH BUTTON  */}
                    <h2 className="text-[38px] font-bold "> No Tours Left </h2>

                    {/* BUTTON FOR THE REFRESH  */}
                    <button className="btn-white bg-refresh-button-bg px-[90px] py-[10px] mt-[10px] rounded-[5px] font-bold" onClick={()=> setTours(data)}> Refresh </button>
              </div>
        )
    }

    // FOR REMOVEING THE TOURS 
    function removeTour(id)
    {
        const newTours = tours.filter(tour => tour.id != id) ; 
        setTours(newTours) ; 
    }


    // RETURN 
    return (

      <div className="App flex justify-center">

           {/* TOURS AUR REMOVE TOUR KO AS A PROP PASS KAR RE */}
          <Tours tours={tours} removeTour = {removeTour} ></Tours>

      </div>

    )

} ; 


export default App ; 