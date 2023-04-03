import React, {ReactElement} from "react";

/**
 * 버튼 컴포넌트의 props 목록
 * * children : 버튼 하위에 삽입할 자식 컴포넌트
 */
type ButtonProps = {
  children: string | ReactElement;
};

/**
 * 버튼 컴포넌트
 * @param children
 * @constructor
 */
function Button({ children }: ButtonProps) {
  return (
    <>
      <button className="button">
        {children}
      </button>
      <style jsx>{`
        .button {
          padding: 1em;
          border-radius: 1em;
          border: 1px solid black;
          background-color: green;
          color: white;
        }
      `}</style>
    </>
  );
}
export default Button;
