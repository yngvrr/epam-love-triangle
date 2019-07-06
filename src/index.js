/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  // your implementation
// foreach($a as $k => $b){ $s[$b]= $a[$b-1];  }
//>>> foreach($s as $k => $v){ $p = $s[$v]; $m = $s[$p]; $h[]=[$k =>$v, $v=>$p, $p=>$m]; }
var love = [];
var lovetriangle = 0;
preferences.forEach(function (spichoneesloves){
  //console.log(preferences);
    love[spichoneesloves] = preferences[spichoneesloves-1];
  //  console.log(love);
   });

love.forEach(function (spichoneslove, spichone){
  secondsspichoneslove = love[spichoneslove]
  thirdspichoneslove = love[secondsspichoneslove]
if(thirdspichoneslove==spichone && spichoneslove !=spichone){
lovetriangle++;
//console.log(lovetriangle);
}});

  


  var ammount = lovetriangle/3;

  return ammount;
};
