(function(root,factory){if(typeof module==='object'&&module.exports)module.exports=factory();else root.FlowerExperience=factory();})(typeof globalThis!=='undefined'?globalThis:this,function(){
 const styles={bunt:{label:'Bunt & lebensfroh',category:'farbenfroh',color:'Bunt, warme Akzente'},rose:{label:'Rosé & romantisch',category:'romantisch',color:'Rosé, sanfte Töne'},natural:{label:'Weiß & natürlich',category:'natuerlich',color:'Weiß, Creme & Grün'}};
 function recommend(products,mood){const category=styles[mood]?.category;const matching=products.filter(p=>p.category===category&&p.id!=='wunschstrauss');const custom=products.find(p=>p.id==='wunschstrauss');return [...matching,...(custom?[custom]:[])].slice(0,3);}
 function sanitizeIntent(value={}){const options=['Geburtstag','Danke','Liebe','Einfach so','Gute Besserung','Jubiläum'];const n=Number(value.budget);return{occasion:options.includes(value.occasion)?value.occasion:'Einfach so',mood:Object.hasOwn(styles,value.mood)?value.mood:'bunt',budget:Number.isFinite(n)&&n>=1&&n<=10000?Math.round(n*100)/100:45,date:/^\d{4}-\d{2}-\d{2}$/.test(value.date||'')?value.date:''};}
 function dateAfter(date,days){const d=new Date(date+'T12:00:00');d.setDate(d.getDate()+days);return[d.getFullYear(),String(d.getMonth()+1).padStart(2,'0'),String(d.getDate()).padStart(2,'0')].join('-');}
 return{styles,recommend,sanitizeIntent,dateAfter};
});
