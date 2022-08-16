import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Homepage = () => {
  return (
    <>
      <StyledHeader>
        <StyledLogin>
          <li>
            <img src="../images/user-square.svg" alt="" />
            <NavLink to={"/Login"}> اکرم مکرم</NavLink>
          </li>
          <li>
            <img src="../images/logout.svg" alt="" />
            <a href="#"> خروج</a>
          </li>
        </StyledLogin>
        <StyledNav>
          <img src="../images/Group 1724.svg" alt="logo" width={"95px"} />
          <li>
            <img src="../images/Group 144.svg" alt="" />
            <a style={{ color: "#FA8735" }} href="#">
              صفحه اصلی
            </a>
          </li>
          <li>
            <img src="../images/folder-add.svg" alt="" />
            <a href="#">ایجاد پرونده</a>
          </li>
          <li>
            <img src="../images/book.svg" alt="" />
            <a href="#">لیست پرونده ها </a>
          </li>
          <li>
            <img src="../images/receipt-minus.svg" alt="" />
            <a href="#"> گزارشگیری</a>
          </li>
        </StyledNav>
      </StyledHeader>
      <FirstSection>
        <Styledcol>
          <div>
            <img src="../images/Group 11831.svg" alt="icon" />
            <span>تشکیل شده</span>
          </div>
          <div>
            <img src="../images/Group 11838.svg" alt="icon" />
            <span>ارزیابی شده</span>
          </div>
        </Styledcol>
        <Styledcol>
          <div>
            <img src="../images/Group 11832.svg" alt="icon" />
            <span> ارسال شده به شرکت ارزیابی</span>
          </div>
          <div>
            <img src="../images/Group 11837.svg" alt="icon" />
            <span>برگشت به شرکت ارزیابی </span>
          </div>
        </Styledcol>
        <Styledcol>
          <div>
            <img src="../images/Group 11833.svg" alt="icon" />
            <span>آرشیو شده</span>
          </div>
          <div>
            <img src="../images/Group 11836.svg" alt="icon" />
            <span>بازدید مجدد</span>
          </div>
        </Styledcol>
        <Styledcol>
          <div>
            <img src="../images/Group 11632.svg" alt="icon" />
            <span>در حال اجرا</span>
          </div>
          <div>
            <img src="../images/Group 11811.svg" alt="icon" />
            <span>بسته شده</span>
          </div>
        </Styledcol>
      </FirstSection>
      <Container>
        <SecondSection>
          <TitleHead>
            <h3>تعداد پرونده ها</h3>
            <div>
              <span>مشاهده بصورت:</span>
              <span>ماهیانه</span>
              <img src="../images/Vector.svg" alt="" />
            </div>
          </TitleHead>
          <DateSpan>
            <span>از:</span>
            <span>1400/11/19</span>
            <span>از:</span>
            <span>1400/12/18</span>
          </DateSpan>
          <StyledSteps>
            <div>
              <img src="../images/document-text.svg" alt="" />
              <span>336</span>
              <p>پرونده تشکیل شده</p>
            </div>
            <div>
              <img src="../images/document-forward.svg" alt="" />
              <span>445</span>
              <p>پرونده ارسال شده به شرکت ارزیابی </p>
            </div>
            <div>
              <img src="../images/archive.svg" alt="" />
              <span>665</span>
              <p>پرونده آرشیو شده</p>
            </div>
            <div>
              <img src="../images/Group 1689.svg" alt="" />
              <span>255</span>
              <p>پرونده در حال اجرا</p>
            </div>
            <div>
              <img src="../images/Group 1690.svg" alt="" />
              <span>255</span>
              <p>پرونده ارزیابی شده</p>
            </div>
            <div>
              <img src="../images/Group 1675.svg" alt="" />
              <span>255</span>
              <p>پرونده برگشت به شرکت ارزیابی</p>
            </div>
            <div>
              <img src="../images/frame.svg" alt="" />
              <span>225</span>
              <p>پرونده بازدید مجدد</p>
            </div>
            <div>
              <img src="../images/Group 1691.svg" alt="" />
              <span>225</span>
              <p>پرونده بسته شده</p>
            </div>
          </StyledSteps>
        </SecondSection>
        <ThirdSection>
          <TitleHead>
            <h2>نمودار تعداد کل پرونده ها</h2>
            <div>
              {" "}
              <span>مشاهده بصورت:</span>
              <span>ماهیانه</span>
              <img src="../images/Vector.svg" alt="" />
            </div>
          </TitleHead>
          <DateSpanSecond>
            <span>از:</span>
            <span>1400/11/19</span>
            <span>از:</span>
            <span>1400/12/18</span>
          </DateSpanSecond>
          <img src="../images/chart.jpg" alt="" />
        </ThirdSection>
      </Container>
      <Bar>
        <img src="../image/Rectangle 763.svg" alt="" />
      </Bar>
    </>
  );
};
const Bar = styled.div`
  position: absolute;
  /* left: 1042px; */
  right: 240px;
  top: 0px;
  width: 48px;
  height: 5px;
  background: #fcbc8e;
  border-radius: 2px;
`;
// Third section
const DateSpanSecond = styled.section`
  margin: 17px 530px 50px 0px;
  padding: 5px;
  direction: rtl;
  background: #f8f8f8;
  border-radius: 8px;
  width: 165px;
  height: 25px;
  font-style: normal;
  font-weight: 500;
  font-size: 11px;
  line-height: 16px;
  text-align: right;
  align-self: center;
  color: #969cae;
  span {
    padding: 4px;
  }
`;
const Container = styled.section`
  margin: 0 auto 127px auto;
  display: flex;
  justify-content: center;
  direction: rtl;
`;
const ThirdSection = styled.section`
  padding: 20px 32px 50px 37px;
  margin-right: 56px;
  width: 760px;
  height: 616px;
  background: #ffffff;
  border-radius: 20px;
`;

// Second section
const StyledSteps = styled.div`
  /* padding-bottom: 23px; */
  div {
    display: flex;
    align-items: center;
    text-align: right;
    padding: 0 0 30px 0;
    img {
      margin-left: 20px;
    }
    span {
      margin-left: 20px;
      font-size: 18px;
      line-height: 28px;

      color: #220760;
    }
    p {
      font-size: 16px;
      line-height: 25px;

      color: #a7acbb;
      display: inline;
    }
  }
`;
const DateSpan = styled.div`
  margin: 17px 165px 50px 0px;
  padding: 5px;
  direction: rtl;
  background: #f8f8f8;
  border-radius: 8px;
  width: 175px;
  height: 25px;
  font-style: normal;
  font-weight: 500;
  font-size: 11px;
  line-height: 16px;
  text-align: right;
  align-self: center;
  color: #969cae;
  span {
    padding: 5px;
  }
`;
const TitleHead = styled.section`
  display: flex;
  justify-content: space-between;
  font-family: "IRANSans";
  font-style: normal;
  font-weight: 500;
  h1 {
    font-size: 18px;
    line-height: 28px;
    text-align: right;
    color: #000000;
  }
  span {
    padding-right: 20px;
    font-size: 13px;
    line-height: 20px;
    text-align: right;
    color: #7c7e81;
  }
  img {
    margin-right: 6px;
  }
`;
const SecondSection = styled.section`
  padding: 24px 32px 50px 32px;
  width: 400px;
  height: 616px;
  background: #ffffff;
  border-radius: 20px;
`;
// first section
const FirstSection = styled.section`
  margin: 95px auto 56px auto;
  padding: 66px 160px;
  display: flex;
  justify-content: space-between;
  width: 1216px;
  height: 407px;
  background: #ffffff;
  direction: rtl;
  box-shadow: 0px 4px 0px rgba(239, 238, 238, 0.25);
  border-radius: 20px;
  span {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 25px;
    text-align: center;
    color: #55575a;
  }
`;

const Styledcol = styled.section`
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 223px;
    height: 110px;
    margin-bottom: 50px;
  }
  /* display: flex;
  flex-direction: column;
  align-items: center; */
`;

// HEADER
const StyledHeader = styled.header`
  padding: 0 55px 0 95px;
  width: 100%;
  height: 95px;
  background: transparent;
  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    text-decoration: none;
    font-weight: 400;
    font-size: 16px;
    line-height: 28px;
    /* text-align: right; */
    /* vertical-align: middle; */
    color: #4a5c86;
    &:hover {
      color: #fa8735;
    }
  }
  li {
    display: flex;
    align-items: center;
  }

  li img {
    margin-right: 55px;
    margin-left: 8px;
    width: 24px;
    height: 24px;
  }
`;
const StyledNav = styled.ul`
  display: flex;
  list-style: none;
  direction: rtl;
  align-items: center;
`;
const StyledLogin = styled.li`
  /* margin-right: 200px; */
  /* vertical-align: super; */
  display: flex;
  align-items: center;
  list-style: none;
  direction: rtl;

  a {
    color: #7c7e81;
  }
`;

export default Homepage;
