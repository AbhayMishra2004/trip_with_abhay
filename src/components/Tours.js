import Card from './Card'


function Tours({tours , removeTour})
{
    return (

        <div className="container flex flex-col items-center justify-center w-screen ">
            
            {/* HEADING  */}
            <div>
                <h2  className='title text-[3rem] m-[6vh] border-[7px] border-dashed border-border-col py-[1vh] px-[5vw] '> Trip With Abhay </h2>
            </div>

            {/* ALL CARDS */}
            {/* HAR 7 CITITES KE LIYE , CARD NIKAL LENGLE MAP SE .  */}
            <div className='cards flex justify-center flex-wrap max-w-[1300px] my-0 mx-auto '>

                {
                     tours.map((tour) => {
                    
                    return <Card {...tour} removeTour = {removeTour} ></Card>
                })}
                
            </div>
        </div>
    )
}

export default Tours ; 