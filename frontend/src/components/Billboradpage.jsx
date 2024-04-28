import React, { useEffect, useState } from 'react';
import products from './billboards';
import ReactPlayer from 'react-player';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const BillboardPage = ({ props }) => {
    
    console.log(props.city)
  return (
    <div className=" mx-auto border w-[80%] border-black">
    <div className='grid  grid-cols-2 border  border-black items-center justify-around'>
        <div className='border items-center  border-black'>BillBoard At {props.city}</div>
        <div className='border items-center text-end  border-black'>icons</div>
        <div className='border items-center  border-black'>Pakistan,KPK,{props.city}</div>
        <div className='border items-center text-end border-black'>Rs{props.price}</div>
    </div>

    <div className='flex w-full border border-black justify-between'>
    <div className='w-[70%] border border-black '>
    <div className='w-[100%]'><img className='w-full h-full' src={props.img} alt="" /></div>
    <div> 
    <div>Description <div>  {props.locationDescription}
    TCT: All Over Pakistan
    TGT:Kalam</div></div>
  
    </div>
    <div>Details
      <div>
        <div>
            <div> 
            <div>Billboard ID</div>
            <div>42957</div>
            </div>
            <div> 
            <div>Billboard ID</div>
            <div>42957</div>
            </div>
            <div> 
            <div>Billboard ID</div>
            <div>42957</div>
            </div>
            <div> 
            <div>Billboard ID</div>
            <div>42957</div>
            </div>
            
        </div>
        <div>
            <div> 
            <div>Billboard ID</div>
            <div>42957</div>
            </div>
            <div> 
            <div>Billboard ID</div>
            <div>42957</div>
            </div>
            <div> 
            <div>Billboard ID</div>
            <div>42957</div>
            </div>
            <div> 
            <div>Billboard ID</div>
            <div>42957</div>
            </div>
            
        </div>
        
      </div> 
      <div>Address
      <div>
      <div>
        <div>Address</div>
        <div>{props.locationDescription}{props.city}</div>
        <div>Address</div>
        <div>{props.locationDescription}{props.city}</div>
       </div>
       <div>
        <div>Address</div>
        <div>{props.locationDescription}{props.city}</div>
        <div>Address</div>
        <div>{props.locationDescription}{props.city}</div>
       </div>
      </div>
      integrate google maps
      </div>
      <div>Vedio <div>
      <div className="h-[200px] flex items-center justify-center  md:h-[400px] lg:h-[400px] mx-auto xl:h-[550px] ml-[-16px] lg:ml-0 mr-[-16px] lg:mr-0">
                        <ReactPlayer
                            url={`https://www.youtube.com/watch?v=N6v7HQiCNiQ`}
                            controls
                            width="90%"
                            height="90%"
                            style={{ backgroundColor: "#000000" }}
                            playing={true}
                        />
                    </div>
      </div></div>
      <div>Contact information
       <div>
        <div>Shahadvertzing pakistan enquire about this billboard</div>
        <div><form action="">
            <label htmlFor="">Name</label>
            <input type="text" placeholder='' />
            <label htmlFor="">Name</label>
            <input type="text" placeholder='' />
            <label htmlFor="">Name</label>
            <input type="text" placeholder='' />
            <label htmlFor="">Name</label>
            <textarea type="text" placeholder='' /> 
            <button>Request Availability</button>

        </form></div>
       </div>
      </div>
    </div>
    </div>
    <div className='flex flex-col'>
    <div>
        <div>Shah Advertizing Pakistan</div>
        <form action="">
            <input type="text" placeholder='Name' />
            <input type="value" placeholder='Phone' />
            <input type="email" placeholder='Email' />
            <div>
                <button>Send Email</button>
                <button>WhatsApp</button>
            </div>
        </form>
        
            </div>
         <div>
            <p>We Have Billboards in</p>
            <ul>
            {products.map((item,index)=>{
        return <li>
            {item.city}
              </li>
    })}
            </ul>
         </div>
    </div>
    </div>
    <div>
    STANDARD TERMS & CONDITIONS: (1). Taxes are not included in prices. (2). Your rent will begin from the booking time. (3). 50% rent must be paid in advance and 50% after display (4). Any loss to the skin i.e. damage to the skin due to bad weather or theft of the skin will not be bearded by the company. (5). Billboards will be available from the dates mentioned subject to the condition that our existing client does not extend their campaign.
    </div>
    </div>
  );
};

export default BillboardPage;
