// import fetch from 'node-fetch';

async function ValidateDoctor({ regno }: { regno: number }): Promise<boolean> {
    const imrReqUrl = "https://www.nmc.org.in/MCIRest/open/getDataFromService?service=searchDoctor";

    const payload = {
        registrationNo: regno,
    };

    try {
        const response = await fetch(imrReqUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
        });

        const data = await response.json();
        console.log(data);
        return true;
    } catch (error) {
        console.log("Error:", error);
        return false;
    }
}

// Example usage
const regno = 12345;

ValidateDoctor({ regno })
    .then((isDoctorValid) => {
        console.log(`Is doctor valid: ${isDoctorValid}`);
    })
    .catch((error) => {
        console.error('Error validating doctor:', error);
    });


/**
 * Real Request  
 * function regdNoWiseDocDetails() {

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
function populateDataTableOfDoctor(response) {
    var tbody = "";
    var View = "View";
    console.log(response);
    doctorTable = $('#doct_info3').DataTable()
    var totalRecords = 0;
    $.each(response, function (k, v) {
        var regd, yearOfInfo;
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
 
 
 * 
 */