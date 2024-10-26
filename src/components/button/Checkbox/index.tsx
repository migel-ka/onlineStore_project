import { FC } from "react";
import style from "./style.module.css";

interface ButtonProps {
  text: string;
  onClick: () => void;
}

const Checkbox: FC<ButtonProps> = ({ text, onClick }) => {
    return (
      <label className={style.checkboxLabel}>
        <input 
          className={style.checkbox} 
          type="checkbox" 
          id={text} 
          name={text} 
          onClick={onClick} 
        />
        <span className={style.customCheckbox}>
          <svg width="15" height="12" viewBox="0 0 15 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.62462 11.1859C5.48438 11.3269 5.29313 11.4056 5.09438 11.4056C4.89563 11.4056 4.70438 11.3269 4.56413 11.1859L0.329625 6.95063C-0.109875 6.51113 -0.109875 5.79863 0.329625 5.35988L0.859875 4.82963C1.29938 4.39013 2.01112 4.39013 2.45062 4.82963L5.09438 7.47338L12.2381 0.329625C12.6776 -0.109875 13.3901 -0.109875 13.8289 0.329625L14.3591 0.859875C14.7986 1.29938 14.7986 2.01188 14.3591 2.45063L5.62462 11.1859Z" fill="#DBBBA9"/>
          </svg>
        </span>
        {text}
      </label>
    );
};

export default Checkbox;
