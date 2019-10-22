export const generateMetroSoundListItem = (itemObject) => {
    const item = document.createElement('option');
    item.value = itemObject.path;
    item.textContent = itemObject.name;
    
    return item;
};