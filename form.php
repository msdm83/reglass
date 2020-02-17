<?php
error_reporting(E_ALL);

$_email = $_POST['email'];
if(!isset($_email) || !preg_match('/^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/',$_email)) {
	return;
}

$toEmail = "fvl71@mail.ru, msdm83@gmail.com;";

$headers  = 'MIME-Version: 1.0' . "\r\n";
$headers .= 'Content-type: text/html; charset=utf-8' . "\r\n";
$from = "Стекловозик<noreplay@steklovozik.ru>";
$headers .= 'From: '.$from."\r\n".
    'Reply-To: '.$from."\r\n" .
    'X-Mailer: PHP/' . phpversion();


	if(mail($toEmail, "Steklovozik.ru: Запрос на установку контейнеров", createEmail(getOrderBody($_POST['name'], $_email, $_POST['phone'], $_POST['message'], $_POST['address'])), $headers)) {
		@mail($_email, 'Steklovozik.ru: Ваша заявка успешно отправлена', createEmail(getOrderBodyClient($_POST['name'], $_POST['address'])), $headers);
    print "Спасибо! Ваша заявка успешно отправлена.";
	}
  else{
    print"Ваша заявка не была отправлена из-за технического сбоя. Позвоните нам.";
  }
//email for owner about new request
	function getOrderBody($name, $email, $phone, $message, $address){
		return '<table width="554" align="center" style="width:100%!important;max-width:554px;margin:0 auto" cellpadding="0" cellspacing="0">

			<tbody><tr>
				<td style="padding:0 0 0px">
					<table width="100%" cellpadding="0" cellspacing="0">
						<tbody><tr>
							<td style="font:17px/24px San Francisco,Segoe,Roboto,Arial,Helvetica,sans-serif;">
								Здравствуйте, мы получили новую заявку на установку контейнера.
							</td>
						</tr>
						<tr>
							<td style="padding:0 0 0 20px;font:15px/22px San Francisco,Segoe,Roboto,Arial,Helvetica,sans-serif;color:#333">
								<p style="margin:5px 0;"> Имя: <span style="color:#777; padding:0 10px"> '.$name.' </span></p>
								<p style="margin:5px 0;"> Email: <span style="color:#777; padding:0 10px"> '.$email.' </span></p>
								<p style="margin:5px 0;"> Телефон: <a href="tel:+7904555666 " style="color:#777; padding:0 10px"> '.$phone.' </span></p>
								<p style="margin:5px 0;"> Комментарий <span style="color:#777; padding:0 10px"> '.$message.' </span></p>
								<p style="margin:5px 0;"> Адрес: <span style="color:#777; padding:0 10px"> '.$address.' </span></p>
							</td>
						</tr>
					</tbody></table>
				</td>
			</tr>

			<tr>
				<td style="padding:30px 0 0px">
					<table align="center" style="margin:0 auto;max-width:250px" cellpadding="0" cellspacing="0">
						<tbody><tr>
							<td bgcolor="#fd7e14" align="center" style="font:17px/21px San Francisco,Segoe,Roboto,Arial,Helvetica,sans-serif;border-radius:5px">
								<a style="color:#FFF;text-decoration:none!important;display:block;padding:22px 40px 24px" href="http://maps.yandex.ru/?text='.$address.'">
								Посмотреть на карте</a>
							</td>
						</tr>
					</tbody></table>
				</td>
			</tr>

			</tbody></table>';
	}
//email for client abot successfull request
function getOrderBodyClient($name, $address){
	return '<table width="554" align="center" style="width:100%!important;max-width:554px;margin:0 auto" cellpadding="0" cellspacing="0">

		<tbody><tr>
			<td style="padding:0 0 0px">
				<table width="100%" cellpadding="0" cellspacing="0">
					<tbody><tr>
						<td style="font:17px/24px San Francisco,Segoe,Roboto,Arial,Helvetica,sans-serif;">
							<p style="color:#000">Здравствуйте '.$name.'.</p>
							<p>Мы получили Вашу заявку на установку контейнера для стекла по адресу: <span style="color:#777; padding:0 10px"> '.$address.'</span></p>
							<p style="text-align:right">Благодарим за Ваше обращение.</p>
						</td>
					</tr>
				</tbody></table>
			</td>
		</tr>
		</tbody></table>';
}

//create email complete html
	function createEmail($emailBody)
	{
		return '<table bgcolor="#b2bc7c" width="100%" style="min-width:320px;" cellspacing="0" cellpadding="0">
					<tbody><tr>
						<td style="padding:20px 0">
							<table width="600" align="center" style="width:100%!important;max-width:600px;margin:0 auto;border: 10px solid #fff;" cellpadding="0" cellspacing="0">
								<tbody><tr>
									<td bgcolor="#ffffff" style="border: 3px solid #b2bc7c;">
										<table width="100%" cellpadding="0" cellspacing="0">
											<tbody><tr>
												<td style="padding:12px 18px 11px;border-bottom:1px solid #dddfe0">
													<table width="100%" cellpadding="0" cellspacing="0">
														<tbody><tr>
															<td width="47" style="width:47px;max-width:47px">
																	<img src="https://steklovozik.ru/images/ico.png" width="47" style="width:47px;vertical-align:top">
															</td>
															<td align="center">
																	<a style="text-decoration:none; color:#fd7e14; font-size:24px" href="https://steklovozik.ru">Стекловозик</a>
															</td>
															<td width="47" style="width:47px;max-width:47px"></td>
														</tr>
													</tbody></table>
												</td>
											</tr>

											<tr>
												<td style="padding:34px 10px 42px">
													'.$emailBody.'
												</td>
											</tr>

											<tr>
												<td style="padding:14px 10px 14px;border-top:1px solid #dddfe0">
													<table width="438" align="center" style="width:100%!important;max-width:438px;margin:0 auto" cellpadding="0" cellspacing="0">
														<tbody
														<tr>
															<td align="center" style="padding:0 0 6px;font:17px/19px San Francisco,Segoe,Roboto,Arial,Helvetica,sans-serif;color:#333">
																Ваш Стекловозик
															</td>
														</tr>
														<tr>
															<td align="center" style="padding:0 0 12px;font:13px/16px San Francisco,Segoe,Roboto,Arial,Helvetica,sans-serif;color:#74a3c7">
																<a style="color:#74a3c7;text-decoration:none!important" href="https://steklovozik.ru">steklovozik.ru</a>
															</td>
														</tr>
													</tbody></table>
												</td>
											</tr>

										</tbody></table>
									</td>
								</tr>
							</tbody></table>
						</td>
					</tr>
				</tbody></table>';
	}

?>
