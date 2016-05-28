function callbackAndroidRegister()
{
		var configToRegister = {senderid:"335745877165"};
		kony.push.register(configToRegister);
		alert("Registration for your mobile is Done !!!");
}

function callbackAndroidSetCallbacks()
{
 	kony.push.setCallbacks({onsuccessfulregistration: regSuccessAndroidCallback, onfailureregistration: regFailureAndroidCallback, onlinenotification: onlinePushNotificationAndroidCallback, offlinenotification: offlinePushNotificationAndroidCallback, onsuccessfulderegistration: unregSuccessAndroidCallback, onfailurederegistration:unregFailureAndroidCallback });
 	//alert("setCallBack Done !!!");
}

function regSuccessAndroidCallback(regId)
{
	kony.print("Registerd to Android push server: "+ regId);
	subscribeKPNS(regId,"androidgcm");
}

function regFailureAndroidCallback(errormsg)
{
	kony.print("************ JS regFailureCallback() called *********");
	kony.print(errormsg);
	alert("Registration Failed ");
	//alert("Error message: "+JSON.stringify(errormsg));
}

function onlinePushNotificationAndroidCallback(msg)
{
	kony.print("************ JS onlinePushNotificationCallback() called *********");
	kony.print(JSON.stringify(msg));
	alert("Message Received : "+ msg["content"]);
	
	var msgs = [];
	var fetchid = msg["mid"];
	for(var key in msg)
	{
		var tmp={ "lblkey":""+key,"lblval":""+msg[key] };
		msgs.push(tmp);
	}
	function triggerSync(){
		if (kony.sdk.mvvm.isNetworkAvailabile()) {
                        kony.sdk.mvvm.backgroundSyncOnStatusChangeKA();
                    }
	}
	//alert("New Message"+msg[]);
	
}

function offlinePushNotificationAndroidCallback(msg)
{
	kony.print("************ JS offlinePushNotificationCallback() called *********");
	kony.print(msg);
	kony.print("Message Received..\n "+msg["content"]);
	var msgs = [];
	for(var key in msg)
	{
		var tmp={ "lblkey":""+key,"lblval":""+msg[key] };
		msgs.push(tmp);
	}
	
}

function unregSuccessAndroidCallback()
{
	//alert("Unregisterd Sucesfully!!");
	unsubscribeKPNS();
}

function unregFailureAndroidCallback(errormsg)
{
	alert(" Unregistration Failed!!");
	//alert("Error message: "+JSON.stringify(errormsg));
	kony.print(errormsg);
	
}

