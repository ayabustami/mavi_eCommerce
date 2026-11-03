
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

export default function useProducts() {

    const getProducts = async () => {
            const response = await axios.get('https://knowledgeshop.runasp.net/api/Products', {
                headers: {
                    "accept-language": "en"
                }
            })
            return response.data.response.data;
        }
    const {data , isLoading, error} = useQuery({
        queryKey: ['products'],
        queryFn: getProducts,
        staleTime: 1000 * 60 * 15
    }); 
    return {products: data || [], isLoading, error};

    

}