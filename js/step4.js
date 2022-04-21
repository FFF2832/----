// let img1='https://images.pexels.com/photos/277552/pexels-photo-277552.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260';
// let img2='https://images.pexels.com/photos/2869565/pexels-photo-2869565.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260';
// let text1='文字文字1';
// let text2='文字文字2';
const imgStr='https://images.pexels.com/photos/ID_HERE/pexels-photo-ID_HERE.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260';
//let imgAry=[277552,2869565,6043246,3185220,1468658,8991517];
//let textAry = ["cute dog","minify javaScript","cool tone","apple fan","love U","YA~cool"];
let imgAry=[];
//法1-1(一次物件)
imgAry[0]={id:277552,title:'文字文字1'};//宣告為物件的屬性
//法2-1(分次指定物件屬性)
imgAry[1]=Object();
imgAry[1].id=2869565;
imgAry[1].title='word1';
//法3-1(push物件)
let tmpObj = new Object();//也可以寫成let tmpObj = {};

tmpObj.id=6043246;
tmpObj.title='word1';
imgAry.push(tmpObj);

tmpObj = new Object();
tmpObj.id=3185220;
tmpObj.title='word4';
imgAry.push(tmpObj);

tmpObj = new Object();
tmpObj.id=1468658;
tmpObj.title='word4';
imgAry.push(tmpObj);

tmpObj = new Object();
tmpObj.id=6043246;
tmpObj.title='word4';
imgAry.push(tmpObj);

tmpObj = new Object();
tmpObj.id=8991517;
tmpObj.title='word4';
imgAry.push(tmpObj);
console.log(imgAry);

var url = 'https://script.google.com/macros/s/AKfycbyAdQ9c8vbq4W2amts6CfrIc_bz49QOULzWICPUibuRlOfSMvxG67uYE5ZZQOY8AjmJ/exec';

$(document).ready(function(){
  
    //法1-2
    // for(let i=0;i<imgAry.length;i++){
    //     let tt= $('#t01').html();
    //     let url = imgStr.replace(/ID_HERE/g , imgAry[i]);
    //     tt=tt.replace('IMG_HERE',url);
    //     tt=tt.replace('TEXT_HERE',textAry[i]);
    //     $('body').append(tt);

    // }
    //法2-2
    // imgAry.map(function (value, index){
    //     $('body').append(t01(value,textAry[index]));

    // });
    //法3-2
    // for(let i=0;i<imgAry.length;i++){
    //     let id =imgAry[i].id;
    //     let title = imgAry[i].title;
    //     let content =t01(id,title);
    //     $('body').append(content);//用$在jquery中尋找
    // }
    getData();
});
 //法2-2
function t01(ID_HERE,TEXT_HERE){
    let html =`
    <div class="img1 position-relative wz-200 hz-200 ms-1" >
        <img class="w-100 h-100 object-fit-cover position-absolute" src="https://images.pexels.com/photos/${ID_HERE}/pexels-photo-${ID_HERE}.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="" >
        <div class="text position-absolute text-center bottom-0 w-100 fz-12 text-light bg-1">
        ${TEXT_HERE}
        </div>
    
    </div>
    
    `;
   
    return html;
}
function getData(){
    let parameter = {};
    parameter.method = 'getFakeAPI';
    parameter.uid = '110919002';
    parameter.token = 'u3TLhk4ePA3P6N';
    parameter.id = "110919002";
    $.post(url, parameter, function(data) {
      console.log("success");
      console.log(data);
      for(let i=0;i<data.data.images.length;i++){
        let id =data.data.images[i].ID;
        let title = data.data.images[i].title;
        let content =t01(id,title);
        $('body').append(content);//用$在jquery中尋找
    }
     // initPage(data);
    }).fail(function() {
      console.log("fail");
    });
}
//法1-2
// function t01(IMG_HERE,TEXT_HERE){
//     let html =`
//     <div class="img1 position-relative wz-200 hz-200 ms-1" >
//         <img class="w-100 h-100 object-fit-cover position-absolute" src="${IMG_HERE}" alt="" >
//         <div class="text position-absolute text-center bottom-0 w-100 fz-12 text-light bg-1">
//         ${TEXT_HERE}
//         </div>
    
//     </div>
    
//     `;
//     return html;
// }

 