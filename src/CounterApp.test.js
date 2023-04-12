import { fireEvent, render } from "@testing-library/react";
import CounterApp from "./CounterApp.js";

it("CounterApp should display correct initial prop value", () => {
  const { getByTestId } = render(<CounterApp counterInitialvalue={5} />);
  const countValue = Number(getByTestId("count").textContent);

  expect(countValue).toEqual(5);
});

it("CounterApp increment button click should increment default value by 1", () => {
  const { getByTestId, getByRole } = render(
    <CounterApp counterInitialvalue={5} />
  );

  const incrementButtonElement = getByRole("button", { name: "Increment" });

  const defaultCounterValue = Number(getByTestId("count").textContent);
  expect(defaultCounterValue).toEqual(5);

  fireEvent.click(incrementButtonElement);

  const newCounterValue = Number(getByTestId("count").textContent);
  expect(newCounterValue).toEqual(6);
});

it("CounterApp click on decrement button should decrement default value by 1", () => {
  const { getByTestId, getByRole } = render(
    <CounterApp counterInitialvalue={5} />
  );
  const decrementButtonElement = getByRole("button", { name: "Decrement" });

  const defaultCounterValue = Number(getByTestId("count").textContent);
  expect(defaultCounterValue).toEqual(5);

  fireEvent.click(decrementButtonElement);

  const newCounterValue = Number(getByTestId("count").textContent);
  expect(newCounterValue).toEqual(4);
});

it("CounterApp click on reset button should set the default value to 0", () => {
  const { getByTestId, getByRole } = render(
    <CounterApp counterInitialvalue={5} />
  );
  const resetButtonElement = getByRole("button", { name: "Reset" });

  const defaultCounterValue = Number(getByTestId("count").textContent);
  expect(defaultCounterValue).toEqual(5);

  fireEvent.click(resetButtonElement);

  const newResetCounterValue = Number(getByTestId("count").textContent);
  expect(newResetCounterValue).toEqual(0);
});

it("CounterApp clicking on Switch Sign button should invert the positive number to negative number and vice versa", () => {
  const { getByTestId, getByRole } = render(
    <CounterApp counterInitialvalue={5} />
  );
  const switchSignButtonElement = getByRole("button", { name: "Switch sign" });

  const defaultCounterValue = Number(getByTestId("count").textContent);
  expect(defaultCounterValue).toEqual(5);

  fireEvent.click(switchSignButtonElement);

  const newCounterValue = Number(getByTestId("count").textContent);
  expect(newCounterValue).toEqual(-5);
});
