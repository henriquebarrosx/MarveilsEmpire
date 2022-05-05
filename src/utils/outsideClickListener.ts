import { useEffect } from "react";

export function useOutsideClickListener(ref: any, callback: () => void) {
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event: MouseEvent) {
      const catchOutsideClick = !ref.current.contains(event.target);

      if (catchOutsideClick) {
        callback();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [ref]);
}