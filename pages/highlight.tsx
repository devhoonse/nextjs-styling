import Highlight from "@/components/Highlight";

/**
 * 페이지 : /highlight
 * @constructor
 */
function HighlightPage() {

  // 페이지 컴포넌트 구조
  return (
    <div>
      <div style={{ padding: '1rem', margin: 10, border: '1px solid white' }}>
        <span>This is Other &lt;span&gt; in this Page</span>
      </div>
      <p>
        <Highlight>Lorem Ipsum</Highlight> is simply dummy text of the printing and typesetting industry.
        <Highlight>Lorem Ipsum</Highlight> has been the industry&apos;s standard dummy text ever since the 1500s,
        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        It has survived not only five centuries,
        but also the leap into electronic typesetting,
        remaining essentially unchanged.
        It was popularised in the 1960s with the release of Letraset sheets containing <Highlight>Lorem Ipsum</Highlight> passages,
        and more recently with desktop publishing software like Aldus PageMaker including versions of <Highlight>Lorem Ipsum</Highlight>.
      </p>
    </div>
  );
}
export default HighlightPage;
