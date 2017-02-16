<?php 
/**
* custom helper global function
*/

	function successResult($message,$payload){
		return jsonResulter(false,$message,$payload);
	}	
	
	function errorResult($message,$payload){
		return jsonResulter(true,$message,$payload);
	}	

	function jsonResulter($error=false,$message="",$payload=array()){
		foreach ($payload as $key => $value) {
			if($value===null){
				$payload[$key]=new \stdClass();
			}
		}
		
		$result=array(
			"error"=>$error,
			"message"=>$message,
			"data"=>$payload
		);
		return	response()->json($result);
		// return $result;			
	}
 ?>