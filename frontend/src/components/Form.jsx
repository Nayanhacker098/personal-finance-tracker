import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { useGlobalContext } from "../utils/context";

const Form = ({ btnClass, options, btnTitle }) => {
  const { addIncome, addExpense } = useGlobalContext();
  const [inputeState, setInputState] = useState({
    title: "",
    amount: "",
    date: "",
    category: "",
    description: "",
  });

  const { title, amount, date, category, description } = inputeState;

  const handleInput = (name) => (e) => {
    setInputState({ ...inputeState, [name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (btnTitle === "Add Income") {
      addIncome(inputeState);
    } else {
      addExpense(inputeState);
    }
    setInputState({
      title: "",
      amount: "",
      date: "",
      category: "",
      description: "",
    });
  };

  return (
    <div className="form-1 lg:p-8 p-4">
      <div className="form-container">
        <div className="input-control">
          <input
            type="text"
            placeholder=" Title"
            value={title}
            name="title"
            onChange={handleInput("title")}
          />
        </div>
        <div className="input-control">
          <input
            type="text"
            placeholder=" Amount"
            value={amount}
            name="amount"
            onChange={handleInput("amount")}
          />
        </div>
        <div className="input-control selects">
          <DatePicker
            id="date"
            placeholderText="Select A Date"
            dateFormat="dd/MM/yyyy"
            selected={date}
            onChange={(date) => {
              setInputState({ ...inputeState, date: date });
            }}
          />
          <select
            required
            id="category"
            value={category}
            name="category"
            onChange={handleInput("category")}
          >
            <option value="" disabled>
              Select options
            </option>
            {options.map((incomeOption) => {
              return (
                <option key={incomeOption.id} value={incomeOption.value}>
                  {incomeOption.optionTitle}
                </option>
              );
            })}
          </select>
        </div>
        <div className="input-control">
          <textarea
            placeholder="Add Description"
            id="description"
            cols="30"
            rows="4"
            value={description}
            name="description"
            onChange={handleInput("description")}
          ></textarea>
        </div>
      </div>
      <div className="income-btn lg:text-left text-center">
        <button
          type="submit"
          className={btnClass}
          onClick={(e) => {
            handleSubmit(e);
          }}
        >
          + {btnTitle}
        </button>
      </div>
    </div>
  );
};

export default Form;
