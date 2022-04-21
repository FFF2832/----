let img1='https://images.pexels.com/photos/277552/pexels-photo-277552.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260';
let img2='https://images.pexels.com/photos/2869565/pexels-photo-2869565.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260';
let text1='文字文字1';
let text2='文字文字2';
$(document).ready(function(){
    let aa= t01(img1,text1);
    
    $('body').append(aa);

    $('body').append(t01(img2,text2));
});

function t01(IMG_HERE,TEXT_HERE){
    let html =`
    <div class="img1 position-relative wz-200 hz-200 ms-1" >
        <img class="w-100 h-100 object-fit-cover position-absolute" src="${IMG_HERE}" alt="" >
        <div class="text position-absolute text-center bottom-0 w-100 fz-12 text-light bg-1">
        ${TEXT_HERE}
        </div>
    
    </div>
    `;
    return html;
}