import { useEffect } from "react";

export default function useTechnologiesScroll() {

    useEffect(() => {
        if(typeof window !== "undefined") {
            let card = document.querySelector(".technology__card");
            let detail = document.querySelector(".technology__detail") as HTMLElement;
            let intersection = new IntersectionObserver(([cardWrapper]) => {
                    let htmlElement = cardWrapper.target as HTMLElement;
                    if(cardWrapper.isIntersecting) {
                        htmlElement.style.opacity = "1";
                        htmlElement.style.left="0px"
                        detail.style.opacity = "1";
                        detail.style.transform = "translateY(0px)";
                    }
                    else {
                        htmlElement.style.opacity = "0";
                        htmlElement.style.left="70px"
                        detail.style.opacity = "0";
                        detail.style.transform = "translateY(-200px)";
                    }
            },{
                threshold : [.5]
            });
            intersection.observe(card);
        } 
    },[])
}
