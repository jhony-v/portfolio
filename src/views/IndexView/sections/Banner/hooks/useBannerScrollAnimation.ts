import useScrolling from "hooks/useScrolling";

export default function useBannerScrollAnimation() {
  useScrolling(() => {
    let e = document.documentElement.scrollTop;
    let banner = document.getElementById("banner");
    let imageProfile = banner.querySelector(".banner__image-profile") as HTMLElement;
    let figureSolid = banner.querySelector(".banner__figure-solid") as HTMLElement;
    let figureDotted = banner.querySelector(".banner__figure-dotted") as HTMLElement;
    let text = banner.querySelector(".banner__text") as HTMLElement;
    let h1 = banner.querySelector("h1") as HTMLElement;
    imageProfile.style.transform = `translateY(${-e*0.6}px)`;
    figureSolid.style.transform = `translateY(${-e}px)`;
    figureDotted.style.transform = `translateY(${e*0.5}px)`;
    banner.style.opacity = `${1 / (e*.007)}`;
    text.style.transform = `translateY(${e*0.3}%)translateX(${e*-0.01}%)`;
    h1.style.transform= `translateY(${e*-2}%)`;
  });
}
