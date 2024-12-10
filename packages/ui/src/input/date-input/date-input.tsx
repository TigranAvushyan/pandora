import { DateInput as MDateInput } from "@mantine/dates";
import { ComponentProps, FC } from "react";

export type DateInputProps = ComponentProps<typeof MDateInput>;

export const DateInput: FC<DateInputProps> = (props) => {
  const dateParser: DateInputProps["dateParser"] = (input) => {
    const regex = /^\d{2}[ .-]\d{2}[ .-]\d{4}$/;
    if (!regex.test(input)) {
      return new Date(input);
    }
    const [day, month, year] = input.split(/[ .-]/g);
    return new Date(Number(year), Number(month) - 1, Number(day));
  };

  return (
    <MDateInput valueFormat="DD MMMM YYYY" dateParser={dateParser} {...props} />
  );
};
