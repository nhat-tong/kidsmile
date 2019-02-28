export const currency = value => {
    return parseFloat(value).toFixed(0) + "k";
};
export const date = value => {
    const date = new Date(value);
    const dd = (date.getDate() < 10 ? "0" : "") + date.getDate();
    const MM = (date.getMonth() + 1 < 10 ? "0" : "") + (date.getMonth() + 1);
    const yyyy = date.getFullYear();
    return dd + "/" + MM + "/" + yyyy;
};
//# sourceMappingURL=index.js.map