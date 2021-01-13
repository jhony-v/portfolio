export default function useNavigateToDataIdSection() {
    const onNavigate = (to : string) => {
      let element = document.querySelector(`.index-view [data-id='${to}']`) as HTMLElement;
      document.querySelector('.index-main__scrollable').scrollTo({
        left: element.offsetLeft - document.querySelector('.header__navigator').clientWidth,
        behavior : "smooth"
      });
    } 

    return {
        onNavigate
    }
}
