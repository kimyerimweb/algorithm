function gcd(a,b) {
    if(a % b === 0) return b
    else return gcd(b , a % b)
}

let lcm = (a, b) =>{
	let lcm = 1;
   
    while(true){
      if((lcm % a == 0) && (lcm % b == 0)){
        break;
      }
      lcm++;
    }
  	return lcm
}