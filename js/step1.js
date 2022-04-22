

var url = 'https://script.google.com/macros/s/AKfycbyAdQ9c8vbq4W2amts6CfrIc_bz49QOULzWICPUibuRlOfSMvxG67uYE5ZZQOY8AjmJ/exec';
let url2 = document.location.toString();
// console.log(url2);
// let ary =url2.split('?');
// console.log(ary);
// console.log(sid);
// let sid;
let idAry=[110919030,110919002,110813032,110713026,110713052,110719028,110713054,110717015,110819011,110819012,110819018,110819019,110819020,110819022,110819033,110919004];
$(document).ready(function(){

    getData();
    // console.log(id);
});

function getData(){
for(let i=0;i< idAry.length;i++){
    let parameter = {};
    parameter.method = 'getFakeAPI';
    parameter.uid = '110919030';
    parameter.token = 'u3TLhk4ePA3P6N';
   
    let sid= idAry[i];
    parameter.id = sid;
   
    // for(let j=0;j< idAry.length;j++){
        $.post(url, parameter, function(data) {
            console.log("success");
            console.log(data);
            console.log(sid);
            let id =data.data.imgurl;
          
            // let id =data.data.imgurl;
            let NAME_HERE =idAry[i];
            let photoNum =data.data.photoNum;
            let viewNum =data.data.viewNum;
            
            // let info=data.info;
          
            let content2 =t01(id,NAME_HERE,photoNum,viewNum);
            $('#section').append(content2);
            
            
          }).fail(function() {
            console.log("fail");
          });
//   }
}
   
   
}

function t01(IMG_HERE,NAME_HERE,photoNum,viewNum){
    let html =`
    
        <div class="col-3   mb-3" >
            <a href="step5.html?${NAME_HERE}" class="albumbox"> 
                <div class="box1 position-relative hz-200 wz-200  pt-3 mt-3  mr-2 ">
                
                     <div class="box3 position-relative hz-200 mt-3    ">
                        <img class="w-100 h-100 object-fit-cover position-absolute" src="https://images.pexels.com/photos/${IMG_HERE}/pexels-photo-${IMG_HERE}.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="" >
                     </div>
         
                
                    <div class="box2 img1  position-absolute  bottom-0 text-light  mt-5  bg-1  " >

                        <div class="text1  position-relative text-center bottom-0 w-100 fz-12 text-light d-flex justify-content-center">
                            <span>${NAME_HERE}</span>
                        </div>
                        <div class="textbox2 position-relative text-center bottom-0   top-4 fz-10 text-light d-flex justify-content-center ml-100">
                                <div class="text  text-center bottom-0   text-light  ">
                                    <span>${photoNum}張相片</span>
                                </div>
                                <div class=" dot ">
                                    <span>·</span>
                                </div>
                                <div class="text position-relative text-center bottom-0 mb-100  top-4  text-light ">
                                    <span>${viewNum}次檢視</span>
                                </div>
                                
                        </div>
                        <div class="icon3 d-flex justify-content-flexend ml-10">
                                    <i class="fa fa-share text-white fz-20  position-relative mx-auto" aria-hidden="true"></i>
                        </div>
                    </div>
      
                 </div>
               
 
            
            </a>

         </div> 
        
    
  
    `;
    return html;
}