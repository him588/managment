"use client";

import React, { useEffect } from "react";
import { twMerge } from "tailwind-merge";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  titleClass?: string;
  children?: React.ReactNode;
  modalBoxClassName?: string;
}

function Modal({
  isOpen,
  onClose,
  title,
  titleClass,
  children,
  modalBoxClassName,
}: ModalProps) {
  // lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal box */}
      <div
        className={twMerge(
          "relative bg-white w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl shadow-2xl shadow-stone-200/60 z-10",
          modalBoxClassName,
        )}
      >
        {title && (
          <h3
            className={twMerge(
              "font-playfair text-stone-800 text-xl px-6 pt-6",
              titleClass,
            )}
          >
            {title}
          </h3>
        )}
        <div className="p-6">{children}</div>
      </div>
    </div>
  );
}

export default Modal;
