<?php

//esta funcion ejecuta codigo sql seguro y tiene un si6tnaxis aprecida a nodejs
function secureSQL($hook , $sql, $arr )
{   
  $stmt    = $hook->prepare($sql);  // preparamos
  if( $stmt ) // probamos
  { 
    $types   = str_repeat('s', count($arr));  // repetimos la cantidad de 's' segun la cantidad de item en array
    $stmt->bind_param($types, ...$arr); //bindeamos los parametros y pasamos el array como si fueran argumentos con '...'
    $stmt->execute();  // ejecutamos
    $resultado = $stmt->get_result(); //obtenemos los resultados
    $stmt->close();  // cerramos
    return $resultado; //retornamos
 } else {  // si no de prepara correctamente
      return FALSE;   // retornamos
 }
}
   // Check for Header Injections
    function injection($str) {
        return preg_match( "/[\r\n]/", $str );
    }

?>