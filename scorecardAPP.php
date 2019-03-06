<!DOCTYPE html>
<html>
<head>
	<title>Demo</title>
	<link href='https://fonts.googleapis.com/css?family=Allerta Stencil' rel='stylesheet'>
	<link rel="stylesheet" type="text/css" href="css/main.css">
	<link href="https://www.fau.edu/css/core/bootstrap.min.css" rel="stylesheet"/>

</head>
<?php
	function saveLogToFile($log){
		$myfile = fopen("testfile.txt", "w");
		fwrite($myfile, $log);
		fclose($myfile);
	}
?>
<body>
	<div class="container-fluid" id= "scorecardApp">
		<div class="row">
			<div class="col-xs-0">
			</div>
			<div class="col-xs-12 ">
				
				<p class="text-center scorecardtext">
					Take this short survey to determine your course&rsquo;s affordability.
				</p>
				<br>
				<div class="row">
					<div style ="max-width: 450px;margin:auto;">
						<div class="col-xs-4 fun-icon small text-center">
							<img class="img-responsive" src="images/icons/BlueThinker_OERicon.png">
							<p  class="text-muted">
								Identify one course that you teach.
							</p>
						</div>
						<div class="col-xs-4 fun-icon small text-center">
							<img class="img-responsive" src="images/icons/RedChoice_OERicon.png">
							<p  class="text-muted">
								Answer all questions.
							</p>
						</div>
						<div class="col-xs-4 fun-icon small text-center">
							<img class="img-responsive" src="images/icons/BlueTimer_OERicon.png">
							<p  class="text-muted">
								Takes less than 5 minutes.
							</p>
						</div>
					</div>
				</div>
				<div class="row">
					<div class="col-xs-12 scorecard">
						<form id = "main">
							<div class="row">
								<div class="col-xs-6">
									<div id="retryBTN" class = "scorecardBtn">
										<button type="button" class="btn btn-fau" >
											Restart
										</button>
									</div>
								</div>
								<div class="col-xs-6">
									<b><p class="text-right" id="questionsleft">1 of 8 questions</p></b>
								</div>
							</div>
							<div class="row">
								<div id="questionContainer">
								</div>
							</div>
							<div id="end" style="display : none;">
								<br>
								<div class="row">
									<br>
									<h3 class="title text-center">Thank You For Completing the Affordability Calculator.</h3>
									<div id = "graphLocation">
										<canvas  id= "graph" style ="max-width: 500px;margin:auto;" ></canvas >
									</div>
								</div>
								<br>
								<div class="row ">
									<div class="col-xs-1">
									</div>
									<div class="col-xs-5">
										<div id = "totalCash">
											<div class = "labelResult text-center"><b>Your course costs</b></div>
											<div class = "cash money text-center">$0</div>
										</div>
									</div>
									<div class="col-xs-5">
										<div id = "totalCash">
											<div class = "labelResult text-center"><b>FAU Affordability Threshold</b></div>
											<div class = "money text-center">$60</div>
										</div>
									</div>
								</div>
								<br>
								<div class="row" id ="endText">
									<div class="col-xs-1">
									</div>
									<div class="col-xs-1">
									</div>
									<div id="goodResult"  class = "result">
										<h4><b>Congratulations!</b></h4>
										<p>
											Based on FAU course affordability standards, you may qualify for an
											FAU Course Affordability Seal. The FAU Center for eLearning and the 
											FAU Libraries are partnering to offer support initiatives that foster
											the adoption, adaptation, and creation of open curriculum resources  to
											decrease peripheral costs to students. Visit the FAU ACT Initiative 
											website to apply for affordability grant funding and course affordability
											certification.
										</p>
										<br>
									</div>
									<h4><b>The Rising Cost of Textbooks & Resources</b></h4>
									<p>
										The Student Public Interest Research Group (PIRG, 2016)
										calculated that textbook costs have increased at a rate
										four times higher than inflation in the last 20 years. 
										One estimate puts the textbook inflation rate at 1,041%
										from 1977 to 2015 (Senack & Donoghue, 2016).
									</p>
									<div id = "badResult" class = "result">
										<br>
										<h4><b>Here&rsquo;s How You Can ACT to Improve Your Course Affordability:
										Apply For Funding</b></h4>
										<p>
											In response to the increasing cost of textbooks and course
											resources, the FAU Center for eLearning and the FAU Libraries
											are partnering to offer support initiatives that foster the
											adoption, adaptation, and creation of open curriculum resources
											to decrease peripheral costs to students. Visit the FAU ACT 
											Initiative website to apply for affordability grant funding and 
											discover ways to make your course more cost effective for students.
										</p>
									</div>
									<br>
									<p>
										Senack, E. (2016) Student group releases new report on textbook prices. Student PIRGs.
										Retrieved from
										<a href="https://studentpirgs.org/news/sp/student-group-releases-new-report-textbook-prices">
											<span style="color : blue">https://studentpirgs.org/news/sp/student-group-releases-new-report-textbook-prices</span>
										</a>
									</p>
									<p>
										Senack, E. (2014, January). Fixing the broken textbook market: How students respond to
										high textbook costs and demand alternatives. Student PIRGs. Retrieved from 
										<a href="http://www.studentpirgs.org/sp/our-textbooks-research.">
											<span style="color : blue">http://www.studentpirgs.org/sp/our-textbooks-research.</span>
										</a>
									</p>
									<br>
								</div>
							</div>
							<div class="row " id = "endBTNS">
								<div class="col-md-4">
									<div id="newWinBTN" class = "scorecardBtn">
										<button type="button" class="btn btn-fau" >
											Print Your Results
										</button>
									</div>
								</div>
								<div class="col-md-4">
									<div id="toFormBTN" class = "scorecardBtn">
										<button type="button" class="btn btn-fau" >
											Fill out the form to get started
										</button>
									</div>
								</div>
								<div class="col-md-4">
									<div id="returnBTN" class = "scorecardBtn">
										<button type="button" class="btn btn-fau" >
											BACK TO THE AFFORDABLE CURRICULUM TODAY PAGE
										</button>
									</div>
								</div>
							</div>
						</form>
						<br>
						<div id= "nav" class="row ">
							<div class="col-sm-4">
								<div id="preBTN"class = "scorecardBtn">
									<button type="button" class="btn btn-fau " >
										Previous
									</button>
								</div>
							</div>
							<div class="col-sm-4">
								<div id = "totalCash">
									<div class = "text-center"><b>Total</b></div>
									<div class = "cash money text-center">$0</div>
								</div>
								<br>
							</div>
							<div class="col-sm-4">
								<div id="nextBTN"class = "scorecardBtn">
									<button type="button" class="btn btn-fau " >
										Next
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>		
	</div>
    <script type="text/javascript" src="https://www.fau.edu/js/core/jquery-latest.js">//</script>
    <script type="text/javascript" src="https://www.fau.edu/js/core/bootstrap.min.js">//</script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.5.0/Chart.min.js"></script>
    <script src="scripts/QuestionManager.js"></script>
	<script src="scripts/ResultHandler.js"></script>
	<script src="scripts/Statistic.js"></script>
	<script src="scripts/main.js"></script>
	<div id="php"></div>
</body>
</html>