import React, { Component } from "react";
import ScriptTag from "react-script-tag";
class Script extends Component {
  render() {
    return (
      <div className="script-tag">
        <ScriptTag src="./vendor/animsition/js/animsition.min.js"></ScriptTag>
        <ScriptTag src="./vendor/animsition/js/animsition.min.js"></ScriptTag>
        <ScriptTag src="./vendor/bootstrap/js/popper.js"></ScriptTag>
        <ScriptTag src="./vendor/slick/slick.min.js"></ScriptTag>
        <ScriptTag src="./js/slick-custom.js"></ScriptTag>
        <ScriptTag src="./vendor/parallax100/parallax100.js"></ScriptTag>
        <ScriptTag src="./vendor/MagnificPopup/jquery.magnific-popup.min.js"></ScriptTag>
        <ScriptTag src="./vendor/isotope/isotope.pkgd.min.js"></ScriptTag>
        <ScriptTag src="./vendor/sweetalert/sweetalert.min.js"></ScriptTag>
        <ScriptTag src="./vendor/perfect-scrollbar/perfect-scrollbar.min.js"></ScriptTag>
        <ScriptTag src="./js/main.js"></ScriptTag>
        <ScriptTag></ScriptTag>
      </div>
    );
  }
}

export default Script;
