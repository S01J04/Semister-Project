import axios from "axios";
import { useEffect } from "react";
import {useDispatch} from "react-redux";
import { getProvince } from "../redux/billboardSlice";


const useProvinces = () => {
    const dispatch = useDispatch();
    useEffect(()=>{
        const fetchProvinces = async () => {
            try {
                const res = await axios.get('http://localhost:3000/api/billboards/getprovince',{
                    withCredentials:true
                });
              console.log(res.data.province);
                dispatch(getProvince(res.data.provinces));
            } catch (error) {
                console.log(error);
            }
        }
        fetchProvinces();
    },[]);
};
export default useProvinces;