/****************************************************************
	Main
	
	used for init
	
	Author : Michael Mena
*****************************************************************/
$( document ).ready(function() {
		
			createQuestion("On average, how much do your students have to spend out-of-pocket for lab fees/ lab kits?"
							,500);
			createQuestion("On average, how much do your students have to spend out-of-pocket for subscriptions (e.g., Netflix, Newspapers, Case Study Services, etc.)?"
							,500);
			createQuestion("On average, how much do your students have to spend on required book(s) or course packet(s)?"
							,500);
			createQuestion("On average, how much do your students have to spend out-of-pocket to access power points or lecture notes?"
							,500);
			createQuestion("On average, how much do your students have to spend out-of-pocket to access assigned journal articles or websites?"
							,500);
			createQuestion("On average, how much do your students have to spend out-of-pocket to access media (e.g., video, movies, trailers, etc.)?"
							,500);
			createQuestion("On average, how much do your students have to spend out-of-pocket to access all necessary course software?"
							,500);
			createQuestionTextBox("Please list all the instructional resources that your students are responsible for purchasing.");
			reset(true);
			
			$("#nextBTN").click(function() {
				nextQuestion();
			});
			
			$("#preBTN").click(function() {
				previousQuestion();
			});
			
			$("#retryBTN").click(function() {
				reset(true);
			});
			$("#newWinBTN").click(function() {
				toNewWindow();
			});
			$("#returnBTN").click(function() {
				var win = window.open('http://fauelearning.com/faculty/affordable-curriculum-today/', '_blank');
				win.focus();
			});
			$("#toFormBTN").click(function() {
				var win = window.open('http://fauelearning.com/faculty/fau-affordable-curriculum-today-act-information-request-form/', '_blank');
				win.focus();
			});
			console.log( "ready!" );
			$(".answerTextbox").keydown(function (e) {
				// Allow: backspace, delete, tab, escape, enter and .
				if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 190]) !== -1 ||
					 // Allow: Ctrl/cmd+A
					(e.keyCode == 65 && (e.ctrlKey === true || e.metaKey === true)) ||
					 // Allow: Ctrl/cmd+C
					(e.keyCode == 67 && (e.ctrlKey === true || e.metaKey === true)) ||
					 // Allow: Ctrl/cmd+X
					(e.keyCode == 88 && (e.ctrlKey === true || e.metaKey === true)) ||
					 // Allow: home, end, left, right
					(e.keyCode >= 35 && e.keyCode <= 39)) {
						 // let it happen, don't do anything
						 return;
				}
				// Ensure that it is a number and stop the keypress
				if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
					e.preventDefault();
					
				}
			});
			
		});