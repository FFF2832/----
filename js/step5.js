

var url = 'https://script.google.com/macros/s/AKfycbyAdQ9c8vbq4W2amts6CfrIc_bz49QOULzWICPUibuRlOfSMvxG67uYE5ZZQOY8AjmJ/exec';
let url2 = document.location.toString();
console.log(url2);
let ary =url2.split('?');
console.log(ary);
let sid=ary[1];
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
    
    // $.post(url, parameter, function(d){
    //     console.log(d);
    // }).fail(function(dd){
    //     console.log(dd);
    // });
    $.post(url, parameter, function(data) {
        console.log("success");
        console.log(data);
        let id =data.data.images[0].imgurl;
        let title = data.data.images[0].title;
        let authorImg= data.data.authorImg;
        let info=data.data.info;
        let photoNum=data.data.photoNum;
        let content2 =t02(id,title,authorImg,info,photoNum);
        $('#header').append(content2);
        
        
      }).fail(function() {
        console.log("fail");
      });
    $.post(url, parameter, function(data) {
        console.log("success");
        console.log(data);
        
        
        //console.log(t01);
        for(let i=0;i<data.data.images.length;i++){
          let id =data.data.images[i].imgurl;
          let title = data.data.images[i].title;
          let content =t01(id,title);
          $('#section ').append(content);//用$在jquery中尋找
         
      }
       // initPage(data);
      }).fail(function() {
        console.log("fail");
      });
      
    
}
//法1-2
function t01(IMG_HERE,TEXT_HERE){
    let html =`
    
            <div class="col-3  " >
                <div class="box img1 position-relative wz-300 hz-200 ms-1 mt-3   " >
                    <img class="w-100 h-100 object-fit-cover position-absolute" src="https://images.pexels.com/photos/${IMG_HERE}/pexels-photo-${IMG_HERE}.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="" >
                    <div class="text position-absolute text-center bottom-0 w-100 fz-12 text-light bg-1">
                    ${TEXT_HERE}
                    </div>
                </div>
 
            </div> 
           

    </div> 
        
    
  
    `;
    return html;
}
function t02(IMG_HERE,TEXT_HERE,authorImg,info,photoNum){
    let html =`
  
    
    
                
                
                    
                    <div class="img2 position-relative   mt-3  col-12    mx-auto " >
                      <div class="    mt-3  col-12 ml-5  bg-1 mx-auto d-flex justify-content-center min-hz-400 hz-550 wz-1100 position-absolute " >
                        <img class="w-100 h-100 object-fit-cover    " src="https://images.pexels.com/photos/${IMG_HERE}/pexels-photo-${IMG_HERE}.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="" >
                        </div>  
                            <div class="text  position-relative text-center   mb-100   fz-50 text-light mx-auto ">
                            ${info}
                            </div>
                        
                            <div class="text position-relative text-center bottom-0 mb-100  top-4 fz-14 text-light mx-auto">
                            ${photoNum}
                            </div>
                            <div class="text position-relative text-center bottom-0 mb-100  w-50 fz-30 text-light mx-auto">
                            <img class=" img3 w-10  h-10 object-fit-cover " src="${authorImg}" alt="" >
                            </div>
                            <div class="text position-relative text-center bottom-0 mb-100  w-50 fz-30 text-light mx-auto">
                                 <i class="fa fa-share text-white fz-28  position-relative mx-auto" aria-hidden="true"></i>
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
{/* <section class="min-hz-500">
<div class="container-fluid    "> 
    <div class="row  d-flex   " >
        <div class="col-4 wz-200  " >
            <div class="img1 position-relative wz-200 hz-200 ms-2 mt-3   justify-content-between " >
            <img class="w-100 h-100 object-fit-cover position-absolute" src="https://images.pexels.com/photos/${IMG_HERE}/pexels-photo-${IMG_HERE}.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="" >
             <div class="text position-absolute text-center bottom-0 w-100 fz-12 text-light bg-1">
                ${TEXT_HERE}
             </div>
            </div>

        </div> 

    </div>
</div> 
</section> */}