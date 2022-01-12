// console.log("script running");

// const sidebar = document.querySelector('.sidebar');
// const ham = document.querySelector('.ham');
// const cross = document.querySelector('.cross');
// ham.addEventListener("click", ()=>{
//     sidebar.classList.remove('sidebargo');
//     ham.style.display = 'none';
// });

// cross.addEventListener("click", ()=>{
//     sidebar.classList.add('sidebargo');
//     setTimeout(()=>{
//     ham.style.display = 'block'},200);
// });








































document.querySelector(".ham").addEventListener("click", () => {
    document.querySelector('.sidebar').classList.toggle('sidebargo');

    document.querySelector(".ham").style.visibility = 'hidden';
    setTimeout(() => {
        document.querySelector(".cross").style.display = 'block';
    }, 200);
});

document.querySelector(".cross").addEventListener("click", () => {
    document.querySelector('.sidebar').classList.toggle('sidebargo');

    setTimeout(() => {
        document.querySelector('.ham').style.visibility = 'visible';
    }, 200);
    document.querySelector('.cross').style.display = 'none';
});