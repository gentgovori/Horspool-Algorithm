function setup()
{

var pattern = prompt('Jepni pattern :');
var patternArray = Array.from(pattern);

var teksti = prompt('Jepni tekstin :');
var tekstiArray = Array.from(teksti);
var index = HorsPoolMatching(pattern,teksti);

if(index!=(-1))
{
alert('Teksti u gjet ne indeksin: '+index);
}
else
{
    alert('Teksti nuk u gjet!');
}



}


function ShiftTable(pattern)
{

    //var alphabet ="abcdefghijklmnopqrstuvwxyz".split('').join(',');
    var alphabet =["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    var Table={};

    for(var i =0;i<alphabet.length;i++)
    {
        Table[alphabet[i]] = 0;
    }


    var length1= Object.keys(Table).length;
    for(var i =0;i<=length1-1;i++)
    {
        Table[alphabet[i]]=pattern.length;
    }
    for(j=0;j<=pattern.length-2;j++)
    {
        Table[pattern[j]]=pattern.length-1-j;
    }
    return Table;
}

function HorsPoolMatching(P,T)
{
    var tabela = ShiftTable(P);

    var i  = P.length-1;

    while(i<=T.length-1)
    {
        k=0;
        while(k<=P.length-1 && P[P.length-1-k]==T[i-k])
        {
            k=k+1;
        }

        if(k==P.length)
        {
            return i-P.length+1;
        }
        else
        {
            i=i+tabela[T[i]];
        }
        

    }
    return -1;

}