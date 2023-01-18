let tab1 = [5, 3, 87, 1, -4, -99, 0];
console.log(tab1);

// on utilise une fonction pour trier les elements de tab1

        let Swap = 0
    for (let i = 0; i < tab1.length; i++) 
    {
        if (tab1[i+1] < tab1[i])
         {
            let Temp = [tab1[i+1],tab1[i]]
            tab1[i+1] = Temp[1]
            tab1[i] = Temp[0]
            Swap += 1
        }

        if (i+1 === tab1.length) 
        {
            if (Swap === 0) {
            break
            } else {
            i -= tab1.length
            Swap = 0
            }
        } 
    }


console.log(tab1);

// on utilise une fonction pour trouver le min et le max de tab1

function maxmin(tab1) {
        var max;
        for (i=0;val=tab1[i]; i++)
        {
            if (val > max)
            {
                max=val;
            }
        }
        return max;
}

// on utilise la fonction pour trouver le max de tab1
function maxmin(tab1){
        var max=0;
    for (i=0;i<tab1.length;i++)
    { 
        if(tab1[i]>max){
             max=tab1[i]
            }
    }
    return max;
}
max=maxmin(tab1);
console.log(max);

// on utilise la fonction pour trouver le min de tab1
function min(tab1){
    var min=0;
for (i=0;i<tab1.length;i++) 
if(tab1[i]<min) min=tab1[i];
return min;
}
min=min(tab1);
console.log(min);
