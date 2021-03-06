function getDetailsUrl() {
	var url = window.location.href;
	var pathname = window.location.pathname;
	console.log(pathname);
	var ind = pathname.lastIndexOf('/') + 1;
	console.log(ind);
	
	url = pathname.substring(0,ind) + 'Main.do';
	console.log(pathname);
	return pathname;
}

function getMainUrl() {
	var pathname = window.location.pathname;
	console.log(pathname);
	var ind = pathname.lastIndexOf('/') + 1;
	console.log(ind);
	
	pathname = pathname.substring(0,ind) + 'index.jsp';
	console.log(pathname);
	return pathname;
}

function bindLongin() {
	$('#auth-form').submit(function () {
        
        var formdata = {
	        'command' : $('#login-command').val(),
	        'login': $('#login').val(),
	        'password' : $('#password').val()
	    };
                
        var jqxhr = $.ajax({
                //url: 'Main.do',
                url: 'user',
        		data: formdata,
                dataType: 'text',
                type: 'post',
                success: function (data) {
                        //console.log('data=' + data);
                        //handleUserData(data);
                        //console.log('Status: ' + jqxhr.getAllResponseHeaders());
                        //alert('Status: ' + jqxhr.getAllResponseHeaders());
                        //handleUserOnLoad();
                		//alert('Request succes!');
                		//alert('Jump to url: ' + getMainUrl());
                        window.location.href = data;
                },
                error:  handleError
        });
        return false;
	});	
}

function showRequest(formData, jqForm, options) {
	var queryString = $.param(formData);
	//alert('We send this: \n\n' + queryString + options.url);
	return true;
}

function handleError (response, status, err) {
	// This option doesn't catch any of the error below, 
	// everything is always 'OK' a.k.a 200
	if(response.status == 400){
		var errText = response.responseText;
		var errKey = errText.substring(0,1);
		console.log(errKey);
		if (errKey == 'p') {
			$('#password').css('border','2px solid red');
		} else if (errKey == 'e' || errKey == 'l') {
			$('#login').css('border','2px solid red');
		} else {
			$('#password').css('border','2px solid red');
			$('#login').css('border','2px solid red');
		}
		$('#error').empty().append(errText);     
	}
	
	if(response.status == 601){
		sessionTimedOut();
	}
}

function bindEditIssueForm() {
	$('#edit-issue-form').submit(function () {
        
        var post_data = {
	        'command' : $('#update-command').val(),
	        'id' : $('#id').val(),
	        'type': $('#type').val(),
	        'priority' : $('#priority').val(),
	        'status' : $('#status').val(),
	        'resolution' : $('#resolution').val(),
	        'project' : $('#project').val(),
	        'projectbuild' : $('#projectbuild').val(),
	        'summary' : $('#summary').val(),
	        'description' : $('#description').val(),
	        'assignee' : $('#assignee').val()
	    };
    
        $.ajax({
            url: 'Main.do',
            data: post_data,
            dataType: 'text',
            type: 'post',
            success: function (data) {
        		window.location.href = data;
            },
            error:  handleIssueError
        });
        return false;
	});	
}

function bindNewIssueForm() {
	$('#new-issue-form').submit(function () {
        
        var post_data = {
	        'command' : $('#insert-command').val(),
	        'type': $('#type').val(),
	        'priority' : $('#priority').val(),
	        'project' : $('#project').val(),
	        'projectbuild' : $('#projectbuild').val(),
	        'summary' : $('#summary').val(),
	        'description' : $('#description').val(),
	        'assignee' : $('#assignee').val()
	    };
    
        $.ajax({
            url: 'Main.do',
            data: post_data,
            dataType: 'text',
            type: 'post',
            success: function (data) {
        		window.location.href = data;
            },
            error:  handleIssueError
        });
        return false;
	});	
}

function executeDeleteIssue() {
        
        var post_data = {
	        'command' : $('#delete-command').val(),
	        'id' : $('#id').val()
	    };
    
        $.ajax({
            url: 'Main.do',
            data: post_data,
            dataType: 'text',
            type: 'post',
            success: function (data) {
        		window.location.href = data;
            },
            error:  handleIssueError
        });
        return false;	
}

function handleIssueError (response, status, err) {
	
	if(response.status == 400){
		var errText = response.responseText;
		$('#error-issue').empty().append('<span>').append(errText);     
	}
	
	if(response.status == 601){
		sessionTimedOut();
	}
}
