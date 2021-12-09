import React, { useState } from "react";
import Button from "../Atoms/Button";
import HintText from "../Atoms/HintText";
import TextButton from "../Atoms/TextButton";
import Title from "../Atoms/Title";
import Input from "../Molecules/Input";
import OptionSelector from "../Molecules/OptionSelector";

import "./TaxDeductionCalculator.scss";

const TaxDeductionCalculator: React.FC = (): JSX.Element => {
  const [monthlySalary, setMonthlySalary] = useState<string>("");

  const calculationOptions = [
    {
      id: "1",
      name: "Платёж",
    },
    {
      id: "2",
      name: "Срок",
    },
  ];

  const [selectedCalculationOption, setSelectedCalculationOption] = useState(
    calculationOptions[0].id
  );

  const calculateTaxDeduction = () => {};

  const add = () => {};

  return (
    <section className="tax-deduction-calculator">
      <Title className="tax-deduction-calculator__title">Налоговый вычет</Title>

      <HintText className="tax-deduction-calculator__hint">
        Используйте налоговый вычет чтобы погасить ипотеку досрочно. Размер
        налогового вычета составляет не более 13% от своего официального
        годового дохода.
      </HintText>

      <Input
        id="monthly-salary"
        value={monthlySalary}
        setValue={setMonthlySalary}
        placeholder="Введите данные"
        labelText="Ваша зарплата в месяц"
        validationOptions={{ notEmpty: true, numericValue: true }}
      />

      <TextButton onClick={calculateTaxDeduction}>Рассчитать</TextButton>

      <OptionSelector
        className="tax-deduction-calculator__options"
        title="Что уменьшаем?"
        selected={selectedCalculationOption}
        setSelected={setSelectedCalculationOption}
        options={calculationOptions}
      />

      <Button style="big" onClick={add}>
        Добавить
      </Button>
    </section>
  );
};

export default TaxDeductionCalculator;
