import { useEffect } from "react";

const transformTextToSpanElements = (text : string) => {
    return text.split("").map(e => (`<span aria-hidden="true" class="text-bubble">${e}</span>`)).join("");
}

export default function useTextAnimatable() {

    useEffect(() => {
        let titleCareer = document.querySelector('.title__career') as HTMLElement;
        let textFrontend = titleCareer.querySelector('span:first-child') as HTMLElement;
        let textDeveloper = titleCareer.querySelector('span:last-child') as HTMLElement;

        textFrontend.innerHTML = transformTextToSpanElements(textFrontend.textContent);
        textDeveloper.innerHTML = transformTextToSpanElements(textDeveloper.textContent);

    },[])

}
