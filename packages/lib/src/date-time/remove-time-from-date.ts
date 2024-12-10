import dayjs from "dayjs";

export const removeTimeFromDate = (date: Date) =>
  dayjs(date).format("YYYY-MM-DD");
