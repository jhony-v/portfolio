import { useEffect } from "react";

export default function useHiddenScrollingScreen() {
    return {
        onShowScroll : () => document.body.style.overflow = "visible",
        onHideScroll : () => document.body.style.overflow = "hidden",
    }
}
