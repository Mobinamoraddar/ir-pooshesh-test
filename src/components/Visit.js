import { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

const Visit = () => {
  const [branch, setBranch] = useState("");
  const [adjuster, setAdjuster] = useState("");
  const [adjusterValue, setAdjusterValue] = useState("");
  const [BranchValue, setBranchValue] = useState("");
  const [damage, setDamage] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [distance, setDistance] = useState("");
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(
        "https://estate-api.iranianpooshesh.com/portal/adjuster/59/visit/",
        //  data
        {
          is_active: true,
          visit_date: date,
          visit_time: time,
          covered_distance: distance,
          amount_damages_assessed: damage,
          description: "string",
          adjuster: adjusterValue,
          file: 59,
          branch: BranchValue,
        },
        { headers: { Authorization: `jwt ${accessToken}` } }
      );
    } catch (err) {
      alert(err.response.data.detail);
    }
  };

  const onBranchChange = (e) => {
    setBranchValue(e.target.value);
  };
  const onAdjusterChange = (e) => {
    setAdjusterValue(e.target.value);
  };
  const onDamageChange = (e) => {
    setDamage(e.target.value);
  };
  const onDateChange = (e) => {
    setDate(e.target.value);
  };
  const onTimeChange = (e) => {
    setTime(e.target.value);
  };
  const onDistanceChange = (e) => {
    setDistance(e.target.value);
  };
  console.log(BranchValue, adjusterValue, damage, date, time, distance);
  return (
    <StyledSection onSubmit={handleSubmit}>
      <h1>فرم بازدید</h1>
      <StyledWrapper>
        <Row>
          <div>
            <label htmlFor="branch">شعبه ایرانیان پوشش*</label>
            <select
              name="branch"
              id=""
              required
              value={BranchValue}
              onChange={onBranchChange}
            >
              <option value="">انتخاب کنید</option>
              <option value={branch?.name}>{branch?.name}</option>
            </select>
          </div>
          <div>
            <label htmlFor="adjuster">کارشناس*</label>
            <select
              name="adjuster"
              value={adjusterValue}
              onChange={onAdjusterChange}
              required
            >
              <option value="">انتخاب کنید</option>
              <option value={adjuster?.full_name}>{adjuster?.full_name}</option>
            </select>
          </div>
          <div>
            <label htmlFor="damage">مبلغ خسارت ارزیابی شده*</label>
            <input
              value={damage}
              onChange={onDamageChange}
              placeholder="ریال"
              type="number"
              id="damage"
              name="damage"
              min="100000000"
              required
            />
          </div>
        </Row>
        <Row>
          <div>
            <label htmlFor="date">تاریخ*</label>
            <input
              value={date}
              onChange={onDateChange}
              type="date"
              id="date"
              name="date"
              required
            />
          </div>
          <div>
            <label htmlFor="time">ساعت*</label>
            <input
              value={time}
              onChange={onTimeChange}
              type="time"
              id="time"
              name="time"
              required
            />
          </div>
          <div>
            <label htmlFor="distance">مسافت رفت و برگشت طی شده*</label>
            <input
              value={distance}
              onChange={onDistanceChange}
              placeholder="km"
              type="number"
              id="distance"
              name="distance"
              min="1"
              max="30"
              required
            />
          </div>
        </Row>
        <Row>
          <div>
            <label htmlFor="detail">توضیحات</label>
            <textarea id="detail" name="detail" rows="4" cols="50" />
          </div>
        </Row>
      </StyledWrapper>
      <button type="submit">ذخیره</button>
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
  input {
    text-align: left;
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

const StyledSection = styled.form`
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
  button {
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
  }
`;
const StyledWrapper = styled.div`
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
