
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

/*export default function useCategories() {
    const [categories, setCategories] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const getCategories = async () => {
        setIsLoading(true);
        setError(null);

        try {
        const response = await axios.get('https://knowledgeshop.runasp.net/api/Categories',{
            headers: {
                "accept-language": "en"
            }
            }
        );

        setCategories(response.data.response.data);

        } catch (err)
        {
        setError(err.response?.data?.message || "Something went wrong");
        }
        finally {
        setIsLoading(false);
        }
    };

    useEffect(() => {
        getCategories();
    }, []);

    return {
        categories,
        isLoading,
        error
    };
    }*/
export default function useCategories() {

    const getCategories = async () => {
            const response = await axios.get('https://knowledgeshop.runasp.net/api/Categories', {
                headers: {
                    "accept-language": "en"
                }
            })
            return response.data.response.data;
        }
    const {data , isLoading, error} = useQuery({
        queryKey: ['categories'],
        queryFn: getCategories,
        staleTime: 1000 * 60 * 15
    }); 
    return {categories: data || [], isLoading, error};

    

}