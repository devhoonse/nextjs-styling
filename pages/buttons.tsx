import Button from "@/components/Button";
import ButtonFancy from "@/components/ButtonFancy";

/**
 * 페이지 : /buttons
 * @constructor
 */
function Buttons() {

  // 페이지 컴포넌트 구조
  return (
    <div>
      <div>
        <Button>Button1</Button>
      </div>
      <div>
        <ButtonFancy>Button2</ButtonFancy>
      </div>
    </div>
  );
}
export default Buttons;
