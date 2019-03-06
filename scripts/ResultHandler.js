/****************************************************************
	Result Handler
	
	script controls or handles results bu updating live and post feedback
	
	Author : Michael Mena
*****************************************************************/
/****************************************************************
	Global Vars
*****************************************************************/
var displayID = "total";
var feedbackThreshold = 0.5;
var barSpeed=0.5;
var score= 0;
/****************************************************************
	FUNCTIONS
*****************************************************************/
/*
	sets score;
*/
function SetScore(){
	var newScore = 0;
	$(".answerTextbox").each(function(){
		if(this.value != '')
			newScore += parseInt(this.value);
	});
	$(".cash").text('$'+newScore);
	score = newScore;
}
/*
	updates score and bar and live feedback;
*/
function Update(){
	SetScore();
	setQuestionsLeft();
}
/*
	updates question answer tracker
*/
function setQuestionsLeft(){
	$("#questionsleft").text(((currentQuestion+1>8)?8:currentQuestion+1) + " of " + $(".question").length + " questions");
}
///this fires at the end
function showFeedbackByScore(){
	recordResults();
	if(score <= 60)
		$("#goodResult").show();
	else
		$("#badResult").show();
}
/*
	Method:getAnswerArray()
	
	returns a string array with all the answers;
	useful for server-side purposes;
*/
function getAnswerArray(){//delimiter
	var answerID = [];
	for(var i = 0 ; i< 7; i++){
		answerID.push($('#answer' + i +'Value').val());
	}
	var textArea = $('.questionTextBox textarea').val();
	while(textArea.indexOf('/') > -1)
		textArea = textArea.replace('/',',');
	answerID.push(textArea);
	return answerID;
}
function recordResults(){
	$.ajax({
		type: "POST",
		url: 'ResultLogger.php',
		data: {log: createAnswerLog()},
		success: function(data){
			//alert(data);
		}
	});
}
function createAnswerLog(){
	var log = "";
	var answers = getAnswerArray();
	for(var i = 0; i < answers.length; i++){
		if( answers[i] == ""){
			log += "NO ENTRY" + "/";
			continue;
		}
		log += answers[i] + "/";
	}
	return log;
}
