
// dream5-room

$(setTimeout(function () {

    var userInput = prompt("그럼 그 꿈을 위해서 하고 있는 게 있나요?" + "")
    if (userInput == null) {
        alert("늦고 빠른 게 어디있어요.\n이제라도 움직이면 되는거죠.")
    } else {
        alert("당신이 있는 곳이 곧 당신이 노력한다는 증거일 거에요.\n계속 노력하는 당신을 위해 응원하겠습니다.")
    }

    var userInput = prompt("마지막 질문!\n지금 당장 하고 싶은 게 있을까요? 사소한 거라도 좋아요.\n전 집에 가고 싶어요.")
    alert("실없는 질문들이었을 수도 있겠네요.\n그래도 꿈에 대해 한 번 돌아볼 기회가 생겼잖아요?\n안 그래요?")
    alert("무슨 일을 하던지 항상 응원할게요.\n속도는 중요하지 않아요. 나아가는 데에 의의가 있는거죠.")
    alert("귀여운 고양이로 마무리하겠습니다.")
    document.getElementById("background").src = "img/cat.png";
}, 1000));