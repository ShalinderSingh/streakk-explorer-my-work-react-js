import moment from "moment";
export const renderTime = (date) => {
    let timeLeft;
    let time = Date.now();
    const parsed_time = new Date(date).getTime();
    const newDate = (time - parsed_time) / 1000;
    if (newDate < 60) timeLeft = `${newDate.toFixed(0)}s ago`;
    if (newDate >= 60 && newDate <= 3600)
        timeLeft = `${(newDate / 60).toFixed(0)}m ago`;
    if (newDate >= 3600 && newDate <= 86400)
        timeLeft = `${(newDate / 3600).toFixed(0)}h ago`;
    return timeLeft;
};

export const getAddress = (address = '', startLen = 6, endLen = 6) => {
    return `${address.substring(0, startLen)}...${address.substring(
        address.length - endLen,
        address.length,
    )}`;
};

export const isTimeAgoByCreatedDate = (date) => {
    const parsed_time = new Date(date).getTime();
    const current_time = Date.now();
    const current_month = new Date().getMonth();
    const parsed_month = new Date(date).getMonth();
    const diffMonth =
        current_month - parsed_month > 0
            ? current_month - parsed_month
            : -(current_month - parsed_month);
    let timeLeft;
    const newDate = (current_time - parsed_time) / 1000;
    if (diffMonth == 0 && newDate < 60)
        timeLeft = `${Math.abs(newDate.toFixed(0))}s ago`;
    else if (diffMonth == 0 && newDate >= 60 && newDate < 3600)
        timeLeft = `${(newDate / 60).toFixed(0)}m ago`;
    else if (diffMonth == 0 && newDate >= 3600 && newDate < 86400)
        timeLeft = `${(newDate / 3600).toFixed(0)}h ago`;
    else if (diffMonth == 0 || (newDate >= 86400 && newDate <= 2592000))
        timeLeft = `${(newDate / 86400).toFixed(0)}d ago`;
    else if (diffMonth > 0) timeLeft = moment(date).fromNow();
    return timeLeft;
};
