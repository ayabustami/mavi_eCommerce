import { useMutation, useQueryClient } from '@tanstack/react-query';
import AuthAxiosInsnatce from '../../api/AuthAxiosInstance';

export default function UseUpdateCart() {
    const queryClient=useQueryClient();
    const updateCart =async({productId,count})=>{
        const response = await AuthAxiosInsnatce.patch(`Carts/${productId}`,
            {count} );
            return response.data;
    }
  return useMutation({
    mutationFn:updateCart,
    onSuccess:()=>{
      queryClient.invalidateQueries({queryKey:['cart']});
      
    }
  })
}
