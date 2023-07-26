import React, { useState } from 'react';
 


function Card({id , image , info , price , name , removeTour})
{

    const[readmore , setReadmore] = useState(false) ; 

    function readmoreHandler()
    {
        setReadmore(! readmore) ; 
    }

    // DECRTION YAA TO PURA HOGA , YAA 200 CHARACTER HOGA . 
    // IT DEPEND ON THE READ MORE 
    const description = readmore ? info : `${info.substring(0,200)}...`  ; 
    

    return (

        <div className="card w-[400px] min-h-max m-4 p-4 flex flex-col rounded-[10px] items-center  shadow-card-shadow ">

            {/* CARD KI IMAGE */}
            <img src={image} className="w-[380px] object-cover aspect-square" />

            <div className="tour-info mx-[20px] my-[5px] ">

                {/* CARD MAI RATE HAI */}
                <div className="tour-details   ">
                    <h4 className="tour-price text-[#1faa59] text-[1.3rem] ">₹ {price} </h4>
                    <h4 className="tour-name text-[1.5rem]  ">{name}</h4>
                </div>

                {/* DESCRIPTION OR INFO */}
                <div className="description"> {description}
                    
                    {/* READ MORE/LESS BUTTON  */}
                    <span className="read-more text-[#12b0e8] cursor-pointer " onClick={readmoreHandler}>
                        {readmore ? 'Show Less' : 'Read More'}
                    </span>
                </div>

                {/* BUTTON OF NOT INTRESTED */}
                {/* REMOVE TOUR ID SEND KARKE FILTER KAREGA  */}
                <button className="btn-red mt-[18px] border-2 border-black text-[18px] px-[80px] py-[10px] bg-[#b4161b21] font-bold rounded-[10px] cursor-pointer  hover:bg-[red] hover:text-white " onClick={() => removeTour(id)}> Not Intreseted </button>
            </div>
        </div>
    )

}

export default Card ; 