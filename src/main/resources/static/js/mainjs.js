$(document).ready(function() {
    // Hiển thị thông tin người dùng đăng nhập thành công
    $.ajax({
        type: 'GET',
        url: '/users/me',
        dataType: 'json',
        contentType: 'application/json; charset=utf-8',
        beforeSend: function(xhr) {
            if (localStorage.token) {
                xhr.setRequestHeader('Authorization', 'Bearer ' + localStorage.token);
            }
        },
        success: function(data) {
            var json = JSON.stringify(data, null, 4);
            $('#profile').html(data.fullName);
            $('#images').html(document.getElementById("images").src = data.images);
        },
        error: function(e) {
            var json = e.responseText;
            $('#feedback').html(json);
            	alert("Sorry, you are not logged in.");
        }
    });
});

	// Hàm đăng xuất
	$('#logout').click(function() {
	    localStorage.clear();
	    window.location.href = "/login";
	});

	// Hàm đăng nhập
    $('#Login').click(function() {
        var email = document.getElementById('email').value;
        var password = document.getElementById('password').value;
        var basicInfo = JSON.stringify({
            email: email,
            password: password
        });

        $.ajax({
            type: 'POST',
            url: '/auth/login',
            dataType: 'json',
            contentType: 'application/json; charset=utf-8',
            data: basicInfo,
            success: function(data) {
                localStorage.token = data.token;
                window.location.href = '/user/profile';
            },
            error: function() {
                alert('Login Failed');
            }
        });
    });

