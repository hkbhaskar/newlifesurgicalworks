var NORMAL_STATE = 4;

var requestUrlForAction = "";



function _newXMLHttpRequest()

{

	var retVal;

	if (window.XMLHttpRequest){

		retVal = new XMLHttpRequest();

	}else if (window.ActiveXObject){

		try{

			retVal = new ActiveXObject("Msxml2.XMLHTTP");

		}catch (e){

			try{

				retVal = new ActiveXObject("Microsoft.XMLHTTP");

			}catch (e){}

		}

	}

	return retVal;

}



function makeheaderRequest(pst, URL){

	var reqP = _newXMLHttpRequest();

	reqP.open('POST', URL, true);



	reqP.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

	reqP.setRequestHeader("Content-length", pst.length);

	reqP.setRequestHeader("Connection", "close");

	reqP.send(pst);

	return reqP;

}



function formPost(formName,callthis,action){

	var prms = getParams(formName);

	var reqP = _newXMLHttpRequest();

	reqP.onreadystatechange = postBack;

	reqP.open('POST', requestUrlForAction+action, true);

	reqP.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

	reqP.setRequestHeader("Content-length", prms.length);

	reqP.setRequestHeader("Connection", "close");

	reqP.send(prms);



	function postBack(){

		if (reqP.readyState == 4){

			if (reqP.status == 200){

				jsonRetVal = reqP.responseText;

				eval(callthis+"()");

			}

		}

	}

}



function getParams(formName){

	

	var pst = "";

	var theForm = document.forms[formName];

	for(var i=0;i<theForm.length;i++){

		if(theForm[i].tagName=="SELECT"){

			pst += "&" + theForm[i].name + "=";

			if(theForm[i][theForm[i].selectedIndex].value){

				pst += theForm[i][theForm[i].selectedIndex].value;

			}else{

				pst += theForm[i][theForm[i].selectedIndex].text;

			}

		}else{

			if((theForm[i].getAttribute('type') == "checkbox") || (theForm[i].getAttribute('type') == "radio")){

				if(theForm[i].checked){

					pst += "&" + theForm[i].name + "=";

					pst += encodeURIComponent(theForm[i].value);

				}

			}else{

				pst += "&" + theForm[i].name + "=";

				pst += encodeURIComponent(theForm[i].value);

			}

		}

	}

	return pst.substr(1);

}



function getCategotyParams(formName){

	

	var pst = "";

	var theForm = document.forms[formName];

	for(var i=0;i<theForm.length;i++){

		if(theForm[i].tagName=="SELECT"){

			pst += "&" + theForm[i].name + "=";

			if(theForm[i][theForm[i].selectedIndex].value){

				pst += theForm[i][theForm[i].selectedIndex].value;

			}else{

				pst += theForm[i][theForm[i].selectedIndex].text;

			}

		}

	}

	return pst.substr(1);

}





function updatecounter(productid, productname){	
	var pst = 'productid='+productid+'&productname='+productname;
	reqP = makeheaderRequest(pst, '../../updatecount.php');

	reqP.onreadystatechange = showloadsuccess;	

	function showloadsuccess(){

		if (reqP.readyState == 4){
			if (reqP.status == 200){

				jsonRetVal = reqP.responseText;	
				alert('This Product is not available for Retail Sales');

			}

		}

	}

	return false;   

}


function removefrmcart(itemcode){	
	var pst = 'itemcode='+itemcode+'&action=remove';
	reqP = makeheaderRequest(pst, 'update.php');
	reqP.onreadystatechange = showloadsuccess;	

	function showloadsuccess(){
		if (reqP.readyState == 4){
			if (reqP.status == 200){
				jsonRetVal = reqP.responseText;
					document.getElementById('datadiv').innerHTML = jsonRetVal; 
			}
		}
	}
	return false;   
}

function updatecart(itemcode, qnty){	
	var quantities = document.addtocart.quantity[qnty].value;
	var pst = 'itemcode='+itemcode+'&quantity='+quantities+'&action=update';
	reqP = makeheaderRequest(pst, 'update.php');
	
	reqP.onreadystatechange = showloadsuccess;	

	function showloadsuccess(){
		if (reqP.readyState == 4){
			if (reqP.status == 200){
				jsonRetVal = reqP.responseText;	
				alert(jsonRetVal);
				document.getElementById('datadiv').innerHTML = jsonRetVal; 
				
			}

		}

	}
	return false;  
}



/**
 * validateHelp
 * @param
 */

function validateHelp() {
 // chkBx = document.getElementsByName('field[]');
  exp = trim($('[name = helpexp]').val());
  name = trim($('[name = helpname]').val());
  phone = trim($('[name = helpphone]').val());
  email = trim($('[name = helpemail]').val());
  city = trim($('[name = helpcity]').val());
  pin = trim($('[name = helppin]').val());
  country = trim($('[name = country]').val());
  capta = trim($('[name = captcha]').val());
  capre = trim($('[name = capre]').val());
  mail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  num = /^\d+$/;
  
  
  //x=0;
  //for(i=0; i<chkBx.length;i++)
  //{
  //  if (chkBx[i].checked) {
  //    x++;
  //  }
  //}
  
  //if(x==0)
  //{
  //  alert('Please select a problem checkbox');
  //  return false;
  //}
  //if(chkBx[9].checked && (exp.length < 5))
  if(name.length == 0)
  {
    alert('Please enter your Name');
    $('[name = helpname]').focus();
    return false;
  }
  if(phone.length == 0)
  {
    alert('Please enter your Phone Number');
    $('[name = helpphone]').focus();
    return false;
  }
  if(!mail.test(email))
  {
    alert('Please enter your Email');
    $('[name = helpemail]').focus();
    return false;
  }
  if(country.length == 0)
  {
    alert('Please enter your Country');
    $('[name = country]').focus();
    return false;
  }
  if((exp.length < 5))
  {
    alert('Please fill your Requirement');
    $('[name = helpexp]').focus();
    return false;
  }
  if(capta.length == 0)
  {
    alert('Please answer the security question!!');
    $('[name = captcha]').focus();
    return false;
  }
  if(capre!= capta)
  {
    alert('Your answer to the security question is not correct');
    $('[name = captcha]').focus();
    return false;
  }
  else{
   document.forms['helpform'].action="sendcontact.php";
   document.forms['helpform'].submit();
  }
  
  
}

function trim (myString)     
{     myString = String(myString);
    return myString.replace(/^s+/g,'').replace(/s+$/g,'')     
}

/**
 * captcha
 * @param 
 */

function captcha() {
  x = Math.floor((Math.random()*10)+1);
  y = Math.floor((Math.random()*10)+1);
  answer  = x+y;
 $('#x').text(x);
 $('#y').text(y);
 $('[name = capre]').val(answer);
}
