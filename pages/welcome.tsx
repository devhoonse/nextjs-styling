import pageStyles from '@/styles/welcome.module.css';

/**
 * 페이지 : /welcome
 * @constructor
 */
function WelcomePage() {

  // 페이지 컴포넌트 구조
  return (
    <div className={pageStyles.homepage}>
      <div>
        <h1 className={pageStyles.title}>Welcome to the CSS Modules Example!</h1>
      </div>
    </div>
  );
}
export default WelcomePage;
