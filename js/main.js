$(document).ready(
    function () {

        //add event handlers
        $("#bacCalc").click(calculateBAC);

        //all other functions (program logic)
        function calculateBAC(){

            //get drink input
            var beer = $("#bConsumed").val();
            beer = parseFloat(beer);
            var wine = $("#wConsumed").val();
            wine = parseFloat(wine);
            var shots = $("#sConsumed").val();
            shots = parseFloat(shots);

            //calculate ounces of alcohol per drink
            var bOunces = beer * 0.54;
            var wOunces = wine * 0.6;
            var sOunces = shots * 0.6;
            var tOunces = bOunces + wOunces + sOunces;

            //get users weight and time since first drink
            var uWeight = $("#weight").val();
            uWeight = parseFloat(uWeight);
            var uTime = $("#hours").val();
            uTime = parseFloat(uTime);

            //calculate BAC
            var uBAC = ((tOunces * 7.5) / uWeight) - (0.015 * uTime);

            //output the BAC and ounces per drink to user
            $("#bOutput").text((bOunces).toFixed(2));
            $("#wOutput").text((wOunces).toFixed(2));
            $("#sOutput").text((sOunces).toFixed(2));
            $("#bacOutput").text((uBAC).toFixed(3));
            $(".answer").css({display: "block"});

        }
    }
)