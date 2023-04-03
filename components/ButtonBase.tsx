import React from "react";
import styles from '@/styles/button.module.scss';
// import styles from '@/styles/button.module.css';

/**
 * 버튼 디자인 종류 목록
 */
type ButtonVariants = 'button-default' | 'button-success' | 'button-danger';

/**
 * 버튼 컴포넌트 props 목록
 * * variant : 버튼 디자인 종류
 * * children : 버튼 내부에 배치할 컴포넌트
 */
type ButtonProps = {
  variant: ButtonVariants;
  children: string | React.ReactElement;
};

/**
 * 버튼 베이스 컴포넌트
 * @param variant
 * @param children
 * @constructor
 */
function ButtonBase({ variant, children }: ButtonProps) {

  // 버튼 베이스 컴포넌트 구조
  return (
    <button className={styles[variant]}>
      {children}
    </button>
  );
}
export default ButtonBase;
