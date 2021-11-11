import { format } from "date-fns";

const processDataEntry = (dataEntry) => ({
  ...dataEntry,
  formattedDate: format(new Date(+dataEntry.createDate), "MMM d, yyyy"),
});

export default processDataEntry;
