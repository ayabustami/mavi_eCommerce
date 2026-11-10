import { useMutation, useQueryClient } from '@tanstack/react-query';
import AuthAxiosInsnatce from '../../api/AuthAxiosInstance';

export default function UseRemoveItemCart() {
    const queryClient=useQueryClient();
    const removeItemCart =async({productId})=>{
        const response = await AuthAxiosInsnatce.delete(`Carts/${productId}`);
            return response.data;
    }
  return useMutation({
    mutationFn:removeItemCart,
    onSuccess:()=>{
      queryClient.invalidateQueries({queryKey:['cart']});
    }
  })
}
