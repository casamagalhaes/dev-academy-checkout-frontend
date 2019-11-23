export default Vue => {
  Vue.filter("toMoney", value => {
    const formatter = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
      minimumIntegerDigits: 2,
      maximumFractionDigits: 2
    });
    return formatter.format(value);
  });

  Vue.filter("formatMoney", value => {
    const formatter = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
      currencyDisplay: "symbol",
      minimumIntegerDigits: 2,
      maximumFractionDigits: 2
    });
    return formatter.format(value);
  });
};
