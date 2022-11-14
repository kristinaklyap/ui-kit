export const isInputEmpty = (val) => val.trim() !== "";
export const isEmailValid = (val) => val.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
