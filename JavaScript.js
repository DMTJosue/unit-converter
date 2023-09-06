
//Affichage du box conversion suite au click
function compte(){
    let div = document.getElementById('converter_b');
    if (div.style.display==="none")
    {
        div.style.display='block';
    }
    else{
        div.style.display='none';
    }
}

// récupération des valeurs puis traitement de la conversion

const input = document.getElementById('input');
const result = document.getElementById('result');
const inputType = document.getElementById('inputType');
const resultType = document.getElementById('resultType');

const conversions = {
  'm': {
    'm':1,
    'km': 0.001,
    'hm': 0.01,
    'dam': 0.1,
    'dm': 10,
    'cm': 100,
    'mm': 1000,
    'mille' : 0.000621,
    'ft' : 3.28084,
    'yd' : 1.093613
  },
  'km': {
    'km':1,
    'hm': 10,
    'dam': 100,
    'm': 1000,
    'dm': 10000,
    'cm': 100000,
    'mm': 1000000,
    'mille' : 0.621371,
    'ft' : 3280.8399,
    'yd' : 1093.6133
  },
  'hm': {
    'hm':1,
    'km': 0.1,
    'dam': 100,
    'm': 1000,
    'dm': 10000,
    'cm': 100000,
    'mm': 1000000
    
    
  },
  'dam': {
    'dam':1,
    'km': 0.01,
    'hm': 0.1,
    'm': 10,
    'dm': 100,
    'cm': 1000,
    'mm': 10000
  
  },
  'dm': {
    'dm':1,
    'm': 0.1,
    'dam':0.01,
    'hm':0.001,
    'km': 0.0001,
    'cm':10,
    'mm':100
  },
  'cm': {
    'cm':1,
    'dm':0.1,
    'm': 0.01,
    'dam':0.001,
    'hm':0.0001,
    'km': 0.00001,
    'mm':10
  },
  'mm': {
    'mm':1,
    'cm':0.1,
    'dm':0.01,
    'm': 0.001,
    'dam':0.0001,
    'hm':0.00001,
    'km': 0.000001

  },
  't': {
    't':1,
    'q': 10,
    'q.': 100,
    'kg': 1000,
    'hg': 10000,
    'dag': 100000,
    'g': 1000000,
    'dg': 10000000,
    'cg' : 100000000,
    'mg' : 1000000000,
    'µg' : 1000000000000,
    'carat': 5000000
  },
  'q': {
    'q':1,
    't': 0.1,
    'q.': 10,
    'kg': 100,
    'hg': 1000,
    'dag': 10000,
    'g': 100000,
    'dg': 1000000,
    'cg' : 10000000,
    'mg' : 100000000,
    'µg' : 100000000000,
    'carat': 500000,
    
  },
  'q.': {
    'q.':1,
    'q': 0.1,
    't':0.01,
    'kg': 10,
    'hg': 100,
    'dag': 1000,
    'g': 10000,
    'dg': 100000,
    'cg' : 1000000,
    'mg' : 10000000,
    'µg' : 10000000000,
    'carat': 50000
    
  },
  'kg': {
    'kg':1,
    'q.': 0.1,
    'q': 0.01,
    't':0.001,
    'hg': 10,
    'dag': 100,
    'g': 1000,
    'dg': 10000,
    'cg' : 100000,
    'mg' : 1000000,
    'µg' : 1000000000,
    'carat': 5000
    
  },
  'hg': {
    'hg':1,
    'kg': 0.1,
    'q.': 0.01,
    'q':0.001,
    't':0.0001,
    'dag': 10,
    'g': 100,
    'dg': 1000,
    'cg' : 10000,
    'mg' : 100000,
    'µg' : 100000000,
    'carat': 500
    
  },
  'dag': {
    'dag':1,
    'hg': 0.1,
    'Kg': 0.01,
    'q.':0.001,
    'q':0.0001,
    't':0.00001,
    'g': 10,
    'dg': 100,
    'cg' : 1000,
    'mg' : 10000,
    'µg' : 10000000,
    'carat': 50
    
  },
  'g': {
    'g':1,
    'dag': 0.1,
    'hg': 0.01,
    'kg':0.001,
    'q.':0.0001,
    'q':0.00001,
    't':0.000001,
    'dg': 10,
    'cg' : 100,
    'mg' : 1000,
    'µg' : 1000000,
    'carat': 5
    
  },
  'dg': {
    'dg':1,
    'g': 0.1,
    'dag': 0.01,
    'hg':0.001,
    'kg':0.0001,
    'q':0.00001,
    'q.':0.000001,
    't': 0.0000001,
    'cg' : 10,
    'mg' : 100,
    'µg' : 100000,
    'carat': 0.5
    
  },
  'cg': {
    'cg':1,
    'dg': 0.1,
    'g': 0.01,
    'dag':0.001,
    'hg':0.0001,
    'kg':0.00001,
    'q.':0.000001,
    'q': 0.0000001,
    't': 0.00000001,
    'mg' : 10,
    'µg' : 10000,
    'carat': 0.05
    
  },
  'mg': {
    'mg':1,
    'cg': 0.1,
    'dg': 0.01,
    'g':0.001,
    'dag':0.0001,
    'hg':0.00001,
    'kg':0.000001,
    'q.': 0.0000001,
    'q': 0.00000001,
    't': 0.000000001,
    'µg' : 1000,
    'carat': 0.005
    
  },
  'µg': {
    'µg':1,
    'mg': 0.001,
    'cg': 0.0001,
    'dg':0.00001,
    'g':0.000001,
    'dag':0.0000001,
    'hg':0.00000001,
    'kg': 0.000000001,
    'q.': 0.0000000001,
    'q': 0.00000000001,
    't': 0.000000000001,
    'carat': 0.000005
    
  },
  'carat': {
    'carat':1,
    'mg': 200,
    'cg': 20,
    'dg':2,
    'g':0.2,
    'dag':0.02,
    'hg':0.002,
    'kg': 0.0002,
    'q.': 0.00002,
    'q': 0.000002,
    't': 0.0000002,
    
  },
  'm3': {
    'm3': 1,
    'dm3': 0.2,
    'cm3': 0.02,
    'mm3': 0.000002,
    'hl': 200,
    'dal': 2000,
    'l': 20000,
    'dl': 200000,
    'cl': 2000000,
    'ml': 20000000,
    'inch': 127000000,
    'pied': 1000000,
    'yard': 333333.3333
  },
  'dm3': {
    'dm3': 1000,
    'm3': 0.001,
    'cm3': 1000,
    'mm3': 1000000,
    'hl': 0.01,
    'dal': 0.1,
    'l': 1,
    'dl': 10,
    'cl': 100,
    'ml': 1000,
    'inch': 127000000,
    'pied': 1000000,
    'yard': 333333.3333
  },
  
  'cm3': {
    'm3': 0.000001,
    'dm3': 0.001,
    'cm3': 1,
    'mm3': 1000,
    'hl': 0.00001,
    'dal': 0.0001,
    'l': 0.001,
    'dl': 0.01,
    'cl': 0.1,
    'ml': 1,
    'inch': 0.0610237,
    'pied': 0.7874016,
    'yard': 0.264172
  },
  'mm3': {
    'm3': 0.0000000001,
    'dm3': 0.000001,
    'cm3': 0.001,
    'mm3': 1,
    'hl': 200000,
    'dal': 2000000,
    'l': 20000000,
    'dl': 200000000,
    'cl': 2000000000,
    'ml': 20000000000,
    'inch': 61023.7,
    'pied': 787401.6,
    'yard': 264172.052
  },
  'hl': {
    'm3': 0.1,
    'dm3': 100,
    'cm3': 100000,
    'mm3': 0.01,
    'hl': 1,
    'dal': 10,
    'l': 100,
    'dl': 1000,
    'cl': 10000,
    'ml': 100000,
    'inch': 61023.7,
    'pied': 787401.6,
    'yard': 264172.052
  },
  'dal': {
    'm3': 100000,
    'dm3': 100,
    'cm3': 10,
    'mm3': 0.01,
    'hl': 0.1,
    'dal': 1,
    'l': 10,
    'dl': 100,
    'cl': 1000,
    'ml': 10000,
    'inch': 3937.01,
    'pied': 328.084,
    'yard': 109.361
  },
  'l': {
    'm3': 0.001,
    'dm3': 0.1,
    'cm3': 10,
    'mm3': 10000,
    'hl': 0.01,
    'dal': 0.1,
    'l': 1,
    'dl': 10,
    'cl': 100,
    'ml': 1000,
    'inch': 61.0237441,
    'pied': 3.2808399,
    'yard': 1.0936133
  },
  'dl': {
    'm3': 0.0001,
    'dm3': 0.1,
    'cm3': 100,
    'mm3': 1000,
    'hl': 0.001,
    'dal': 0.01,
    'l': 0.1,
    'dl': 1,
    'cl': 10,
    'ml': 100,
    
  },
  'cl': {
    'm3': 0.00001,
    'dm3': 0.01,
    'cm3': 10,
    'mm3': 10000,
    'hl': 0.0001,
    'dal': 0.001,
    'l': 0.01,
    'dl': 0.1,
    'cl': 1,
    'ml': 10,
    
  },
  'ml': {
    'm3': 0.000001,
    'dm3': 0.001,
    'cm3': 1,
    'mm3': 1000,
    'hl': 0.00001,
    'dal': 0.0001,
    'l': 0.001,
    'dl': 0.01,
    'cl': 0.1,
    'ml': 1,
    
  }



}

  

function myResult() {
  const inputTypeValue = inputType.value;
  const resultTypeValue = resultType.value;
  const conversionFactor = conversions[inputTypeValue][resultTypeValue];
  const inputValue = Number(input.value);
  if (conversionFactor) {
    result.value = inputValue * conversionFactor;
  } else {
    result.value = null;
  }
}

input.addEventListener("keyup", myResult);
inputType.addEventListener("change", myResult);
resultType.addEventListener("change", myResult);





