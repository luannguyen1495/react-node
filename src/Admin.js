import { useEffect, useState } from "react";
import * as productService from './services/productService';

function Admin(){
    const [listProduct,setListProduct] = useState([]);
   
    useEffect(()=>{
        const getApi = async ()=>{
            const data = await productService.getAll();
            
            setListProduct(data);
            console.log(data);
        }
        getApi();
      
    },[])
    return(
        <>
            <h1>Admin</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>NAME</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {listProduct.map((item)=>{
                    return(
                        <tr key={item.id}>
                        <th>STT</th>
                        <th>NAME</th>
                        <th></th>
                    </tr>
                    )
                    
                })}
                </tbody>
            </table>
        </>
    )
}

export default Admin;