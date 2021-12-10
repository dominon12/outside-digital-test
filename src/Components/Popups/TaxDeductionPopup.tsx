import React, { useContext } from "react";

import { TaxDeductionPopupContext } from "../../Contexts/TaxDeductionPopupContext";
import TaxDeductionCalculator from "../Organisms/TaxDeductionCalculator";
import Popup from "../Templates/Popup";

const TaxDeductionPopup: React.FC = (): JSX.Element => {
  const { visible, setVisible } = useContext(TaxDeductionPopupContext);

  return (
    <Popup id="tax-modal" visible={visible} setVisible={setVisible}>
      <TaxDeductionCalculator />
    </Popup>
  );
};

export default TaxDeductionPopup;
