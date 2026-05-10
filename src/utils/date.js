import { format } from "date-fns";

function isoDateToString(date) {
	return format(date, "yyyy-MM-dd");
}

function beautifyIsoString(date) {
	return format(date, "dd MMMM yyyy");
}

export { isoDateToString, beautifyIsoString };
