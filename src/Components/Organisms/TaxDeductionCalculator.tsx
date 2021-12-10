import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Title from "../Atoms/Title";
import "./TaxDeductionCalculator.scss";
import { calculateDeduction } from "../../Services/TaxDeductionService";
import Button from "../Atoms/Button";
import HintText from "../Atoms/HintText";
import TextButton from "../Atoms/TextButton";
import Input from "../Molecules/Input";
import OptionSelector from "../Molecules/OptionSelector";
import DeductionOptionsColumn from "./DeductionOptionsColumn";
import { RootState } from "../../Redux/Store";
import {
  addDeductionOptions,
  clearOptions,
} from "../../Redux/DeductionOptions/Actions";

const TaxDeductionCalculator: React.FC = (): JSX.Element => {
  // monthly salary input
  const [monthlySalary, setMonthlySalary] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null);
  // redux
  const dispatch = useDispatch();
  const deductionOptions = useSelector(
    (state: RootState) => state.deductionOptions
  );

  /**
   * Clear redux's store
   * when unmounting.
   */
  useEffect(() => {
    return () => {
      dispatch(clearOptions());
    };
  }, []);

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

  /**
   * Calculates deduction from
   * user's input.
   */
  const calculateTaxDeduction = () => {
    const inputValid = inputRef.current?.classList.contains("valid");

    if (inputValid) {
      const calculatedDeduction = calculateDeduction(+monthlySalary);
      dispatch(addDeductionOptions(calculatedDeduction));
    }
  };

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
        ref={inputRef}
        value={monthlySalary}
        setValue={setMonthlySalary}
        placeholder="Введите данные"
        labelText="Ваша зарплата в месяц"
        validationOptions={{ notEmpty: true, numericValue: true }}
      />

      <TextButton onClick={calculateTaxDeduction}>Рассчитать</TextButton>

      <DeductionOptionsColumn
        id="calculations-result"
        options={deductionOptions}
      />

      <OptionSelector
        className="tax-deduction-calculator__options"
        title="Что уменьшаем?"
        selected={selectedCalculationOption}
        setSelected={setSelectedCalculationOption}
        options={calculationOptions}
      />
      <Button
        className="tax-deduction-calculator__btn"
        style="big"
        onClick={() => {}}
      >
        Добавить
      </Button>
    </section>
  );
};

export default TaxDeductionCalculator;
