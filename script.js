(function(){

/* PARTICLES */
var cvs=document.getElementById('particles'),ctx=cvs.getContext('2d');
var W,H,pts=[];
function resize(){
  W=cvs.width=innerWidth;
  H=cvs.height=innerHeight;
  pts=[];
  for(var i=0;i<60;i++){
    pts.push({
      x:Math.random()*W,
      y:Math.random()*H,
      vx:(Math.random()-.5)*.3,
      vy:(Math.random()-.5)*.3,
      r:Math.random()*1.5+.5
    });
  }
}
resize();
window.addEventListener('resize',resize);

function draw(){
  ctx.clearRect(0,0,W,H);
  var col=document.documentElement.dataset.theme==='light'?'140,100,10':'232,197,71';
  pts.forEach(function(p,i){
    p.x+=p.vx;
    p.y+=p.vy;
    if(p.x<0||p.x>W)p.vx*=-1;
    if(p.y<0||p.y>H)p.vy*=-1;
    ctx.beginPath();
    ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
    ctx.fillStyle='rgba('+col+',.4)';
    ctx.fill();
    for(var j=i+1;j<pts.length;j++){
      var dx=p.x-pts[j].x,dy=p.y-pts[j].y,d=Math.sqrt(dx*dx+dy*dy);
      if(d<120){
        ctx.beginPath();
        ctx.moveTo(p.x,p.y);
        ctx.lineTo(pts[j].x,pts[j].y);
        ctx.strokeStyle='rgba('+col+','+(0.15*(1-d/120))+')';
        ctx.lineWidth=.5;
        ctx.stroke();
      }
    }
  });
  requestAnimationFrame(draw);
}
draw();

/* CODE RAIN */
var rain=document.getElementById('codeRain');
if(rain){
  var chars='{}[]()<>;:=>/\\|&!@#$%^*+-~01';
  for(var i=0;i<30;i++){
    var s=document.createElement('span');
    s.textContent=chars[Math.floor(Math.random()*chars.length)];
    s.style.left=Math.random()*100+'%';
    s.style.animationDuration=(4+Math.random()*8)+'s';
    s.style.animationDelay=Math.random()*10+'s';
    s.style.fontSize=(8+Math.random()*6)+'px';
    rain.appendChild(s);
  }
}

/* THEME */
var tog=document.getElementById('themeTog');
var html=document.documentElement;
var saved=localStorage.getItem('t');
if(saved){
  html.dataset.theme=saved;
  if(tog)tog.textContent=saved==='light'?'\u263E':'\u2600';
}
if(tog){
  tog.addEventListener('click',function(){
    var n=html.dataset.theme==='dark'?'light':'dark';
    html.dataset.theme=n;
    localStorage.setItem('t',n);
    tog.textContent=n==='light'?'\u263E':'\u2600';
  });
}

/* HAMBURGER */
var ham=document.getElementById('ham');
var nl=document.getElementById('navLinks');
if(ham && nl){
  ham.addEventListener('click',function(){
    var o=nl.classList.toggle('open');
    ham.classList.toggle('on');
    ham.setAttribute('aria-expanded',o);
  });
  var navAnchors=nl.querySelectorAll('a');
  for(var i=0;i<navAnchors.length;i++){
    navAnchors[i].addEventListener('click',function(){
      nl.classList.remove('open');
      ham.classList.remove('on');
      ham.setAttribute('aria-expanded','false');
    });
  }
}

/* SCROLL REVEAL */
var rvs=document.querySelectorAll('.rv');
if('IntersectionObserver' in window){
  var obs=new IntersectionObserver(function(es){
    es.forEach(function(e){
      if(e.isIntersecting){
        e.target.classList.add('vis');
        obs.unobserve(e.target);
      }
    });
  },{threshold:.1,rootMargin:'0px 0px -30px 0px'});
  rvs.forEach(function(el){obs.observe(el)});
}else{
  rvs.forEach(function(el){el.classList.add('vis')});
}

/* ACTIVE NAV */
var secs=document.querySelectorAll('section[id]');
var navAs=document.querySelectorAll('.nav__links a');
window.addEventListener('scroll',function(){
  var cur='';
  secs.forEach(function(s){
    if(scrollY>=s.offsetTop-120)cur=s.id;
  });
  navAs.forEach(function(a){
    a.classList.toggle('active',a.getAttribute('href')==='#'+cur);
  });
},{passive:true});

/* FORM */
var form=document.getElementById('cForm');
var toast=document.getElementById('toast');
if(form){
  var flds={
    nm:{el:document.getElementById('nm'),err:document.getElementById('nmE'),v:function(v){return v.trim().length>=2?'':'At least 2 characters.'}},
    em:{el:document.getElementById('em'),err:document.getElementById('emE'),v:function(v){return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)?'':'Valid email required.'}},
    msg:{el:document.getElementById('msg'),err:document.getElementById('msgE'),v:function(v){return v.trim().length>=10?'':'At least 10 characters.'}}
  };
  function vf(f){
    var m=f.v(f.el.value);
    f.err.textContent=m;
    f.el.classList.toggle('err',!!m);
    return !m;
  }
  var keys=Object.keys(flds);
  for(var i=0;i<keys.length;i++){
    (function(f){
      if(f.el){
        f.el.addEventListener('blur',function(){vf(f)});
        f.el.addEventListener('input',function(){if(f.el.classList.contains('err'))vf(f)});
      }
    })(flds[keys[i]]);
  }
  form.addEventListener('submit',function(e){
    e.preventDefault();
    var ok=true;
    for(var i=0;i<keys.length;i++){
      if(!vf(flds[keys[i]]))ok=false;
    }
    if(!ok)return;
    if(toast){
      toast.classList.add('show');
      setTimeout(function(){toast.classList.remove('show')},3500);
    }
    form.reset();
    for(var i=0;i<keys.length;i++){
      flds[keys[i]].el.classList.remove('err');
      flds[keys[i]].err.textContent='';
    }
  });
}

})();
