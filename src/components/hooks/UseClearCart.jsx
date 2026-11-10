import { useMutation, useQueryClient } from '@tanstack/react-query';
import AuthAxiosInsnatce from '../../api/AuthAxiosInstance';

export default function UseClearCart() {
    const queryClient=useQueryClient();
    const clearCart =async()=>{
        const response = await AuthAxiosInsnatce.delete(`Carts/clear`);
            return response.data;
    }
  return useMutation({
    mutationFn:clearCart,
    onSuccess:()=>{
      queryClient.invalidateQueries({queryKey:['cart']});
      
    }
  })
}
