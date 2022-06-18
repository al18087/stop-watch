const $startButton = document.getElementById("start_button");

// 「start」ボタンが押された時の処理
$startButton.addEventListener("click", () => {
    const $show = document.getElementById("show");

    // 経過した時間を処理し、表示する
    let count = 0;
    const countUp = function () {
        const $message = document.getElementById("message");
        $message.innerHTML = "";

        // 「start」ボタンが押されてから1秒経過するまでの表記方法
        if (count < 100) {
            $show.innerHTML = "000." + count++;
        }

        // 「start」ボタンが押されてから10秒経過するまでの表記方法
        else if (100 <= count && count < 1000) {
            $show.innerHTML = "00" + (count++ / 100);
        }

        // 「start」ボタンが押されてから100秒経過するまでの表記方法
        else if (1000 <= count && count < 10000) {
            $show.innerHTML = "0" + (count++ / 100);
        }

        // 「start」ボタンが押されてから100秒以上経過したときの表記方法
        else {
            $show.innerHTML = count++ / 100;
        }

        // countUpメソッドを1回実行したら10ミリ秒にまた同じ処理を行う
        const time = setTimeout(countUp, 10);

        // 「stop」ボタンが押された時の処理
        const $stopButton = document.getElementById("stop_button");
        $stopButton.addEventListener("click", () => {
            clearTimeout(time);

            // 小数点以下の表記が「00」の場合、「おめでとうございます！」と表示する
            // それ以外は「残念！」と表示する
            if ($show.innerHTML.indexOf(".") == -1) {
                $message.innerHTML = "おめでとうございます！";
            } else {
                $message.innerHTML = "残念！";
            }
        });
    }
    countUp();
});
