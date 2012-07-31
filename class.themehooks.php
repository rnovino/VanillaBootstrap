<?php if (!defined('APPLICATION')) exit();

// LESS PHP Parser
require dirname(__FILE__) . '/lessc.inc.php';
lessc::ccompile(dirname(__FILE__) . '/design/main.less', 
				dirname(__FILE__) . '/design/custom.css');

class BootstrapThemeHooks implements Gdn_IPlugin {
	
	public function Setup() {
		return TRUE;
	}

	public function OnDisable() {
		return TRUE;
	}
	
	public function Base_Render_Before($Sender) {

		// Remove unnecessary files 
		$Sender->RemoveJsFile('jquery.autogrow.js');

		// Add new CSS and Javascript
		$Sender->AddJsFile('bootstrap.min.js');
		$Sender->AddJsFile('jquery.autosize.js');
		$Sender->AddJsFile('jquery.chosen.js');
		$Sender->AddJsFile('jquery.prettify.js');
		$Sender->AddJsFile('jquery.fitvid.js');
		$Sender->AddCssFile('prettify.css');
		$Sender->AddCssFile('chosen.css');

	}
	
	// Add input notifiers to comment form
	public function DiscussionController_BeforeFormButtons_Handler($Sender) {
		if (C('Garden.InputFormatter') == 'Markdown')
			echo '<span class="MarkupHelp hidden-phone hidden-tablet">You can use <b><a href="http://en.wikipedia.org/wiki/Markdown">Markdown</a></b> in your post</span>';
		if (C('Garden.InputFormatter') == 'BBCode')
			echo '<span class="MarkupHelp hidden-phone hidden-tablet">You can use <b><a href="http://en.wikipedia.org/wiki/BBCode">BBCode</a></b> in your post</span>';
		if (C('Garden.InputFormatter') == 'Html')
			echo '<span class="MarkupHelp hidden-phone hidden-tablet">You can use <b><a href="http://htmlguide.drgrog.com/cheatsheet.php">Simple Html</a></b> in your post</span>';
	}
		
}