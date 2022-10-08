// string method



// slice
console.log("Slice");
console.log("uzbekistan".slice(2 , 5));

let Slice = (x , y , z = x.length) => {
  let n = "";
  for(let i = 0; i < x.length; i++){
     if( y <= i && z > i ){
        n = n + x[i];
     }
  }
  console.log(n);
}
Slice("uzbekistan" , 2 , 5);

// startsWidth
console.log("Slice");
console.log("uzbekistan".startsWith("uz"));

let startsWidth = function(a , b){
   for (let i = 0; i < a.length; i++){
      for (let j = 0; j < b.length; j++) {
         if(a[0] == b[0] && b[j] == a[i]){
            return true;
         }
         else{
            return false;
         }
      }
   }
}
console.log(startsWidth("jasurbek","jasur"));

// endsWidth
console.log("Slice");
console.log("jasurbek".endsWith("bek"));

function endsWidth(d , e){
    for(let i = d.length-1 ; i >= 0; i--){
        for(let j = e.length-1; j >= 0 ; j--){
            if(d[d.length-1] == e[e.length-1] && d[i] == e[j] ){
                return true;
            }
            else{
                return false;
            }
        }
    }
}
console.log(endsWidth("jasurbek" , "bek"));

//replaceAll
console.log("ReplaceAll");
let replaceAll = (f , g , h) => {
   let k = "";
   for(let i = 0; i < f.length; i++){
     if(f[i] == g){
         k = k + h;
     }
     else{
        k = k + f[i];
     }
   }
   console.log(k);
}
replaceAll("jasurbek" ,  "a" , "1")

//split
