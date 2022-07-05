import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";

function Nav() {
  return (
    <div>
      <div className="login_button">
        <FontAwesomeIcon icon={faCircleUser} />
        <div>로그인</div>
      </div>
      <div className="logo">
        <img
          width={200}
          src="https://www.blockart.institute/wp-content/uploads/2018/10/blockart-logo.png"
        />
      </div>
    </div>
  );
}

export default Nav;
