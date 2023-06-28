const formatter = new Intl.NumberFormat('ru', { style: 'currency', currency: 'RUB', minimumFractionDigits: 0 });

export const formatPrice = (value: number) => formatter.format(value);
