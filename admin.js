var a;
function show_hide()
{
    if(a==0)
    {
        document.getElementById("update").style.display="none";
        return a=1;
    }
    else
    {
        document.getElementById("update").style.display="inline";
        return a=0;
    }
}