import React, { useContext } from "react";

import { TaxDeductionPopupContext } from "../../Contexts/TaxDeductionPopupContext";
import Popup from "../Templates/Popup";

const TaxDeductionPopup: React.FC = (): JSX.Element => {
  const { visible, setVisible } = useContext(TaxDeductionPopupContext);

  return (
    <Popup id="tax-modal" visible={visible} setVisible={setVisible}>
      Hi there
    </Popup>
  );
};

export default TaxDeductionPopup;
