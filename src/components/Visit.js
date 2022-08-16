import { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

const Visit = () => {
  const [branch, setBranch] = useState("");
  const [adjuster, setAdjuster] = useState("");
  const accessToken = localStorage.getItem("accessToken");
  useEffect(() => {
    axios
      .get(
        "https://estate-api.iranianpooshesh.com/portal/adjuster/59/file_detail/?state=in_progress",
        { headers: { Authorization: `jwt ${accessToken}` } }
      )
      .then(
        (response) => {
          setBranch(response?.data?.branch);
          setAdjuster(response?.data?.adjuster);
        },
        (error) => {
          console.log(error);
        }
      );
  }, []);
  return (
    <StyledSection>
      <h1>فرم بازدید</h1>
      <StyledForm>
        <Row>
          <div>
            <label htmlFor="branch">شعبه ایرانیان پوشش*</label>
            <select name="branch" id="">
              <option value="">انتخاب کنید</option>
              <option value="">{branch?.name}</option>
            </select>
          </div>
          <div>
            <label htmlFor="adjuster">کارشناس*</label>
            <select name="adjuster" id="">
              <option value="">انتخاب کنید</option>
              <option value="">{adjuster?.full_name}</option>
            </select>
          </div>
          <div>
            <label htmlFor="damage">مبلغ خسارت ارزیابی شده*</label>
            <input type="number" id="damage" name="damage" min="100000000" />
          </div>
        </Row>
        <Row>
          <div>
            <label htmlFor="date">تاریخ*</label>
            <input type="date" id="date" name="date" />
          </div>
          <div>
            <label htmlFor="time">ساعت*</label>
            <input type="time" id="time" name="time" />
          </div>
          <div>
            <label htmlFor="distance">مسافت رفت و برگشت طی شده*</label>
            <input
              type="number"
              id="distance"
              name="distance"
              min="1"
              max="30"
            />
          </div>
        </Row>
        <Row>
          <div>
            <label htmlFor="detail">توضیحات</label>
            <textarea id="detail" name="detail" rows="4" cols="50" />
          </div>
        </Row>
      </StyledForm>
      <StyledButton>ذخیره</StyledButton>
    </StyledSection>
  );
};

const Row = styled.div`
  display: flex;
  input,
  select {
    width: 280px;
    height: 48px;
    background: #ffffff;
    border: 1px solid #e5e5e5;
    border-radius: 8px;
    margin-left: 57px;
  }
  label {
    margin-bottom: 8px;
    font-weight: 500;
    font-size: 12px;
    line-height: 16px;
    display: flex;
    align-items: center;
    text-align: right;
    color: #6c748b;
  }
  div {
    display: flex;
    flex-direction: column;
  }
`;
const StyledButton = styled.button`
  margin: 24px 0 60px 0;
  width: 198px;
  height: 48px;
  background: #fa8735;
  border-radius: 8px;
  border: none;
  color: #ffffff;
  font-weight: 500;
  font-size: 17px;
  line-height: 28px;
`;
const StyledSection = styled.div`
  margin: 0 auto;
  width: 1006px;
  h1 {
    margin: 60px auto 18px auto;
    /* font-family: "IRANSansFaNum"; */
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    text-align: right;
    color: #415076;
  }
`;
const StyledForm = styled.div`
  direction: rtl;
  padding: 72px 18px 67px 35px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  margin: 0 auto;
  width: 1006px;
  height: 530px;
  border: 1.5px solid #cfd6e9;
  border-radius: 12px;
  textarea {
    background: #ffffff;
    width: 617px;
    height: 93px;
    border: 1px solid #e5e5e5;
    border-radius: 8px;
  }
`;
export default Visit;
