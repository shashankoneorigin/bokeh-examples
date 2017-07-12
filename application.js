var slider = new Slider('#ex1', {
    formatter: function(value) {
        return 'Current value: ' + value;
    }
});

function showConfirmationDialog() {
    var textbox = document.getElementById('txtname');
    alert(textbox.value);
}

function materialselect() {
    var select = document.getElementById('material_select')
    alert(material_select.value)
}