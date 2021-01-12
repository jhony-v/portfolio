import { useEffect } from "react";

export default function useTechnologiesScroll() {

    useEffect(() => {
        if(typeof window !== "undefined") {
            let card = document.querySelector(".technology__card");
            let detail = document.querySelector(".technology__detail") as HTMLElement;
            let intersection = new IntersectionObserver(([cardWrapper]) => {
                   
            },{
                threshold : [.5]
            });
            intersection.observe(card);
        } 
    },[])
}
