{
    var fullRegex = /^[a-zA-Z]{4,}( ?[a-zA-Z]{4,})*$/
    var passwordRegex = /\s/
    var fullname = document.getElementById('fullname');
    var fullnamevalidator = document.getElementById('fullnameValidator');
    var password = document.getElementById('password');
    var repeatpassword = document.getElementById('repeatpassword');
    var passwordValidator = document.getElementById('passwordValidator');
    var repeatpasswordValidator = document.getElementById('repeatpasswordValidator');
    var submitInput = document.getElementById('submitInput');
    var IsCorrectPassword = false;


    fullname.addEventListener('focus', () => {
        fullname.style.border = "1px solid blue";
    })

    fullname.addEventListener('blur', () => {
        fullname.style.border = '1px solid black';
        fullnamevalidator.textContent = fullRegex.test(fullname.value) ? "" : "Pleas Enter Valid Name"
    })


    repeatpassword.addEventListener('blur', () => {
        if (repeatpassword.value == "" || password.value == "" || passwordRegex.test(repeatpassword.value) || passwordRegex.test(password.value)) {
            repeatpasswordValidator.textContent = "password and repeat password Required and shouldn't contain space";
            repeatpassword.style.backgroundColor = 'gray';
        }
        else if (repeatpassword.value != password.value) {
            repeatpasswordValidator.textContent = "password and repeat password should be the same";
            repeatpassword.style.backgroundColor = 'gray';

        } else {
            repeatpasswordValidator.textContent = ""
            repeatpassword.style.backgroundColor = 'white';
            IsCorrectPassword = true;

        }


    });


    submitInput.addEventListener('click', () => {

        event.preventDefault();

        if (fullRegex.test(fullname.value) && IsCorrectPassword)
            document.getElementById("myForm").submit();
        else {
            alert('please correct the validation error first .')
        }

    });




}


{
    // var carouselSlide = document.querySelector('.carousel-slide');
    // var carouselDivs =document.querySelectorAll('.carousel-slide div');

    // var prevBtn =document.querySelector('#prevBtn');
    // var nexBtn =document.querySelector('#nextBtn');

    // var counter = 1;

    // var size =carouselDivs[0].clientWidth;

    // carouselSlide.style.transform="translateX(" +( -size*counter) + "px)" ;

    // nexBtn.addEventListener('click',()=>{
    //     if(counter>=carouselDivs.length-1 ) return ;
    //     carouselSlide.style.transition='transform 0.4s ease-in-out'
    //     counter++;
    //     carouselSlide.style.transform="translateX(" +( -size*counter) + "px)"



    // })


    // prevBtn.addEventListener('click',()=>{
    //     if(counter<= 0) return ;
    //     carouselSlide.style.transition='transform 0.4s ease-in-out'
    //     counter--;
    //     carouselSlide.style.transform="translateX(" +( -size*counter) + "px)"

    // })

    // carouselSlide.addEventListener('transitionend',()=>{
    //   if(carouselDivs[counter].id==="lastClone"){
    //       carouselSlide.style.transition='none';
    //       counter =carouselDivs.length-2
    //       carouselSlide.style.transform="translateX(" +( -size*counter) + "px)"


    //   }

    //   if(carouselDivs[counter].id==="firstClone"){
    //     carouselSlide.style.transition='none';
    //     counter =carouselDivs.length- counter;
    //     carouselSlide.style.transform="translateX(" +( -size*counter) + "px)"


    // }

    // })


}

{

    var images = [
        "http://lorempixel.com/400/200/animals",
        "http://lorempixel.com/400/200/sports",
        "http://lorempixel.com/400/200/food",
        "http://lorempixel.com/400/200/people"
    ];
    var time = 3000;
    var intervalId = null;
    var currentImageIdx = 0;
    document.slide.src = images[currentImageIdx];

    function NextImage() {
        currentImageIdx = currentImageIdx >= images.length-1 ? 0 :currentImageIdx ;
        document.slide.src = images[currentImageIdx++];
    }
    function PrevImage() {
        currentImageIdx = currentImageIdx <= 0 ?images.length-1  : currentImageIdx;
        document.slide.src = images[currentImageIdx--];
    }


    document.querySelector('.carousel-slide').addEventListener('mouseover', play);
    document.getElementById('stopBtn').addEventListener('click', stop);
    document.getElementById('prevBtn').addEventListener('click', PrevImage);
    document.getElementById('playBtn').addEventListener('click', play);
    document.getElementById('nextBtn').addEventListener('click', NextImage);

    function stop() {
        if (intervalId) {
            clearInterval(intervalId);
            intervalId = null;
        }
    }
    function play() {
        if (!intervalId) {
            intervalId = setInterval(NextImage, time);
        }
        console.log(intervalId)
    }

}



{
    var galleryImges= document.querySelectorAll('.gallery img')
    
     for (const img of galleryImges) {
         img.addEventListener('mouseover',()=>console.log("ok"))
     }
    
}