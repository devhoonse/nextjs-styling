
/**
 * Highlight 컴포넌트의 props 목록
 * * text : 강조 표시해야 할 텍스트
 */
type HighlightProps = {
  children: string;
};

/**
 * Highlight 컴포넌트
 * @param text
 * @constructor
 */
function Highlight({ children }: HighlightProps) {

  // 컴포넌트 구조
  return (
    <>
      <span>{children}</span>
      <style jsx global>{`
        span {
          background-color: yellow;
          color: red;
          font-weight: bold;
        }
      `}</style>
    </>
  );
}
export default Highlight;
