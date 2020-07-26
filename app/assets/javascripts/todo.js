$(function() {
  function createHTML(todo) {
    let html = `<li class="todo-list">
                <span>${todo.list}</span>
                <a class="delete-btn" rel="nofollow" data-method="delete" href="/todoes/${todo.id}"><i class="fas fa-trash"></i></a>`
    return html;
  }
  $("#todo_input").on("submit", function(e) {
    e.preventDefault();  // デフォルトのイベント(HTMLデータ送信など)を無効にする
    let formData = new FormData(this);  // textの入力値を取得
    let url = $(this).attr("action");  // action属性のurlを抽出
    $.ajax({
      url: url,  // リクエストを送信するURLを指定
      type: "POST",  // HTTPメソッドを指定（デフォルトはGET)
      data: formData, 
      dataType: "json",  // レスポンスデータをjson形式と指定する
      processData: false,  //FormDataを使用した場合に必要となる
      contentType: false  //FormDataを使用した場合に必要となる
    })
    .done(function(data) {
      let html = createHTML(data);  // 受信したデータ(data)を元に追加するURLを生成(createHTML関数は冒頭で定義)
      $(".todos").append(html);  // 生成したHTMLをappendメソッドでドキュメントに追加
      $(".text-box").val("");  // textareaを空にする
    })
    .fail(function() {
      alert("error!");  // 通信に失敗した場合はアラートを表示
    })
    .always(function() {
      $(".btn").prop("disabled", false);  // submitボタンのdisableを解除
      $(".btn").removeAttr("data-disable-with");  // submitボタンのdisableを解除(Rails5.0以降はこちらも必要)
    });
  });
});