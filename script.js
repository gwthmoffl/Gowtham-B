const loader=document.getElementById("loader");
window.addEventListener("load",()=>setTimeout(()=>loader.classList.add("hide"),1900));

const cursor=document.querySelector(".cursor");
window.addEventListener("pointermove",e=>{cursor.style.left=e.clientX+"px";cursor.style.top=e.clientY+"px"});
document.querySelectorAll("a,button,.project-feature,.portrait-shell").forEach(el=>{
  el.addEventListener("mouseenter",()=>{cursor.style.width="42px";cursor.style.height="42px"});
  el.addEventListener("mouseleave",()=>{cursor.style.width="18px";cursor.style.height="18px"});
});

const obs=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add("show")}),{threshold:.12});
document.querySelectorAll(".reveal").forEach(e=>obs.observe(e));

document.querySelectorAll("[data-tilt]").forEach(card=>{
  card.addEventListener("pointermove",e=>{
    const r=card.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;
    card.style.transform=`perspective(1100px) rotateX(${y*-2}deg) rotateY(${x*2}deg)`;
  });
  card.addEventListener("pointerleave",()=>card.style.transform="");
});

const theme=document.getElementById("theme");
if(localStorage.getItem("gb-theme")==="light")document.body.classList.add("light");
theme.textContent=document.body.classList.contains("light")?"☼":"◐";
theme.onclick=()=>{document.body.classList.toggle("light");const l=document.body.classList.contains("light");localStorage.setItem("gb-theme",l?"light":"dark");theme.textContent=l?"☼":"◐"};

document.querySelectorAll('a[href^="#"]').forEach(a=>a.addEventListener("click",e=>{
  const t=document.querySelector(a.getAttribute("href"));if(t){e.preventDefault();t.scrollIntoView({behavior:"smooth"})}
}));
