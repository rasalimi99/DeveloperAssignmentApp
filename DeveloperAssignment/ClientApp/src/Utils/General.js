// function for formatting currency
export const FormatMoney = (
  amount,
  decimalCount = 2,
  decimal = ".",
  thousands = ",",
  currency = "$"
) => {
  try {
    decimalCount = Math.abs(decimalCount);
    decimalCount = isNaN(decimalCount) ? 2 : decimalCount;

    const negativeSign = amount < 0 ? "-" : "";

    let i = parseInt(
      (amount = Math.abs(Number(amount) || 0).toFixed(decimalCount))
    ).toString();
    let j = i.length > 3 ? i.length % 3 : 0;

    return (
      (currency.length > 0 ? currency : " ") +
      negativeSign +
      (j ? i.substr(0, j) + thousands : "") +
      i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousands) +
      (decimalCount
        ? decimal +
          Math.abs(amount - i)
            .toFixed(decimalCount)
            .slice(2)
        : "")
    );
  } catch (e) {
    console.log(e);
  }
};

// function for counting array elements
export const CountArrayItems = (arr) => {
  let arrayLength = Object.keys(arr).length;
  return arrayLength > 0 ? arrayLength : 0;
};
