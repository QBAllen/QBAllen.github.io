let heart = document.querySelector('.heart')
let card = document.querySelector('.card')
let box = document.querySelector('#box')
heart.addEventListener('click',function(){
    card.setAttribute("style","opacity:0");
    let x = document.createElement("audio");
     x.setAttribute("src", "qlxxxx.mp3");
     x.setAttribute("autoplay","autoplay");

// 打字效果
let i =0
let str =  '周颖颖小朋友：<  每次我都喜欢叫你小团子，但是第一次写情书，我要把你的名字写在最前面。<  咱们从相遇，到熟悉，到互有好感，再到互相表达喜欢，充满了各种各样的巧合，巧合到自己都不敢相信。各种各样的巧合结合到一起，使得两个人对对方的好感越来越多，也在这些巧合之下，我们两个人对对方的性格，三观，家庭，生活和工作，都有了更深的了解。也让我得出来一个结论：你就是我的理想型。<  第一次对你有好感，其实是在某天晚上，听你吐槽工作中的倒霉事。你肯定很疑惑，我为什么会因为这种事对你有好感。我来自一个很普通但是很健康的家庭，家庭的环境和教育，让我现在形成了一个非常要强的性格。在遇到你之前的很长一段时间，不论是工作上的困难，还是生活中的苦恼，我都不愿意与他人诉说，我更愿意一个人默默承受。但是那天听你用一种奶凶奶凶语气，讲述你的痛苦，讲你被隔离的烦恼，嗓子的折磨，和我分享你的生活，让我感受到了你的乐观，可爱，坚强。<  第一次向你表达我对你的喜欢，其实还是你不小心先开的口。那天我真的很开心，笑的眼睛睁不开，眼泪笑了出来。我喜欢的人，正好喜欢我，这是多么幸运的事呀！哈哈哈哈哈哈哈哈哈哈哈现在想起来还是很开心。<  第一次见面，是去给你过生日。在见到你之前，因为疫情，我一度以为自己会被拉去隔离，下火车出站时工作人员喊我走核查通道，我心里充满了忐忑，我忐忑的不是被隔离，怕的是不能陪你过生日，害怕我跨越层层阻拦却在最后一步被拦住，给了你憧憬，又给你带来失望。好在老天每次都能站在我们这边，给我们最好的安排。<  接下来，咱们还会有很多很多的第一次，2023年，我无比憧憬它的到来。我从没想过2022年的最后一个季度，能遇到你，遇到想共同度过一生的人，回看这一年，好像这一年我最认真做的一件事，就是和你相爱。咱们一起就算什么也不做，什么也不说，也能无比安心，无比幸福。我的文采不太好，表达不出对你的爱，那么希望以后的日子里，可以让我用实际行动来让你感受到生活的快乐，开心，以后的日子一起度过！<  又开始想你啦。<  邱胜波，你的邱叔叔~'
let strp = ''

function print()
{
 if(str[i]=='<')
 {
     document.getElementById("box").innerHTML=strp+"<br><br>+'|'";
     strp+="<br><br>";
 }
 else
 {
     strp+=str[i];
     box.innerHTML=strp + '|';
 }
 i++;
}
setTimeout(() => {
    let printid=setInterval(() => {
        print();
        if(i==str.length)
        clearInterval(printid);
        },190);  // 190毫秒打一个字，其实细心发现的话，这个项目还是有个小小的bug，无法用语言描述这个bug，如果你想优化的话 有一种简单的方法就是调快打字的速度，这样那个bug看起来就不会很明显,我太菜了 不会改那个bug
}, 4500);  //5500毫秒开始打字
// 背景出现
function appearBackground(){
setTimeout(()=>{
box.style.opacity=1
},1500)
}
appearBackground()

})
