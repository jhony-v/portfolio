import useScrolling from "hooks/useScrolling";

export default function useAboutScroll() {
    useScrolling(() => {
        let parentAboutBoxs = document.querySelector('.about__boxs').parentNode as HTMLElement;
        let scroll = document.documentElement.scrollTop;
        let aboutBoxItems = document.querySelectorAll('.about__boxs > div');
        aboutBoxItems.forEach(item => {
            let fixedBox = item as HTMLElement;
            if(scroll >= parentAboutBoxs.offsetHeight - 300) {
                fixedBox.style.transform = `translateY(${scroll * -0.2}px)`;
            }
            else {
                fixedBox.style.transform = `translateY(150%)`;
            }
        });
    });
}
