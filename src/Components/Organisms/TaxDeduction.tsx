import React, { useState } from "react";
import CheckBox from "../Atoms/CheckBox";

import "./TaxDeduction.scss";

const TaxDeduction: React.FC = (): JSX.Element => {
  const [checked, setChecked] = useState(false);

  return (
    <section className="tax-deduction">
      <CheckBox checked={checked} setChecked={setChecked} />
    </section>
  );
};

export default TaxDeduction;
