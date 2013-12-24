// ==UserScript==
// @name        SaltyBet+
// @namespcae   sb+
// @description Enhances Saltybet.
// @include     http://www.saltybet.com/
// @version     1.2.7
// @grant       none
// @run-at document-end
// ==/UserScript==

//Changes the slider to be x=(y^3/100^3)*b instead of x=(y/100)*b
//Where x = wager, y = slider distance (0->100) and b = balance
$(function() {
	$( "#slider-range-min" ).slider({
                range: "min",
                value: 0,
                min: 0,
                max: 0,
                animate: "fast",
                slide: function( event, ui ) {var 
                	pct = ui.value / $( "#balance" ).text();
                  	pct = pct * 100;
                  	$( "#wager" ).val(Math.round((Math.pow(pct, 3)/1000000)*$( "#balance" ).text()));
                }
     	});
});

//Button colouring events
function callback(i){
    return function(){
    localStorage["sbbtnrr"+i] = $("#rr").val();
    localStorage["sbbtnrg"+i] = $("#rg").val();  
    localStorage["sbbtnrb"+i] = $("#rb").val();  
    localStorage["sbbtnbr"+i] = $("#br").val();  
    localStorage["sbbtnbg"+i] = $("#bg").val();  
    localStorage["sbbtnbb"+i] = $("#bb").val();  
    makeButtons();
    }
}

//Button set to $ Events
function callbackDol(i){
    return function(){
        localStorage["sbbtn"+i+"val"] = $("#but"+i+"val").val();  
        localStorage["sbbtn"+i+"typ"] = "$";
        makeButtons();
    }
}

//Button set to % Events
function callbackPer(i){
    return function(){
        localStorage["sbbtn"+i+"val"] = $("#but"+i+"val").val();  
        localStorage["sbbtn"+i+"typ"] = "%";
        makeButtons();
    }
}

//Buttons quick-bet red Events
function callbackRed(i){
    return function(){
        if( localStorage["sbbtn"+i+"typ"] == "$"){
            var salt=parseInt(localStorage["sbbtn"+i+"val"]);
            if( localStorage["sbbtn"+i+"val"][0] === "+" || localStorage["sbbtn"+i+"val"][0] === "-"){ $("input#wager").val(parseInt($("input#wager").val()) + parseInt(salt) | 0); } else {  $("input#wager").val(parseInt(salt) | 0); }
            document.getElementsByName("player1")[0].click();
        } else {
            var pct=parseFloat(localStorage["sbbtn"+i+"val"]);
            if( localStorage["sbbtn"+i+"val"][0] === "+" || localStorage["sbbtn"+i+"val"][0] === "-"){ $("input#wager").val(parseFloat($("input#wager").val()) + parseFloat($("#balance").text(),10)*pct/100 | 0); } else {  $("input#wager").val(parseFloat($("#balance").text(),10)*pct/100 | 0); }
            document.getElementsByName("player1")[0].click();
        }        
    }
}

//Buttons quick-bet blueEvents
function callbackBlu(i){
    return function(){
        if( localStorage["sbbtn"+i+"typ"] == "$"){
            var salt=parseInt(localStorage["sbbtn"+i+"val"]);
            if( localStorage["sbbtn"+i+"val"][0] === "+" || localStorage["sbbtn"+i+"val"][0] === "-"){ $("input#wager").val(parseInt($("input#wager").val()) + parseInt(salt) | 0); } else {  $("input#wager").val(parseInt(salt) | 0); }
            document.getElementsByName("player2")[0].click();
        } else {
            var pct=parseFloat(localStorage["sbbtn"+i+"val"]);
            if( localStorage["sbbtn"+i+"val"][0] === "+" || localStorage["sbbtn"+i+"val"][0] === "-"){ $("input#wager").val(parseFloat($("input#wager").val()) + parseFloat($("#balance").text(),10)*pct/100 | 0); } else {  $("input#wager").val(parseFloat($("#balance").text(),10)*pct/100 | 0); }
            document.getElementsByName("player2")[0].click();
        }        
    }
}

//Loop creating all the quick-bet button events
for( i = 1; i < 13; i++){
    $('#but'+i).live('mousedown', callback( i ) );
    $('#but'+i+'dol').live('mousedown', callbackDol( i ) );
    $('#but'+i+'per').live('mousedown', callbackPer( i ) );
    $('#redbtn'+i).live('mousedown', callbackRed( i ) ).live('contextmenu', function(e){ e.preventDefault();});
    $('#blubtn'+i).live('mousedown', callbackBlu( i ) ).live('contextmenu', function(e){ e.preventDefault();});
}

//Events to show hover buttons
$('#hoverred').live({
  mouseenter: function(){ if(JSON.parse(localStorage["sbHover"]) === true ) { $('#hoverbuttonred').removeClass('hidden'); } }, 
  mouseleave: function(){ if(JSON.parse(localStorage["sbHover"]) === true ) { $('#hoverbuttonred').addClass('hidden'); } }
  }
);

$('#hoverblu').live({
  mouseenter: function(){ if(JSON.parse(localStorage["sbHover"]) === true ) { $('#hoverbuttonblue').removeClass('hidden');}}, 
  mouseleave: function(){ if(JSON.parse(localStorage["sbHover"]) === true ) { $('#hoverbuttonblue').addClass('hidden'); }}
  }
);

//Events to hide/show buttons when you click on p1/p2name
$("#p1name").live('mousedown', function(e) { 
    $( "#redsbbuttonblock" ).toggle();
    $( "#blusbbuttonblock" ).toggle();
});

$("#p2name").live('mousedown', function(e) { 
    $( "#redsbbuttonblock" ).toggle();
    $( "#blusbbuttonblock" ).toggle();
});

//Events to cause new BET! buttons to act like old ones
$("#redbtn0").live('mousedown', function(e) { 
            document.getElementsByName("player1")[0].click();
});

$("#bluebtn0").live('mousedown', function(e) { 
            document.getElementsByName("player2")[0].click();
});

var isOpera = !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;
// Check if Opera/non-chrome blink based browser
var isFirefox = typeof InstallTrigger !== 'undefined';
// Check if Firefox
var isChrome = !!window.chrome && !isOpera;
// Check if Chrome

if ( localStorage.getItem("watch") === null || localStorage.getItem("watch") === "undefined" ) {
    var watch = ["kdt"];
} else {
	if( isFirefox == true){
		var watch = JSON.parse(localStorage.getItem("watch"));	
	} else {
    		var watch = JSON.parse(window.localStorage["watch"]);
	}
}

//Main init after loading NOTY, as most things crash if loaded before this library
requireNOTY("http://planetbanhammer.com/noty.js");

//variable declarations
var xmlhttp;
var hidden = false;
var info;

var p1name;
var p1id;
var p1tier;
var p1totalmatches;
var p1wins;
var p1winrate;
var p1life;
var p1meter;
var p2name;
var p2id;
var p2tier;
var p2totalmatches;
var p2wins;
var p2winrate;
var p2life;
var p2meter;
var p1log = "";
var p2log = "";

var p1w;
var p2w;

var oldStatus;
var newStatus;

var left;
var right;
var bottom;

var lastBet;
var oldRank;
var newRank;

var lastAnnounce;

var waiting = false;
var waitinghb = false;
var waitinglb = false;

var zdata;
var obj;

var g;

var lastBetInfo;

var version = "SaltyBet+ 1.2.7";
// Remember to increment
// x.y.z.a Format
// x = Major Release
// y = New Feature
// z = Feature updates, such as additional buttons etc.
// a = Minor bugfix

var black;

var stop = false;
var noti = true;

var pan = false;

var state;

function getLastBet(){
    var xmlhttp = new XMLHttpRequest();
    
            xmlhttp.onreadystatechange=function()
            {
            if (xmlhttp.readyState==4 && xmlhttp.status==200)
                {
                var html = xmlhttp.responseText;
                var start = html.indexOf('<td>')+4;
                var end = html.indexOf("</td>", start);
                event = html.substring(start,end);
                
                var start = html.indexOf('<td>', end)+4;
                var end = html.indexOf("</td>", start);
                match = html.substring(start,end);
                
                var start = html.indexOf('<td>', end)+4;
                var end = html.indexOf("</td>", start);
                wager = html.substring(start,end);
                
                var start = html.indexOf('<td>', end)+4;
                var end = html.indexOf("</td>", start);
                winner = html.substring(start,end);
                
                var start = html.indexOf('<td>', end)+4;
                var end = html.indexOf("</td>", start);
                payout = html.substring(start,end);
                
                var start = html.indexOf('<td>', end)+4;
                var end = html.indexOf("</td>", start);
                time = html.substring(start,end);
                
                lastBetInfo = '$'+wager + " (" + match + ") <br /> $"+payout + " ("+oldRank+" -> "+newRank+")";
                
                if(lastBet === time){
                    
                } else {
                    if(payout != '') {
                        if(payout > 0){
                            if( noti === true ){
                                var first = noty({layout: 'topRight', text: 'Odds '+$( "#odds" ).html()+'<br>'+lastBetInfo, timeout: 2500, type: 'success'});
                            }
                            var second = $("#chatWrapper").noty({text: 'Odds '+$( "#odds" ).html()+'<br>'+lastBetInfo, timeout: false, force: true, type: 'success'});
                        } else {
                            if( noti === true ){
                                var first = noty({layout: 'topRight', text: 'Odds '+$( "#odds" ).html()+'<br>'+lastBetInfo, timeout: 2500, type: 'warning'});
                            }
                            var second = $("#chatWrapper").noty({text: 'Odds '+$( "#odds" ).html()+'<br>'+lastBetInfo, timeout: false, force: true, type: 'warning'});
                        }
                            lastBet = time;
                            localStorage["lastBet"] = lastBet;
                            oldRank = newRank;
                    }
                }
                
                localStorage["oldRank"] = oldRank;
            }            
            };
            xmlhttp.open("GET", "http://www.saltybet.com/stats?mystats=1", true);
            xmlhttp.send();
}

function updateLog() {
            var p1http = new XMLHttpRequest();      
          
            p1http.onreadystatechange=function() {
            if (p1http.readyState==4 && p1http.status==200) {
                var html = p1http.responseText;
                var start = html.indexOf(p1name)-13;
                start = html.indexOf("=", start)+1;
                var end = html.indexOf(">", start)-1;
                
                p1id = html.substring(start, end);
                
                var p1loghttp = new XMLHttpRequest() ;
                p1loghttp.onreadystatechange=function() {
                if (p1loghttp.readyState==4 && p1http.status==200) {
                    var html = p1loghttp.responseText;
                    var start = html.indexOf('<div id="charlog">')+18;
                    var end = html.indexOf("</div>", start)-1;                
                    if(start > 18){
                    p1log = html.substring(start, end);
                    } else {
                    p1log = "";
                    }
                    updateLog2();
                    }
                };
                var p1tierno = 0;
                if(p1tier=="S"){p1tierno = 1;}
                if(p1tier=="A"){p1tierno = 2;}
                if(p1tier=="B"){p1tierno = 3;}
                if(p1tier=="P"){p1tierno = 4;}
                p1loghttp.open("GET", "http://www.saltybet.com/compendium?tier="+p1tierno+"&character="+p1id, true);
                p1loghttp.send();
                }
            };
                var p1tierno = 0;
                if(p1tier=="S"){p1tierno = 1;}
                if(p1tier=="A"){p1tierno = 2;}
                if(p1tier=="B"){p1tierno = 3;}
                if(p1tier=="P"){p1tierno = 4;}
            
                p1http.open("GET", "http://www.saltybet.com/compendium?tier="+p1tierno, true);
                p1http.send();
                
}

function updateLog2() {
            var p2http = new XMLHttpRequest();      
          
            p2http.onreadystatechange=function() {
            if (p2http.readyState==4 && p2http.status==200) {
                var html = p2http.responseText;
                var start = html.indexOf(p2name)-13;
                start = html.indexOf("=", start)+1;
                var end = html.indexOf(">", start)-1;
                
                p2id = html.substring(start, end);
                var p2loghttp = new XMLHttpRequest() ;
                p2loghttp.onreadystatechange=function() {
                if (p2loghttp.readyState==4 && p2http.status==200) {
                    var html = p2loghttp.responseText;
                    var start = html.indexOf('<div id="charlog">')+18;
                    var end = html.indexOf("</div>", start)-1;
                    if(start > 18){
                    p2log = html.substring(start, end);
                    } else {
                    p2log = "";
                    }
                    if( p1log === "undefined" ){ p1log = ""; }
                    if( p2log === "undefined" ){ p2log = ""; }
                    $("#bettors1").html('<h1 style="text-align:center">' + p1totalmatches + '</h1><p style="text-align:center">MATCHES</p><h1 style="text-align:center">' + p1winrate + '%</h1><p style="text-align:center">WINRATE</p><h1 style="text-align:center">'+p1tier+'</h1><p style="text-align:center">TIER</p><h1 style="text-align:center">' + p1life + '</h1><p style="text-align:center">LIFE</p><h1 style="text-align:center">' +p1meter +'</h1><p style="text-align:center">METER</p>'+p1log);
                    $("#bettors2").html('<h1 style="text-align:center">' + p2totalmatches + '</h1><p style="text-align:center">MATCHES</p><h1 style="text-align:center">' + p2winrate + '%</h1><p style="text-align:center">WINRATE</p><h1 style="text-align:center">'+p2tier+'</h1><p style="text-align:center">TIER</p><h1 style="text-align:center">' + p2life + '</h1><p style="text-align:center">LIFE</p><h1 style="text-align:center">' +p2meter +'</h1><p style="text-align:center">METER</p>'+p2log); 
                    state = "open";
                    }
                };
                var p2tierno = 0;
                if(p2tier=="S"){p2tierno = 1;}
                if(p2tier=="A"){p2tierno = 2;}
                if(p2tier=="B"){p2tierno = 3;}
                if(p2tier=="P"){p2tierno = 4;}
                p2loghttp.open("GET", "http://www.saltybet.com/compendium?tier="+p2tierno+"&character="+p2id, true);
                p2loghttp.send();
                }
            };
                var p2tierno = 0;
                if(p2tier=="S"){p2tierno = 1;}
                if(p2tier=="A"){p2tierno = 2;}
                if(p2tier=="B"){p2tierno = 3;}
                if(p2tier=="P"){p2tierno = 4;}
            
                p2http.open("GET", "http://www.saltybet.com/compendium?tier="+p2tierno, true);
                p2http.send();
}

function getRealtime() {
    $.ajax({
        type: "get",
        url: "/ajax_get_stats.php",
        data: "",
        dataType: "json",
        cache: "false",
        timeout: 50000,
        success: function (data) {
            p1log = "";
            p2log = "";
           p1name = data.p1name;
           p1totalmatches = data.p1totalmatches;
           p1winrate= data.p1winrate;
           p1tier = data.p1tier;
           p1life = data.p1life;
           p1meter = data.p1meter;

           p2name = data.p2name;
           p2totalmatches = data.p2totalmatches;
           p2winrate = data.p2winrate;
           p2tier = data.p2tier;
           p2life = data.p2life;
           p2meter = data.p2meter;           
        },
        error: function(){
            if( noti === true ){
                var first = noty({layout: 'topRight', text: 'Error: getRealTime request failed', timeout: 2500, type: 'error'});
            }
            var second = $("#chatWrapper").noty({text: 'Error: getRealTime request failed', timeout: false, force: true, type: 'error'});
        }
    });
}

function getDetailed(){
    var xml2http = new XMLHttpRequest();
    
    xml2http.onreadystatechange=function() {
        if (xml2http.readyState==4 && xml2http.status==200) {
            var html = xml2http.responseText;
            var namestart = html.indexOf(">"+p1name+"<")+1;
            var nameend = html.indexOf("</td>", namestart);
            var matchstart = html.indexOf(">", nameend+7)+1;
            var matchend = html.indexOf("</td>", matchstart);
            var winstart = html.indexOf(">", matchend+7)+1;
            var winend = html.indexOf("</td>", winstart);
            p1totalmatches = parseInt(html.substring(matchstart, matchend));
            p1wins = parseInt(html.substring(winstart, winend));
            if(p1wins === 0){
                p1winrate = 0;
            } else {
                p1winrate = Math.floor((p1wins*100)/p1totalmatches);
            }
            
            namestart = html.indexOf(">"+p2name+"<")+1;
            nameend = html.indexOf("</td>", namestart);
            matchstart = html.indexOf(">", nameend+7)+1;
            matchend = html.indexOf("</td>", matchstart);
            winstart = html.indexOf(">", matchend+7)+1;
            winend = html.indexOf("</td>", winstart);
            
            p2totalmatches = parseInt(html.substring(matchstart, matchend));
            p2wins = parseInt(html.substring(winstart, winend));
            if(p2wins === 0){
                p2winrate = 0;
            } else {
                p2winrate = Math.floor((p2wins*100)/p2totalmatches);
            }
        }
    };
    
    xml2http.open("GET", "http://www.saltybet.com/stats?playerstats=1", true);
    xml2http.send();
}

function getStats() { 
    if($("#betstatus").text().indexOf("OPEN") > 0){
    $(".tipsy").remove();
    getRealtime();
        if($( ".redtext" )[0].innerHTML.indexOf(p1name) == -1){
            if ( g === true ){
                $("#bettors1").html('<img src="images/potload.gif"><p style="text-align:center">"REAL"-TIME kappa</p>');
                $("#bettors2").html('<img src="images/potload.gif"><p style="text-align:center">"REAL"-TIME kappa</p>');
                setTimeout(getStats, 1000);
            } else {
                $("#bettors1").html('REAL TIME STATS');
                $("#bettors2").html('ARE ILLUMINATI ONLY');
            }
        } else {
                updateLog();
            }
    }
}             

function updateStats() {
    var xmlhttp = new XMLHttpRequest();
    
    xmlhttp.onreadystatechange=function()
    {
    if (xmlhttp.readyState==4 && xmlhttp.status==200)
        {
            var html = xmlhttp.responseText;
            var start = html.indexOf("#", html.indexOf("#", html.indexOf("#")+5 )+5)-1;
            var end = html.indexOf(")", start)+1;
            $("#leaderboardrank").html(" " + html.substring(start,end));
            newRank = html.substring(start+2, end-1)
            
            start = html.indexOf('<span id="rank" class="nomargin">')+33;
            end = html.indexOf("</span>", start);
            if ( $( "#rank" ).html() !== html.substring(start, end) ) {
                $( "#rank" ).html(html.substring(start, end));
            }
        }
    };
    
    xmlhttp.open("GET", "http://www.saltybet.com/leaderboard", true);
    xmlhttp.send();
}

function highlightBets(){
    $( "strong" ).unbind();
    
    $(".tipsy").remove();
    
    $( "strong").each(function( index ) {    
            
            $( this ).click(function() {    
                 if ($.inArray($(this).text(), watch) == -1){
                    watch.push($(this).text());
                    highlightBets();
                 } else {
                    var index = watch.indexOf($(this).text());
                    if (index > -1) {
                        watch.splice(index, 1);
                    }
                    highlightBets();
                 }
            });
        });
        
    $( "#sbettors1 p, #sbettors2 p" ).each(function( index ) {
    
        var illuminati = $( "strong", this ).attr('class');
        var name= '<strong class="'+illuminati+'">'+$( "strong", this ).text()+'</strong>';
        
        var money = $( ".greentext", this ).text().substring(1);
        var percent = $( "span:last", this ).text().slice(1, -2);
        
       
        var gain = 0;
        if ($( "span:first", this ).attr('class') === 'bluetext'){
            gain = money*(p1w/p2w);
        } else {
            gain = money/(p1w/p2w);
        }
        
        $( this ).hover(
            function(){
                $(".tipsy").remove();
                var name = $("strong", this).text();
                var money;
                $.each(obj, function(i, n) {
                    if(n.n === name){
                        //console.log(n.n);
                        money = n.b;
                    }
                });
                $( this ).tipsy({html: true, fallback: name + " : S " + money + ' (<span class="greentext">$' + gain.toFixed(0) + "</span>)"});
                $( this ).tipsy("show");
                }
            )
    
        loop1:
        for (var i = 0; i < watch.length+1; i++) {        
            if ($( this ).text().indexOf( watch[i] ) > -1) {
                if( !black ){
                    $( this ).css({"backgroundColor":"white", "color":"black"});
                } else {
                    $( this ).css({"backgroundColor":"black", "color":"white"});
                }
                break loop1;
            } else {
                $( this ).removeAttr("style");
            }            
        }
    });
    
    localStorage["watch"] = JSON.stringify(watch);
    
    
    if($("#betstatus").text().indexOf("OPEN") == -1){
        var totalbettors = parseInt($(" div#bettors1 p").length)+parseInt($(" div#bettors2 p").length);
        $( "#sbettorscount" ).html('Salty Bettors : <strong>' + totalbettors +'</strong> (<strong class="redtext">' + $(" div#bettors1 p").length + '</strong> | <strong class="bluetext">'+$(" div#bettors2 p").length+'</strong>)</br>');
        if (parseInt($(" div#bettors1 p").length) > 0 ) {
            setTimeout( function() { state = "locked"; }, 1500 );
        }
    }
}

function togPan(){
    pan = !pan;
    makeButtons();
    if( pan == true){
        $( '#bottomcontent' ).css("min-height", "1px");
        $( '#bottomcontent' ).css("height", "81px");
        $( '#bottomcontent' ).css("bottom", "0px");
        $( '.betcard' ).addClass("shart");
        $( '#stream' ).css("bottom", "81px");
        
        $( '#status' ).css("display", "none");
        $( '#footer' ).css("display", "none");
        $( '.betcard .left br' ).eq(1).hide();
        $( '.betcard .right br' ).eq(1).hide();
        //$( '.field' ).addClass("hidden");
    } else {
        $( '#bottomcontent' ).css("min-height", "1px");
        $( '#bottomcontent' ).css("height", "171px");
        $( '#bottomcontent' ).css("bottom", "45px");
        $( '.betcard' ).removeClass("shart");
        $( '#stream' ).css("bottom", "215px");
        
        $( '#status' ).css("display", "block");
        $( '#footer' ).css("display", "block");
        $( '.betcard .left br' ).eq(1).show();
        $( '.betcard .right br' ).eq(1).show();
        //$( '.field' ).removeClass("hidden");
    }
    
    $(window).trigger('resize');
}

function getOdds(){
    if($( "#odds").text() === "N/A" && $( "#betstatus").text() === "Bets are locked until the next match."){
        p1w = parseInt($( "#player1wager").text().replace(/,/g, '').substring(1) );
        p2w = parseInt($( "#player2wager").text().replace(/,/g, '').substring(1) );
        
        if( p1w > p2w ){
            $( "#odds" ).html('<span class="redtext">' + (p1w/p2w).toFixed(1) + '</span>:<span class="bluetext">1</span>');
        } else {
            $( "#odds" ).html( '<span class="redtext">1</span>:<span class="bluetext">' + (p2w/p1w).toFixed(1) +'</span>');
        }
    }   else    {
    }
}

function getAnn(){

    $.ajax({
        url: "http://www.planetbanhammer.com/sb+.js",
        dataType: "script",
        async: false,
        success: function () {
            if(sbplusid != lastAnnounce){
                announce();
                lastAnnounce = sbplusid;
                localStorage["lastAnnounce"] = lastAnnounce;
            }
        },
        error: function () {
            throw new Error("Could not load script " + script);
        }
    });
    
    window.setTimeout(getAnn, 5000);
}


function update(){
                console.log("var state = '"+state+"'");
                zdata = $.ajax({
                    type: "get",
                    url: "/zdata.json",
                    data: "",
                    dataType: "json",
                    cache: "false",
                    timeout: 30000,
                    success: function (data) {
                        obj = eval("(" + zdata.responseText +")");
                        //console.log(obj);
                    }
                });
                
                zstate = $.ajax({
                    type: "get",
                    url: "/state.json",
                    data: "",
                    dataType: "json",
                    cache: "false",
                    timeout: 30000,
                    success: function (data) {
                        objs = eval("("+zstate.responseText+")");
                        console.log(objs["status"]);
                        if(objs["status"]==="open"){
                            if(state != "open"){
                                console.log("1");
                                if( $(".goldtext:first").text() === $("a").eq(3).text() ){
                                    g = true;
                                } else {
                                    g = false;
                                }
                                getStats();               
                                //setTimeout(firstTime, 1000);
                                updateStats()
                                if ( g === true) {
                                    getLastBet();
                                    }
                            }
                                setTimeout(update, 1000);
                            } else if (objs["status"] === "locked") {
                                if(state != "locked"){
                                    console.log("2");
                                    highlightBets();
                                    getOdds();
                                }                                    
                                setTimeout(update, 1000);
                            } else {
                                setTimeout(update, 1000);
                            }
                    }
                });
    
}

MutationObserver =  window.WebKitMutationObserver;

var observer = new MutationObserver(function(mutations, observer) {
    // fired when a mutation occurs
    if( waiting === false ){
        //update();
        waiting = true;
        setTimeout(function(){ waiting = false; }, 5000);
        
    }
});

observer.observe($( "#betstatus" )[0], {
  subtree: true,
  attributes: true
});

var betObs = new MutationObserver(function(mutations, betObs) {
    // fired when a mutation occurs
    if( waitinghb === false ){
        if($("#betstatus").text().indexOf("OPEN") < 0){
        waitinghb = true;
        setTimeout(function(){ waitinghb = false; }, 250);
        }
    }

});

betObs.observe($( "#sbettorswrapper" )[0], {
  subtree: true,
  attributes: true
});

var lbObs = new MutationObserver(function(mutations, lbObs) {
    // fired when a mutation occurs
    if( waitinglb === false ){
    if( $('#odds').html() == 'N/A' ){
        $( '.hudtext' ).eq(1).css("display", "none");
        $( '#lastbet' ).css("display", "none");
        $( '.hudtext' ).eq(2).css("display", "none");
        $( '#odds' ).css("display", "none");
        //$( '#wagerwrapper span' ).eq(0).css("display", "inline");
        $( '#wagerwrapper input' ).eq(0).css("display", "inline");        
    } else {
        $( '.hudtext' ).eq(1).css("display", "inline");
        $( '#lastbet' ).css("display", "inline");
        $( '.hudtext' ).eq(2).css("display", "inline");
        $( '#odds' ).css("display", "inline");
        //$( '#wagerwrapper span' ).eq(0).css("display", "none");
        $( '#wagerwrapper input' ).eq(0).css("display", "none");
    }
    if( $( '#lastbet' ).html() === '<img src="../images/loadred.GIF">'){
        $( ".redborder" ).eq(0).addClass("goldborder");
        $( ".blueborder" ).eq(0).removeClass("goldborder");
    } else if ( $( '#lastbet' ).html() === '<img src="../images/loadblue.GIF">'){
        $( ".blueborder" ).eq(0).addClass("goldborder");
        $( ".redborder" ).eq(0).removeClass("goldborder");
    } else if ( $( '#lastbet' ).html() === 'N/A'){
        $( ".blueborder" ).eq(0).removeClass("goldborder");
        $( ".redborder" ).eq(0).removeClass("goldborder");
    } else {
        $( ".blueborder" ).eq(0).removeClass("goldborder");
        $( ".redborder" ).eq(0).removeClass("goldborder");
    }
    waitinglb = true;
    setTimeout(function(){ waitinglb = false; }, 250);
    }
});

lbObs.observe($( '#wagerwrapper' )[0], {
  subtree: true,
  attributes: true
});


function toggleWideScreen(){
    if(hidden===false){
        $("#sbettorswrapper").hide();
        $("#chatWrapper").hide();
    } else {
        $("#sbettorswrapper").show();
        $("#chatWrapper").show();
    }
    if(hidden) { hidden = false; } else { hidden = true; }
}

function require(script) {
    $.ajax({
        url: script,
        dataType: "script",
        async: false,
        success: function () {
        },
        error: function () {
            throw new Error("Could not load script " + script);
        }
    });
}

function toggleBlack(){
    $('style:first').remove();
    if( black === true ){
        $( 'head' ).prepend('<style> body ::-webkit-scrollbar { width: 12px;}  ::-webkit-scrollbar-track { background-color: #212121 !important; }::-webkit-scrollbar-thumb { background-color: #cdcdcd !important; } ::-webkit-scrollbar-thumb:hover { background-color: #dddddd !important; } </style>');
        $( 'body' ).css({"background-color": "#212121", "color": "#CDCDCD"}); 
        $( '#status' ).css({"background": "linear-gradient(#414141,#252525)", "color": "rgb(187, 187, 187)"});
        $( '#logo ').eq(0).html('<img src="http://www.planetbanhammer.com/images/smallogo.png">');
        $( 'body' ).addClass('black-bar').removeClass('white-bar');
    } else {
        $( 'head' ).prepend('<style> body ::-webkit-scrollbar { width: 12px;}  ::-webkit-scrollbar-track { background-color: #FFFFFF !important; }::-webkit-scrollbar-thumb { background-color: #212121 !important; } ::-webkit-scrollbar-thumb:hover { background-color: #424242 !important;} </style>');
        $( 'body' ).css({"background-color": "", "color": ""});
        $( '#status' ).css({"background": "linear-gradient(#FFFFFF,#E6EAED)", "color": "rgb(0, 0, 0)"});
        $( '#logo ').eq(0).html('<img src="http://www.planetbanhammer.com/images/smallogo2.png">');
        $( 'body' ).removeClass('black-bar').addClass('white-bar');
    }
    black = !black;
    //console.log(black);
    localStorage["black"] = black;
    highlightBets();
}

function toggleNoti(){
    noti = !noti;
    localStorage["NOTIFICATIONS"] = noti;
    if ( noti === true ){
        var first = noty({layout: 'topRight', text: 'Pop-ups have been enabled!', timeout: 2500, type: 'success'});
    } else {
        var first = noty({layout: 'topRight', text: 'Pop-ups have been disabled!', timeout: 2500, type: 'success'});
    }
    getStats();
}

function makeButtons(){
    $( '#blusbbuttonblock').remove();
    $( '#redsbbuttonblock').remove();
    $( '#hoverbuttonred' ).html("");
    $( '#hoverbuttonblue' ).html("");
    $( '.betbuttonblue' ).parent().parent().parent().append('<div id="blusbbuttonblock" class="left"></div>');    
    $( '.betbuttonred' ).parent().parent().parent().append('<div id="redsbbuttonblock" class="right"></div>');
    
    if(pan == false){    
    makeButton("sbbtn1val", "sbbtn1typ", "btn1", 40, localStorage['sbbtnrr1'], localStorage['sbbtnrg1'], localStorage['sbbtnrb1'], localStorage['sbbtnbr1'], localStorage['sbbtnbg1'], localStorage['sbbtnbb1']);
    makeButton("sbbtn2val", "sbbtn2typ", "btn2", 40, localStorage['sbbtnrr2'], localStorage['sbbtnrg2'], localStorage['sbbtnrb2'], localStorage['sbbtnbr2'], localStorage['sbbtnbg2'], localStorage['sbbtnbb2']);
    makeButton("sbbtn3val", "sbbtn3typ", "btn3", 40, localStorage['sbbtnrr3'], localStorage['sbbtnrg3'], localStorage['sbbtnrb3'], localStorage['sbbtnbr3'], localStorage['sbbtnbg3'], localStorage['sbbtnbb3']);
    makeButton("sbbtn4val", "sbbtn4typ", "btn4", 40, localStorage['sbbtnrr4'], localStorage['sbbtnrg4'], localStorage['sbbtnrb4'], localStorage['sbbtnbr4'], localStorage['sbbtnbg4'], localStorage['sbbtnbb4']);
    makeButton("sbbtn5val", "sbbtn5typ", "btn5", 40, localStorage['sbbtnrr5'], localStorage['sbbtnrg5'], localStorage['sbbtnrb5'], localStorage['sbbtnbr5'], localStorage['sbbtnbg5'], localStorage['sbbtnbb5']);
    makeButton("sbbtn6val", "sbbtn6typ", "btn6", 40, localStorage['sbbtnrr6'], localStorage['sbbtnrg6'], localStorage['sbbtnrb6'], localStorage['sbbtnbr6'], localStorage['sbbtnbg6'], localStorage['sbbtnbb6']);
        makeHoverButton("sbbtn7val", "sbbtn7typ", "btn7", 40, localStorage['sbbtnrr7'], localStorage['sbbtnrg7'], localStorage['sbbtnrb7'], localStorage['sbbtnbr7'], localStorage['sbbtnbg7'], localStorage['sbbtnbb7']);
        makeHoverButton("sbbtn8val", "sbbtn8typ", "btn8", 40, localStorage['sbbtnrr8'], localStorage['sbbtnrg8'], localStorage['sbbtnrb8'], localStorage['sbbtnbr8'], localStorage['sbbtnbg8'], localStorage['sbbtnbb8']);
        makeHoverButton("sbbtn9val", "sbbtn9typ", "btn9", 40, localStorage['sbbtnrr9'], localStorage['sbbtnrg9'], localStorage['sbbtnrb9'], localStorage['sbbtnbr9'], localStorage['sbbtnbg9'], localStorage['sbbtnbb9']);
        makeHoverButton("sbbtn10val", "sbbtn10typ", "btn10", 40, localStorage['sbbtnrr10'], localStorage['sbbtnrg10'], localStorage['sbbtnrb10'], localStorage['sbbtnbr10'], localStorage['sbbtnbg10'], localStorage['sbbtnbb10']);
        makeHoverButton("sbbtn11val", "sbbtn11typ", "btn11", 40, localStorage['sbbtnrr11'], localStorage['sbbtnrg11'], localStorage['sbbtnrb11'], localStorage['sbbtnbr11'], localStorage['sbbtnbg11'], localStorage['sbbtnbb11']);
        makeHoverButton("sbbtn12val", "sbbtn12typ", "btn12", 40, localStorage['sbbtnrr12'], localStorage['sbbtnrg12'], localStorage['sbbtnrb12'], localStorage['sbbtnbr12'], localStorage['sbbtnbg12'], localStorage['sbbtnbb12']);
    } else {
            makeButton("sbbtn4val", "sbbtn4typ", "btn4", 90, localStorage['sbbtnrr4'], localStorage['sbbtnrg4'], localStorage['sbbtnrb4'], localStorage['sbbtnbr4'], localStorage['sbbtnbg4'], localStorage['sbbtnbb4']);
    makeButton("sbbtn5val", "sbbtn5typ", "btn5", 90, localStorage['sbbtnrr5'], localStorage['sbbtnrg5'], localStorage['sbbtnrb5'], localStorage['sbbtnbr5'], localStorage['sbbtnbg5'], localStorage['sbbtnbb5']);
    makeButton("sbbtn6val", "sbbtn6typ", "btn6", 90, localStorage['sbbtnrr6'], localStorage['sbbtnrg6'], localStorage['sbbtnrb6'], localStorage['sbbtnbr6'], localStorage['sbbtnbg6'], localStorage['sbbtnbb6']);
makeHoverButton("sbbtn10val", "sbbtn10typ", "btn10", 90, localStorage['sbbtnrr10'], localStorage['sbbtnrg10'], localStorage['sbbtnrb10'], localStorage['sbbtnbr10'], localStorage['sbbtnbg10'], localStorage['sbbtnbb10']);
        makeHoverButton("sbbtn11val", "sbbtn11typ", "btn11", 90, localStorage['sbbtnrr11'], localStorage['sbbtnrg11'], localStorage['sbbtnrb11'], localStorage['sbbtnbr11'], localStorage['sbbtnbg11'], localStorage['sbbtnbb11']);
        makeHoverButton("sbbtn12val", "sbbtn12typ", "btn12", 90, localStorage['sbbtnrr12'], localStorage['sbbtnrg12'], localStorage['sbbtnrb12'], localStorage['sbbtnbr12'], localStorage['sbbtnbg12'], localStorage['sbbtnbb12']);
    }
}

function m(n,d){x=(''+n).length,p=Math.pow,d=p(10,d)
x-=x%3
return Math.round(n*d/p(10,x))/d+" kMGTPE"[x/3]}

function makeHoverButton(button, buttontype, id, height, rr, rg, rb, br, bg, bb){

	value= localStorage[button];
	type = localStorage[buttontype];

	if(value===undefined)
		value=10;
        
    if(type===undefined)
        type = "$";
    localStorage[button] = value;
    localStorage[buttontype] = type;
	// HTML injection
    if( type == "$"){       
        $("#hoverbuttonred").prepend('<div style="height:'+height+'%; float:right; padding-bottom:5%; padding-left:5px;"><input style="background: rgb('+rr+', '+rg+', '+rb+') no-repeat center center; box-shadow: 0px 9px 0px rgba('+(rr-20)+', '+(rg-20)+', '+(rb-20)+', '+1+'), 0px 9px 25px rgba(0,0,0,.7);" name="valred'+id+'" type="button" value="$'+m(value,1)+'" class="newsmbetbuttonred" id="red'+id+'"></div> ');
        $("#hoverbuttonblue").prepend('<div style="height:'+height+'%; float:left;  padding-bottom:5%; padding-right:5px;"><input style="background: rgb('+br+', '+bg+', '+bb+') no-repeat center center; box-shadow: 0px 9px 0px rgba('+(br-20)+', '+(bg-20)+', '+(bb-20)+', '+1+'), 0px 9px 25px rgba(0,0,0,.7);"name="valblu'+id+'" type="button" value="$'+m(value,1)+'" class="newsmbetbuttonblue" id="blu'+id+'"></div>');         
    } else {
        $("#hoverbuttonred").prepend('<div style="height:'+height+'%; float:right; padding-bottom:5%; padding-left:5px;"><input style="background: rgb('+rr+', '+rg+', '+rb+') no-repeat center center; box-shadow: 0px 9px 0px rgba('+(rr-20)+', '+(rg-20)+', '+(rb-20)+', '+1+'), 0px 9px 25px rgba(0,0,0,.7);"name="valred'+id+'" type="button" value="'+(value)+'%" class="newsmbetbuttonred" id="red'+id+'"></div> ');
        $("#hoverbuttonblue").prepend('<div style="height:'+height+'%; float:left;  padding-bottom:5%; padding-right:5px;"><input style="background: rgb('+br+', '+bg+', '+bb+') no-repeat center center; box-shadow: 0px 9px 0px rgba('+(br-20)+', '+(bg-20)+', '+(bb-20)+', '+1+'), 0px 9px 25px rgba(0,0,0,.7);"name="valblu'+id+'" type="button" value="'+(value)+'%" class="newsmbetbuttonblue" id="blu'+id+'"></div>');   
    }
}

function makeButton(button, buttontype, id, height, rr, rg, rb, br, bg, bb){

	value= localStorage[button];
	type = localStorage[buttontype];

	if(value===undefined)
		value=10;
        
    if(type===undefined)
        type = "$";
    localStorage[button] = value;
    localStorage[buttontype] = type;
	// HTML injection
    if( type == "$"){
        $("#redsbbuttonblock").prepend('<div style="height:'+height+'%; float:right; padding-bottom:5%; padding-left:5px;"><input style="background: rgb('+rr+', '+rg+', '+rb+') no-repeat center center; box-shadow: 0px 9px 0px rgba('+(rr-20)+', '+(rg-20)+', '+(rb-20)+', '+1+'), 0px 9px 25px rgba(0,0,0,.7);" name="valred'+id+'" type="button" value="$'+m(value,1)+'" class="newsmbetbuttonred" id="red'+id+'"></div> ');
        $("#blusbbuttonblock").prepend('<div style="height:'+height+'%; float:left;  padding-bottom:5%; padding-right:5px;"><input style="background: rgb('+br+', '+bg+', '+bb+') no-repeat center center; box-shadow: 0px 9px 0px rgba('+(br-20)+', '+(bg-20)+', '+(bb-20)+', '+1+'), 0px 9px 25px rgba(0,0,0,.7);" name="valblu'+id+'" type="button" value="$'+m(value,1)+'" class="newsmbetbuttonblue" id="blu'+id+'"></div>');         
        $("#hoverbuttonred").prepend('<div style="height:'+height+'%; float:right; padding-bottom:5%; padding-left:5px;"><input style="background: rgb('+rr+', '+rg+', '+rb+') no-repeat center center; box-shadow: 0px 9px 0px rgba('+(rr-20)+', '+(rg-20)+', '+(rb-20)+', '+1+'), 0px 9px 25px rgba(0,0,0,.7);" name="valred'+id+'" type="button" value="$'+m(value,1)+'" class="newsmbetbuttonred" id="red'+id+'"></div> ');
        $("#hoverbuttonblue").prepend('<div style="height:'+height+'%; float:left;  padding-bottom:5%; padding-right:5px;"><input style="background: rgb('+br+', '+bg+', '+bb+') no-repeat center center; box-shadow: 0px 9px 0px rgba('+(br-20)+', '+(bg-20)+', '+(bb-20)+', '+1+'), 0px 9px 25px rgba(0,0,0,.7);" name="valblu'+id+'" type="button" value="$'+m(value,1)+'" class="newsmbetbuttonblue" id="blu'+id+'"></div>');         
    } else {
        $("#redsbbuttonblock").prepend('<div style="height:'+height+'%; float:right; padding-bottom:5%; padding-left:5px;"><input style="background: rgb('+rr+', '+rg+', '+rb+') no-repeat center center; box-shadow: 0px 9px 0px rgba('+(rr-20)+', '+(rg-20)+', '+(rb-20)+', '+1+'), 0px 9px 25px rgba(0,0,0,.7);" name="valred'+id+'" type="button" value="'+(value)+'%" class="newsmbetbuttonred" id="red'+id+'" ></div>');
        $("#blusbbuttonblock").prepend('<div style="height:'+height+'%; float:left;  padding-bottom:5%; padding-right:5px;"><input style="background: rgb('+br+', '+bg+', '+bb+') no-repeat center center; box-shadow: 0px 9px 0px rgba('+(br-20)+', '+(bg-20)+', '+(bb-20)+', '+1+'), 0px 9px 25px rgba(0,0,0,.7);" name="valblu'+id+'" type="button" value="'+(value)+'%" class="newsmbetbuttonblue" id="blu'+id+'"></div>');
        $("#hoverbuttonred").prepend('<div style="height:'+height+'%; float:right; padding-bottom:5%; padding-left:5px;"><input style="background: rgb('+rr+', '+rg+', '+rb+') no-repeat center center; box-shadow: 0px 9px 0px rgba('+(rr-20)+', '+(rg-20)+', '+(rb-20)+', '+1+'), 0px 9px 25px rgba(0,0,0,.7);" name="valred'+id+'" type="button" value="'+(value)+'%" class="newsmbetbuttonred" id="red'+id+'"></div> ');
        $("#hoverbuttonblue").prepend('<div style="height:'+height+'%; float:left;  padding-bottom:5%; padding-right:5px;"><input style="background: rgb('+br+', '+bg+', '+bb+') no-repeat center center; box-shadow: 0px 9px 0px rgba('+(br-20)+', '+(bg-20)+', '+(bb-20)+', '+1+'), 0px 9px 25px rgba(0,0,0,.7);" name="valblu'+id+'" type="button" value="'+(value)+'%" class="newsmbetbuttonblue" id="blu'+id+'"></div>');   
    }
}
    
function requireNOTY(script) {
    $.ajax({
        url: script,
        dataType: "script",
        async: false,
        success: function () {
        if( localStorage["black"] === undefined){
            black = false; 
        } else { 
            black = !JSON.parse(localStorage["black"]);
        }
        
    $( "label:first" ).after('<input type="radio" id="chatPlus" name="radio" style="position:relative; width: inherit;" class="ui-helper-hidden-accessible"><label for="chatPlus" class="ui-state-active ui-button ui-widget ui-state-default ui-button-text-only ui-middle" role="button" aria-disabled="false" aria-pressed="false"><span class="ui-button-text">+</span></label>')
    $( "#chatRadio" ).buttonset("destroy");
    $( "#chatRadio" ).buttonset();
    $( "#chatWrapper" ).prepend('<iframe id="chatframePlus" width="325" style="float: right; display: block;" frameborder="0" scrolling="no" class="chat_embed" src="http://twitch.tv/chat/embed?channel=SaltyBetPlus&amp;popout_chat=true" "=""></iframe>');
    $( "#chatframePlus" ).hide();
    $( "#chatStream" ).click(function(){$( "#chatframeStream").show(); $( "#chatframePlus").hide(); });
    $( "#chatPlus" ).click(function(){$( "#chatframePlus").show(); $( "#chatframeStream").hide(); })
    $( "#chatOff" ).click(function(){$( "#chatframeStream").hide(); $( "#chatframePlus").hide(); })
    //$( "#chatframeStream" ).hide();    
        
    $("ul li:first ").append('<h2><a href="http://www.saltybet.com/leveling" class="menu" target="_blank">'+$("a").eq(2).html()+'</a><a href="http://www.saltybet.com/options" target="_blank">'+$("a").eq(3).html()+'</a><span id="leaderboardrank"><img src="images/potload.gif"></span></h2>');
    $("ul li h2:first").html("");
    //$( '#wagerwrapper .menu' ).addClass("hidden");   
    //$( '#lastbet' ).css("display", "none");
    $( 'head' ).prepend('<style>    #wagerwrapper br {        display: none;    }    .goldborder {        border: 2px solid darkgoldenrod !important;        border-top-color: darkgoldenrod !important;        border-top-style: solid;        border-top-width: 1px;\border-right-color: darkgoldenrod !important;        border-right-style: solid;        border-right-width: 1px;        border-bottom-color: darkgoldenrod !important;        border-bottom-style: solid;        border-bottom-width: 1px;        border-left-color: darkgoldenrod !important;\border-left-style: solid;        border-left-width: 1px;}</style>');
    $( 'head' ).prepend('<style>.newbetbuttonred, .newbetbuttonblue{    font-size: 16px;    letter-spacing: 1px;    font-weight: bold;    cursor: pointer;    color: white;    position: relative;    display: block;    padding: 4px;    -webkit-border-radius: 8px;    -moz-border-radius: 8px;    border-radius: 8px;    -webkit-box-shadow: 0px 9px 0px rgba(121, 60, 60, 1), 0px 9px 25px rgba(0,0,0,.7);    -moz-box-shadow: 0px 9px 0px rgba(121, 60, 60, 1), 0px 9px 25px rgba(0,0,0,.7);    box-shadow: 0px 9px 0px rgba(121, 60, 60, 1), 0px 9px 25px rgba(0,0,0,.7);    width: 140px;    height:100%;    text-align: center;    border:none;    background-color: rgb(176, 68, 68);    background-image: -moz-linear-gradient(rgb(221, 109, 109), rgb(176, 68, 68)) no-repeat top left;;    background-image: -webkit-linear-gradient(rgb(221, 109, 109), rgb(176, 68, 68)) no-repeat top left;;    background-image: linear-gradient(rgb(221, 109, 109), rgb(176, 68, 68)) no-repeat top left;;    background-repeat: repeat-x;     background: rgb(176, 68, 68) url(../images/bet1.png) no-repeat center center;    -webkit-transition: all .1s ease;    -moz-transition: all .1s ease;    -ms-transition: all .1s ease;    -o-transition: all .1s ease;    transition: all .1s ease;}.newbetbuttonblue{    -webkit-box-shadow: 0px 9px 0px rgba(13, 113, 204, 1), 0px 9px 25px rgba(0,0,0,.7);    -moz-box-shadow: 0px 9px 0px rgba(13, 113, 204, 1), 0px 9px 25px rgba(0,0,0,.7);    box-shadow: 0px 9px 0px rgba(13, 113, 204, 1), 0px 9px 25px rgba(0,0,0,.7);    background-color: rgb(52, 158, 255);    background-image: -moz-linear-gradient(rgb(52, 158, 255), rgb(81, 68, 176));    background-image: -webkit-linear-gradient(rgb(52, 158, 255), rgb(81, 68, 176));    background-image: linear-gradient(rgb(52, 158, 255), rgb(81, 68, 176));    background-repeat: repeat-x;    background: rgb(52, 158, 255) url(../images/bet1.png) no-repeat center center;}    .newbetbuttonred:active{    -webkit-box-shadow: 0px 3px 0px rgba(121, 60, 60, 1), 0px 3px 6px rgba(0,0,0,.9);    -moz-box-shadow: 0px 3px 0px rgba(121, 60, 60, 1), 0px 3px 6px rgba(0,0,0,.9);    box-shadow: 0px 3px 0px rgba(121, 60, 60, 1), 0px 3px 6px rgba(0,0,0,.9);    position: relative;    top: 6px;}.newbetbuttonblue:active{    -webkit-box-shadow: 0px 3px 0px rgba(13, 113, 204, 1), 0px 3px 6px rgba(0,0,0,.9);    -moz-box-shadow: 0px 3px 0px rgba(13, 113, 204, 1), 0px 3px 6px rgba(0,0,0,.9);    box-shadow: 0px 3px 0px rgba(13, 113, 204, 1), 0px 3px 6px rgba(0,0,0,.9);    position: relative;    top: 6px;}</style>');    
    $( 'head' ).prepend('<style>.newsmbetbuttonred, .newsmbetbuttonblue{    font-size: 16px;    letter-spacing: 1px;    font-weight: bold;    cursor: pointer;    color: white;    position: relative;    display: block;   -webkit-border-radius: 8px;    -moz-border-radius: 8px;    border-radius: 8px;    -webkit-box-shadow: 0px 9px 0px rgba(121, 60, 60, 1), 0px 9px 25px rgba(0,0,0,.7);    -moz-box-shadow: 0px 9px 0px rgba(121, 60, 60, 1), 0px 9px 25px rgba(0,0,0,.7);    box-shadow: 0px 9px 0px rgba(121, 60, 60, 1), 0px 9px 25px rgba(0,0,0,.7);    width: 70px;    height:100%;    text-align: center;    border:none;    background-color: rgb(176, 68, 68);    background-image: -moz-linear-gradient(rgb(221, 109, 109), rgb(176, 68, 68)) no-repeat top left;;    background-image: -webkit-linear-gradient(rgb(221, 109, 109), rgb(176, 68, 68)) no-repeat top left;;    background-image: linear-gradient(rgb(221, 109, 109), rgb(176, 68, 68)) no-repeat top left;;    background-repeat: repeat-x;     background: rgb(176, 68, 68) no-repeat center center;    -webkit-transition: all .1s ease;    -moz-transition: all .1s ease;    -ms-transition: all .1s ease;    -o-transition: all .1s ease;    transition: all .1s ease;}.newsmbetbuttonblue{    -webkit-box-shadow: 0px 9px 0px rgba(13, 113, 204, 1), 0px 9px 25px rgba(0,0,0,.7);    -moz-box-shadow: 0px 9px 0px rgba(13, 113, 204, 1), 0px 9px 25px rgba(0,0,0,.7);    box-shadow: 0px 9px 0px rgba(13, 113, 204, 1), 0px 9px 25px rgba(0,0,0,.7);    background-color: rgb(52, 158, 255);    background-image: -moz-linear-gradient(rgb(52, 158, 255), rgb(81, 68, 176));    background-image: -webkit-linear-gradient(rgb(52, 158, 255), rgb(81, 68, 176));    background-image: linear-gradient(rgb(52, 158, 255), rgb(81, 68, 176));    background-repeat: repeat-x;    background: rgb(52, 158, 255) no-repeat center center;}    .newsmbetbuttonred:active{    -webkit-box-shadow: 0px 3px 0px rgba(121, 60, 60, 1), 0px 3px 6px rgba(0,0,0,.9);    -moz-box-shadow: 0px 3px 0px rgba(121, 60, 60, 1), 0px 3px 6px rgba(0,0,0,.9);    box-shadow: 0px 3px 0px rgba(121, 60, 60, 1), 0px 3px 6px rgba(0,0,0,.9);    position: relative;    top: 6px;}.newsmbetbuttonblue:active{    -webkit-box-shadow: 0px 3px 0px rgba(13, 113, 204, 1), 0px 3px 6px rgba(0,0,0,.9);    -moz-box-shadow: 0px 3px 0px rgba(13, 113, 204, 1), 0px 3px 6px rgba(0,0,0,.9);    box-shadow: 0px 3px 0px rgba(13, 113, 204, 1), 0px 3px 6px rgba(0,0,0,.9);    position: relative;    top: 6px;}</style>');    
    
    //$( 'head' ).prepend('<style>.smredbutton, .smblubutton{    font-size: 16px;    letter-spacing: 1px;    font-weight: bold;    cursor: pointer;    color: white;    position: relative;    display: block;    padding: 4px;    -webkit-border-radius: 8px;    -moz-border-radius: 8px;    border-radius: 8px;    -webkit-box-shadow: 0px 9px 0px rgba(121, 60, 60, 1), 0px 9px 25px rgba(0,0,0,.7);    -moz-box-shadow: 0px 9px 0px rgba(121, 60, 60, 1), 0px 9px 25px rgba(0,0,0,.7);    box-shadow: 0px 9px 0px rgba(121, 60, 60, 1), 0px 9px 25px rgba(0,0,0,.7);    width: 70px;    height:40%;    text-align: center;    border:none;    background-color: rgb(176, 68, 68);  -webkit-transition: all .1s ease;    -moz-transition: all .1s ease;    -ms-transition: all .1s ease;    -o-transition: all .1s ease;    transition: all .1s ease;}.newbetbuttonblue{    -webkit-box-shadow: 0px 9px 0px rgba(13, 113, 204, 1), 0px 9px 25px rgba(0,0,0,.7);    -moz-box-shadow: 0px 9px 0px rgba(13, 113, 204, 1), 0px 9px 25px rgba(0,0,0,.7);    box-shadow: 0px 9px 0px rgba(13, 113, 204, 1), 0px 9px 25px rgba(0,0,0,.7);    background-color: rgb(52, 158, 255);    background-image: -moz-linear-gradient(rgb(52, 158, 255), rgb(81, 68, 176));    background-image: -webkit-linear-gradient(rgb(52, 158, 255), rgb(81, 68, 176));    background-image: linear-gradient(rgb(52, 158, 255), rgb(81, 68, 176));    background-repeat: repeat-x;    background: rgb(52, 158, 255) url(../images/bet1.png) no-repeat center center;}    .smredbutton:active{    -webkit-box-shadow: 0px 3px 0px rgba(121, 60, 60, 1), 0px 3px 6px rgba(0,0,0,.9);    -moz-box-shadow: 0px 3px 0px rgba(121, 60, 60, 1), 0px 3px 6px rgba(0,0,0,.9);    box-shadow: 0px 3px 0px rgba(121, 60, 60, 1), 0px 3px 6px rgba(0,0,0,.9);    position: relative;    top: 6px;}.smblubutton:active{    -webkit-box-shadow: 0px 3px 0px rgba(13, 113, 204, 1), 0px 3px 6px rgba(0,0,0,.9);    -moz-box-shadow: 0px 3px 0px rgba(13, 113, 204, 1), 0px 3px 6px rgba(0,0,0,.9);    box-shadow: 0px 3px 0px rgba(13, 113, 204, 1), 0px 3px 6px rgba(0,0,0,.9);    position: relative;    top: 6px;}</style>');    
    $( 'head' ).prepend('<style>#p1name, #p2name {font-size: 1.0em !important;}</style>');
    $( 'head' ).prepend('<style>.hidden {display: none !important;}</style>');
    $( 'head' ).prepend('<style>.short {height: 35px;}</style>');
    //$( 'head' ).prepend('<style>#hoverbuttonred, #hoverbuttonblue {display: none !important;} {display: none !important;}</style>');
    //$( 'head' ).prepend('<style>#hoverbuttonred {display: none; } #hoverred:hover ~ #hoverbuttonred {display: block !important;}</style>')
    $( 'head' ).prepend('<style>.redbutton {font-size: 14px;letter-spacing: 1px;font-weight: bold;cursor: pointer;color: white;position: relative;display: block;margin-right:5%;-webkit-border-radius: 8px;-moz-border-radius: 8px;border-radius: 8px;-webkit-box-shadow: 0px 9px 0px rgba(121, 60, 60, 1), 0px 9px 25px rgba(0,0,0,.7);-moz-box-shadow: 0px 9px 0px rgba(121, 60, 60, 1), 0px 9px 25px rgba(0,0,0,.7);box-shadow: 0px 9px 0px rgba(121, 60, 60, 1), 0px 9px 25px rgba(0,0,0,.7);width: 45%;height: 35px;text-align: center;border: none;background-color: rgb(176, 68, 68);background-image: -moz-linear-gradient(rgb(221, 109, 109), rgb(176, 68, 68)) no-repeat top left;background-image: -webkit-linear-gradient(rgb(221, 109, 109), rgb(176, 68, 68)) no-repeat top left;background-image: linear-gradient(rgb(221, 109, 109), rgb(176, 68, 68)) no-repeat top left;background-repeat: repeat-x;background: rgb(176, 68, 68) no-repeat center center;-webkit-transition: all .1s ease;-moz-transition: all .1s ease;-ms-transition: all .1s ease;-o-transition: all .1s ease;transition: all .1s ease;margin-bottom:5px;}.blubutton{-webkit-box-shadow: 0px 9px 0px rgba(13, 113, 204, 1), 0px 9px 25px rgba(0,0,0,.7);-moz-box-shadow: 0px 9px 0px rgba(13, 113, 204, 1), 0px 9px 25px rgba(0,0,0,.7);box-shadow: 0px 9px 0px rgba(13, 113, 204, 1), 0px 9px 25px rgba(0,0,0,.7);background-color: rgb(52, 158, 255);background-image: -moz-linear-gradient(rgb(52, 158, 255), rgb(81, 68, 176));background-image: -webkit-linear-gradient(rgb(52, 158, 255), rgb(81, 68, 176));background-image: linear-gradient(rgb(52, 158, 255), rgb(81, 68, 176));background-repeat: repeat-x;background: rgb(52, 158, 255)  no-repeat center center;width: 45%;height: 35px;text-align: center;border: none;-webkit-transition: all .1s ease;-moz-transition: all .1s ease;-ms-transition: all .1s ease;-o-transition: all .1s ease;transition: all .1s ease;font-size: 14px;letter-spacing: 1px;font-weight: bold;cursor: pointer;color: white;position: relative;display: block;margin-left:5%;-webkit-border-radius: 8px;-moz-border-radius: 8px;border-radius: 8px;margin-bottom:5px;}.redbutton:active{    -webkit-box-shadow: 0px 3px 0px rgba(121, 60, 60, 1), 0px 3px 6px rgba(0,0,0,.9);    -moz-box-shadow: 0px 3px 0px rgba(121, 60, 60, 1), 0px 3px 6px rgba(0,0,0,.9);    box-shadow: 0px 3px 0px rgba(121, 60, 60, 1), 0px 3px 6px rgba(0,0,0,.9);position: relative;top: 6px;}.blubutton:active{    -webkit-box-shadow: 0px 3px 0px rgba(13, 113, 204, 1), 0px 3px 6px rgba(0,0,0,.9);    -moz-box-shadow: 0px 3px 0px rgba(13, 113, 204, 1), 0px 3px 6px rgba(0,0,0,.9);    box-shadow: 0px 3px 0px rgba(13, 113, 204, 1), 0px 3px 6px rgba(0,0,0,.9);position: relative;top: 6px;}.protectedred{background-color: rgb(150, 68, 68);-webkit-box-shadow: 0px 9px 0px rgba(101, 60, 60, 1), 0px 9px 25px rgba(0,0,0,.7);-moz-box-shadow: 0px 9px 0px rgba(101, 60, 60, 1), 0px 9px 25px rgba(0,0,0,.7);box-shadow: 0px 9px 0px rgba(101, 60, 60, 1), 0px 9px 25px rgba(0,0,0,.7);}.protectedblu{-webkit-box-shadow: 0px 9px 0px rgba(13, 83, 164, 1), 0px 9px 25px rgba(0,0,0,.7);-moz-box-shadow: 0px 9px 0px rgba(13, 83, 164, 1), 0px 9px 25px rgba(0,0,0,.7);box-shadow: 0px 9px 0px rgba(13, 83, 164, 1), 0px 9px 25px rgba(0,0,0,.7);background-color: rgb(52, 128, 205);}.protectedred:active{  -webkit-box-shadow: 0px 3px 0px rgba(101, 60, 60, 1), 0px 3px 6px rgba(0,0,0,.9);    -moz-box-shadow: 0px 3px 0px rgba(101, 60, 60, 1), 0px 3px 6px rgba(0,0,0,.9);    box-shadow: 0px 3px 0px rgba(101, 60, 60, 1), 0px 3px 6px rgba(0,0,0,.9);}.protectedblu:active{    -webkit-box-shadow: 0px 3px 0px rgba(13, 83, 164, 1), 0px 3px 6px rgba(0,0,0,.9);    -moz-box-shadow: 0px 3px 0px rgba(13, 83, 164, 1), 0px 3px 6px rgba(0,0,0,.9);    box-shadow: 0px 3px 0px rgba(13, 83, 164, 1), 0px 3px 6px rgba(0,0,0,.9);}#redsbbuttonblock{padding-bottom:16px;width:230px;height:100%;position: relative;margin-right:0.5%;}#blusbbuttonblock{padding-bottom:16px;width:230px;height:100%;position: relative;margin-left:0.5%;}.bottom{margin-top:12px;position:relative;bottom:12px;}</style>');
    $( 'head' ).prepend('<style>.tipsy { font-size: 12px; position: absolute; padding: 5px; z-index: 100000; }  .tipsy-inner { background-color: #000; color: #FFF; max-width: 200px; padding: 5px 8px 4px 8px; text-align: center; } .tipsy-inner { border-radius: 3px; -moz-border-radius: 3px; -webkit-border-radius: 3px; } .tipsy-arrow { position: absolute; width: 0; height: 0; line-height: 0; border: 5px dashed #000; }  .tipsy-arrow-n { border-bottom-color: #000; }  .tipsy-arrow-s { border-top-color: #000; }  .tipsy-arrow-e { border-left-color: #000; }  .tipsy-arrow-w { border-right-color: #000; }.tipsy-n .tipsy-arrow { top: 0px; left: 50%; margin-left: -5px; border-bottom-style: solid; border-top: none; border-left-color: transparent; border-right-color: transparent; } .tipsy-nw .tipsy-arrow { top: 0; left: 10px; border-bottom-style: solid; border-top: none; border-left-color: transparent; border-right-color: transparent;}.tipsy-ne .tipsy-arrow { top: 0; right: 10px; border-bottom-style: solid; border-top: none;  border-left-color: transparent; border-right-color: transparent;}.tipsy-s .tipsy-arrow { bottom: 0; left: 50%; margin-left: -5px; border-top-style: solid; border-bottom: none;  border-left-color: transparent; border-right-color: transparent; }    .tipsy-sw .tipsy-arrow { bottom: 0; left: 10px; border-top-style: solid; border-bottom: none;  border-left-color: transparent; border-right-color: transparent; }.tipsy-se .tipsy-arrow { bottom: 0; right: 10px; border-top-style: solid; border-bottom: none; border-left-color: transparent; border-right-color: transparent; }  .tipsy-e .tipsy-arrow { right: 0; top: 50%; margin-top: -5px; border-left-style: solid; border-right: none; border-top-color: transparent; border-bottom-color: transparent; }.tipsy-w .tipsy-arrow { left: 0; top: 50%; margin-top: -5px; border-right-style: solid; border-left: none; border-top-color: transparent; border-bottom-color: transparent; }</style>');
    $( 'head' ).prepend('<style>.black-body{background-color: #212121; color: #CDCDCD; } .black-status{background: linear-gradient(#414141, #252525); color: rgb(187, 187, 187);}</style>');
    $( 'head' ).prepend('<style> body ::-webkit-scrollbar { width: 12px;}  ::-webkit-scrollbar-track { background-color: #FFFFFF !important; }::-webkit-scrollbar-thumb { background-color: #212121 !important; } ::-webkit-scrollbar-thumb:hover { background-color: #424242 !important;} </style>');
    $( 'head' ).prepend('<style> .options{ position: absolute; top: 41px; right: 0px; width: 30%; height: 500px;}</style>');
    $( 'head' ).prepend('<link rel="stylesheet" href="http://code.jquery.com/ui/1.10.3/themes/smoothness/jquery-ui.css">');
    toggleBlack();
    $("#logo").removeAttr("href");
    $( "#chat" ).css("background-color", "#CDCDCD");
    //$( '#logo ').html('<img src="http://www.planetbanhammer.com/images/smallogo2.png">');
    
    $( 'body' ).append('<div id="options" class="betcard redborder" style="\
        position: absolute;\
        top: 41px;\
        left: 0px;\
        width:auto !important;\
        height:auto !important;\
        display: none;\
        color: white;\
    "><button id="toggle">Toggle Notifications</button></br>\
    <button id="toggleButtons">Toggle Hover Buttons</button></br>\
    <div>\
     <div style="float:left;">\
    Button 1: </br>\
    <input name="but1" type="text" id="but1val"><input name="but1dol" type="button" value="$" id="but1dol"><input name="but1per" type="button" value="%" id="but1per"></br>\
    Button 2: </br>\
    <input name="but2" type="text" id="but2val"><input name="but2dol" type="button" value="$" class="" id="but2dol"><input name="but2per" type="button" value="%" class="" id="but2per"></br>\
    Button 3: </br>\
    <input name="but3" type="text" id="but3val"><input name="but3dol" type="button" value="$" class="" id="but3dol"><input name="but3per" type="button" value="%" class="" id="but3per"></br>\
    Button 4: </br>\
    <input name="but4" type="text" id="but4val"><input name="but4dol" type="button" value="$" class="" id="but4dol"><input name="but4per" type="button" value="%" class="" id="but4per"></br>\
    Button 5: </br>\
    <input name="but5" type="text" id="but5val"><input name="but5dol" type="button" value="$" class="" id="but5dol"><input name="but5per" type="button" value="%" class="" id="but5per"></br>\
    Button 6: </br>\
    <input name="but6" type="text" id="but6val"><input name="but6dol" type="button" value="$" class="" id="but6dol"><input name="but6per" type="button" value="%" class="" id="but6per"></br>\
    </div><div style="float:right;">\
    Hover Button 1: </br>\
    <input name="but7" type="text" id="but7val"><input name="but7dol" type="button" value="$" id="but7dol"><input name="but7per" type="button" value="%" id="but7per"></br>\
    Hover Button 2: </br>\
    <input name="but8" type="text" id="but8val"><input name="but8dol" type="button" value="$" class="" id="but8dol"><input name="but8per" type="button" value="%" class="" id="but8per"></br>\
    Hover Button 3: </br>\
    <input name="but9" type="text" id="but9val"><input name="but9dol" type="button" value="$" class="" id="but9dol"><input name="but9per" type="button" value="%" class="" id="but9per"></br>\
    Hover Button 4: </br>\
    <input name="but10" type="text" id="but10val"><input name="but10dol" type="button" value="$" class="" id="but10dol"><input name="but10per" type="button" value="%" class="" id="but10per"></br>\
    Hover Button 5: </br>\
    <input name="but11" type="text" id="but11val"><input name="but11dol" type="button" value="$" class="" id="but11dol"><input name="but11per" type="button" value="%" class="" id="but11per"></br>\
    Hover Button 6: </br>\
    <input name="but12" type="text" id="but12val"><input name="but12dol" type="button" value="$" class="" id="but12dol"><input name="but12per" type="button" value="%" class="" id="but12per"></br>\
    </div>\
    </div>\
    <div style="clear:both;">\
    <div style="float:left; width:50%;">\
    RED: <input style="width:10%;" type="text" id="rr"> <input style="width:10%;" type="text" id="rg"> <input style="width:10%;" type="text" id="rb"><br/>\
    BLUE:<input style="width:10%;" type="text" id="br"> <input style="width:10%;" type="text" id="bg"> <input style="width:10%;" type="text" id="bb">\
    </div>\
    <div style="">\
    <input name="but1" type="button" value="1" class="" id="but1"><input name="but2" type="button" value="2" class="" id="but2"><input name="but3" type="button" value="3" class="" id="but3"><input name="but4" type="button" value="4" class="" id="but4"><input name="but5" type="button" value="5" class="" id="but5"><input name="but6" type="button" value="6" class="" id="but6"><br/>\
    <input name="but7" type="button" value="7" class="" id="but7"><input name="but8" type="button" value="8" class="" id="but8"><input name="but9" type="button" value="9" class="" id="but9"><input name="but10" type="button" value="10" class="" id="but10"><input name="but11" type="button" value="11" class="" id="but11"><input name="but12" type="button" value="12" class="" id="but12">\
    </div>\
    </div>\
    <div style="clear:both;">\
    '+version+'\
    </div>\
    </div>');
    
    $( '#sbettorswrapper' ).css({'overflow-y': 'auto'});
    
    $(".betcard").eq(0).prepend('<div id="hoverred" class="right" style="height: 95%;"><input name="valred0" type="button" value="" class="newbetbuttonred" id="redbtn0"><div id="hoverbuttonred" style="position:absolute;bottom:0px;left:33%;margin:0px;padding:5px;width:230px;height:auto !important;z-index:1;" class="hidden betcard left redborder"></div></div>');
    $(".betcard").eq(2).prepend('<div id="hoverblu" class="left" style="height: 95%;"><input name="valblu0" type="button" value="" class="newbetbuttonblue" id="bluebtn0"><div id="hoverbuttonblue" style="position:absolute;bottom:0px;right:33%;margin:0px;padding:5px;width:230px;height:auto !important;z-index:1;" class="hidden betcard right blueborder"></div></div>');
     
    $( ".betbuttonred" ).hide();
    $( ".betbuttonblue" ).hide();
    
    makeButtons();
    
    
    document.getElementById('logo').onclick = toggleBlack;
    //document.getElementById('notification').onclick = notyOptions;
    //$(".betcard.left.redborder").append('<div id="redinfo" class="left" style="margin-left:25px;text-align:center;"></div>');   
    //$(".betcard.right.blueborder").append('<div id="blueinfo" class="right" style="margin-right:25px;text-align:center;"></div>');  


            lastBet = localStorage["lastBet"];
            oldRank = localStorage["oldRank"];
            lastAnnounce = localStorage["lastAnnounce"];
            if( localStorage["NOTIFICATIONS"] === undefined ){
                noti = true;
            } else {
                noti = JSON.parse(localStorage["NOTIFICATIONS"]);
            }
            
            if( localStorage["sbHover"] === undefined ){
                hover = false;
                localStorage["sbHover"] = hover;
            } else {
                hover = JSON.parse(localStorage["sbHover"]);
            }
           
            require("https://raw.github.com/jaz303/tipsy/master/src/javascripts/jquery.tipsy.js");
            require("https://raw.github.com/needim/noty/master/js/noty/layouts/top.js");
            require("http://planetbanhammer.com/inline.js");
            require("http://planetbanhammer.com/bottomLeft.js");
            require("http://planetbanhammer.com/topRight.js");
            require("http://planetbanhammer.com/default.js");
            require("http://code.jquery.com/ui/1.10.3/jquery-ui.js");
            
            update();
            
            /*$( 'body' ).prepend('<div id="dialog" title="Options">\
                    <p>Colour Scheme</p>\
                    <div id="radio">\
                        <input type="radio" id="radio1" name="radio"><label for="radio1">Black</label>\
                        <input type="radio" id="radio2" name="radio" checked="checked"><label for="radio2">White</label>\
                    </div>\
                </div>');
                
            $( "#radio" ).buttonset();
            $( "#radio1" ).click(function() { black = true; toggleBlack(); });
            $( "#radio2" ).click(function() { black = false; toggleBlack(); });
            $( "#dialog" ).dialog();*/
            
            $("ul:first").append("<li><button id='optionsbut'>+</button></li>");
            document.getElementById('optionsbut').onclick = function(){ $("#options").toggle(); };
            document.getElementById('toggle').onclick = toggleNoti;
            document.getElementById('toggleButtons').onclick = function() { 
            hover = !hover; localStorage['sbHover'] = hover;
                if ( hover === true ){
        var first = noty({layout: 'topRight', text: 'Hover buttons have been enabled!', timeout: 2500, type: 'success'});
    } else {
        var first = noty({layout: 'topRight', text: 'Hover buttons have been disabled!', timeout: 2500, type: 'success'});
    }
            };
            $("ul:first").append('<li id="pan"><img src="http://planetbanhammer.com/images/pan.png"></li>');
            document.getElementById('pan').onclick = togPan;
            update();
            getAnn();
        },
        error: function () {
            throw new Error("Could not load script " + script);
        }
    });
}

console.log(version+" Loaded");
