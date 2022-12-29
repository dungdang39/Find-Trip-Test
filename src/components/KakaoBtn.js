const { Kakao } = window;

const KakaoShareBtn = ({ title, imageUrl, id }) => {
  let replaced_tit = title.replace("<span>", "").replace("<span/>", "");
  let replaced_imageUrl =
    "http://find-trip-sth.web.app/" + imageUrl.replace("../", "");
  const onHandleShareKaKao = () => {
    Kakao.Link.sendDefault({
      objectType: "feed",
      content: {
        title: replaced_tit,
        description: "지금 나에게 필요한 여행지는 어디일까?",
        imageUrl: replaced_imageUrl,
        link: {
          webUrl: "http://find-trip-sth.web.app/",
          mobileWebUrl: "http://find-trip-sth.web.app/",
        },
      },
      buttons: [
        {
          title: "결과 보기",
          link: {
            webUrl: "http://find-trip-sth.web.app/result/" + id,
            mobileWebUrl: "http://find-trip-sth.web.app/result/" + id,
          },
        },
        {
          title: "테스트하기",
          link: {
            webUrl: "http://find-trip-sth.web.app/",
            mobileWebUrl: "http://find-trip-sth.web.app/",
          },
        },
      ],
    });
  };
  return (
    <button className="shareBtn Kakao" onClick={onHandleShareKaKao}>
      <img src={process.env.PUBLIC_URL + "/assets/btn_kakao.svg"} />
    </button>
  );
};

export default KakaoShareBtn;
