import React from "react";
import Button from "../Atoms/Button";

import "./TaxDeduction.scss";

const TaxDeduction: React.FC = (): JSX.Element => {
  const openPopup = () => {};

  return (
    <section className="tax-deduction">
      <Button style="big" onClick={openPopup} outline>
        Налоговый вычет
      </Button>
    </section>
  );
};

export default TaxDeduction;
