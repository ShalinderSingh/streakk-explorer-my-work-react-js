const trauncateFractionAndFormat = (parts, digits) => {
    return parts.map(({ type, value }) => {
        if (type !== 'fraction' || !value || value.length < digits) {
            return value;
        }

        let retVal = "";
        for (let idx = 0, counter = 0; idx < value.length && counter < digits; idx++) {
            if (value[idx] !== '0') {
                counter++;
            }
            retVal += value[idx];
        }
        return retVal;
    }).reduce((string, part) => string + part);
};
export const formatNumbers = (number, numberOfDecimals = 4) => {
    if (number === '') return '';
    const decimalsToUse = numberOfDecimals === 0 ? 0 : numberOfDecimals;
    const formatter = new Intl.NumberFormat('en-US', {
        minimumFractionDigits: numberOfDecimals,
        maximumFractionDigits: 20,
    })
    return trauncateFractionAndFormat(formatter.formatToParts(number), decimalsToUse)
};


