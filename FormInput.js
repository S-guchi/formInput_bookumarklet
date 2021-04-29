d=new Date;
try{
  //iframe
  e = document.getElementById("gsft_main").contentWindow.document;
}catch(err){
  e = document;
}finally{
  //今日の日付
  t=d.getFullYear() + '/' + (d.getMonth() + 1) + '/' + d.getDate();
  //以下、DOM操作
}
