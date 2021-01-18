export default function startInClient(callback : Function | null = null) {
    if(typeof window !== "undefined" && callback !== null) callback();
}