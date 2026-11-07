import { create } from 'zustand';

export const  UseAuthStore= create( (set)=>({
    Token:localStorage.getItem('userToken'),
    
    
    login : (newToken)=>{
        localStorage.setItem('userToken',newToken);
        set({Token:newToken});
    },
    logout : ()=>{
        localStorage.removeItem('userToken');
        set({Token:null});
    }

})) ;
