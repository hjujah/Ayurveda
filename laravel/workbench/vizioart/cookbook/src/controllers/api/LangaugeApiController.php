<?php namespace Vizioart\Cookbook;

use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Config;
use LaravelBaseController as BaseController;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Response;
use Illuminate\Support\Facades\Request;
use Illuminate\Support\Facades\Input;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Facades\URL;
use Symfony\Component\HttpFoundation\File\File as SFile;
use Illuminate\Support\Facades\Validator as LValidator;

use Vizioart\Cookbook\Models\DB\LanguageDBModel as Langauge;


/**
 * 
 */
class LanguageApiController extends BaseController {

	/**
	 *
	 */
	public function getIndex(){
		$result = Langauge::get();
		return Response::json($result);
	}

}

