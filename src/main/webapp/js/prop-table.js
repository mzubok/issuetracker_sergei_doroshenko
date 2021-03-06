var jsonHandlerProp = {
        root: "rows",
        page: "page",
        total: "total",
        records: "records",
        repeatitems: true,
        cell: "cell",
        id: "id",
    };

function handleLoadError (jqXHR, textStatus, errorThrown) {
	alert('HTTP status code: ' + jqXHR.status + '\n' +
            'textStatus: ' + textStatus + '\n' +
            'errorThrown: ' + errorThrown);
      alert('HTTP message body (jqXHR.responseText): ' + '\n' + jqXHR.responseText);
}

function createStatusesTable() {
    $("#statuses-table").jqGrid({
        url: "Main.do",
        editurl: 'Main.do',
        postData: {	command: 'prop_list',
        	prop: 'STATUS'},
		mtype: "GET",
        datatype: "json",
        jsonReader : jsonHandlerProp,
        colNames: ["Id", "Name"],
        colModel: [
                   { name: "id", index: 'id', width: 50},
                   { name: "name", index: 'name', width: 200, editable: true, editoptions:{size:"20",maxlength:"30"}}             
               ],
        pager: "#statuses-pager",
        rowNum: 10,
        sortname: "id",
        sortorder: "desc",
        viewrecords: true,
        gridview: true,
        autoencode: true,
        caption: "Statuses",
        height: 100,
		loadError: handleLoadError
    });
    
    var edit_data = {command: 'edit_prop', prop: 'STATUS'};
    
    $("#statuses-table").jqGrid('navGrid', '#statuses-pager',{view:false, del:true, search:false}, //
    		{closeAfterEdit: true, editData: edit_data}, // use default settings for edit
    		{closeAfterAdd: true, editData: edit_data}, // use default settings for add
    		{closeAfterDelete: true, delData: edit_data},  // delete instead that del:false we need this
    		{multipleSearch : true}, // enable the advanced searching
    		{closeOnEscape:true} /* allow the view dialog to be closed when user press ESC key*/
    		);
}

function createResolutionsTable() {
    $("#resolutions-table").jqGrid({
        url: "Main.do",
        editurl: 'Main.do',
        postData: {	command: 'prop_list',
        	prop: 'RESOLUTION'},
		mtype: "GET",
        datatype: "json",
        jsonReader : jsonHandlerProp,
        colNames: ["Id", "Name"],
        colModel: [
                   { name: "id", index: 'id', width: 50},
                   { name: "name", index: 'name', width: 200, editable: true, editoptions:{size:"20",maxlength:"30"}}             
               ],
        pager: "#resolutions-pager",
        rowNum: 10,
        sortname: "id",
        sortorder: "desc",
        viewrecords: true,
        gridview: true,
        autoencode: true,
        caption: "Resolutions",
        height: 100,
		loadError: handleLoadError
    });
    
    var edit_data = {command: 'edit_prop', prop: 'RESOLUTION'};
    
    $("#resolutions-table").jqGrid('navGrid', '#resolutions-pager',{view:false, del:true, search:false}, //
    		{closeAfterEdit: true, editData: edit_data}, // use default settings for edit
    		{closeAfterAdd: true, editData: edit_data}, // use default settings for add
    		{closeAfterDelete: true, delData: edit_data},  // delete instead that del:false we need this
    		{multipleSearch : true}, // enable the advanced searching
    		{closeOnEscape:true} /* allow the view dialog to be closed when user press ESC key*/
    		);
}

function createPrioritiesTable() {
    $("#priority-table").jqGrid({
        url: "Main.do",
        editurl: 'Main.do',
        postData: {	command: 'prop_list',
        	prop: 'PRIORITY'},
		mtype: "GET",
        datatype: "json",
        jsonReader : jsonHandlerProp,
        colNames: ["Id", "Name"],
        colModel: [
                   { name: "id", index: 'id', width: 50},
                   { name: "name", index: 'name', width: 200, editable: true, editoptions:{size:"20",maxlength:"30"}}             
               ],
        pager: "#priority-pager",
        rowNum: 10,
        sortname: "id",
        sortorder: "desc",
        viewrecords: true,
        gridview: true,
        autoencode: true,
        caption: "Priorities",
        height: 100,
		loadError: handleLoadError
    });
    
    var edit_data = {command: 'edit_prop', prop: 'PRIORITY'};
    
    $("#priority-table").jqGrid('navGrid', '#priority-pager',{view:false, del:true, search:false}, //
    		{closeAfterEdit: true, editData: edit_data}, // use default settings for edit
    		{closeAfterAdd: true, editData: edit_data}, // use default settings for add
    		{closeAfterDelete: true, delData: edit_data},  // delete instead that del:false we need this
    		{multipleSearch : true}, // enable the advanced searching
    		{closeOnEscape:true} /* allow the view dialog to be closed when user press ESC key*/
    		);
}

function createTypesTable() {
    $("#types-table").jqGrid({
        url: "Main.do",
        editurl: 'Main.do',
        postData: {	command: 'prop_list',
        	prop: 'TYPE'},
		mtype: "GET",
        datatype: "json",
        jsonReader : jsonHandlerProp,
        colNames: ["Id", "Name"],
        colModel: [
                   { name: "id", index: 'id', width: 50},
                   { name: "name", index: 'name', width: 200, editable: true, editoptions:{size:"20",maxlength:"30"}}             
               ],
        pager: "#types-pager",
        rowNum: 10,
        sortname: "id",
        sortorder: "desc",
        viewrecords: true,
        gridview: true,
        autoencode: true,
        caption: "Types",
        height: 100,
		loadError: handleLoadError
    });
    
    var edit_data = {command: 'edit_prop', prop: 'TYPE'};
    
    $("#types-table").jqGrid('navGrid', '#types-pager',{view:false, del:true, search:false}, //
    		{closeAfterEdit: true, editData: edit_data}, // use default settings for edit
    		{closeAfterAdd: true, editData: edit_data}, // use default settings for add
    		{closeAfterDelete: true, delData: edit_data},  // delete instead that del:false we need this
    		{multipleSearch : true}, // enable the advanced searching
    		{closeOnEscape:true} /* allow the view dialog to be closed when user press ESC key*/
    		);
}

function createRolesTable() {
    $("#roles-table").jqGrid({
        url: "Main.do",
        editurl: 'Main.do',
        postData: {	command: 'prop_list',
        	prop: 'ROLE'},
		mtype: "GET",
        datatype: "json",
        jsonReader : jsonHandlerProp,
        colNames: ["Id", "Name"],
        colModel: [
                   { name: "id", index: 'id', width: 50},
                   { name: "name", index: 'name', width: 200, editable: true, editoptions:{size:"20",maxlength:"30"}}             
               ],
        pager: "#roles-pager",
        rowNum: 10,
        sortname: "id",
        sortorder: "desc",
        viewrecords: true,
        gridview: true,
        autoencode: true,
        caption: "Roles",
        height: 200,
		loadError: handleLoadError
    });
    
    var edit_data = {command: 'edit_prop', prop: 'ROLE'};
    
    $("#roles-table").jqGrid('navGrid', '#roles-pager',{view:false, del:true, search:false}, //
    		{closeAfterEdit: true, editData: edit_data}, // use default settings for edit
    		{closeAfterAdd: true, editData: edit_data}, // use default settings for add
    		{closeAfterDelete: true, delData: edit_data},  // delete instead that del:false we need this
    		{multipleSearch : true}, // enable the advanced searching
    		{closeOnEscape:true} /* allow the view dialog to be closed when user press ESC key*/
    		);
}

function createProjectsTable() {
    $("#projects-table").jqGrid({
        url: "Main.do",
        editurl: 'Main.do',
        postData: {	command: 'projects_list'},
		mtype: "GET",
        datatype: "json",
        jsonReader : {
            root: "rows",
            page: "page",
            total: "total",
            records: "records",
            repeatitems: true,
            cell: function(obj) {
            	var manager = JSON.parse(obj.manager);
            	var manager_name = manager.id + ' - ' + manager.first_name + ' ' + manager.last_name;
            	obj.manager = manager_name;
            	return obj;
            	},
            id: "id"
        },
        colNames: ["Id", "Name", "Description", "Manager"],
        colModel: [
                   { name: "id", index: 'id', width: 50},
                   { name: "name", index: 'name', width: 150, editable: true, editoptions:{size:"20",maxlength:"30"}},
                   { name: "description", index: 'description', width: 300, editable: true, editoptions:{size:"20",maxlength:"30"}},
                   { name: "manager", index: 'manager', width: 200, editable: true, editoptions:{size:"20",maxlength:"30"}}
               ],
        pager: "#projects-pager",
        rowNum: 10,
        sortname: "id",
        sortorder: "desc",
        viewrecords: true,
        gridview: true,
        autoencode: true,
        caption: "Projects",
        height: 100,
		loadError: handleLoadError
    });
    
    var edit_data = {command: 'edit_project'};
    
    $("#projects-table").jqGrid('navGrid', '#projects-pager',{view:false, del:true, search:false}, //
    		{closeAfterEdit: true, editData: edit_data}, // use default settings for edit
    		{closeAfterAdd: true, editData: edit_data}, // use default settings for add
    		{closeAfterDelete: true, delData: edit_data},  // delete instead that del:false we need this
    		{multipleSearch : true}, // enable the advanced searching
    		{closeOnEscape:true} /* allow the view dialog to be closed when user press ESC key*/
    		);
}

//projects_options = {value: "1:Data Storage;2:Green World;"};
function getProjectsOptions(elem) {
	var res_data;
	var str = '';
	$.ajax({
      url: 'Main.do',
      dataType: 'json',
      data: {command: 'projects_list', page: 1, rows: 10},
      type: 'get',
      success: function (data) {
          $(elem).empty();
          for (var i = 0, l = data.rows.length; i < l; i++) {
          	$(elem).append("<option value='" + data.rows[i].id + "'>" + data.rows[i].name + "</option>");	
		   }
      },
      error:  handleLoadError
    });
    
}

function createBuildsTable() {
    $("#builds-table").jqGrid({
        url: "Main.do",
        editurl: 'Main.do',
        postData: {	command: 'builds_list'},
		mtype: "GET",
        datatype: "json",
        jsonReader : jsonHandlerProp,
        colNames: ["Id", "Name", "Project Id"],
        colModel: [
                   { name: "id", index: 'id', width: 50},
                   { name: "name", index: 'name', width: 200, editable: true, editoptions:{size:"20",maxlength:"30"}},
                   { name: "projectId", index: 'projectId', width: 70, editable: true, editoptions:{size:"20",maxlength:"30"}} 
                   //edittype:"select", editoptions: { dataInit: function(elem){getProjectsOptions(elem);}} , editrules:{required:true}        
               ],  
        pager: "#builds-pager",
        rowNum: 10,
        sortname: "id",
        sortorder: "desc",
        viewrecords: true,
        gridview: true,
        autoencode: true,
        caption: "Roles",
        height: 100,
		loadError: handleLoadError
    });
    
    var edit_data = {command: 'edit_build'};
    
    $("#builds-table").jqGrid('navGrid', '#builds-pager',{view:false, del:true, search:false}, //
    		{closeAfterEdit: true, editData: edit_data}, // use default settings for edit
    		{closeAfterAdd: true, editData: edit_data}, // use default settings for add
    		{closeAfterDelete: true, delData: edit_data},  // delete instead that del:false we need this
    		{multipleSearch : true}, // enable the advanced searching
    		{closeOnEscape:true} /* allow the view dialog to be closed when user press ESC key*/
    		);
}


var jsonHandlerUsers = {
    root: "rows",
    page: "page",
    total: "total",
    records: "records",
    repeatitems: true,
    cell: function(obj) {
    	var role = JSON.parse(obj.role);
    	var role_id = role.id;
    	obj.role = role_id;
    	return obj;
    	},
    id: "id"
};

function createUsersTable() {
    $("#users-table").jqGrid({
        url: "Main.do",
        editurl: 'Main.do?command=edit_user',
        postData: {	command: 'users_list' },
		mtype: "GET",
        datatype: "json",
        jsonReader : jsonHandlerUsers,
        colNames: ["Id", "First Name", "Last Name", "E-Mail", "Password", "Role"],
        colModel: [
                   { name: "id", index: 'id', width: 50},
                   { name: "first_name", index: 'first_name', width: 150, editable: true, editoptions:{size:"20",maxlength:"30"}},
                   { name: "last_name", index: 'last_name', width: 150, editable: true, editoptions:{size:"20",maxlength:"30"}},
                   { name: "email", index: 'email', width: 150, editable: true, editoptions:{size:"20",maxlength:"30"}},
                   { name: "password", index: 'password', width: 150, editable: true, editoptions:{size:"20",maxlength:"30"}},
                   { name: "role", index: 'role', width: 50, editable: true, editoptions:{size:"20",maxlength:"30"}}
               ],
        pager: "#users-pager",
        rowNum: 10,
        sortname: "id",
        sortorder: "desc",
        viewrecords: true,
        gridview: true,
        autoencode: true,
        caption: "Users",
        height: 300,
		loadError: handleLoadError
    });
    
    $("#users-table").jqGrid('navGrid', '#users-pager',{view:true, del:true, search:true}, //
    		{closeAfterEdit: true}, // use default settings for edit
    		{closeAfterAdd: true}, // use default settings for add
    		{closeAfterDelete: true},  // delete instead that del:false we need this
    		{multipleSearch : true}, // enable the advanced searching
    		{closeOnEscape:true} /* allow the view dialog to be closed when user press ESC key*/
    		);
}