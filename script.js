//your JS code here. If required.
function removeSelectedColor() {
    const colorSelect = document.getElementById('colorSelect');
    const selectedIndex = colorSelect.selectedIndex;

    // Check if a color is selected
    if (selectedIndex !== -1) {
        colorSelect.remove(selectedIndex);
    }
}
