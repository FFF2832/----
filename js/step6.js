

var url = 'https://script.google.com/macros/s/AKfycbyAdQ9c8vbq4W2amts6CfrIc_bz49QOULzWICPUibuRlOfSMvxG67uYE5ZZQOY8AjmJ/exec';
let url2 = document.location.toString();
console.log(url2);
let ary =url2.split('?');
console.log(ary);
let sid=ary[1];
let idAry=[110919030,110919002]
$(document).ready(function(){

    getData();
    console.log("123");
});

function getData(){
    let parameter = {};
    parameter.method = 'getFakeAPI';
    parameter.uid = '110919030';
    parameter.token = 'u3TLhk4ePA3P6N';
    parameter.id = sid;
    
  
    $.post(url, parameter, function(data) {
        console.log("success");
        console.log(data);
        console.log(t01);
        for(let i=0;i<data.data.images.length;i++){
          let id =data.data.images[i].imgurl;
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
function t01(IMG_HERE,TEXT_HERE){
    let html =`
    <div class="img1 position-relative wz-200 hz-200 ms-1" >
        <img class="w-100 h-100 object-fit-cover position-absolute" src="https://images.pexels.com/photos/${IMG_HERE}/pexels-photo-${IMG_HERE}.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="" >
        <div class="text position-absolute text-center bottom-0 w-100 fz-12 text-light bg-1">
        ${TEXT_HERE}
        </div>
    
    </div>
    
    `;
    return html;
}

 //法2-2
// function t01(ID_HERE,TEXT_HERE){
//     let html =`
//     <div class="img1 position-relative wz-200 hz-200 ms-1" >
//         <img class="w-100 h-100 object-fit-cover position-absolute" src="https://images.pexels.com/photos/${ID_HERE}/pexels-photo-${ID_HERE}.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="" >
//         <div class="text position-absolute text-center bottom-0 w-100 fz-12 text-light bg-1">
//         ${TEXT_HERE}
//         </div>
    
//     </div>
    
//     `;
   
//     return html;
// }