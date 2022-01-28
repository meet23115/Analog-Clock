setInterval(() => {
    let date = new Date();

    let htime = date.getHours();
    let mtime = date.getMinutes();    
    let stime = date.getSeconds();

    let hrotation = ((30*htime) + (0.5*mtime) + (0.00833*stime));
    let mrotation = ((6*mtime) + (0.1*stime)); 
    let srotation = (6*stime);

    hour.style.transform = `rotate(${hrotation}deg)`;
    minute.style.transform = `rotate(${mrotation}deg)`;
    second.style.transform = `rotate(${srotation}deg)`;
}, 1000);