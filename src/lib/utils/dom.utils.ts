export function clickoutside(element: HTMLElement, callback: Function) {
    function onClick(event: MouseEvent) {
        const target = event.target as Node;
        if (target !== null && !element.contains(target)) {
            callback();
        }
    }
    document.body.addEventListener('click', onClick, true);
    return {
        update(newCallback: Function) {
            callback = newCallback;
        },
        destroy() {
            document.body.removeEventListener('click', onClick, true);
        }
    }
}