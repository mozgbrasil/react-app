<?php

if ( array_key_exists('phpinfo', $_REQUEST) ){

  phpinfo();

}

if ( array_key_exists('printi', $_REQUEST) ){

  $curl = curl_init();

  curl_setopt_array($curl, array(
    CURLOPT_URL => "https://api.intelipost.com.br/api/v1/quote/",
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_ENCODING => "",
    CURLOPT_MAXREDIRS => 10,
    CURLOPT_TIMEOUT => 30,
    CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
    CURLOPT_CUSTOMREQUEST => "GET",
    CURLOPT_POSTFIELDS => "{}",
    CURLOPT_HTTPHEADER => array(
      "api-key: 9009f95101bf48b01a50928a2a71ed1ae9083fc1d3c08439b0613dfc38e656c5",
      "content-type: application/json",
      "platform: intelipost-docs",
      "platform-version: v1.0.0",
      "plugin: intelipost-plugin",
      "plugin-version: v2.0.0"
    ),
  ));

  $response = curl_exec($curl);
  $err = curl_error($curl);

  curl_close($curl);

  if ($err) {
    echo "cURL Error #:" . $err;
  } else {

    header('Content-type: application/json');
    echo ($response);
  }

}

?>
