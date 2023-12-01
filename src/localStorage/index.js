export const getItemFromLocalStorage = () => {
    const itemList = localStorage.getItem('tasks');
    return itemList ? JSON.parse(itemList) : '';
};

export const setItemToLocalStorage = ( items ) => {
    localStorage.setItem('tasks', JSON.stringify(items));
};