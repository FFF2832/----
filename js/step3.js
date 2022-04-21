let img1='https://images.pexels.com/photos/277552/pexels-photo-277552.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260';
let img2='https://images.pexels.com/photos/2869565/pexels-photo-2869565.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260';
let text1='文字文字1';
let text2='文字文字2';
const imgStr='https://images.pexels.com/photos/ID_HERE/pexels-photo-ID_HERE.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260';
let imgAry=[277552,2869565,6043246,3185220,1468658,8991517];
let textAry = ["cute dog","minify javaScript","cool tone","apple fan","love U","YA~cool"];
$(document).ready(function(){
  
    //法1
    // for(let i=0;i<imgAry.length;i++){
    //     let tt= $('#t01').html();
    //     let url = imgStr.replace(/ID_HERE/g , imgAry[i]);
    //     tt=tt.replace('IMG_HERE',url);
    //     tt=tt.replace('TEXT_HERE',textAry[i]);
    //     $('body').append(tt);

    // }
    //法2
    imgAry.map(function (value, index){
        $('body').append(t01(value,textAry[index]));

    });
});
 //法2
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

//法1
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

 