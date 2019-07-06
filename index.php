forech($s as $k => $v)
{ 
    $p = $s[$v]; 
    $m = $s[$p];
    $h[]=[$k =>$v, $v=>$p, $p=>$m]; 
}