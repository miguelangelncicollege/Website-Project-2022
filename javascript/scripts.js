function messageSent()
{
	//alert ("Your message has been sent, we will be in touch soon./nThank you very much.");
	document.getElementsById("sectioncontactusid").style.display = "none";
}

function messageNotSent()
{
	document.getElementById("messagesent").style.display = "none";
	document.getElementsById("sectioncontactusid").style.display = "none";
}