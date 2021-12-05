module.exports = {
    const:fs = require('fs'),
SaveMatrixToFile:(matrix,path)=>
{
    fs.writeFileSync(path,matrix);
},
LoadMatrixFromFile:(path)=>
{
    return fs.readFileSync(path);
},
MatrixToString:(mt)=>
{
    let s = "";
    for(i = 0;i<mt.length;i++)
    {
        for(j = 0;j<mt[i].length;j++)
        {
            s+=mt[i][j] + ",";
        }
        s = s.substring(0,s.length-1);
        s+="|";
    }
    s = s.substring(0,s.length-1);
    return s;
},
StringToMatrix:(str)=>
{
    str = str + "";
    let m = str.split("|");
    let arr = [];
    let result = [];
    for(i = 0;i<m.length;i++)
    {
        arr = m[i].split(",");
        for(j = 0;j<arr.length;j++)
        {
            let t = arr[j];
            arr[j] = parseInt(t);
        }
        result.push(arr);
    }
    return result;
},
printMatrix:(mt)=>
{
    let s = "";
    for(let i=0;i<mt.length;i++)
    {
        for(let j=0;j<mt[i].length;j++)
        {
            s+= mt[i][j] + " ";   
        }
        s+= "\n";
    }
    console.log(s);
}
}
