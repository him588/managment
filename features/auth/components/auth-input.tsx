import { FC, useState } from "react";
import { InputProps } from "./types/types";
import { Icons } from "./icons/icons";

export const AuthInput: FC<InputProps> = ({
  label,
  type = "text",
  placeholder,
  value,
  onChange,
  icon,
}) => {
  const [show, setShow] = useState<boolean>(false);
  const isPassword = type === "password";
  const inputType = isPassword ? (show ? "text" : "password") : type;

  return (
    <div>
      <label className=" text-[10px] uppercase tracking-widest text-stone-400 block mb-1.5">
        {label}
      </label>
      <div className="relative">
        <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-stone-300 pointer-events-none">
          {icon}
        </div>
        <input
          type={inputType}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className="auth-input w-full  text-sm text-stone-700 placeholder-stone-300 bg-amber-50/50 border border-stone-200 rounded-xl pl-10 pr-10 py-3 transition-all"
        />
        {isPassword && (
          <button
            type="button"
            onClick={() => setShow((s) => !s)}
            className="eye-btn absolute right-3.5 top-1/2 -translate-y-1/2 text-stone-300"
          >
            {show ? <Icons.EyeOff /> : <Icons.Eye />}
          </button>
        )}
      </div>
    </div>
  );
};
