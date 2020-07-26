const addList = document.querySelector('.add');
const list = document.querySelector('.todos');

const createTodo = list => {
    // HTML テンプレートを生成
    const html = `
    <li class="list-group-item d-flex justify-content-between align-items-center">
        <span>${list}</span>
        <i class="far fa-trash-alt delete"></i>
    </li>
    `;

    list.innerHTML += html;
}
addList.addEventListener('submit', e => {
  e.preventDefault();
  // タスクに入力した値を空白を除外して格納
    const list = addList.add.value.trim();
    if(list.length) {
        // Todo List の HTML を作成
        createTodo(list);
        // タスクに入力した文字をクリア
        addList.reset();
    }
});