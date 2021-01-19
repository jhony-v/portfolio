import { useState, useEffect } from 'react'
import useVisibility from 'hooks/useVisibility';

export default function useFetchStack() {
    const [ json , setJsonStack ] = useState([]);
    const { ref, visible } = useVisibility({disconnect:true})
    const [ data , setData ] = useState([]);
    const [ loading , setLoading ] = useState<boolean>(true);
    const filterByCategory = (category : string) => {
        setData(json.find(e => e.category === category).stacks);
    }

    useEffect(() => {
        if(visible) {
          import("assets/json/stack.json").then(e => {
            setJsonStack(e.default);
            setData(e.default[0].stacks);
            setLoading(false);
          });
        }
    },[visible]);

    return {
        data,
        ref,
        loading,
        filterByCategory
    }
}
