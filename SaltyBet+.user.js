// ==UserScript==
// @name        SaltyBet+
// @namespcae   sb+
// @description Enhances Saltybet.
// @include     http://www.saltybet.com/
// @version     2.0.8
// @grant       none
// @run-at document-end
// ==/UserScript==

//Changes the slider to be x=(y^3/100^3)*b instead of x=(y/100)*b
//Changes the slider to be x=(y^3/100^3)*b instead of x=(y/100)*b
//Where x = wager, y = slider distance (0->100) and b = balance

function setAspectRatioSBP() {
        $('#videoEmbed').each(function() {
            $(this).width($(this).height()*(4/3) -32);
        });
        $('#sbettorswrapper, #chatWrapper').css('width',(($('body').width()-$('#videoEmbed').width())/2));
        //$('#sbettors1, #sbettors2').css('width',(($('#sbettorswrapper').width())/2) - 10);
        }
        
setAspectRatioSBP();   
$(window).resize(setAspectRatioSBP);

var betstate;
var x;
var p1n;
var p2n;
var p1te;
var p2te;
var p1to;
var p2to;
var varAlert;
var balance = $("#b").val();
var u = $("#u").val();
var _data;

var socket = io.connect("http://www-cdn-twitch.saltybet.com:8000");
socket.on("message", function (data) {
    try {
        $('input[type="submit"]').attr("disabled", "disabled");
        updateState()
    } catch (e) {
        console.log("invalid data");
        return
    }
});

function updateState() {
    $.ajax({
        type: "get",
        url: "../state.json",
        contentType: "application/json; charset=utf-8",
        data: "",
        dataType: "json",
        cache: "false",
        timeout: 30000,
        success: function (data) {
            betstate = data.status;
            x = data.x;
            p1n = data.p1name;
            p2n = data.p2name;
            p1te = data.p1total;
            p2te = data.p2total;
            p1to = parseInt(p1te.replace(/,/g, ""));
            p2to = parseInt(p2te.replace(/,/g, ""));
            varAlert = data.alert;
            $("#p1name").text(p1n);
            $("#p2name").text(p2n);
            $("#player1wager").text("$" + p1te || 0);
            $("#player2wager").text("$" + p2te || 0);
            if(localStorage["buttons"] === '1' ){
                    $( "#redsbbuttonblock" ).fadeOut("fast");
                    $( "#blusbbuttonblock" ).fadeOut("fast");
            }
            if (!varAlert) {
                if (betstate == "open") {
                    $("#player1wager").hide().html('<img src="images/potload.gif" />').fadeIn("slow");
                    $("#player2wager").hide().html('<img src="images/potload.gif" />').fadeIn("slow");
                    $('input[type="submit"]').removeClass("greybutton").removeClass("greyerbutton");
                    $('input[type="submit"]').removeAttr("disabled");
                    $("#sbpbettorscount").html("");
                    $("#betstatus").hide().html('<span class="greentext">Bets are OPEN!</span>').fadeIn("slow");
                    if( $("#lastbet").text().indexOf("$") > -1 ) {
                        $( "#lastbet" ).html( 'N/A' );
                    }
                    $( "#odds" ).html( 'N/A' );                
                    if( pan == true ){
                        $( "#wager" ).fadeIn("slow");
                        $( ".hudtext:not(:first)" ).fadeOut("slow");
                        $( "#lastbet" ).fadeOut("slow");
                        $( "#odds" ).fadeOut("slow");                             
                    } else {
                        $( "#wager" ).fadeIn("slow");
                        $( ".hudtext:not(:first)" ).fadeIn("slow");
                        $( "#lastbet" ).fadeIn("slow");
                        $( "#odds" ).hide().removeClass("hidden").fadeIn("slow");
                    }
                    if ( g === true) {
                        getLastBet();
                    }
                    if(state != "open"){
                        state = "open";
                        $( "#balance" ).load("http://www.saltybet.com #balance");                                
                        $("#sbpbettors1").hide().html('<span class="redtext">'+data["p1name"]+'</span><div id="sbpbettors1" style="border-top: 1px solid rgb(176, 68, 68);"><img src="images/potload.gif"></div>').fadeIn("slow");
                        $("#sbpbettors2").hide().html('<span class="bluetext">'+data["p2name"]+'</span><div id="sbpbettors1" style="border-top: 1px solid rgb(2, 81, 155);"><img src="images/potload.gif"></div>').fadeIn("slow");
                        if( $(".goldtext:first").text() === $("a").eq(3).text() ){
                            g = true;
                        } else {
                            g = false;
                        }
                        getStats();               
                        updateStats()
                    }                        
                } else {
                    if (betstate == "locked") {
                    if( pan == true ){
                        $( "#wager" ).fadeOut("slow");
                        $( ".hudtext:not(:first)" ).fadeIn("slow");
                        $( "#lastbet" ).fadeIn("slow");
                        $( "#odds" ).hide().removeClass("hidden").fadeIn("slow");
                    } else {
                        $( "#wager" ).fadeIn("slow");
                        $( ".hudtext:not(:first)" ).fadeIn("slow");
                        $( "#lastbet" ).fadeIn("slow");
                        $( "#odds" ).fadeIn("slow"); 
                    }
                    $('input[type="submit"]').addClass("greybutton");                    
                    $('input[type="submit"]').attr("disabled", "disabled");
                    $('#bluebtn0').removeClass("greybutton")
                    $('#redbtn0').removeClass("greybutton")
                    $('#redbtn0').addClass("greyerbutton");
                    $('#bluebtn0').addClass("greyerbutton");
                    $("#betstatus").hide().html("Bets are locked until the next match.").fadeIn("slow")
                    if( state != "locked"){
                        updateData();                        
                        $('#bluebtn0').removeClass("greybutton")
                        $('#redbtn0').removeClass("greybutton")
                        getOdds();
                        }
                    } else {
                        betstate == "1" ? $("#betstatus").hide().html('<span class="redtext">' + p1n + " wins! Payouts to Team Red.</span>").fadeIn("slow") : $("#betstatus").hide().html('<span class="bluetext">' + p2n + " wins! Payouts to Team Blue.</span>").fadeIn("slow")
                    }
                    //$( "#slider-range-min" ).slider( "option", "max", 0 );
                    //$( "#slider-range-min" ).slider( "option", "value", 0 );
                }
            } else {
                $("#betstatus").hide().html(varAlert).fadeIn("slow")
            } if (x == 1) {
                //updateData();
            }
        }
    })
}

function updateData() {
    $.ajax({
        type: "get",
        url: "../zdata.json",
        contentType: "application/json; charset=utf-8",
        data: "",
        dataType: "json",
        cache: "false",
        timeout: 20000,
        success: function (data) {
            if (betstate == "locked") {            
                $("#sbpbettors1").html('<span class="redtext">'+data.p1name+'</span><div id="sbpbetlisthl1" style="border-top: 1px solid rgb(176, 68, 68);"></div><div id="sbpbetlist1" style="border-top: 1px solid rgb(176, 68, 68);"></div>');
                $("#sbpbettors2").html('<span class="bluetext">'+data.p2name+'</span><div id="sbpbetlisthl2" style="border-top: 1px solid rgb(2, 81, 155);"></div><div id="sbpbetlist2" style="border-top: 1px solid rgb(2, 81, 155);"></div>');
                getOdds();
                var watch = JSON.parse(localStorage.getItem("watch"));
                if ( watch === null) {
                    watch = ["kdt"];
                }
                var p1wager = data.p1total.replace(/,/g , "");
                var p2wager = data.p2total.replace(/,/g , "");
                var p1 = ([],[]);
                var p2 = ([],[]);
                $.each( data, function(i, val){
                    var z = 0;
                    $.each( watch, function(i, v){
                        if( v === val.n ){ z = 1 };
                    });
                    if(val.p == 1){
                        var tempArr = [val.w, val.b, val.n, val.g, val.r, z];
                        p1.push(tempArr);
                    }
                    if(val.p == 2){
                        var tempArr = [val.w, val.b, val.n, val.g, val.r, z];
                        p2.push(tempArr);
                    }            
                });
                p1.sort(function(a,b) {return b[0]-a[0];});
                p2.sort(function(a,b) {return b[0]-a[0];});
                var odd=true;
                var hlodd=true;
                $.each( p1, function(i, val) {
                    var name = '<strong>'+val[2]+'</strong>';
                    var dash = '<span class="redtext"> - </span>';
                    var wager = '<span class="greentext">$'+abbrNum(val[0], 1)+'</span>';
                    var percent = (val[0]/val[1])*100
                    var postwager = '<span class="greentext"> ('+Math.ceil(percent)+'% / $'+abbrNum(val[1], 1)+')</span>';
                    var gain = Math.ceil((parseInt(val[0])/parseInt(p1wager))*parseInt(p2wager));
                    if( val[0] == val[1] ){
                        postwager = '<span class="greentext"> (<strong class="redtext">'+Math.ceil(percent)+'%</strong> / $'+abbrNum(val[1], 1)+')</span>';
                    }  
                    var img = '<img src="../images/ranksmall/rank'+val[4]+'.png" class="levelimage">';
                    var cssClass = '';
                    if( val[2] == $("a").eq(3).text() ) {
                        $( "#lastbet" ).html( '$'+val[0]+' on <span class="redtext">'+data.p1name+'</span>');
                        if( parseInt(p1wager) > parseInt(p2wager) ){
                            $( "#odds" ).html('<span class="redtext">' + (p1wager/p2wager).toFixed(1) + '</span>:<span class="bluetext">1</span> (<span class="ngoldtext">$'+gain+'</span>)');
                        } else {
                            $( "#odds" ).html( '<span class="redtext">1</span>:<span class="bluetext">' + (p2wager/p1wager).toFixed(1) +'</span> (<span class="ngoldtext">$'+gain+'</span>)');
                        }
                    };
                    if (val[4] == 0){ img = ""; }                
                    if(val[3] == 1){ name = '<strong class="goldtext">'+val[2]+'</strong>'; }
                    if( val[5] == 1 ) {
                        hlodd = !hlodd;
                        name = '<strong class="redtext">'+val[2]+'</strong>';
                        if( black == false ){
                            if( hlodd == true){
                                cssClass = "redblackoddhl"
                            } else {
                                cssClass = "redblackevenhl"
                            }
                        } else {
                            wager = '<span class="ngreentext">$'+abbrNum(val[0], 1)+'</span>';
                            postwager = '<span class="ngreentext"> ('+Math.ceil(percent)+'% / $'+abbrNum(val[1], 1)+')</span>';
                            if( val[0] == val[1] ){
                                postwager = '<span class="ngreentext"> (<strong class="redtext">'+Math.ceil(percent)+'%</strong> / $'+abbrNum(val[1], 1)+')</span>';
                            } 
                            if( hlodd == true){
                                cssClass = "redwhiteoddhl"
                            } else {
                                cssClass = "redwhiteevenhl"
                            }
                        }
                        $("#sbpbetlisthl1").append('<div class="'+val[2]+' '+cssClass+'">'+img+'<p>'+name+dash+wager+postwager+'</p><p class="'+val[2]+'sub hidden ngreentext">$'+val[0]+' -> $'+gain.toFixed(0)+'</p></div>');
                        $( '.'+val[2] ).mouseenter(function(){ $('.'+val[2]+'sub' ).removeClass('hidden'); });
                        $( '.'+val[2] ).mouseleave(function(){ $('.'+val[2]+'sub').addClass('hidden'); });
                        $( '.'+val[2] ).click(  function() {    
                            if ($.inArray( val[2], watch) == -1){
                                watch.push( val[2] );
                                localStorage["watch"] = JSON.stringify(watch);
                                updateData();
                            } else {
                                var index = watch.indexOf( val[2] );
                                if (index > -1) {
                                    watch.splice(index, 1);
                                    localStorage["watch"] = JSON.stringify(watch);
                                }
                                updateData();
                            }
                        });
                    } else {
                        odd = !odd;
                        if( black == false ){
                            if( odd == true){
                                cssClass = "redblackodd"
                            } else {
                                cssClass = "redblackeven"
                            }
                        } else {
                            if(val[3] == 1){ name = '<strong class="ngoldtext">'+val[2]+'</strong>'; }
                                wager = '<span class="ngreentext">$'+abbrNum(val[0], 1)+'</span>';
                                postwager = '<span class="ngreentext"> ('+Math.ceil(percent)+'% / $'+abbrNum(val[1], 1)+')</span>';
                                if( val[0] == val[1] ){
                                    postwager = '<span class="ngreentext"> (<strong class="redtext">'+Math.ceil(percent)+'%</strong> / $'+abbrNum(val[1], 1)+')</span>';
                                } 
                                if( odd == true){
                                    cssClass = "redwhiteodd"
                                } else {
                                    cssClass = "redwhiteeven"
                                }
                        }
                        $("#sbpbetlist1").append('<div class="'+val[2]+' '+cssClass+'">'+img+'<p>'+name+dash+wager+postwager+'</p><p class="'+val[2]+'sub hidden ngreentext">$'+val[0]+' -> $'+gain.toFixed(0)+'</p></div>');
                        $( '.'+val[2] ).mouseenter(function(){ $('.'+val[2]+'sub' ).removeClass('hidden'); });
                        $( '.'+val[2] ).mouseleave(function(){ $('.'+val[2]+'sub').addClass('hidden'); });
                        $( '.'+val[2] ).click(  function() {    
                            if ($.inArray( val[2], watch) == -1){
                                watch.push( val[2] );
                                localStorage["watch"] = JSON.stringify(watch);
                                updateData();
                            } else {
                                var index = watch.indexOf( val[2] );
                                if (index > -1) {
                                    watch.splice(index, 1);
                                    localStorage["watch"] = JSON.stringify(watch);
                                }
                                updateData();
                            }
                        });
                    }
                });
                $.each( p2, function(i, val) {            
                    var name = '<strong>'+val[2]+'</strong>';
                    var dash = '<span class="bluetext"> - </span>';
                    var wager = '<span class="greentext">$'+abbrNum(val[0], 1)+'</span>';
                    var gain = Math.ceil((parseInt(val[0])/parseInt(p2wager))*parseInt(p1wager));
                    var percent = (val[0]/val[1])*100
                    var postwager = '<span class="greentext"> ('+Math.ceil(percent)+'% / $'+abbrNum(val[1], 1)+')</span>';
                    if( val[0] == val[1] ){
                        postwager = '<span class="greentext"> (<strong class="redtext">'+Math.ceil(percent)+'%</strong> / $'+abbrNum(val[1], 1)+')</span>';
                    }   
                    var img = '<img src="../images/ranksmall/rank'+val[4]+'.png" class="levelimage">';
                    var cssClass = '';
                    if( val[2] == $("a").eq(3).text() ) {
                        $( "#lastbet" ).html( '$'+val[0]+' on <span class="bluetext">'+data.p2name+'</span>');
                        if( parseInt(p1wager) > parseInt(p2wager) ){
                            $( "#odds" ).html('<span class="redtext">' + (p1wager/p2wager).toFixed(1) + '</span>:<span class="bluetext">1</span> (<span class="ngoldtext">$'+gain+'</span>)');
                        } else {
                            $( "#odds" ).html( '<span class="redtext">1</span>:<span class="bluetext">' + (p2wager/p1wager).toFixed(1) +'</span> (<span class="ngoldtext">$'+gain+'</span>)');
                        }
                    };
                    if (val[4] == 0){ img = ""; }                
                    if(val[3] == 1){ name = '<strong class="goldtext">'+val[2]+'</strong>'; }
                    if( val[5] == 1 ) {
                        hlodd = !hlodd;
                        name = '<strong class="bluetext">'+val[2]+'</strong>';
                        if( black == false ){
                            if( hlodd == true){
                                cssClass = "blublackoddhl"
                            } else {
                                cssClass = "blublackevenhl"
                            }
                        } else {
                            wager = '<span class="ngreentext">$'+abbrNum(val[0], 1)+'</span>';
                            postwager = '<span class="ngreentext"> ('+Math.ceil(percent)+'% / $'+abbrNum(val[1], 1)+')</span>';
                            if( val[0] == val[1] ){
                                postwager = '<span class="ngreentext"> (<strong class="redtext">'+Math.ceil(percent)+'%</strong> / $'+abbrNum(val[1], 1)+')</span>';
                            } 
                            if( hlodd == true){
                                cssClass = "bluwhiteoddhl"
                            } else {
                                cssClass = "bluwhiteevenhl"
                            }
                        }
                        $("#sbpbetlisthl2").append('<div class="'+val[2]+' '+cssClass+'">'+img+'<p>'+name+dash+wager+postwager+'</p><p class="'+val[2]+'sub hidden ngreentext">$'+val[0]+' -> $'+gain.toFixed(0)+'</p></div>');
                        $( '.'+val[2] ).mouseenter(function(){ $('.'+val[2]+'sub' ).removeClass('hidden'); });
                        $( '.'+val[2] ).mouseleave(function(){ $('.'+val[2]+'sub').addClass('hidden'); });
                        $( '.'+val[2] ).click(  function() {    
                            if ($.inArray( val[2], watch) == -1){
                                watch.push( val[2] );
                                localStorage["watch"] = JSON.stringify(watch);
                                updateData();
                            } else {
                                var index = watch.indexOf( val[2] );
                                if (index > -1) {
                                    watch.splice(index, 1);
                                    localStorage["watch"] = JSON.stringify(watch);
                                }
                                updateData();
                            }
                        });
                    } else {
                        odd = !odd;
                        if( black == false ){
                            if( odd == true){
                                cssClass = "blublackodd"
                            } else {
                                cssClass = "blublackeven"
                            }
                        } else {
                            if(val[3] == 1){ name = '<strong class="ngoldtext">'+val[2]+'</strong>'; }
                            wager = '<span class="ngreentext">$'+abbrNum(val[0], 1)+'</span>';
                            postwager = '<span class="ngreentext"> ('+Math.ceil(percent)+'% / $'+abbrNum(val[1], 1)+')</span>';
                            if( val[0] == val[1] ){
                                postwager = '<span class="ngreentext"> (<strong class="redtext">'+Math.ceil(percent)+'%</strong> / $'+abbrNum(val[1], 1)+')</span>';
                            } 
                            if( odd == true){
                                cssClass = "bluwhiteodd"
                            } else {
                                cssClass = "bluwhiteeven"
                            }
                        }
                        $("#sbpbetlist2").append('<div class="'+val[2]+' '+cssClass+'">'+img+'<p>'+name+dash+wager+postwager+'</p><p class="'+val[2]+'sub hidden ngreentext">$'+val[0]+' -> $'+gain.toFixed(0)+'</p></div>');
                        $( '.'+val[2] ).mouseenter(function(){ $('.'+val[2]+'sub' ).removeClass('hidden'); });
                        $( '.'+val[2] ).mouseleave(function(){ $('.'+val[2]+'sub').addClass('hidden'); });
                        $( '.'+val[2] ).click(  function() {    
                        if ($.inArray( val[2], watch) == -1){
                            watch.push( val[2] );
                            localStorage["watch"] = JSON.stringify(watch);
                            updateData();
                        } else {
                            var index = watch.indexOf( val[2] );
                            if (index > -1) {
                                watch.splice(index, 1);
                                localStorage["watch"] = JSON.stringify(watch);
                            }
                            updateData();
                        }
                        });
                    }
                });
                $( "#sbpbettorscount" ).html('Salty Bettors : <strong>' + (p1.length+p2.length) +'</strong> (<strong class="redtext">' + p1.length + '</strong> | <strong class="bluetext">'+p2.length+'</strong>)</br>');
                state="locked";
                
                //vanilla
                /*$("#lastbet").hide().html("N/A").fadeIn("slow");
                if (typeof data[u] != "undefined") {
                    lastWager = data[u]["w"];
                    lastPlayer = data[u]["p"];
                    if (p1to >= p2to) {
                        odds = ('<span class="redtext">' + (Math.round((p1to / p2to) * 10) / 10) + "</span>:1")
                    } else {
                        odds = ('1:<span class="bluetext">' + (Math.round((p2to / p1to) * 10) / 10) + "</span>")
                    }
                    payout = (data[u]["p"] == "1" ? ((lastWager / p1to) * p2to) : ((lastWager / p2to) * p1to));
                    payout = Math.ceil(payout);
                    $("#odds").html(odds + ' (<span class="greentext">$' + (payout || 0) + "</span>)");
                    (lastPlayer == "1" ? $("#lastbet").hide().html("$" + lastWager + ' on <span class="redtext">' + p1n + "</span>").fadeIn("slow") : $("#lastbet").hide().html("$" + lastWager + ' on <span class="bluetext">' + p2n + "</span>").fadeIn("slow"))
                }
                $("#sbettorscount").html("");
                $("#sbettors1").hide().html('<span class="redtext"><strong>' + p1n + '</strong></span><div id="bettors1"></div>').fadeIn("slow");
                $("#sbettors2").hide().html('<span class="bluetext"><strong>' + p2n + '</strong></span><div id="bettors2"></div>').fadeIn("slow");
                var bettors = [];
                var count = 0;
                var level;
                var mylevel;
                var levelimage;
                for (var p in data) {
                    bettors[+p] = data[p];
                    if (data[p] != null) {
                        if (data[p]["w"] != null) {
                            count++
                        }
                    }
                }
                bettors.sort(function (a, b) {
                    return parseFloat(b.w) - parseFloat(a.w)
                });
                $("#sbettorscount").html("Salty Bettors:<strong> " + count + "</strong><br/>");
                $.each(bettors, function (i, v) {
                    if (bettors[i] != null) {
                        levelimage = "";
                        level = bettors[i]["r"];
                        if (data[u] != null) {
                            if (data[u]["n"] == bettors[i]["n"]) {
                                mylevel = level
                            }
                        }
                        if (level > 0) {
                            levelimage = '<img src="../images/ranksmall/rank' + level + '.png" class="levelimage">'
                        }
                        if (bettors[i]["p"] == "1") {
                            $("#bettors1").append(levelimage + "<p><strong " + (bettors[i]["g"] == 1 ? 'class="goldtext"' : "") + ">" + bettors[i]["n"] + '</strong> <span class="redtext">-</span> <span class="greentext">$' + bettors[i]["w"] + "</span> <span"  + (bettors[i]["w"] == bettors[i]["b"] ? ' class="redtext"' : "") +  ">(" + (Math.ceil((bettors[i]["w"] / bettors[i]["b"]) * 100))  + "%)</span></p>")
                        } else {
                            if (bettors[i]["p"] == "2") {
                                $("#bettors2").append(levelimage + "<p><strong " + (bettors[i]["g"] == 1 ? 'class="goldtext"' : "") + ">" + bettors[i]["n"] + '</strong> <span class="bluetext">-</span> <span class="greentext">$' + bettors[i]["w"] + "</span> <span" + (bettors[i]["w"] == bettors[i]["b"] ? ' class="redtext"' : "") +  ">(" + (Math.ceil((bettors[i]["w"] / bettors[i]["b"]) * 100))  + "%)</span></p>")
                            }
                        }
                    }
                })
            } else {
                if (typeof data[u] != "undefined") {
                    balance = data[u]["b"] || 0;
                    $("#balance").hide().html(balance).fadeIn("slow");
                    if (mylevel > 0) {
                        $("#rank").html('<img src="../images/ranksmall/rank' + mylevel + '.png" class="levelimage">')
                    }
                    $("#wager").rules("add", {
                        max: balance
                    })
                    
                }
            }*/
        }
        }
    });
}

function buttonPress( p ) {
        if (betstate == "locked") {
            alert("Bets are locked.")
        } else {
            if (isNaN(Number($("#wager").val())) == true) {
                alert("Please enter a number.")
            } else {
                var selectedPlayer = p;
                $("#selectedplayer").val(selectedPlayer);
                if(selectedPlayer === 'player1')
                {
                    $("#lastbet").hide().html('<img src="../images/loadred.GIF">').fadeIn("slow")
                } else if(selectedPlayer === 'player2') {
                    $("#lastbet").hide().html('<img src="../images/loadblue.GIF">').fadeIn("slow")
                }
                if (Number($("#wager").val()) > balance) {
                    alert("You don't have enough Salty Bucks.")
                } else {
                    $('#hoverbuttonred').fadeOut("slow");$('#hoverbuttonblue').fadeOut("slow");
                    $("#fightcard").submit();
                    return false;
                }
            }
        }    
}

//Button colouring events
function callback(i){
    return function(){
    localStorage["sbbtnrh"+i] = $("#rhex").val();
    localStorage["sbbtnbh"+i] = $("#bhex").val();  
    makeButtons();
    }
}

//Button set to $ Events
function callbackDol(i){
    return function(){
        console.log(i);
        localStorage["sbbtn"+i+"val"] = $("#betinp").val();  
        localStorage["sbbtn"+i+"typ"] = "$";
        $( "#betinp" ).focus();
        makeButtons();
    }
}

//Button set to % Events
function callbackPer(i){
    return function(){
        localStorage["sbbtn"+i+"val"] = $("#betinp").val();  
        localStorage["sbbtn"+i+"typ"] = "%";
        $( "#betinp" ).focus();
        makeButtons();
    }
}

//Buttons quick-bet red Events
function callbackRed(i){
    return function(){
        if( localStorage["sbbtn"+i+"typ"] == "$"){
            var salt=parseInt(localStorage["sbbtn"+i+"val"]);
            if( localStorage["sbbtn"+i+"val"][0] === "+" || localStorage["sbbtn"+i+"val"][0] === "-"){ $("input#wager").val(parseInt($("input#wager").val()) + parseInt(salt) | 0); } else {  $("input#wager").val(parseInt(salt) | 0); }
            if(parseInt($("input#wager").val()) > parseInt($("#balance").text(),10)){
                $("input#wager").val(parseFloat($("#balance").text(),10) | 0);
            }
            //document.getElementsByName("player1")[0].click();
        } else {
            var pct=parseFloat(localStorage["sbbtn"+i+"val"]);
            if( localStorage["sbbtn"+i+"val"][0] === "+" || localStorage["sbbtn"+i+"val"][0] === "-"){ $("input#wager").val(parseFloat($("input#wager").val()) + parseFloat($("#balance").text(),10)*pct/100 | 0); } else {  $("input#wager").val(parseFloat($("#balance").text(),10)*pct/100 | 0); }
            if(parseInt($("input#wager").val()) > parseInt($("#balance").text(),10)){
                $("input#wager").val(parseFloat($("#balance").text(),10) | 0);
            }
            //document.getElementsByName("player1")[0].click();
        }
        buttonPress( 'player1' );
        //document.getElementsByName("player1")[0].click();
    }
}

//Buttons quick-bet blueEvents
function callbackBlu(i){
    return function(){
        if( localStorage["sbbtn"+i+"typ"] == "$"){
            var salt=parseInt(localStorage["sbbtn"+i+"val"]);
            if( localStorage["sbbtn"+i+"val"][0] === "+" || localStorage["sbbtn"+i+"val"][0] === "-"){ $("input#wager").val(parseInt($("input#wager").val()) + parseInt(salt) | 0); } else {  $("input#wager").val(parseInt(salt) | 0); }
            if(parseInt($("input#wager").val()) > parseInt($("#balance").text(),10)){
                $("input#wager").val(parseFloat($("#balance").text(),10) | 0);
            }
            document.getElementsByName("player2")[0].click();
        } else {
            var pct=parseFloat(localStorage["sbbtn"+i+"val"]);
            if( localStorage["sbbtn"+i+"val"][0] === "+" || localStorage["sbbtn"+i+"val"][0] === "-"){ $("input#wager").val(parseFloat($("input#wager").val()) + parseFloat($("#balance").text(),10)*pct/100 | 0); } else {  $("input#wager").val(parseFloat($("#balance").text(),10)*pct/100 | 0); }
            if(parseInt($("input#wager").val()) > parseInt($("#balance").text(),10)){
                $("input#wager").val(parseFloat($("#balance").text(),10) | 0);
            }
            buttonPress( 'player2' );
            //document.getElementsByName("player2")[0].click();
        }        
    }
}

//Events to hide/show buttons when you click on p1/p2name
$("#p1name").click( function(e) {
    localStorage["buttons"] = localStorage["buttons"]^1
    $( "#redsbbuttonblock" ).fadeToggle("slow");
    $( "#blusbbuttonblock" ).fadeToggle("slow");
});

$("#p2name").click( function(e) {
    localStorage["buttons"] = localStorage["buttons"]^1
    $( "#redsbbuttonblock" ).fadeToggle("slow");
    $( "#blusbbuttonblock" ).fadeToggle("slow");
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
requireNOTY("http://planetbanhammer.com/noty-2.2.1/js/noty/jquery.noty.js");

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

var version = "SaltyBet+ v2.0.8";
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
                                //var first = noty({layout: 'topRight', text: 'Odds '+$( "#odds" ).html()+'<br>'+lastBetInfo, timeout: 2500, type: 'success'});
                            }
                            //var second = $("#chatWrapper").noty({text: 'Odds '+$( "#odds" ).html()+'<br>'+lastBetInfo, timeout: false, force: true, type: 'success'});
                        } else {
                            if( noti === true ){
                                //var first = noty({layout: 'topRight', text: 'Odds '+$( "#odds" ).html()+'<br>'+lastBetInfo, timeout: 2500, type: 'warning'});
                            }
                            //var second = $("#chatWrapper").noty({text: 'Odds '+$( "#odds" ).html()+'<br>'+lastBetInfo, timeout: false, force: true, type: 'warning'});
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
                    $("#sbpbettors1").html('<span class="redtext">'+p1name+'</span><div style="border-top: 1px solid rgb(176, 68, 68);"><h1 style="text-align:center">' + p1totalmatches + '</h1><p style="text-align:center">MATCHES</p><h1 style="text-align:center">' + p1winrate + '%</h1><p style="text-align:center">WINRATE</p><h1 style="text-align:center">'+p1tier+'</h1><p style="text-align:center">TIER</p><h1 style="text-align:center">' + p1life + '</h1><p style="text-align:center">LIFE</p><h1 style="text-align:center">' +p1meter +'</h1><p style="text-align:center">METER</p>'+p1log+'</div>');
                    $("#sbpbettors2").html('<span class="bluetext">'+p2name+'</span><div style="border-top: 1px solid rgb(2, 81, 155);"><h1 style="text-align:center">' + p2totalmatches + '</h1><p style="text-align:center">MATCHES</p><h1 style="text-align:center">' + p2winrate + '%</h1><p style="text-align:center">WINRATE</p><h1 style="text-align:center">'+p2tier+'</h1><p style="text-align:center">TIER</p><h1 style="text-align:center">' + p2life + '</h1><p style="text-align:center">LIFE</p><h1 style="text-align:center">' +p2meter +'</h1><p style="text-align:center">METER</p>'+p2log+'</div>'); 
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
            
           $( "#sbpbettorscounts" ).remove();
           $("#sbpbettors1").html('<span class="redtext">'+p1name+'</span><div style="border-top: 1px solid rgb(176, 68, 68);"><h1 style="text-align:center">' + p1totalmatches + '</h1><p style="text-align:center">MATCHES</p><h1 style="text-align:center">' + p1winrate + '%</h1><p style="text-align:center">WINRATE</p><h1 style="text-align:center">'+p1tier+'</h1><p style="text-align:center">TIER</p><h1 style="text-align:center">' + p1life + '</h1><p style="text-align:center">LIFE</p><h1 style="text-align:center">' +p1meter +'</h1><p style="text-align:center">METER</p></div>');
           $("#sbpbettors2").html('<span class="bluetext">'+p2name+'</span><div style="border-top: 1px solid rgb(2, 81, 155);"><h1 style="text-align:center">' + p2totalmatches + '</h1><p style="text-align:center">MATCHES</p><h1 style="text-align:center">' + p2winrate + '%</h1><p style="text-align:center">WINRATE</p><h1 style="text-align:center">'+p2tier+'</h1><p style="text-align:center">TIER</p><h1 style="text-align:center">' + p2life + '</h1><p style="text-align:center">LIFE</p><h1 style="text-align:center">' +p2meter +'</h1><p style="text-align:center">METER</p></div>');            
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
            if ( g === true ){
                getRealtime();
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

function insert(element, array){
    array.push(element);
    array.sort(function(a,b) {return a-b});
    return array;
}

function abbrNum(number, decPlaces) {
    // 2 decimal places => 100, 3 => 1000, etc
    decPlaces = Math.pow(10,decPlaces);

    // Enumerate number abbreviations
    var abbrev = [ "k", "m", "b", "t" ];

    // Go through the array backwards, so we do the largest first
    for (var i=3; i>=0; i--) {

        // Convert array index to "1000", "1000000", etc
        var size = Math.pow(10,(i+1)*3);

        // If the number is bigger or equal do the abbreviation
        if(size <= number) {
             // Here, we multiply by decPlaces, round, and then divide by decPlaces.
             // This gives us nice rounding to a particular decimal place.
             number = Math.round(number*decPlaces/size)/decPlaces;

             // Handle special case where we round up to the next abbreviation
             if((number == 1000) && (i < 3)) {
                 number = 1;
                 i++;
             }

             // Add the letter for the abbreviation
             number += abbrev[i];

             // We are done... stop
             break;
        }
    }

    return number;
}

function togPan(){
    pan = !pan;
    makeButtons();
    updateState();
    if( pan == true){
        $( '#bottomcontent' ).css("min-height", "1px");
        $( '#bottomcontent' ).css("height", "81px");
        $( '#bottomcontent' ).css("bottom", "0px");
        $( '.betcard' ).addClass("short");
        $( '#options' ).removeClass("short");
        $( '#stream' ).css("bottom", "81px");
        
        $( '#status' ).fadeOut("fast");
        $( '#footer' ).fadeOut("fast");
        $( '.betcard .left br' ).eq(1).hide();
        $( '.betcard .right br' ).eq(1).hide();
        //$( '.field' ).addClass("hidden");
    } else {
        $( '#bottomcontent' ).css("min-height", "1px");
        $( '#bottomcontent' ).css("height", "171px");
        $( '#bottomcontent' ).css("bottom", "45px");
        $( '.betcard' ).removeClass("short");
        $( '#stream' ).css("bottom", "215px");
        
        $( '#status' ).css("display", "block");
        $( '#footer' ).css("display", "block");
        $( '.betcard .left br' ).eq(1).show();
        $( '.betcard .right br' ).eq(1).show();
        //$( '.field' ).removeClass("hidden");
    }
    if(localStorage["buttons"] === 1){
        $( "#redsbbuttonblock" ).css("display", "none");
        $( "#blusbbuttonblock" ).css("display", "none");
    }
    setAspectRatioSBP();
    //$(window).trigger('resize');
}

function getOdds(){
    if($( "#odds").text() === "N/A"){
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
    /*$.ajax({
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
    
    window.setTimeout(getAnn, 5000);*/
}

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
    black = !black;
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
        $( 'body' ).removeClass('black-bar').addClass('white-bar');    }
    
    //console.log(black);
    localStorage["black"] = black;
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
    makeButton("sbbtn10val", "sbbtn10typ", "btn10", 40, localStorage['sbbtnrh10'], localStorage['sbbtnbh10']);
    makeButton("sbbtn11val", "sbbtn11typ", "btn11", 40, localStorage['sbbtnrh11'], localStorage['sbbtnbh11']);
    makeButton("sbbtn12val", "sbbtn12typ", "btn12", 40, localStorage['sbbtnrh12'], localStorage['sbbtnbh12']);
    makeButton("sbbtn7val", "sbbtn7typ", "btn7", 40, localStorage['sbbtnrh7'], localStorage['sbbtnbh7']);
    makeButton("sbbtn8val", "sbbtn8typ", "btn8", 40, localStorage['sbbtnrh8'], localStorage['sbbtnbh8']);
    makeButton("sbbtn9val", "sbbtn9typ", "btn9", 40, localStorage['sbbtnrh9'], localStorage['sbbtnbh9']);
        makeHoverButton("sbbtn4val", "sbbtn4typ", "btn4", 40, localStorage['sbbtnrh4'], localStorage['sbbtnbh4']);
        makeHoverButton("sbbtn5val", "sbbtn5typ", "btn5", 40, localStorage['sbbtnrh5'], localStorage['sbbtnbh5']);
        makeHoverButton("sbbtn6val", "sbbtn6typ", "btn6", 40, localStorage['sbbtnrh6'], localStorage['sbbtnbh6']);
        makeHoverButton("sbbtn1val", "sbbtn1typ", "btn1", 40, localStorage['sbbtnrh1'], localStorage['sbbtnbh1']);
        makeHoverButton("sbbtn2val", "sbbtn2typ", "btn2", 40, localStorage['sbbtnrh2'], localStorage['sbbtnbh2']);
        makeHoverButton("sbbtn3val", "sbbtn3typ", "btn3", 40, localStorage['sbbtnrh3'], localStorage['sbbtnbh3']);
    } else {
        makeNonHoverButton("sbbtn7val", "sbbtn7typ", "btn7", 90, localStorage['sbbtnrh7'], localStorage['sbbtnbh7']);
        makeNonHoverButton("sbbtn8val", "sbbtn8typ", "btn8", 90, localStorage['sbbtnrh8'], localStorage['sbbtnbh8']);
        makeNonHoverButton("sbbtn9val", "sbbtn9typ", "btn9", 90, localStorage['sbbtnrh9'], localStorage['sbbtnbh9']);
        makeHoverButton("sbbtn4val", "sbbtn4typ", "btn4", 40, localStorage['sbbtnrh4'], localStorage['sbbtnbh4']);
        makeHoverButton("sbbtn5val", "sbbtn5typ", "btn5", 40, localStorage['sbbtnrh5'], localStorage['sbbtnbh5']);
        makeHoverButton("sbbtn6val", "sbbtn6typ", "btn6", 50, localStorage['sbbtnrh6'], localStorage['sbbtnbh6']);
        makeHoverButton("sbbtn1val", "sbbtn1typ", "btn1", 40, localStorage['sbbtnrh1'], localStorage['sbbtnbh1']);
        makeHoverButton("sbbtn2val", "sbbtn2typ", "btn2", 40, localStorage['sbbtnrh2'], localStorage['sbbtnbh2']);
        makeHoverButton("sbbtn3val", "sbbtn3typ", "btn3", 40, localStorage['sbbtnrh3'], localStorage['sbbtnbh3']);
    }
    updateState();
}

function m(n,d){
x=(''+n).length,
p=Math.pow,
d=p(10,d)
x-=x%3
if( n < 1000) return n;
return Math.round(n*d/p(10,x))/d+" kMGTPE"[x/3]}

function shadeColor(color, percent) {   
    var num = parseInt(color,16),
    amt = Math.round(2.55 * percent),
    R = (num >> 16) + amt,
    G = (num >> 8 & 0x00FF) + amt,
    B = (num & 0x0000FF) + amt;
    return (0x1000000 + (R<255?R<1?0:R:255)*0x10000 + (G<255?G<1?0:G:255)*0x100 + (B<255?B<1?0:B:255)).toString(16).slice(1);
}

function makeNonHoverButton(button, buttontype, id, height, rh, bh){

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
        var redSha = shadeColor(rh, -25);
        var bluSha = shadeColor(bh, -25);
        $("#redsbbuttonblock").prepend('<div style="height:'+height+'%; float:right; padding-bottom:5%; padding-left:5px;"><input style="background: #'+rh+' no-repeat center center; box-shadow: 0px 9px 0px #'+redSha+', 0px 9px 25px rgba(0,0,0,.7);" name="player1" type="submit" value="'+m(value,1)+'%" class="newsmbetbuttonred" id="red'+id+'"></div> ');
        $("#blusbbuttonblock").prepend('<div style="height:'+height+'%; float:left;  padding-bottom:5%; padding-right:5px;"><input style="background: #'+bh+' no-repeat center center; box-shadow: 0px 9px 0px #'+bluSha+', 0px 9px 25px rgba(0,0,0,.7);"name="player2" type="submit" value="'+m(value,1)+'%" class="newsmbetbuttonblue" id="blu'+id+'"></div>');         
    } else {
        var redSha = shadeColor(rh, -25);
        var bluSha = shadeColor(bh, -25);
        $("#redsbbuttonblock").prepend('<div style="height:'+height+'%; float:right; padding-bottom:5%; padding-left:5px;"><input style="background: #'+rh+' no-repeat center center; box-shadow: 0px 9px 0px #'+redSha+', 0px 9px 25px rgba(0,0,0,.7);" name="player1" type="submit" value="'+m(value,1)+'%" class="newsmbetbuttonred" id="red'+id+'"></div> ');
        $("#blusbbuttonblock").prepend('<div style="height:'+height+'%; float:left;  padding-bottom:5%; padding-right:5px;"><input style="background: #'+bh+' no-repeat center center; box-shadow: 0px 9px 0px #'+bluSha+', 0px 9px 25px rgba(0,0,0,.7);"name="player2" type="submit" value="'+m(value,1)+'%" class="newsmbetbuttonblue" id="blu'+id+'"></div>');         
    }
}

function makeHoverButton(button, buttontype, id, height, rh, bh){

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
        var redSha = shadeColor(rh, -25);
        var bluSha = shadeColor(bh, -25);
        $("#hoverbuttonred").prepend('<div style="height:'+height+'%; float:right; padding-bottom:5%; padding-left:5px;"><input style="background: #'+rh+' no-repeat center center; box-shadow: 0px 9px 0px #'+redSha+', 0px 9px 25px rgba(0,0,0,.7);" name="player1" type="submit" value="$'+m(value,1)+'" class="newsmbetbuttonred" id="red'+id+'"></div> ');
        $("#hoverbuttonblue").prepend('<div style="height:'+height+'%; float:left;  padding-bottom:5%; padding-right:5px;"><input style="background: #'+bh+' no-repeat center center; box-shadow: 0px 9px 0px #'+bluSha+', 0px 9px 25px rgba(0,0,0,.7);"name="player2" type="submit" value="$'+m(value,1)+'" class="newsmbetbuttonblue" id="blu'+id+'"></div>');         
    } else {
        var redSha = shadeColor(rh, -25);
        var bluSha = shadeColor(bh, -25);
        $("#hoverbuttonred").prepend('<div style="height:'+height+'%; float:right; padding-bottom:5%; padding-left:5px;"><input style="background: #'+rh+' no-repeat center center; box-shadow: 0px 9px 0px #'+redSha+', 0px 9px 25px rgba(0,0,0,.7);" name="player1" type="submit" value="'+m(value,1)+'%" class="newsmbetbuttonred" id="red'+id+'"></div> ');
        $("#hoverbuttonblue").prepend('<div style="height:'+height+'%; float:left;  padding-bottom:5%; padding-right:5px;"><input style="background: #'+bh+' no-repeat center center; box-shadow: 0px 9px 0px #'+bluSha+', 0px 9px 25px rgba(0,0,0,.7);"name="player2" type="submit" value="'+m(value,1)+'%" class="newsmbetbuttonblue" id="blu'+id+'"></div>');         
    }
}

function makeButton(button, buttontype, id, height, rh, bh){
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
        var redSha = shadeColor(rh, -25);
        var bluSha = shadeColor(bh, -25);
        $("#hoverbuttonred").prepend('<div style="height:'+height+'%; float:right; padding-bottom:5%; padding-left:5px;"><input style="background: #'+rh+' no-repeat center center; box-shadow: 0px 9px 0px #'+redSha+', 0px 9px 25px rgba(0,0,0,.7);" name="player1" type="submit" value="$'+m(value,1)+'" class="newsmbetbuttonred" id="red'+id+'"></div> ');
        $("#hoverbuttonblue").prepend('<div style="height:'+height+'%; float:left;  padding-bottom:5%; padding-right:5px;"><input style="background: #'+bh+' no-repeat center center; box-shadow: 0px 9px 0px #'+bluSha+', 0px 9px 25px rgba(0,0,0,.7);"name="player2" type="submit" value="$'+m(value,1)+'" class="newsmbetbuttonblue" id="blu'+id+'"></div>');         
        $("#redsbbuttonblock").prepend('<div style="height:'+height+'%; float:right; padding-bottom:5%; padding-left:5px;"><input style="background: #'+rh+' no-repeat center center; box-shadow: 0px 9px 0px #'+redSha+', 0px 9px 25px rgba(0,0,0,.7);" name="player1" type="submit" value="$'+m(value,1)+'" class="newsmbetbuttonred" id="red'+id+'"></div> ');
        $("#blusbbuttonblock").prepend('<div style="height:'+height+'%; float:left;  padding-bottom:5%; padding-right:5px;"><input style="background: #'+bh+' no-repeat center center; box-shadow: 0px 9px 0px #'+bluSha+', 0px 9px 25px rgba(0,0,0,.7);"name="player2" type="submit" value="$'+m(value,1)+'" class="newsmbetbuttonblue" id="blu'+id+'"></div>');         
    } else {
        var redSha = shadeColor(rh, -25);
        var bluSha = shadeColor(bh, -25);
        $("#hoverbuttonred").prepend('<div style="height:'+height+'%; float:right; padding-bottom:5%; padding-left:5px;"><input style="background: #'+rh+' no-repeat center center; box-shadow: 0px 9px 0px #'+redSha+', 0px 9px 25px rgba(0,0,0,.7);" name="player1" type="submit" value="'+m(value,1)+'%" class="newsmbetbuttonred" id="red'+id+'"></div> ');
        $("#hoverbuttonblue").prepend('<div style="height:'+height+'%; float:left;  padding-bottom:5%; padding-right:5px;"><input style="background: #'+bh+' no-repeat center center; box-shadow: 0px 9px 0px #'+bluSha+', 0px 9px 25px rgba(0,0,0,.7);"name="player2" type="submit" value="'+m(value,1)+'%" class="newsmbetbuttonblue" id="blu'+id+'"></div>');         
        $("#redsbbuttonblock").prepend('<div style="height:'+height+'%; float:right; padding-bottom:5%; padding-left:5px;"><input style="background: #'+rh+' no-repeat center center; box-shadow: 0px 9px 0px #'+redSha+', 0px 9px 25px rgba(0,0,0,.7);" name="player1" type="submit" value="'+m(value,1)+'%" class="newsmbetbuttonred" id="red'+id+'"></div> ');
        $("#blusbbuttonblock").prepend('<div style="height:'+height+'%; float:left;  padding-bottom:5%; padding-right:5px;"><input style="background: #'+bh+' no-repeat center center; box-shadow: 0px 9px 0px #'+bluSha+', 0px 9px 25px rgba(0,0,0,.7);"name="player2" type="submit" value="'+m(value,1)+'%" class="newsmbetbuttonblue" id="blu'+id+'"></div>');         
    }
}

function makeColButton( ele, id, value, height, width, rr, rg, rb){
    $(ele).prepend('<div style="height:'+height+'px; float:left; padding-bottom:12px; padding-left:5px;"><button style="background: rgb('+rr+', '+rg+', '+rb+') no-repeat center center !important; box-shadow: 0px 9px 0px rgba('+(rr-20)+', '+(rg-20)+', '+(rb-20)+', '+1+'), 0px 9px 25px rgba(0,0,0,.7) !important;" name="" type="submit" value="'+value+'" class="newsmbetbuttonred" id="'+id+'">SET!</button></div> ');
}    

function requireUI(script) {
    $.ajax({
        url: script,
        dataType: "script",
        async: false,
        success: function () {            
            if( localStorage["top"] === 'undefined' || localStorage["left"] === 'undefined' ){
                localStorage["top"] = "41px;"
                localStorage["left"] = "66%";    
            }
    
            $( 'body' ).append('<div id="options" class="betcard redborder" style="position: absolute;top: '+localStorage["top"]+'px;left: '+localStorage["left"]+'px;width:300px;height:auto;display: none;color: white;">\
            \
            <div id="hovergen" style="clear:both;">\
                <div id="gentext"style="text-align:center;border-bottom: 1px solid #D14836;cursor:pointer"><span>General Options</span></div>\
                <div id="geninput" style="text-align:center;display: none;">\
                </div>\
                <div id="genselect" style="margin-left:auto;margin-right:auto;width: 230px; display: none;">\
                    <button id="toggle">Toggle Notifications</button></br>\
                    <button id="toggleButtons">Toggle Hover Buttons</button></br>\
                </div>\
            </div>\
            \
            \
            <div id="hoverthm" style="clear:both;">\
                <div id="thmtext"style="text-align:center;border-bottom: 1px solid #D14836;cursor:pointer"><span>Theme Options</span></div>\
                <div id="thminput" style="text-align:center;display: none;">\
                <span>Just Kidding! Not implemented yet</span>\
                </div>\
                <div id="thmselect" style="margin-left:auto;margin-right:auto;width: 230px; display: none;"></div>\
            </div>\
            \
            <div id="hoverbetinp" style="clear:both;cursor:pointer">\
                <div id="bettext"style="text-align:center;border-bottom: 1px solid #D14836;cursor:pointer"><span>Bet Button Options</span></div>\
                <div id="betinput" style="text-align:center;display: none;">\
                    <input style="margin-left:auto;margin-right:auto;font-size: 1.4em;width: 60%;border: 2px solid #D14836;border-radius: 10px;background: rgb(99, 99, 99);color: white;outline: none;}" id="betinp"; type="text"><br/>\
                </div>\
                <div id="betselect" style="margin-left:auto;margin-right:auto;width: 230px; display: none;">\
                <div id="dolwrap" style="float:left;">\
                    <div id="doltext "style="text-align:center;border-bottom: 1px solid #D14836;margin-bottom:5px;"><span>Dollar Buttons</span></div>\
                    <div id="dolselect" style="margin-left:auto;margin-right:auto;width: 230px;"></div>\
                </div><div id="perwrap" style="float:left;">\
                    <div id="pertext "style="text-align:center;border-bottom: 1px solid #025199;margin-bottom:5px;"><span>Percent Buttons</span></div>\
                    <div id="perselect" style="margin-left:auto;margin-right:auto;width: 230px;"></div>\
                </div>\
                </div>\
            </div>\
            \
            <div id="hovercolour" style="clear:both;">\
            <div id="colourtext"  style="text-align:center;border-bottom: 1px solid #D14836;cursor:pointer"><span>Colour Options</span></div>\
            <div id="colourinput" style="text-align:center;display: none;">\
            <input style="margin-left:auto;margin-right:auto;font-size: 1.4em;width: 60%;border: 2px solid #D14836;border-radius: 10px;background: rgb(99, 99, 99);color: white;outline: none;}" id="rhex" value="b04444" type="text"><br/>\
            <input style="margin-left:auto;margin-right:auto;font-size: 1.4em;width: 60%;border: 2px solid #025199;border-radius: 10px;background: rgb(99, 99, 99);color: white;outline: none;}" id="bhex" value="349EFF" type="text"><br/>\
            </div>\
            <div id="colourselect" style="margin-left:auto;margin-right:auto;width: 230px; display: none;"></div>\
            </div>\
            <div style="clear:both;">\
            '+version+'\
            </div>\
            </div>');
            
            for(i = 12; i>0; i--){
                makeColButton("#colourselect", "btn"+i, "SET!", "20", "", 176, 68, 68 );
                makeColButton("#dolselect", "btn"+i+"dol", "SET!", "20", "", 176, 68, 68 );
                makeColButton("#perselect", "btn"+i+"per", "SET!", "20", "", 68, 68, 176 );                 
            }
            //RED: <input style="width:10%;" type="text" id="rr"> <input style="width:10%;" type="text" id="rg"> <input style="width:10%;" type="text" id="rb"><br/>\
            //BLUE:<input style="width:10%;" type="text" id="br"> <input style="width:10%;" type="text" id="bg"> <input style="width:10%;" type="text" id="bb">\
            //<input name="but1" type="button" value="1" class="" id="but1"><input name="but2" type="button" value="2" class="" id="but2"><input name="but3" type="button" value="3" class="" id="but3"><input name="but4" type="button" value="4" class="" id="but4"><input name="but5" type="button" value="5" class="" id="but5"><input name="but6" type="button" value="6" class="" id="but6"><br/>\
            //<input name="but7" type="button" value="7" class="" id="but7"><input name="but8" type="button" value="8" class="" id="but8"><input name="but9" type="button" value="9" class="" id="but9"><input name="but10" type="button" value="10" class="" id="but10"><input name="but11" type="button" value="11" class="" id="but11"><input name="but12" type="button" value="12" class="" id="but12">\
            
    
            $( "#options" ).draggable();
            $( "#options" ).on( "dragstop", function( event, ui ) {
                localStorage["top"] = $( "#options" ).position().top;
                localStorage["left"] = $( "#options" ).position().left;
            });

            makeButtons();    
            $(".betcard").eq(0).prepend('<div id="hoverred" class="right" style="height: 95%;"><input name="player1" type="submit" value="" class="newbetbuttonred" id="redbtn0"><div id="hoverbuttonred" style="position:absolute;bottom:0px;left:33%;margin:0px;padding:5px;width:230px;height:auto !important;z-index:1;display: none;" class="betcard left redborder"></div></div>');
            $(".betcard").eq(2).prepend('<div id="hoverblu" class="left" style="height: 95%;"><input name="player2" type="submit" value="" class="newbetbuttonblue" id="bluebtn0"><div id="hoverbuttonblue" style="position:absolute;bottom:0px;right:33%;margin:0px;padding:5px;width:230px;height:auto !important;z-index:1;display: none;" class="betcard right blueborder"></div></div>');
                
            /*$('#hoverred').live({
                mouseenter: function(){ if(JSON.parse(localStorage["sbHover"]) === true ) { $('#hoverbuttonred').removeClass('hidden'); } }, 
                mouseleave: function(){ if(JSON.parse(localStorage["sbHover"]) === true ) { $('#hoverbuttonred').addClass('hidden'); } }
            });*/
            
            
            $('#gentext').on("mousedown",
                function(){$('#geninput').slideToggle("fast"); $('#genselect').slideToggle("fast");}
            );
            //.on( "mouseleave", function(){$('#geninput').slideToggle("fast"); $('#genselect').slideToggle("fast"); });
            
            $('#thmtext').on("mousedown", function(){$('#thminput').slideToggle("fast"); $('#thmselect').slideToggle("fast");});
            //.on( "mouseleave",                function(){$('#thminput').slideToggle("fast"); $('#thmselect').slideToggle("fast");            });
            
            $('#bettext').on("mousedown", function(){$('#betinput').slideToggle("fast"); $('#betselect').slideToggle("fast");});
            //.on( "mouseleave", function(){$('#betinput').slideToggle("fast"); $('#betselect').slideToggle("fast");});
            
            $('#colourtext').on("mousedown",function(){$('#colourinput').slideToggle("fast"); $('#colourselect').slideToggle("fast");})
            //.on( "mouseleave", function(){$('#colourinput').slideToggle("fast"); $('#colourselect').slideToggle("fast");});
            
            
            $('#hoverred').on("mouseenter",
                function(){ if(JSON.parse(localStorage["sbHover"]) === true ) { $('#hoverbuttonred').fadeIn("slow");}
            }).on( "mouseleave",
                function(){ $('#hoverbuttonred').fadeOut("slow");});
            
            $('#hoverblu').on("mouseenter",
                function(){ if(JSON.parse(localStorage["sbHover"]) === true ) { $('#hoverbuttonblue').fadeIn("slow");}
            }).on( "mouseleave",
                function(){$('#hoverbuttonblue').fadeOut("slow");});
            
            $('#fightcard').on( "click", "#redbtn0" ,function(){
                buttonPress( 'player1' );
            });
            
            $('#fightcard').on( "click", "#bluebtn0" ,function(){
                buttonPress( 'player2' );
            });
            
            
$("#fightcard").on('submit', function( e ){
    e.preventDefault();
    $.ajax({
        type: "post",
        url: "../ajax_place_bet.php",
        data: $("form").serialize(),
        success: function () {
            console.log("YAY");
        },
        error: function(){
            console.log("NAY");
        }
    });
    return false;
});

            $( "#slider-range-min" ).slider({
                range: "min",
                value: 0,
                min: 0,
                max: 0,
                animate: "fast",
                slide: function( event, ui ) {
                  $( "#wager" ).val(ui.value);
                }
              });
            
            $("ul:first").append("<li><button id='optionsbut'>+</button></li>");
            document.getElementById('optionsbut').onclick = function(){ $("#options").toggle(); };
            document.getElementById('toggle').onclick = toggleNoti;
            document.getElementById('toggleButtons').onclick = function() {hover = !hover; localStorage['sbHover'] = hover;}
            for( i = 1; i < 13; i++){
                $('body').on( "mousedown", '#btn'+i, callback( i ) );
                $('body').on( "mousedown", '#btn'+i+'dol', callbackDol( i ) );
                $('body').on( "mousedown", '#btn'+i+'per', callbackPer( i ) );
                //document.getElementById('but'+i+'dol').onclick = callbackDol( i );
                //document.getElementById('but'+i+'per').onclick = callbackPer( i );
                $('body').on( "mousedown", '#redbtn'+i, callbackRed( i ) );
                $('body').on( "mousedown", '#blubtn'+i, callbackBlu( i ) );
            }
            makeButtons();
            $(window).resize(setAspectRatioSBP);
        }, 
        error: function () {
            throw new Error("Could not load script " + script);
        }
    });
}

function requireJQUERY(script) {
    $.ajax({
        url: script,
        dataType: "script",
        async: false,
        success: function () { 
            requireUI("http://code.jquery.com/ui/1.10.3/jquery-ui.js");    
        },
        error: function () {
            throw new Error("Could not load script " + script);
        }
    });
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
    $( 'head' ).prepend('<link rel="stylesheet" href="http://ajax.googleapis.com/ajax/libs/jqueryui/1.8.10/themes/base/jquery-ui.css" type="text/css" media="all" />');
    $( 'head' ).prepend('<style>    #wagerwrapper br {        display: none;    }    .goldborder {        border: 1px solid darkgoldenrod !important;        border-top-color: darkgoldenrod !important;        border-top-style: solid;        border-top-width: 1px;\border-right-color: darkgoldenrod !important;        border-right-style: solid;        border-right-width: 1px;        border-bottom-color: darkgoldenrod !important;        border-bottom-style: solid;        border-bottom-width: 1px;        border-left-color: darkgoldenrod !important;\border-left-style: solid;        border-left-width: 1px;}</style>');
    $( 'head' ).prepend('<style>.newbetbuttonred, .newbetbuttonblue{    font-size: 16px;    letter-spacing: 1px;    font-weight: bold;    cursor: pointer;    color: white;    position: relative;    display: block;    padding: 4px;    -webkit-border-radius: 8px;    -moz-border-radius: 8px;    border-radius: 8px;    -webkit-box-shadow: 0px 9px 0px rgba(121, 60, 60, 1), 0px 9px 25px rgba(0,0,0,.7);    -moz-box-shadow: 0px 9px 0px rgba(121, 60, 60, 1), 0px 9px 25px rgba(0,0,0,.7);    box-shadow: 0px 9px 0px rgba(121, 60, 60, 1), 0px 9px 25px rgba(0,0,0,.7);    width: 140px;    height:100%;    text-align: center;    border:none;    background-color: rgb(176, 68, 68);    background-image: -moz-linear-gradient(rgb(221, 109, 109), rgb(176, 68, 68)) no-repeat top left;;    background-image: -webkit-linear-gradient(rgb(221, 109, 109), rgb(176, 68, 68)) no-repeat top left;;    background-image: linear-gradient(rgb(221, 109, 109), rgb(176, 68, 68)) no-repeat top left;;    background-repeat: repeat-x;     background: rgb(176, 68, 68) url(../images/bet1.png) no-repeat center center;    -webkit-transition: all .1s ease;    -moz-transition: all .1s ease;    -ms-transition: all .1s ease;    -o-transition: all .1s ease;    transition: all .1s ease;}.newbetbuttonblue{    -webkit-box-shadow: 0px 9px 0px rgba(13, 113, 204, 1), 0px 9px 25px rgba(0,0,0,.7);    -moz-box-shadow: 0px 9px 0px rgba(13, 113, 204, 1), 0px 9px 25px rgba(0,0,0,.7);    box-shadow: 0px 9px 0px rgba(13, 113, 204, 1), 0px 9px 25px rgba(0,0,0,.7);    background-color: rgb(52, 158, 255);    background-image: -moz-linear-gradient(rgb(52, 158, 255), rgb(81, 68, 176));    background-image: -webkit-linear-gradient(rgb(52, 158, 255), rgb(81, 68, 176));    background-image: linear-gradient(rgb(52, 158, 255), rgb(81, 68, 176));    background-repeat: repeat-x;    background: rgb(52, 158, 255) url(../images/bet1.png) no-repeat center center;}    .newbetbuttonred:active{    -webkit-box-shadow: 0px 3px 0px rgba(121, 60, 60, 1), 0px 3px 6px rgba(0,0,0,.9);    -moz-box-shadow: 0px 3px 0px rgba(121, 60, 60, 1), 0px 3px 6px rgba(0,0,0,.9);    box-shadow: 0px 3px 0px rgba(121, 60, 60, 1), 0px 3px 6px rgba(0,0,0,.9);    position: relative;    top: 6px;}.newbetbuttonblue:active{    -webkit-box-shadow: 0px 3px 0px rgba(13, 113, 204, 1), 0px 3px 6px rgba(0,0,0,.9);    -moz-box-shadow: 0px 3px 0px rgba(13, 113, 204, 1), 0px 3px 6px rgba(0,0,0,.9);    box-shadow: 0px 3px 0px rgba(13, 113, 204, 1), 0px 3px 6px rgba(0,0,0,.9);    position: relative;    top: 6px;}</style>');    
    $( 'head' ).prepend('<style>.newsmbetbuttonred, .newsmbetbuttonblue{    font-size: 16px;    letter-spacing: 1px;    font-weight: bold;    cursor: pointer;    color: white;    position: relative;    display: block;   -webkit-border-radius: 8px;    -moz-border-radius: 8px;    border-radius: 8px;    -webkit-box-shadow: 0px 9px 0px rgba(121, 60, 60, 1), 0px 9px 25px rgba(0,0,0,.7);    -moz-box-shadow: 0px 9px 0px rgba(121, 60, 60, 1), 0px 9px 25px rgba(0,0,0,.7);    box-shadow: 0px 9px 0px rgba(121, 60, 60, 1), 0px 9px 25px rgba(0,0,0,.7);    width: 70px;    height:100%;    text-align: center;    border:none;    background-color: rgb(176, 68, 68);    background-image: -moz-linear-gradient(rgb(221, 109, 109), rgb(176, 68, 68)) no-repeat top left;;    background-image: -webkit-linear-gradient(rgb(221, 109, 109), rgb(176, 68, 68)) no-repeat top left;;    background-image: linear-gradient(rgb(221, 109, 109), rgb(176, 68, 68)) no-repeat top left;;    background-repeat: repeat-x;     background: rgb(176, 68, 68) no-repeat center center;    -webkit-transition: all .1s ease;    -moz-transition: all .1s ease;    -ms-transition: all .1s ease;    -o-transition: all .1s ease;    transition: all .1s ease;}.newsmbetbuttonblue{    -webkit-box-shadow: 0px 9px 0px rgba(13, 113, 204, 1), 0px 9px 25px rgba(0,0,0,.7);    -moz-box-shadow: 0px 9px 0px rgba(13, 113, 204, 1), 0px 9px 25px rgba(0,0,0,.7);    box-shadow: 0px 9px 0px rgba(13, 113, 204, 1), 0px 9px 25px rgba(0,0,0,.7);    background-color: rgb(52, 158, 255);    background-image: -moz-linear-gradient(rgb(52, 158, 255), rgb(81, 68, 176));    background-image: -webkit-linear-gradient(rgb(52, 158, 255), rgb(81, 68, 176));    background-image: linear-gradient(rgb(52, 158, 255), rgb(81, 68, 176));    background-repeat: repeat-x;    background: rgb(52, 158, 255) no-repeat center center;}    .newsmbetbuttonred:active{    -webkit-box-shadow: 0px 3px 0px rgba(121, 60, 60, 1), 0px 3px 6px rgba(0,0,0,.9);    -moz-box-shadow: 0px 3px 0px rgba(121, 60, 60, 1), 0px 3px 6px rgba(0,0,0,.9);    box-shadow: 0px 3px 0px rgba(121, 60, 60, 1), 0px 3px 6px rgba(0,0,0,.9);    position: relative;    top: 6px;}.newsmbetbuttonblue:active{    -webkit-box-shadow: 0px 3px 0px rgba(13, 113, 204, 1), 0px 3px 6px rgba(0,0,0,.9);    -moz-box-shadow: 0px 3px 0px rgba(13, 113, 204, 1), 0px 3px 6px rgba(0,0,0,.9);    box-shadow: 0px 3px 0px rgba(13, 113, 204, 1), 0px 3px 6px rgba(0,0,0,.9);    position: relative;    top: 6px;}</style>');    
    $( 'head' ).prepend('<style>.blublackodd {background-color:#DCDCDC;} .blublackeven {background-color:#CCCCCC;} .bluwhiteodd {background-color:#212121;} .bluwhiteeven {background-color:#313131;}</style>');
    $( 'head' ).prepend('<style>.redblackodd {background-color:#DCDCDC;} .redblackeven {background-color:#CCCCCC;} .redwhiteodd {background-color:#212121;} .redwhiteeven {background-color:#313131;}</style>');
    $( 'head' ).prepend('<style>.blublackoddhl {background-color:#DDDDDD;} .blublackevenhl {background-color:#EEEEEE;} .bluwhiteoddhl {background-color:#111111;} .bluwhiteevenhl {background-color:#161616;}</style>');
    $( 'head' ).prepend('<style>.redblackoddhl {background-color:#DDDDDD;} .redblackevenhl {background-color:#EEEEEE;} .redwhiteoddhl {background-color:#111111;} .redwhiteevenhl {background-color:#161616;}</style>');
    $( 'head' ).prepend('<style>div:hover p{display : block;}</style>')
    //$( 'head' ).prepend('<style>.smredbutton, .smblubutton{    font-size: 16px;    letter-spacing: 1px;    font-weight: bold;    cursor: pointer;    color: white;    position: relative;    display: block;    padding: 4px;    -webkit-border-radius: 8px;    -moz-border-radius: 8px;    border-radius: 8px;    -webkit-box-shadow: 0px 9px 0px rgba(121, 60, 60, 1), 0px 9px 25px rgba(0,0,0,.7);    -moz-box-shadow: 0px 9px 0px rgba(121, 60, 60, 1), 0px 9px 25px rgba(0,0,0,.7);    box-shadow: 0px 9px 0px rgba(121, 60, 60, 1), 0px 9px 25px rgba(0,0,0,.7);    width: 70px;    height:40%;    text-align: center;    border:none;    background-color: rgb(176, 68, 68);  -webkit-transition: all .1s ease;    -moz-transition: all .1s ease;    -ms-transition: all .1s ease;    -o-transition: all .1s ease;    transition: all .1s ease;}.newbetbuttonblue{    -webkit-box-shadow: 0px 9px 0px rgba(13, 113, 204, 1), 0px 9px 25px rgba(0,0,0,.7);    -moz-box-shadow: 0px 9px 0px rgba(13, 113, 204, 1), 0px 9px 25px rgba(0,0,0,.7);    box-shadow: 0px 9px 0px rgba(13, 113, 204, 1), 0px 9px 25px rgba(0,0,0,.7);    background-color: rgb(52, 158, 255);    background-image: -moz-linear-gradient(rgb(52, 158, 255), rgb(81, 68, 176));    background-image: -webkit-linear-gradient(rgb(52, 158, 255), rgb(81, 68, 176));    background-image: linear-gradient(rgb(52, 158, 255), rgb(81, 68, 176));    background-repeat: repeat-x;    background: rgb(52, 158, 255) url(../images/bet1.png) no-repeat center center;}    .smredbutton:active{    -webkit-box-shadow: 0px 3px 0px rgba(121, 60, 60, 1), 0px 3px 6px rgba(0,0,0,.9);    -moz-box-shadow: 0px 3px 0px rgba(121, 60, 60, 1), 0px 3px 6px rgba(0,0,0,.9);    box-shadow: 0px 3px 0px rgba(121, 60, 60, 1), 0px 3px 6px rgba(0,0,0,.9);    position: relative;    top: 6px;}.smblubutton:active{    -webkit-box-shadow: 0px 3px 0px rgba(13, 113, 204, 1), 0px 3px 6px rgba(0,0,0,.9);    -moz-box-shadow: 0px 3px 0px rgba(13, 113, 204, 1), 0px 3px 6px rgba(0,0,0,.9);    box-shadow: 0px 3px 0px rgba(13, 113, 204, 1), 0px 3px 6px rgba(0,0,0,.9);    position: relative;    top: 6px;}</style>');    
    $( 'head' ).prepend('<style>#p1name, #p2name {font-size: 1.0em !important;} p {font-size: .7em !important;margin: 0;line-height: 26px;}</style>');
    $( 'head' ).prepend('<style>.hidden {display: none !important;}</style>');
    $( 'head' ).prepend('<style>.short {height: 35px !important;}</style> .pointer {cursor: pointer;} ');
    $( 'head' ).prepend('<style>.greybutton {background: rgb(66, 66, 66) no-repeat center center !important;  box-shadow: 0px 9px 0px rgba(33, 33, 33, 1), 0px 9px 25px rgba(0,0,0,.7) !important;}</style>');
    $( 'head' ).prepend('<style>.greyerbutton {background: rgb(66, 66, 66) url(../images/bet1.png) no-repeat center center !important;  box-shadow: 0px 9px 0px rgba(33, 33, 33, 1), 0px 9px 25px rgba(0,0,0,.7) !important;}</style>');
    $( 'head' ).prepend('<style>.ngreentext {color: #54870F !important;}</style>');
    $( 'head' ).prepend('<style>.ngoldtext {color: #F4E790 !important;}</style>');
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
    $( "#status" ).css("height", "25px");
    //$( '#logo ').html('<img src="http://www.planetbanhammer.com/images/smallogo2.png">');
    $( '#sbettorswrapper' ).css({'overflow-y': 'auto'});
    
    $( ".greentext" ).addClass( "ngreentext" );
    $( ".menu" ).addClass( "ngreentext" );

    $("#sbettorswrapper").append('<div id="sbpbettorscount"></div><div id="sbpbettors1" style="width:50%; display:block; float:left;"></div><div id="sbpbettors2" style="width:50%; display:block; float:right;"></div>');
    $( "#sbettorscount" ).remove();
    $("#sbettors1").remove();
    $("#sbettors2").remove();    
    $( ".betbuttonred" ).hide();
    $( ".betbuttonblue" ).hide();
    
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
           
            //require("https://raw.github.com/jaz303/tipsy/master/src/javascripts/jquery.tipsy.js");
            //require("https://raw.github.com/needim/noty/master/js/noty/layouts/top.js");
            //require("http://planetbanhammer.com/inline.js");
            //require("http://planetbanhammer.com/bottomLeft.js");
            //require("http://planetbanhammer.com/topRight.js");
            //require("http://planetbanhammer.com/default.js");
            requireJQUERY("http://code.jquery.com/jquery-1.9.1.js");
            
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
            
            $("ul:first").append('<li id="pan"><img src="http://planetbanhammer.com/images/pan.png"></li>');
            document.getElementById('pan').onclick = togPan;
            getAnn();
        },
        error: function () {
            throw new Error("Could not load script " + script);
        }
    });
}

console.log(version+" Loaded");
