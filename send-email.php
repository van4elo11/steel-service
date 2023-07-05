<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  $name = $_POST['name'];
  $email = $_POST['email']; // Добавлено получение значения поля email
  $phone = $_POST['phone'];
  $message = $_POST['message'];

  $to = 'ivan.guard1n@gmail.com';
  $subject = 'steel-service.by заявка';
  $body = "Имя: $name\nEmail: $email\nТелефон: $phone\nСообщение: $message";

  if (mail($to, $subject, $body)) {
    echo 'success';
  } else {
    echo 'error';
  }
}
?>
