import axios from "axios";
import { useEffect } from "react";
import {useDispatch} from "react-redux";
import { getAllcities, getProvince } from "../redux/billboardSlice";


const usealldata = () => {
    const dispatch = useDispatch();
    useEffect(()=>{
        const fetchalldata = async () => {
            try {
                const  res = await axios.get(`http://localhost:3000/api/billboards/getall`);
               dispatch(getAllcities(res.data.billboard))
             } catch (error) {
               console.error('Error fetching province data:', error);
             }
        }
        fetchalldata();
    },[]);
};
export default usealldata;