import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import SyncLoader from "react-spinners/SyncLoader";
import Parser from "html-react-parser";
import { CopyToClipboard } from "react-copy-to-clipboard";
import KakaoShareBtn from "../components/KakaoBtn";

const Result = ({ resultEl }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState();
  const [isLoading, setIsloading] = useState(true);
  const link = window.location.href;

  const alertMessage = () => {
    alert("나의 여행지 결과가 클립보드에 담겼어요!");
  };

  setTimeout(function () {
    setIsloading(false);
  }, 2600);

  useEffect(() => {
    const finalResult = resultEl.find((it) => parseInt(it.id) === parseInt(id));
    if (finalResult) {
      setData(finalResult);
    } else {
      alert("존재하지 않는 결과페이지 입니다.");
      navigate("/", { replace: true });
    }
  }, [id]);

  return (
    <div className="Result">
      {isLoading ? (
        <div className="loading">
          <SyncLoader color="#e4b74c" />
        </div>
      ) : (
        <div className={`ResultWrap_${id}`}>
          <div className="ResultPage">
            <div className="imgWrap">
              <img src={data.img}></img>
            </div>
            <h1>{Parser(data.title)}</h1>
            <ul>
              {data.content.map((it, idx) => (
                <li key={idx}>{Parser(it)}</li>
              ))}
            </ul>
            <h2>친구에게 결과 공유하기</h2>
            <div className="shareWrap">
              <KakaoShareBtn title={data.title} imageUrl={data.img} id={id} />
              <CopyToClipboard text={link}>
                <button className="shareBtn Link" onClick={alertMessage}>
                  <img src={process.env.PUBLIC_URL + "/assets/btn_link.svg"} />
                </button>
              </CopyToClipboard>
            </div>
            <Link className="reBtn" to={"/"}>
              테스트 다시하기
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Result;
