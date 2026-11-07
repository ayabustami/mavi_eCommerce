import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import AxiosInsnatce from '../../api/AxiosInstance';

export default function useProductDetails(id) {
    
    const getProductDetails = async () => {
            const response= await AxiosInsnatce.get(`Products/${id}`);
        
            return response.data.response;
        }
    const {data , isLoading, error} = useQuery({
        queryKey: ['product'],
        queryFn: getProductDetails,
        staleTime: 1000 * 60 * 15
    }); 
    return {product: data || [], isLoading, error};

    

}