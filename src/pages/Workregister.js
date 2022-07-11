import React from "react";
import "./Workregister.css";

function Workregister() {
  return (
    <div className="workregister">
      <div className="register_ment">
        빠르게 작품을 등록하고 구매자를 찾아보세요 !
      </div>
      <div className="work_about">
        <ul>
          <li>
            작품명 : <input type="text" placeholder=" " />
          </li>
          <li>
            작품크기 : <input type="text" placeholder=" " />
          </li>
          <li>
            <form>
              <label>
                작품 분야 , 장르 : &emsp;&emsp;
                <select name="genre">
                  <option value="1">동양화</option>
                  <option value="2">서양화</option>
                  <option value="3">추상화</option>
                  <option value="4">등등....</option>
                </select>
              </label>
            </form>
          </li>
          <li>
            작품 사진&emsp;&emsp; <button>사진 불러오기 </button>
          </li>
          <li>
            작품 설명 : <input type="text" placeholder=" " />
          </li>
        </ul>
      </div>
      <div className="hope_price">
        희망 판매 금액
        <div className="hope_price_input">
          <input type="text" placeholder="" />
          &emsp;원
        </div>
        <div className="register_button">
          <button type="submit">작품 등록하기</button>
        </div>
      </div>
    </div>
  );
}
export default Workregister;
