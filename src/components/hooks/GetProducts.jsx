import { useQuery } from '@tanstack/react-query';
import AxiosInsnatce from '../../api/AxiosInstance';


export default function useProducts() {

    const getProducts = async () => {
            const response= await AxiosInsnatce.get(`Products`);
            return response.data.response.data;
        }
    const {data , isLoading, error} = useQuery({
        queryKey: ['products'],
        queryFn: getProducts,
        staleTime: 1000 * 60 * 15
    }); 
    return {products: data || [], isLoading, error};

    

}