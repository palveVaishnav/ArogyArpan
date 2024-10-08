var doctorTable;
//var appContextPath = 'https://www.nmc.org.in/ActivitiWebClient';
var appContextPath = 'https://www.nmc.org.in/MCIRest';
var printVar;
$(function () {
	// search by smc
	$("#doctor_smc_details").on("click", function () {
		/*var smcid = $('#smcId').val().trim();
		var input = {};
		input["smcId"] = encodeURIComponent(smcid);
		var formData = JSON.stringify(input);
		var urlVar = appContextPath
				+ '/open/getDataFromService?service=searchDoctor';
		console.log(formData);
		$.ajax({
			type : 'POST',
			url : urlVar,
			data : formData,
			dataType : "json",
			contentType : "application/json",
			success : function(res) {
				populateDataTableOfDoctor(res);
			}
		})*/
		var smcid = $('#smcId').val().trim();
		//var statusid = $('#statusId').val().trim();
		if (doctorTable) {
			doctorTable.destroy();
			$('#doct_info4').find('tbody').html('');
		}
		doctorTable = $('#doct_info4').DataTable({
			"processing": true,
			"serverSide": true,
			"searching": false,
			"pageLength": 500,
			"lengthMenu": [500, 100, 50],
			"columnDefs": [
				{ targets: 'no-sort', orderable: false }
			],
			"ajax": {
				"url": appContextPath + "/open/getPaginatedData?service=getPaginatedDoctor",
				"data": {
					"smcId": smcid
					//"statusId" : statusid
				}
			},
			"fnDrawCallback": function () {
				console.log(this.fnSettings().fnRecordsTotal());
				$("#totalRecords4").html("Total Record&nbsp;:&nbsp;" + this.fnSettings().fnRecordsTotal()).show();
			}
		});

		$('#doct_info4').show();
	});

});

function populateDoctorDetailsTable() {
	var name = encodeURIComponent($('#doctor_Name').val().trim());
	/*var names = name.split(" ");
	var input = {};
	if (names.length == 1) {
		input["firstName"] = encodeURIComponent(names[0].trim());
	} else {
		var fname=names[0].trim();
		var lname=names[names.length - 1].trim();
		input["firstName"] = encodeURIComponent(fname);
		input["lastName"] = encodeURIComponent(lname);
	}*/
	/*var input = {};
	input["name"] = name;
	var formData = JSON.stringify(input);
	var urlVar = appContextPath
			+ '/open/getDataFromService?service=searchDoctor';
	console.log(formData);
	$.ajax({
		type : 'POST',
		url : urlVar,
		data : formData,
		dataType : "json",
		contentType : "application/json",
		success : function(res) {
			populateDataTableOfDoctor(res);
		}
	})
	*/
	if (doctorTable) {
		doctorTable.destroy();
		$('#doct_info1').find('tbody').html('');
	}
	doctorTable = $('#doct_info1').DataTable({
		"processing": true,
		"serverSide": true,
		"pageLength": 500,
		"searching": false,
		"lengthMenu": [500, 100, 50],
		"columnDefs": [
			{ targets: 'no-sort', orderable: false }
		],
		"ajax": {
			"url": appContextPath + "/open/getPaginatedData?service=getPaginatedDoctor",
			"data": {
				"name": name
			}
		},
		"fnDrawCallback": function () {
			console.log(this.fnSettings().fnRecordsTotal());
			$("#totalRecords1").html("Total Record&nbsp;:&nbsp;" + this.fnSettings().fnRecordsTotal()).show();
		}
	});

	$('#doct_info1').show();
}
function yearWiseDoctor() {

	var regdYear = $('#doctor_year').val().trim();
	var input = {};
	input["year"] = encodeURIComponent(regdYear);
	/*var formData = JSON.stringify(input);
	var urlVar = appContextPath
			+ '/open/getDataFromService?service=searchDoctor';
	console.log(formData);
	$.ajax({
		type : 'POST',
		url : urlVar,
		data : formData,
		dataType : "json",
		contentType : "application/json",
		success : function(res) {
			var doctYearDetls=res;
			populateDataTableOfDoctor(doctYearDetls);
		}
	})*/

	if (doctorTable) {
		doctorTable.destroy();
		$('#doct_info2').find('tbody').html('');
	}
	doctorTable = $('#doct_info2').DataTable({
		"processing": true,
		"serverSide": true,
		"searching": false,
		"pageLength": 500,
		"lengthMenu": [500, 100, 50],
		"columnDefs": [
			{ targets: 'no-sort', orderable: false }
		],
		"ajax": {
			"url": appContextPath + "/open/getPaginatedData?service=getPaginatedDoctor",
			"data": {
				"year": regdYear
			}
		},
		"fnDrawCallback": function () {
			console.log(this.fnSettings().fnRecordsTotal());
			$("#totalRecords2").html("Total Record&nbsp;:&nbsp;" + this.fnSettings().fnRecordsTotal()).show();
		}

	});
	$('#doct_info2').show();

}
function regdNoWiseDocDetails() {

	var regdNo = $('#doct_regdNo').val().trim();
	var input = {};
	input["registrationNo"] = encodeURIComponent(regdNo);
	var formData = JSON.stringify(input);
	//var urlVar = appContextPath	+ '/open/getDataFromService?service=searchDoctor';
	var urlVar = 'https://www.nmc.org.in/MCIRest/open/getDataFromService?service=searchDoctor';
	console.log(formData);
	$.ajax({
		type: 'POST',
		url: urlVar,
		data: formData,
		dataType: "json",
		contentType: "application/json",
		success: function (res) {
			populateDataTableOfDoctor(res);
		}
	})

}
function advanceDoctorDetails() {
	var name = encodeURIComponent($('#doctorName').val().trim());
	var registrationNo = encodeURIComponent($('#doctorRegdNo').val().trim());
	var smcId = encodeURIComponent($('#advsmcId').val().trim());
	var year = encodeURIComponent($('#doctorYear').val().trim());
	//var statusid = encodeURIComponent($('#statusIdAdv').val().trim());
	var urlVar = appContextPath + '/open/getDataFromService?service=searchDoctor';
	if (doctorTable) {
		doctorTable.destroy();
		$('#doct_info5').find('tbody').html('');
	}
	doctorTable = $('#doct_info5').DataTable({
		"processing": true,
		"serverSide": true,
		"searching": false,
		"pageLength": 500,
		"lengthMenu": [500, 100, 50],
		"columnDefs": [
			{ targets: 'no-sort', orderable: false }
		],
		"ajax": {
			"url": appContextPath + "/open/getPaginatedData?service=getPaginatedDoctor",
			"data": {
				"name": name,
				"registrationNo": registrationNo,
				"smcId": smcId,
				"year": year
				//"statusId" : statusid

			}
		},
		"fnDrawCallback": function () {
			console.log(this.fnSettings().fnRecordsTotal());
			$("#totalRecords5").html("Total Record&nbsp;:&nbsp;" + this.fnSettings().fnRecordsTotal()).show();
		}

	});
	$('#doct_info5').show();
}
function populateDataTableOfDoctor(response) {
	var tbody = "";
	var View = "View";
	console.log(response);
	doctorTable = $('#doct_info3').DataTable()
	var totalRecords = 0;
	$.each(response, function (k, v) {
		var regd, yearOfInfo;
		/*if(checkNullAndBlank(v["registrationDate"])){
			regd=v["registrationDate"];
			var yof=new Date(regd);
			yearOfInfo=yof.getFullYear();
		}
		else{
			regd='N/A';
			yearOfInfo='N/A';
		}*/
		totalRecords++;
		if (checkNullAndBlank(v["yearInfo"])) { yearOfInfo = v["yearInfo"] } else { yearOfInfo = 'N/A' }
		var regdNoValue, smc, parentName, fn, mn, ln;
		if (checkNullAndBlank(v["firstName"])) { fn = v["firstName"]; } else { fn = ''; }
		if (checkNullAndBlank(v["middleName"])) { mn = v["middleName"]; } else { mn = ''; }
		if (checkNullAndBlank(v["lastName"])) { ln = v["lastName"]; } else { ln = ''; }
		var name = fullName(fn, mn, ln);
		if (checkNullAndBlank(v['registrationNo'])) { regdNoValue = v['registrationNo']; } else { regdNoValue = "N/A"; }
		if (checkNullAndBlank(v['smcName'])) { smc = v['smcName']; } else { smc = "N/A"; }
		if (checkNullAndBlank(v['parentName'])) { parentName = v['parentName']; } else { parentName = "N/A"; }
		tbody = tbody + "<tr>";
		tbody = tbody + "<td>" + (k + 1) + "</td>";
		tbody = tbody + "<td>" + yearOfInfo + "</td>";
		tbody = tbody + "<td>" + regdNoValue + "</td>";
		tbody = tbody + "<td>" + smc + "</td>";
		tbody = tbody + "<td>" + name + "</td>";
		tbody = tbody + "<td>" + parentName + "</td>";
		tbody = tbody + '<td><a href="javascript:void(0);" onclick="openDoctorDetailsnew(\'' + v["doctorId"] + '\',\'' + regdNoValue + '\')">' + View + '</a></td>'; tbody = tbody + "</tr>";
	});

	if (doctorTable) {
		doctorTable.destroy();
		$('#doct_info3').find('tbody').html('');
	}
	$("#totalRecords3").html("Total Record&nbsp;:&nbsp;" + totalRecords).show();
	$('#doct_info3').find('tbody').html(tbody);
	var t = doctorTable = $('#doct_info3').DataTable({
		"searching": false,
		"lengthMenu": [500, 400, 300, 200, 100, 50, 40, 30, 20, 10]

	});
	t.on('order.dt search.dt', function () {
		t.column(0, { search: 'applied', order: 'applied' }).nodes().each(function (cell, i) {
			cell.innerHTML = i + 1;
		});
	}).draw();

	$('#doct_info3').show();
}

function openDoctorDetailsnew(doctorId, regdNo) {
	//var viewDoctorDetails = appContextPath + '/open/getDataFromService?service=getDoctorDetailsByIdImr';
	var viewDoctorDetails = encodeURI('https://www.nmc.org.in/MCIRest/open/getDataFromService?service=getDoctorDetailsByIdImr');
	var input = {};
	input["doctorId"] = doctorId.toString();
	input["regdNoValue"] = encodeURI(regdNo.toString());
	$.ajax({
		type: 'POST',
		url: viewDoctorDetails,
		async: true,
		contentType: "application/json",
		data: JSON.stringify(input),
		success: function (res) {
			populateAdditionalDoctorModal(res, regdNo);

		},
		error: function () {
			alert("error");
		}

	});
}

function openDoctorDetails(doctorId) {
	var viewDoctorDetails = appContextPath + '/open/getDataFromService?service=getDoctorDetailsById';
	var input = {};
	input["doctorId"] = doctorId.toString();
	$.ajax({
		type: 'POST',
		url: viewDoctorDetails,
		async: true,
		contentType: "application/json",
		data: JSON.stringify(input),
		success: function (res) {
			populateAdditionalDoctorModal(res);

		},
		error: function () {
			alert("error");
		}

	});

}
function populateAdditionalDoctorModal(additionalDoctorDetails) {
	var doctAddDetails = JSON.parse(additionalDoctorDetails);
	if (!doctAddDetails["removedStatus"]) {
		$.each(doctAddDetails, function (k, v) {
			var tbody = "";
			var dfname, dmname, dlname;
			if (checkNullAndBlank(doctAddDetails["firstName"])) { dfname = doctAddDetails["firstName"]; } else { dfname = ''; }
			if (checkNullAndBlank(doctAddDetails["middleName"])) { dmname = doctAddDetails["middleName"]; } else { dmname = ''; }
			if (checkNullAndBlank(doctAddDetails["lastName"])) { dlname = doctAddDetails["lastName"]; } else { dlname = ''; }
			var name = fullName(dfname, dmname, dlname);
			var parentsValue, dobValue, yofValue, regdNoValue, regDateValue, smcValue, qualValue, qualYearValue, univValue, uprnNo;
			if (checkNullAndBlank(doctAddDetails['parentName'])) { parentsValue = doctAddDetails['parentName']; } else { parentsValue = "N/A"; }
			if (checkNullAndBlank(doctAddDetails['uprnNo'])) { uprnNo = doctAddDetails['uprnNo']; } else { uprnNo = "N/A"; }
			if (doctAddDetails['birthDateStr'] == "01/01/1900") { dobValue = "N/A" } else if (checkNullAndBlank(doctAddDetails['birthDateStr'])) { dobValue = doctAddDetails['birthDateStr']; } else { dobValue = "N/A"; }

			if (checkNullAndBlank(doctAddDetails['yearInfo'])) { yofValue = doctAddDetails['yearInfo']; } else { yofValue = "N/A"; }
			if (checkNullAndBlank(doctAddDetails['registrationNo'])) { regdNoValue = doctAddDetails['registrationNo']; } else { regdNoValue = "N/A"; }
			if (checkNullAndBlank(doctAddDetails['regDate'])) { regDateValue = doctAddDetails['regDate']; } else { regDateValue = "N/A"; }
			if (checkNullAndBlank(doctAddDetails['smcName'])) { smcValue = doctAddDetails['smcName']; } else { smcValue = "N/A"; }
			if (checkNullAndBlank(doctAddDetails['doctorDegree'])) { qualValue = doctAddDetails['doctorDegree']; } else { qualValue = "N/A"; }
			if (checkNullAndBlank(doctAddDetails['yearOfPassing'])) { qualYearValue = doctAddDetails['yearOfPassing']; } else { qualYearValue = "N/A"; }
			if (checkNullAndBlank(doctAddDetails['university'])) { univValue = doctAddDetails['university']; } else { univValue = "N/A"; }
			/*if( doctAddDetails["restoredStatus"] == true){
			if( doctAddDetails["remarks"] != null &&  doctAddDetails["remarks"] != ""){
				tbody = tbody + "<tr align='center' style='background-color:#9cd159'><td  colspan='4' style='color:#fff;'>"	 + doctAddDetails["remarks"]+ "</td></tr>";
			}
			}*/

			tbody = tbody + "<tr><td>" + 'Name ' + "</td><td colspan='3'>" + name + "</td></tr>";
			tbody = tbody + "<tr><td>" + 'Father/Husband Name' + "</td><td colspan='3'>" + parentsValue + "</td></tr>";
			tbody = tbody + "<tr><td width='25%'>" + 'Date of Birth' + "</td><td width='25%'>" + dobValue + "</td><td width='25%'>" + 'Year of Info' + "</td><td width='25%'>" + yofValue + "</td></tr>";
			tbody = tbody + "<tr><td width='25%'>" + 'Registration No' + "</td><td width='25%'>" + regdNoValue + "</td><td width='25%'>" + 'Date of Reg.' + "</td><td width='25%'>" + regDateValue + "</td></tr>";
			//tbody = tbody + "<tr><td>" + 'State Medical Council' + "</td><td colspan='3'>" + smcValue + "</td></tr>";
			tbody = tbody + "<tr><td width='25%'>" + 'UPRN No' + "</td><td width='25%'>" + uprnNo + "</td><td width='25%'>" + 'State Medical Council' + "</td><td width='25%'>" + smcValue + "</td></tr>";
			tbody = tbody + "<tr><td width='25%'>" + 'Qualification' + "</td><td width='25%'>" + qualValue + "</td><td width='25%'>" + 'Qualification Year' + "</td><td width='25%'>" + qualYearValue + "</td></tr>";
			tbody = tbody + "<tr><td>" + 'University Name' + "</td><td colspan='3'>" + univValue + "</td></tr>";
			if (checkNullAndBlank(doctAddDetails["addlqual1"])) {
				tbody = tbody + "<tr><td colspan='4' style='text-align: center;'>" + 'Additional Qualification :- 1' + "</td></tr>";
				tbody = tbody + "<tr><td width='25%'>" + 'Qualification' + "</td><td width='25%'>" + returnBlankIfNull(doctAddDetails["addlqual1"]) + "</td><td width='25%'>" + 'Qualification Year' + "</td><td width='25%'>" + returnBlankIfNull(doctAddDetails["addlqualyear1"]) + "</td></tr>";
				tbody = tbody + "<tr><td width='25%'>" + 'University Name	' + "</td><td width='25%' colspan='3'>" + returnBlankIfNull(doctAddDetails["addlqualuniv1"]) + "</td></tr>";
				tbody = tbody + "<tr><td colspan='4' width='5px;'>" + "</td></tr>";
			}
			if (checkNullAndBlank(doctAddDetails["addlqual2"])) {
				tbody = tbody + "<tr><td colspan='4' style='text-align: center;'>" + 'Additional Qualification :- 2' + "</td></tr>";
				tbody = tbody + "<tr><td width='25%'>" + 'Qualification' + "</td><td width='25%'>" + returnBlankIfNull(doctAddDetails["addlqual2"]) + "</td><td width='25%'>" + 'Qualification Year' + "</td><td width='25%'>" + returnBlankIfNull(doctAddDetails["addlqualyear2"]) + "</td></tr>";
				tbody = tbody + "<tr><td width='25%'>" + 'University Name	' + "</td><td width='25%' colspan='3'>" + returnBlankIfNull(doctAddDetails["addlqualuniv2"]) + "</td></tr>";
				tbody = tbody + "<tr><td colspan='4' width='5px;'>" + "</td></tr>";
			}
			if (checkNullAndBlank(doctAddDetails["addlqual3"])) {
				tbody = tbody + "<tr><td colspan='4' style='text-align: center;'>" + 'Additional Qualification :- 3' + "</td></tr>";
				tbody = tbody + "<tr><td width='25%'>" + 'Qualification' + "</td><td width='25%'>" + returnBlankIfNull(doctAddDetails["addlqual3"]) + "</td><td width='25%'>" + 'Qualification Year' + "</td><td width='25%'>" + returnBlankIfNull(doctAddDetails["addlqualyear3"]) + "</td></tr>";
				tbody = tbody + "<tr><td width='25%'>" + 'University Name	' + "</td><td width='25%' colspan='3'>" + returnBlankIfNull(doctAddDetails["addlqualuniv3"]) + "</td></tr>";
				tbody = tbody + "<tr><td colspan='4' width='5px;'>" + "</td></tr>";
			}
			var permanentAddress;
			if (checkNullAndBlank(doctAddDetails['address'])) { permanentAddress = doctAddDetails['address']; } else { permanentAddress = "N/A"; }
			tbody = tbody + "<tr><td>" + 'Permanent Address' + "</td><td colspan='3'>" + permanentAddress + "</td></tr>";
			$('#doctorModal #doctorBiodata').html(tbody);
			$('#doctorModal').modal('show');
		});
	}
	else {
		blackListDoc(doctAddDetails);
	}
	printVar = doctAddDetails;
}
function fullName(fname, mname, lname) {
	var fullname;
	if (checkNullAndBlank(mname)) {
		fullname = fname + '&nbsp;' + mname + '&nbsp;' + lname;
	}
	else {
		fullname = fname + '&nbsp;' + lname;
	}
	return fullname;
}
function checkNullAndBlank(value) {
	if (null != value && "" != value) {
		return true;
	}
	else {
		return false;
	}
}
function blackListDoc(doctAddDetails) {
	var html = '';
	var tbody = '';
	var imr = "View IMR Details";
	var name = "";
	var fname = doctAddDetails["firstName"];
	var suspTemp = "Suspended Temporarily From&nbsp;:&nbsp;";
	var vltr = "Vide Letter of&nbsp;&nbsp;";
	var regdno, regddate, qual, pname, bdate, yop, univ, yof, smcName, sDate, rDate;
	if (checkNullAndBlank(doctAddDetails['removedOn'])) { sDate = doctAddDetails['removedOn']; } else { sDate = ""; }
	if (checkNullAndBlank(doctAddDetails['restoredOn'])) { rDate = doctAddDetails['restoredOn']; } else { rDate = ""; }
	if (checkNullAndBlank(doctAddDetails['yearInfo'])) { yof = doctAddDetails['yearInfo']; } else { yof = "N/A"; }
	if (checkNullAndBlank(doctAddDetails['registrationNo'])) { regdno = doctAddDetails['registrationNo']; } else { regdno = "N/A"; }
	if (checkNullAndBlank(doctAddDetails['regDate'])) { regddate = doctAddDetails['regDate']; } else { regddate = "N/A"; }
	if (checkNullAndBlank(doctAddDetails['doctorDegree'])) { qual = doctAddDetails['doctorDegree']; } else { qual = "N/A"; }
	if (checkNullAndBlank(doctAddDetails['parentName'])) { pname = doctAddDetails['parentName']; } else { pname = "N/A"; }
	if (checkNullAndBlank(doctAddDetails['birthDateStr'])) { bdate = doctAddDetails['birthDateStr']; } else { bdate = "N/A"; }
	if (checkNullAndBlank(doctAddDetails['yearOfPassing'])) { yop = doctAddDetails['yearOfPassing']; } else { yop = "N/A"; }
	if (checkNullAndBlank(doctAddDetails['university'])) { univ = doctAddDetails['university']; } else { univ = "N/A"; }
	if (checkNullAndBlank(doctAddDetails['smcName'])) { smcName = doctAddDetails['smcName']; } else { smcName = "N/A"; }
	/*var remarks =doctAddDetails["remarks"];
	var suspInfo;
	if(rDate.indexOf('1900')>-1){
		suspInfo = "Suspended Temporarily From&nbsp;:&nbsp;"+sDate;
	}
	else{
		
		suspInfo = "Suspended Temporarily From "+sDate + " to "+rDate;
	}
	tbody = tbody + "<tr align='center' style='background-color:#9cd159'><td  colspan='4' style='color:#fff;'>"	+ suspInfo + '<br>' + remarks+ "</td></tr>";*/
	tbody = tbody + "<tr><td>" + 'Name' + "</td><td colspan='3'>" + fname + "</td></tr>";
	tbody = tbody + "<tr><td>" + 'Father/Husband Name' + "</td><td colspan='3'>" + pname + "</td></tr>";
	tbody = tbody + "<tr><td>" + 'Date of Birth' + "</td><td>" + bdate + "</td><td>" + 'Year of Info' + "</td><td>" + yof + "</td></tr>";
	tbody = tbody + "<tr><td>" + 'Registration No' + "</td><td>" + regdno + "</td><td>" + 'Date of Reg.' + "</td><td>" + regddate + "</td></tr>";
	tbody = tbody + "<tr><td>" + 'State Medical Council' + "</td><td colspan='3'>" + smcName + "</td></tr>";
	tbody = tbody + "<tr><td>" + 'Qualification' + "</td><td>" + qual + "</td><td>" + 'Qualification Year' + "</td><td>" + yop + "</td></tr>";
	tbody = tbody + "<tr><td>" + 'University Name' + "</td><td colspan='3'>" + univ + "</td></tr>";
	tbody = tbody + "<tr><td colspan='4'>" + "</td></tr>";
	// reading permanent address
	var permanentAddress = doctAddDetails['address'];
	if (permanentAddress != null) {
		tbody = tbody + "<tr><td>" + 'Permanent Address' + "</td><td colspan='3'>" + permanentAddress + "</td></tr>";
	}
	$(".modal .modal-title").html(imr);
	$('#doctorModal #doctorBiodata').html(tbody);
	$('#doctorModal').modal('show');
}
function Dformat(d) {
	var targetDate;
	var data = d.split(" ");
	var day = data[1];
	var year = data[2];
	var month = data[0];
	var monthArr = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
	$.each(monthArr, function (k, v) {
		if (v == month.trim()) {
			var monthIndex;
			var mIndex = (monthArr.indexOf(month) + 1).toString();
			if (mIndex.length < 2) {
				monthIndex = '0' + mIndex;
			}
			targetDate = day + '/' + monthIndex + '/' + year;
		}
	})
	return targetDate;
}
function returnBlankIfNull(v) {
	if (v != null && v != "") {
		return v;
	} else {
		return "";
	}
}


function printFunc() {
	doctAddDetails = printVar;
	var tbody = "";
	var dfname, dmname, dlname, sDate, rDate, suspInfo;

	/*if( doctAddDetails["restoredStatus"] == true){
	
	if(checkNullAndBlank(doctAddDetails['removedOn'])){sDate=doctAddDetails['removedOn'];}else{sDate="";}
	if(checkNullAndBlank(doctAddDetails['restoredOn'])){rDate=doctAddDetails['restoredOn'];}else{rDate="";}	
		if(rDate.indexOf('1900')>-1){
			suspInfo = "Suspended Temporarily From&nbsp;:&nbsp;"+sDate;
		}
		else{
			
			suspInfo = "Suspended Temporarily From "+sDate + " to "+rDate;
		}
	}*/
	if (checkNullAndBlank(doctAddDetails["firstName"])) { dfname = doctAddDetails["firstName"]; } else { dfname = ''; }
	if (checkNullAndBlank(doctAddDetails["middleName"])) { dmname = doctAddDetails["middleName"]; } else { dmname = ''; }
	if (checkNullAndBlank(doctAddDetails["lastName"])) { dlname = doctAddDetails["lastName"]; } else { dlname = ''; }
	var name = fullName(dfname, dmname, dlname);
	var parentsValue, dobValue, yofValue, regdNoValue, regDateValue, smcValue, qualValue, qualYearValue, univValue, uprnNo;
	if (checkNullAndBlank(doctAddDetails['parentName'])) { parentsValue = doctAddDetails['parentName']; } else { parentsValue = "N/A"; }
	if (checkNullAndBlank(doctAddDetails['uprnNo'])) { uprnNo = doctAddDetails['uprnNo']; } else { uprnNo = "N/A"; }
	if (checkNullAndBlank(doctAddDetails['birthDateStr'])) { dobValue = doctAddDetails['birthDateStr']; } else { dobValue = "N/A"; }
	if (checkNullAndBlank(doctAddDetails['yearInfo'])) { yofValue = doctAddDetails['yearInfo']; } else { yofValue = "N/A"; }
	if (checkNullAndBlank(doctAddDetails['registrationNo'])) { regdNoValue = doctAddDetails['registrationNo']; } else { regdNoValue = "N/A"; }
	if (checkNullAndBlank(doctAddDetails['regDate'])) { regDateValue = doctAddDetails['regDate']; } else { regDateValue = "N/A"; }
	if (checkNullAndBlank(doctAddDetails['smcName'])) { smcValue = doctAddDetails['smcName']; } else { smcValue = "N/A"; }
	if (checkNullAndBlank(doctAddDetails['doctorDegree'])) { qualValue = doctAddDetails['doctorDegree']; } else { qualValue = "N/A"; }
	if (checkNullAndBlank(doctAddDetails['yearOfPassing'])) { qualYearValue = doctAddDetails['yearOfPassing']; } else { qualYearValue = "N/A"; }
	if (checkNullAndBlank(doctAddDetails['university'])) { univValue = doctAddDetails['university']; } else { univValue = "N/A"; }

	tbody = tbody + "<table class='table table-bordered' align='center'> ";
	tbody = tbody + "<tr><td colspan='4'style='text-align:center' title='Medical Council of India' alt='Medical Council of India'> <img src='https://nmc.org.in/wp-content/gallery/NMC_logo.png' width='30%' height='65%'>" + ' ' + "</td></tr>";
	tbody = tbody + "<tr><td colspan='4'style='text-align:center'>" + '<b>Indian Medical Register<b>' + "</td></tr>";
	tbody = tbody + "<tr><td colspan='4'style='text-align:center'>" + 'View IMR Details ' + "</td></tr>";
	/*if( doctAddDetails["restoredStatus"] == true){
	tbody = tbody + "<tr ><td  colspan='4' >"	+ suspInfo + '<br>' + doctAddDetails["remarks"]+ "</td></tr>";
	
	}*/
	tbody = tbody + "<tr><td>" + 'Name ' + "</td><td colspan='3'>" + name + "</td></tr>";
	tbody = tbody + "<tr><td>" + 'Father/Husband Name' + "</td><td colspan='3'>" + parentsValue + "</td></tr>";
	//tbody = tbody + "<tr><td>" + 'Date of Birth' + "</td><td >" + dobValue + "</td><td>"	+ '' + "</td></tr>";
	tbody = tbody + "<tr><td width='25%'>" + 'Date of Birth' + "</td><td width='25%'>" + dobValue + "</td><td width='25%'>" + 'Year of Info' + "</td><td width='25%'>" + yofValue + "</td></tr>";


	tbody = tbody + "<tr><td width='25%'>" + 'Registration No' + "</td><td width='25%'>" + regdNoValue + "</td><td width='25%'>" + 'Date of Reg.' + "</td><td width='25%'>" + regDateValue + "</td></tr>";
	tbody = tbody + "<tr><td>" + 'State Medical Council' + "</td><td colspan='3'>" + smcValue + "</td></tr>";

	tbody = tbody + "<tr><td width='25%'>" + 'Qualification' + "</td><td width='25%'>" + qualValue + "</td><td width='25%'>" + 'Qualification Year' + "</td><td width='25%'>" + qualYearValue + "</td></tr>";

	tbody = tbody + "<tr><td width='25%'>" + 'University Name' + "</td><td colspan='3'>" + univValue + "</td></tr>";



	if (checkNullAndBlank(doctAddDetails["addlqual1"])) {
		tbody = tbody + "<tr><td colspan='4' style='text-align: center;'>" + 'Additional Qualification :- 1' + "</td></tr>";
		tbody = tbody + "<tr><td width='25%'>" + 'Qualification' + "</td><td width='25%'>" + returnBlankIfNull(doctAddDetails["addlqual1"]) + "</td><td width='25%'>" + 'Qualification Year' + "</td><td width='25%'>" + returnBlankIfNull(doctAddDetails["addlqualyear1"]) + "</td></tr>";
		tbody = tbody + "<tr><td width='25%'>" + 'University Name	' + "</td><td width='25%' colspan='3'>" + returnBlankIfNull(doctAddDetails["addlqualuniv1"]) + "</td></tr>";
		tbody = tbody + "<tr><td colspan='4' width='5px;'>" + "</td></tr>";
	}
	if (checkNullAndBlank(doctAddDetails["addlqual2"])) {
		tbody = tbody + "<tr><td colspan='4' style='text-align: center;'>" + 'Additional Qualification :- 2' + "</td></tr>";
		tbody = tbody + "<tr><td width='25%'>" + 'Qualification' + "</td><td width='25%'>" + returnBlankIfNull(doctAddDetails["addlqual2"]) + "</td><td width='25%'>" + 'Qualification Year' + "</td><td width='25%'>" + returnBlankIfNull(doctAddDetails["addlqualyear2"]) + "</td></tr>";
		tbody = tbody + "<tr><td width='25%'>" + 'University Name	' + "</td><td width='25%' colspan='3'>" + returnBlankIfNull(doctAddDetails["addlqualuniv2"]) + "</td></tr>";
		tbody = tbody + "<tr><td colspan='4' width='5px;'>" + "</td></tr>";
	}
	if (checkNullAndBlank(doctAddDetails["addlqual3"])) {
		tbody = tbody + "<tr><td colspan='4' style='text-align: center;'>" + 'Additional Qualification :- 3' + "</td></tr>";
		tbody = tbody + "<tr><td width='25%'>" + 'Qualification' + "</td><td width='25%'>" + returnBlankIfNull(doctAddDetails["addlqual3"]) + "</td><td width='25%'>" + 'Qualification Year' + "</td><td width='25%'>" + returnBlankIfNull(doctAddDetails["addlqualyear3"]) + "</td></tr>";
		tbody = tbody + "<tr><td width='25%'>" + 'University Name	' + "</td><td width='25%' colspan='3'>" + returnBlankIfNull(doctAddDetails["addlqualuniv3"]) + "</td></tr>";
		tbody = tbody + "<tr><td colspan='4' width='5px;'>" + "</td></tr>";
	}

	var permanentAddress;
	if (checkNullAndBlank(doctAddDetails['address'])) { permanentAddress = doctAddDetails['address']; } else { permanentAddress = "N/A"; }
	tbody = tbody + "<tr><td>" + 'Permanent Address' + "</td><td colspan='3'>" + permanentAddress + "</td></tr>";


	tbody = tbody + "</table> ";
	var popupWin = window.open('', '_blank', 'height=700,width=850,toolbar=no,scrollbars=yes,fullscreen=no,status=yes,menubar=no,location=no,directories=no,resizable=yes');
	//popupWin.document.open();
	popupWin.document.write('<html><head><link rel="stylesheet" type="text/css" href="printStyle.css" />' +
		'<style> .btn { display: none; }table{font-size:15px;}body{font-family: "Open Sans";}table, th, td {border: 1px solid black;border-collapse: collapse;}' +
		'table>thead>tr>th{background-color:#34b7e8;}</style>' +
		'</head><body onload="window.print()">' + tbody + ' </body></html>');
	popupWin.document.close();

}