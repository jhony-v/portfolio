import useResize from "./useResize";

export default function useNavigateToDataIdSection() {
  const { width } =  useResize();
  console.log(width)
  const onNavigate = (to : string) => {

      let spacingHeaderNavigation = width <= 768 ? 0 : document.querySelector('.header__navigator').clientWidth; 
      let element = document.querySelector(`.index-view [data-id='${to}']`) as HTMLElement;
      document.querySelector('.index-main__scrollable').scrollTo({
        left: element.offsetLeft - spacingHeaderNavigation,
        behavior : "smooth"
      });
    } 

    return {
        onNavigate
    }
}
