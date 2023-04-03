import ButtonBase from "@/components/ButtonBase";

/**
 * 페이지 : /buttons2
 * @constructor
 */
function Buttons2() {

  // 페이지 컴포넌트 구조
  return (
    <div>
      <div>
        <ButtonBase variant="button-default">Default</ButtonBase>
      </div>
      <div>
        <ButtonBase variant="button-success">Success</ButtonBase>
      </div>
      <div>
        <ButtonBase variant="button-danger">Danger</ButtonBase>
      </div>
    </div>
  );
}
export default Buttons2;
