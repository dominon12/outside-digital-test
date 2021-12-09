import React from "react";
import TaxDeduction from "../Organisms/TaxDeduction";

/**
 * Home page.
 *
 * @return {*}  {JSX.Element}
 */
const Home: React.FC = (): JSX.Element => {
  return (
    <div className="home">
      <TaxDeduction />
    </div>
  );
};

export default Home;
