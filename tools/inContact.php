<?php
// las cosas que tenia que incluir
include('seguridad.php');
function  enviarMail( $para , $sujeto , $message )
{
// Set the mail headers into a variables
$cabezeras = "MIME-Version: 1.0\r\n";
$cabezeras .= "Content-type: text/html; charset=iso-8859-1\r\n";
$cabezeras .= "From: " . $sujeto . " <" . $para . ">\r\n";
// $cabezeras .= 'Reply-To: '.$from."\r\n" . 'X-Mailer: PHP/' . phpversion();
$cabezeras .= "X-Priority: 1\r\n";
$cabezeras .= "X-MSMail-Priority: High\r\n\r\n";
// Send the email and confirm
  if( mail($para, $sujeto, $message, $cabezeras) )
  {
     return true;
  } else {
     return false;;
  }
}
// fi

// las cosas
$nombre   = $_POST['nombre'];
$correo   = $_POST['correo'];
$mensaje  = $_POST['mensaje'];
$captcha  = $_POST['captcha'];

// si el catpcha esta incorrecto
if( $captcha != '7364')
{
  header('Location: ../contacto.html?message=catpcha_incorrecto.');
  die();
}

// probamos sie tsan vacions o no
if( injection($nombre) || injection($correo) || injection($mensaje) )
{
    header('Location: ../contacto.html?message=algo_esta_infectado.');
    die();
}

if( trim($nombre == '') || trim($correo == '') || trim($mensaje == '') )
{
    header('Location: ../contacto.html?message=algo_falta.');
    die();
}

$fecha  = date("Y/m/d");   
// los detalles del enviao
$yomismo = 'sevivarte@gmail.com';

$buffer  = 'Sujeto  : ' . $nombre . ' - ';
$buffer .= 'Correo  : ' . $correo . ' - ';
$buffer .= 'Mensaje : { ' . $mensaje . ' } ';

// enviamos el buffer por el correo
enviarMail($yomismo ,' Conacto hecho...' , $buffer);
header('Location: ../index.html?message=success_contacting');

?>