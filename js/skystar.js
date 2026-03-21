// poem
var words=[
    '曾是惊鸿照影来',
    '当年明月在',
    '曾照彩云归',
    '真堪偕隐',
    '画船听雨眠',
    '愿为江水',
    '与君重逢',
    '一日不见兮',
    '思之若狂',
    '好想回到那个夏天',
    '趴在桌子上偷偷看你',
    '你是我灰色人生中的一道彩虹',
    '柳絮空缱绻',
    '南风知不知',
    '我见青山多妩媚',
    '料青山见我也应如是',
    '人生若只如初见',
    '我余光中都是你',
    '因为你，我多少适应了这个世界',
    '今夜何夕',
    '见此良人',
    '愿我如星君如月',
    '夜夜流光相皎洁',
    '情不所起',
    '一往而深',
    '入骨相思知不知',
    '尤为离人照落花',
    '月落星沉',
    '霞姿月韵',
    '醉后不知天在水',
    '满船星梦压星河',
    '众里嫣然通一顾',
    '若非群玉山头见',
    '会向瑶台月下逢'
];
function randomNum(min,max){
    var num = (Math.random()*(max-min+1)+min).toFixed(2);
    return num;
}
function init(){
    let container = document.querySelector('.container');
    if (!container) return;
    let f = document.createDocumentFragment();
    words.forEach(w=>{
    let word_box = document.createElement('div');
    let word = document.createElement('div');
        word.innerHTML = w.split('').join('<br>'); // 用换行符把每个字分开，实现纯粹的从上到下排布
        word.classList.add('word');
        word.style.color = '#BAABDA';
        word.style.fontFamily = "'LXGW WenKai Lite', '楷体', 'KaiTi', 'STKaiti', serif";
        word.style.fontSize = '20px';
        word.style.lineHeight = '1.3'; // 设置合理的行高
        word_box.classList.add('word-box');
        
        // 词句靠上调得有些过了，现在稍微往下调一点，使其在手机上居中平衡
        word_box.style.setProperty("--margin-top",randomNum(-45, 15)+'vh');
        word_box.style.setProperty("--margin-left",randomNum(-40, 40)+'vw');
        word_box.style.setProperty("--animation-duration",randomNum(8, 20)+'s');
        word_box.style.setProperty("--animation-delay",randomNum(-20,0)+'s');
        
        word_box.appendChild(word);
        f.appendChild(word_box);


    })
    container.appendChild(f);
}
document.addEventListener('DOMContentLoaded',init);


 
