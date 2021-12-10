import React, { useContext } from "react";
import { TaxDeductionPopupContext } from "../../Contexts/TaxDeductionPopupContext";

import "./TaxDeduction.scss";
import Button from "../Atoms/Button";
import TaxDeductionPopup from "../Popups/TaxDeductionPopup";

const TaxDeduction: React.FC = (): JSX.Element => {
  const { setVisible } = useContext(TaxDeductionPopupContext);

  const openPopup = () => setVisible(true);

  return (
    <section className="tax-deduction">
      <Button style="big" onClick={openPopup} outline>
        Налоговый вычет
      </Button>

      <TaxDeductionPopup />
    </section>
  );
};

export default TaxDeduction;
