export default function useNavigateToDataIdSection() {
    const onNavigate = (to : string) => {
        let element = document.querySelector(`.index-view [data-id='${to}']`) as HTMLElement;
      window.scrollTo({
        top: element.offsetTop,
        behavior : "smooth"
      });
    } 

    return {
        onNavigate
    }
}
