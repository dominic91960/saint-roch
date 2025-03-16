"use client";

import { createContext, useState, ReactNode } from "react";

import { AnimatePresence } from "framer-motion";

import Toast from "@/components/ui/toast";

interface ToastMessage {
  id: number;
  type: "SUCCESS" | "ERROR";
  message: string;
}

interface ToastContextType {
  addToast: (type: "SUCCESS" | "ERROR", message: string) => void;
}

export const ToastContext = createContext<ToastContextType>({
  addToast: () => {},
});

interface ToastContextProviderProps {
  children: ReactNode;
}

const ToastContextProvider: React.FC<ToastContextProviderProps> = ({
  children,
}) => {
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  const addToast = (type: "SUCCESS" | "ERROR", message: string) => {
    const id = Date.now();

    setToasts((prev) => [...prev, { id, type, message }]);

    setTimeout(() => {
      setToasts((prev) => prev.filter((toast) => toast.id !== id));
    }, 3000);
  };

  return (
    <>
      <ToastContext.Provider value={{ addToast }}>
        {children}
      </ToastContext.Provider>
      <AnimatePresence>
        {toasts.map(({ id, type, message }) => (
          <Toast key={id} type={type} message={message} />
        ))}
      </AnimatePresence>
    </>
  );
};

export default ToastContextProvider;
