import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const ViewProducts = () => {
    const [data, changeData] = useState([])
    const fetchDataFromAPI=()=>{
        axios.get("https://fakestoreapi.com/products").then(
            (response)=>{
                console.log(response.data)
                changeData(response.data)
            }
        ).catch().finally()
        
    }
    useEffect(()=>{
        fetchDataFromAPI()
    },[])
    
    return (
        <div>
            <Navbar />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row">
                            {
                                data.map(
                                    (value, index) =>{
                                        return  <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                                        <div class="card" >
                                            <img src={value.image} class="card-img-top" alt="..."></img>
                                            <div class="card-body">
                                                <h5 class="card-title">Name:{value.title}</h5>
                                            </div>
                                            <ul class="list-group list-group-flush">
                                                <li class="list-group-item">Price:{value.price}</li>
                                                <li class="list-group-item">Category:{value.category}</li>
                                                
                                            </ul>
                                            <div class="card-body">
                                                <a href="#" class="card-link">Buy Now</a>
                                                <a href="#" class="card-link">Add to cart</a>
                                            </div>
                                        </div>
                                    </div>
        
                                    }
                           )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewProducts