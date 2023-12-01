function filterSelection(category) {
    var items = document.getElementsByClassName('filterDiv');
    if (category === 'all') {
      for (var i = 0; i < items.length; i++) {
        items[i].style.display = 'block';
      }
    } else {
      for (var i = 0; i < items.length; i++) {
        if (items[i].classList.contains(category)) {
          items[i].style.display = 'block';
        } else {
          items[i].style.display = 'none';
        }
      }
    }
  }