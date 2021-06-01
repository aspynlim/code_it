// list를 import해 주세요.


function reloadMenu(data) {
  list.innerHTML = '';

  data.forEach((title, index) => {
    const li = document.createElement('li');
    li.classList.add('item');
    li.innerHTML = `<b>${index + 1}</b>${title}<button class=\"del-btn\" data-index=\"${index}\">x</div>`;
    list.append(li);
  });
}

export function deleteMenu(data, index) {
  data.splice(index, 1);
  reloadMenu(data);
};
