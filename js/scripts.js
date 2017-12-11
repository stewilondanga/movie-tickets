let filterInput = document.getElementById('filter');
filterInput.addEventListener('keyup', filterNames);

function filterNames() {
  let filterValue = filterInput.value.toUpperCase();
  let list = document.getElementById('list');
  let names = list.querySelectorAll('li.name');

  for (let i = 0; i < names.length; i++) {
    let nameOutput = names[i].getElementsByTagName('a')[0];

    if(nameOutput.innerHTML.toUpperCase().indexOf(filterValue) > -1) {
      names[i].style.display = '';
    } else {
      names[i].style.display = 'none';
    }
  }
}
