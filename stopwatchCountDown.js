const $button = document.getElementById("button");

// 「start」ボタンが押されたときの処理
$button.addEventListener("click", () => {
    const $message = document.getElementById("message");
    $message.innerHTML = "";

    const $finish = document.getElementById("finish");
    $finish.innerHTML = "";

    // タイマーの設定時間を取得
    let minute = document.getElementById("minute").value;
    let second = document.getElementById("second").value;

    // 分または秒の値を入力していないとき
    if (minute == "" || second == "") {
        $message.innerHTML = "タイマーを設定してください";
        return;
    }

    // 秒の値が0~59の範囲でないとき
    if (second < 0 || 60 <= second) {
        $message.innerHTML = "0~59の範囲で入力してください";
        return;
    }

    // タイマーを起動
    const countDown = function () {
        const $show = document.getElementById("show");

        // 秒の値が0になった場合
        if (second < 0 && minute != 0) {
            second = 59;
            minute--;
        }

        // 残り時間を表記する
        if (second < 10) {
            $show.innerHTML = minute + ":0" + second--;
        } else {
            $show.innerHTML = minute + ":" + second--;
        }

        // countDownメソッドを1回実行したら1000ミリ秒にまた同じ処理を行う
        const time = setTimeout(countDown, 1000);

        // タイマーが0になった場合は終了
        if (minute == 0 && second < 0) {
            clearTimeout(time);
            $finish.innerHTML = "終了";
            return;
        }
    };
    countDown();
});
