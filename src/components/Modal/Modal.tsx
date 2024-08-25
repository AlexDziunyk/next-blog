import React, { useEffect, useRef } from "react";
import "./style.scss";
import { useRouter } from "next/navigation";

interface IModalProps {
  children: React.ReactNode;
}

const Modal = ({ children }: IModalProps) => {
  const ref = useRef<HTMLInputElement>(null);
  const router = useRouter();

  useEffect(() => {
    const handleClickOutSide = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        router.back();
      }
    };

    document.addEventListener("mousedown", handleClickOutSide);

    return () => document.removeEventListener("mousedown", handleClickOutSide);
  }, []);

  return (
    <div className="modal__wrapper">
      <div ref={ref} className="modal__container">
        {children}
      </div>
    </div>
  );
};

export default Modal;
