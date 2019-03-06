/****************************************************************
	Question Manager
	
	script controls or creates question
	
	Author : Michael Mena
*****************************************************************/
/****************************************************************
	Global Vars
*****************************************************************/
var currentQuestion = -1;
var questionCount = 0;
/****************************************************************
	FUNCTIONS
*****************************************************************/
/*
	easily creates new questions as checkbox with given text, element, & classname
*/


function createQuestion(text,weight){
	console.log( "Loading Question " + questionCount + "..." );
	var form = $("#questionContainer")//document.getElementById("questionContainer");
	var question = document.createElement('div');
	
	question.className = "questionarea";
	question.innerHTML = '<h4 class="text-center questionText">'+text+'</h4><br>';
	var functionsToRun = "Update();"
	var opt1 = 	customOption(weight);
	var extra = '<br>';
	
	
	var node = document.createElement("div");
	node.setAttribute("id", "Q" + questionCount);
	node.className = "row question";
	node.appendChild(question);
	node.innerHTML += opt1 + extra;// + feedback;
	
	if(questionCount != 0)
		form.append('<br>');
	
	questionCount++;
	
	form.append(node);
	
	if(GetIEVersion() > 0){
			$('.questionarea').css('height', 60+'px');
			$('.slider').css('background', 'white').css('box-sizing', 'content-box');
			$('.inputCash').css('padding-top', '35px');
		}
}
function createQuestionTextBox(text){
	console.log( "Loading Question " + questionCount + "..." );
	var form = $("#questionContainer")//document.getElementById("questionContainer");
	var question = document.createElement('div');
	
	question.className = "questionarea";
	question.innerHTML = '<br><h4 class="text-center questionText">'+text+'</h4>';
	var extra = '<br><br><br><br>';
	
	var text_box = '<div class="questionTextBox"><textarea style="width:100%;height:100%;"></textarea></div>'
	
	
	
	var node = document.createElement("div");
	node.setAttribute("id", "Q" + questionCount);
	node.className = "row question";
	node.appendChild(question);
	node.innerHTML += text_box + extra;
	
	questionCount++;
	
	form.append(node);
}
function GetIEVersion() {
  var sAgent = window.navigator.userAgent;
  var Idx = sAgent.indexOf("MSIE");

  // If IE, return version number.
  if (Idx > 0) 
    return parseInt(sAgent.substring(Idx+ 5, sAgent.indexOf(".", Idx)));

  // If IE 11 then look for Updated user agent string.
  else if (!!navigator.userAgent.match(/Trident\/7\./)) 
    return 11;

  else
    return 0; //It is not IE
}
function customOption(weight){
		var bootscrap_col_head= '<div class="col-xs-1"></div><div class="col-xs-7">';
		var bootscrap_col_foot= '</div>';
		var head = '<div class="slidecontainer">';
		var foot = '</div>';
		var functionToRun = "document.getElementById('answer" + questionCount +"Value')"+
							".value = this.value;"+
							"$('#answer" + questionCount +"').parent().find('#weight').text('$'+"+String(weight)+");"+
							"SetScore()";
							
		var label1 = "<div style = 'float:left;padding-top:5px;'>$0</div>";
		var label2 = "<div id = 'weight' style = 'float:right;padding-top:5px;' >$"+weight+"</div>";
		var slider = bootscrap_col_head + head  +
			'<div style = "padding-bottom:5px;">Select Cost:</div>'+'<input type="range" min="0" max="'+weight+'" '+
			((GetIEVersion() > 0)?'onchange':'oninput')+'="'+functionToRun+
			'" value="0" class="slider" id="answer' + 
			questionCount +'">'+label1+label2+
			foot+ bootscrap_col_foot;
			
		functionToRun = "document.getElementById('answer" + questionCount +"')"+
							".value = this.value;"+
							"$('#answer" + questionCount +"').parent().find('#weight').text('$'+((this.value>"+weight+")?this.value:"+weight+"));"+
							"SetScore()";
							
		var displayValue = '<div class="col-xs-3"><div class = "inputCash">$<input type="text" maxlength="3" oninput="' + 
							functionToRun +'" value="0" class = "answerTextbox"id="answer' + questionCount +'Value">'+'</div></div>';
		
		
        return slider + displayValue;
    }
/*
	hides all questions
*/
function showQuestions(flag){
	var q = $("#questionContainer");//document.getElementById("questionContainer");
	if(flag){
		q.show();
	}else{
		q.hide();
	}
}
function FocusPage(jQueryElm){
	$('html, body').animate({
    scrollTop: (jQueryElm.offset().top)
},500);
}
/*
	hides/show only one question
*/
function showQuestion(i,jump){
	Update();
	var rowToScrollTo = document.getElementById('Q'+i);
	$("#Q"+i).fadeOut(1).fadeIn(500);
	var h = ((currentQuestion==8)?"250px":"170px");
	var options = {};
	options['scrollTop'] = 172 * i;
	options['height'] = h;
	
	if(jump)
		$("#questionContainer").scrollTop(172 * i + 0);
	else{
		$("#questionContainer").stop().animate(options,300);
	}
}


/*
	reveals next question
*/
function previousQuestion(){
	var tmp = currentQuestion;
	currentQuestion--;
	
	if(currentQuestion <0){
		
		currentQuestion=0;
	}
	
	/*if (tmp == 7){
		$("#questionContainer").animate({
				height : '170px'
				},300);
	}*/
	showQuestion(currentQuestion,false);
	
}
function nextQuestion(){
	currentQuestion++;
	
	if(currentQuestion >=$(".questionarea").length){
		
		showEnd(true);
	}else{
		showQuestion(currentQuestion,false);
		if (currentQuestion == 7){
		$("#questionContainer").animate({
				height : '250px'
				},300);
		}
	}
}
/*
	resets scorecard and also question but only for questions, 
	the reset happens when the arg is true.
*/
function reset(flag){
	showEnd(false);
	
	//hideQuestions();
	$("#questionContainer").animate({
				height : '170px'
				},300);
	currentQuestion = 0;
	Update();
	//UpdateProgress();
	
	showQuestion(currentQuestion,true);
	if(flag)
		resetAllQuestions();
}
/*
	hides/show end screen and hides next button
*/
function showEnd(flag){
		HideNextBtn(flag);
		showResult(flag);
		showQuestions(!flag);
}
/*
	hides/show end screen
*/
function showResult(flag){
	var q = $("#end");//document.getElementById("questionContainer");
	if(flag){
		q.show();
		buildGraph();
		showFeedbackByScore();
		
		$("#endBTNS").show();
		//alert("For Server-Side Used(Answer-Array):\n\n" + getAnswerArray() + "\n\nType:String");
	}else{
		q.hide();
		$("#goodResult").hide();
		$("#badResult").hide();
		$("#endBTNS").hide();
	}
}
function toNewWindow(){
	var x=window.open();
	x.document.open();
		 var html = '<link rel="stylesheet" type="text/css" href="css/main.css">'+
	'<link href="https://www.fau.edu/css/core/bootstrap.min.css" rel="stylesheet"/>'+
	'<link rel="stylesheet" type="text/css" href="https://www.fau.edu/css/interior.css">'+
	'<link rel="stylesheet" type="text/css" href="https://www.fau.edu/css/alert.css">'+
	'<script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.5.0/Chart.min.js"></script>'+
		'<div class="container-fluid"><div class="row"><div class="col-xs-2"></div>'+
		 '<div class="col-xs-8">'+
		 $("#end").html()+
		 '</div></div></div>'+
		 '<script type="text/javascript" src="https://www.fau.edu/js/core/jquery-latest.js">//</script>'+
		'<script type="text/javascript" src="https://www.fau.edu/js/core/bootstrap.min.js">//</script>'+
		 '<script src="scripts/ResultHandler.js"></script>'+
			'<script src="scripts/Statistic.js"></script>'+
			'<script>var score = '+score+';$( document ).ready(function() {var score = '+score+';buildGraph();});setTimeout(function () {window.print();window.close();}, 250);</script>';
	x.document.write(html);
	x.document.close();
}
/*
	hides/show next button
*/
function HideNextBtn(flag){
	var nav = $("#nav");//document.getElementById("nextBTN");
	if(flag){
		nav.hide();
		$("#retryBTN").show();
	}else{
		nav.show();
		$("#retryBTN").hide();
	}
}
/*
	set answers to na and updates results live and post
*/
function resetAllQuestions(){
	$(".slider").val(0);
	$(".answerTextbox").val(0);
	$(".questionTextBox textarea").val('');
	Update();
	//UpdateProgress();
}
	
