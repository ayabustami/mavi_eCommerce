import { UseAuthStore } from '../../store/UseAuthStore';
import { useQuery } from '@tanstack/react-query';
import AuthAxiosInsnatce from '../../api/AuthAxiosInstance';

export default function useCart() {
    const token =UseAuthStore((state)=>state.Token);

    const getCart =async()=>{
        const response = await AuthAxiosInsnatce.get(`Carts`);
            return response.data;
    }
    return useQuery({
            queryKey: ['cart'],
            queryFn: getCart,
            staleTime: 1000 * 60 * 5,
            enabled:!!token

        }); 
    }
