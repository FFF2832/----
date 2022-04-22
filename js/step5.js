

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
    
    
    $.post(url, parameter, function(data) {
        console.log("success");
        console.log(data);
        let id =data.data.images[0].imgurl;
        let title = data.data.images[0].title;
        let authorImg= data.data.authorImg;
        let info=data.data.info;
        let name=data.data.name;
        let photoNum=data.data.photoNum;
        let viewNum=data.data.viewNum;
        let author=data.data.author;
        let content2 =t02(id,title,authorImg,info,photoNum,name,viewNum,author);
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
          let name=data.data.name;
          let author=data.data.author;
          let likeNum=data.data.images[i].likeNum;
          let commentNum=data.data.images[i].commentNum;
          let content =t01(id,title,name,author,likeNum,commentNum);
          $('#section ').append(content);//用$在jquery中尋找
         
      }
       // initPage(data);
      }).fail(function() {
        console.log("fail");
      });
      
    
}
//法1-2
function t01(IMG_HERE,TEXT_HERE,name,author,likeNum,commentNum){
    let html =`
   
    <div class="col-3  " >
        <a href="#" class="albumbox"> 
            <div class="box1 position-relative hz-200 wz-300  mb-4   ">
                <div class="box3 position-relative hz-200 mt-3    ">
                    <img class="w-100 h-100 object-fit-cover position-absolute" src="https://images.pexels.com/photos/${IMG_HERE}/pexels-photo-${IMG_HERE}.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="" >
                </div>
            
                <div class="box2 img1  position-absolute  bottom-0 text-light  mt-5  bg-1  " >

                    <div class="text1  position-relative text-center bottom-0 w-100 fz-12 text-light d-flex justify-content-flexstart ms-1">
                        <span>${TEXT_HERE}</span>
                    </div>
                    <div class="d-flex">
                        <div class="text position-relative text-center bottom-0 mb-100  top-4 fz-10 text-secondary ms-1 ">
                                    <span>相片擁有者:${author}</span>
                        </div>
                        <div class="iconbox   d-flex  ">
                            <div class="icon4 position-relative  bottom-0 mb-100   top-4 fz-10 text-ligh  justify-content-flexend ">
                                 <i class="fa fa-star-o text-white fz-10  position-relative  " aria-hidden="true"></i>
                                 <span>${likeNum}</span>
                            </div>
                            <div class="icon4 position-relative  bottom-0 mb-100   top-4 fz-10 text-ligh  justify-content-flexend ">
                                 <i class="fa fa-comment-o text-white fz-14  position-relative  " aria-hidden="true"></i>
                                 <span>${commentNum}</span>
                            </div>
                        </div>
                    </div>
                </div>
  
             </div>
           

        
        </a>
    </div> 
           

    
        
    
  
    `;
    return html;
}
function t02(IMG_HERE,TEXT_HERE,authorImg,info,photoNum,name,viewNum,author){
    let html =`
  
    
    
                
                
    <div class="col-12  " >
         <a href="index.html" class="back" > 
            <div class="textbox3 d-flex  justify-content-start align-items-center" >
                
                <i class="fa fa-arrow-left text-dark fz-20 " aria-hidden="true"></i>
             
                
                <span class="text-dark fz-20">返回相簿清單</span>
            </div> 
        </a>      
            
                 <div class="img2 position-relative         mx-auto  " >
                     <div class=" headerbox col-12 ml-3  bg-1  d-flex justify-content-center min-hz-400 hz-550 wz-1100 position-absolute" >
                        <div class="  img4     col-12 ml-5  bg-1 d-flex justify-content-center min-hz-400 hz-550 wz-1100 position-absolute " ></div> 
                        <img class="w-100 h-100 object-fit-cover   " src="https://images.pexels.com/photos/${IMG_HERE}/pexels-photo-${IMG_HERE}.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="" >
                    </div> 
                    <div class="textbox1  position-relative  mx-auto ">
                            
                            <div class="text  position-relative text-center   mb-100   fz-50 text-light mx-auto ">
                            <br><br>
                                ${name} 
                            </div> 
                             
                            <div class="text  position-relative text-center   mb-100   fz-24 text-light mx-auto ">
                                ${info}
                            </div>
                            <br> 
                            <div class="textbox2 position-relative text-center bottom-0 mb-100  top-4 fz-14 text-light  d-flex ml-100">
                                <div class="text  text-center bottom-0  fz-14 text-light  ">
                                    <span>${photoNum}張相片</span>
                                </div>
                                <div class=" dot ">
                                    <span>·</span>
                                </div>
                                <div class="text position-relative text-center bottom-0 mb-100  top-4 fz-14 text-light ">
                                    <span>${viewNum}次檢視</span>
                                </div>
                            </div>
                            <div class="text position-relative text-center bottom-0 mb-100  w-50 fz-30 text-light mx-auto">
                                 <i class="fa fa-share text-white fz-20  position-relative mx-auto" aria-hidden="true"></i>
                            </div>
                            <br> <br> 
                            <div class="text position-relative text-center bottom-0 mb-100  w-50 fz-30 text-light mx-auto ">
                                <img class=" img3 w-10  h-10 object-fit-cover mb-1 " src="${authorImg}" alt="" >
                            </div>
                            <div class="text position-relative text-center bottom-0 mb-100  top-4 fz-14 text-light ">
                                    <span>相片擁有者:${author}</span>
                             </div>
                            
                    </div>    
                    <br>     
                </div>
     
               
    </div> 
    
    `;
    return html;
}

