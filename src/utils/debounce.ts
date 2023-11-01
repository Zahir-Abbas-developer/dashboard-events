import debounce from "lodash.debounce";

//=====debounce search
const DEBOUNCE_DELAY = 1000;
 
 
export const debouncedSearch = debounce((value: any, setSearchName: any) => {
  setSearchName(value);
}, DEBOUNCE_DELAY);