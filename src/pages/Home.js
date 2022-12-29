import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="Home">
      <p className="subTitle">유형 테스트로 알아보는</p>
      <h1>지금 나에게 필요한 여행지는?</h1>
      <div className="imgWrap">
        <img src={process.env.PUBLIC_URL + "assets/back_img.png"} />
      </div>
      <Link className="startBtn" to={"/test"}>
        TEST 시작하기
      </Link>
      <p className="madeBy">- made by HOTAE -</p>
    </div>
  );
};

export default Home;
