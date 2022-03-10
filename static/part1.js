var recapcount = 0;

function recap()
{

    if (recapcount % 2 == 0)
    {
        document.getElementById('recaps').style.display = "block";
    }
    else {
        document.getElementById('recaps').style.display = "none";

    }
    recapcount++;

}

function enterquestions()
{
    var num = 0; 

    if (document.getElementById("question1").value == "function")
    {
        num++;

    }
    if (document.getElementById("question2").value == "notfunction")
    {
        num++;

    }
    if (document.getElementById("question3").value == "function")
    {
        num++;

    }


    if (num == 3){
        document.getElementById("results").innerHTML = "You got them all right, You can continue";
    }
    else
    {
        document.getElementById("results").innerHTML = "There is something wrong, try to figure it out";
    }


}