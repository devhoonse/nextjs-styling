import React, {ReactElement} from "react";

/**
 * 버튼 컴포넌트의 props 목록
 * * children : 버튼 하위에 삽입할 자식 컴포넌트
 */
type ButtonFancyProps = {
  children: string | ReactElement;
};

/**
 * 버튼 컴포넌트
 * @param children
 * @constructor
 */
function ButtonFancy({ children }: ButtonFancyProps) {
  return (
    <>
      <button className="button">
        {children}
      </button>
      <style jsx>{`
        .button {
          padding: 2em;
          border-radius: 2em;
          border: 1px solid pink;
          background-color: purple;
          color: white;
          font-weight: bold;
        }
      `}</style>
    </>
  );
}
export default ButtonFancy;
