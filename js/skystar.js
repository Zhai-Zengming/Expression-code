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
    
    let total = words.length;
    // 将全部词句分层，每层几个词，形成漂亮的柱状圆环排列
    let rows = 6;
    let itemsPerRow = Math.ceil(total / rows);

    words.forEach((w, index) => {
    let word_box = document.createElement('div');
    let word = document.createElement('div');
        word.innerHTML = w.split('').join('<br>'); // 用换行符把每个字分开，实现纯粹的从上到下排布
        word.classList.add('word');
        word.style.color = '#BAABDA';
        word.style.fontFamily = "'LXGW WenKai Lite', '楷体', 'KaiTi', 'STKaiti', serif";
        word.style.fontSize = '20px';
        word.style.lineHeight = '1.3'; // 设置合理的行高
        word_box.classList.add('word-box');
        
        // --- 排版逻辑优化 ---
        let row = Math.floor(index / itemsPerRow);
        let col = index % itemsPerRow;
        
        // 高度分布：控制在手机能显示的范围内，大约-38vh 到 18vh 之间
        let pTop = row / (rows - 1); // 0 到 1
        let marginTop = -38 + pTop * 56; 
        // 错开单双行的高度一点点，让长短句不至于严重撞车
        marginTop += (col % 2) * 3; 

        // 旋转轨道半径
        let radius = 35 + (row % 2) * 5; // 周长设在 35vw 或 40vw
        
        // 将这一层的句子均匀分布在 360 度圆环上 (通过控制 delay 实现)
        let duration = 18 + (row % 3) * 2; // 不要转太快，18-22秒一圈
        let delay = -(col / itemsPerRow) * duration; 
        
        word_box.style.setProperty("--margin-top", marginTop + 'vh');
        word_box.style.setProperty("--margin-left", radius + 'vw');
        word_box.style.setProperty("--animation-duration", duration + 's');
        word_box.style.setProperty("--animation-delay", delay + 's');
        
        word_box.appendChild(word);
        f.appendChild(word_box);


    })
    container.appendChild(f);
}
document.addEventListener('DOMContentLoaded',init);


 
