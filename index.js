$('#regForm').validate({
    rules: {
				name: "required",
				name: {
					required: true,
					minlength: 2
				},
				password: {
					required: true,
					minlength: 5
				},
				password2: {
					required: true,
					minlength: 5,
					equalTo: "#password"
				},
				mail: {
					required: true,
					email: true
				},
				topic: {
					required: "#newsletter:checked",
					minlength: 2
				},
				agree: "required"
			},
			messages: {
				name: "Пожалуйста, введите ваше имя",
				name: {
					required: "Пожалуйста, введите ваше имя",
					minlength: "Ваше имя пользователя должно состоять не менее чем из 2 символов"
				},
				password: {
					required: "Пожалуйста, укажите пароль",
					minlength: "Ваш пароль должен состоять не менее чем из 5 символов"
				},
				confirm_password: {
					required: "Пожалуйста, укажите пароль",
					minlength: "Ваш пароль должен состоять не менее чем из 5 символов.",
					equalTo: "Пожалуйста, введите тот же пароль, что и выше"
				},
				mail: "Пожалуйста, введите действительный адрес электронной почты"
			}
		});
