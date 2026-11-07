import { useMutation } from '@tanstack/react-query';
import AuthAxiosInsnatce from '../../api/AuthAxiosInstance';

export default function UseAddToCart() {
    const addToCart =async(productId)=>{
        const response = await AuthAxiosInsnatce.post(`Carts`,
            {ProductId : productId ,Count:1} );
            return response.data;
    }
  return useMutation({
    mutationFn:addToCart
  })
}
