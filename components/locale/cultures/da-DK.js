(function (factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module
    define('cultures/da-DK', ['jquery'], factory);
    factory();
  } else if (typeof exports === 'object') {
    // Node/CommonJS
    module.exports = factory(require('jquery'));
  } else {
    // Browser globals
    factory(jQuery);
  }
}(function () {

  if (!Locale) {
    return;
  }

  //Get Latest from http://www.unicode.org/Public/cldr/25/
  Locale.addCulture('da-DK', {
    //layout/language
    language: 'da',
    englishName: 'Danish (Denmark)',
    nativeName: 'dansk (Danmark)',
    //layout/orientation/@characters
    direction: 'left-to-right',
    //ca-gregorian
    calendars: [{
      name: 'gregorian',
      //ca-gregorian/main/dates/calendars/gregorian/dateFormats/
      dateFormat: {'separator': '/', //Infered
                   'timeSeparator': '.',
                   'short': 'dd-MM-yyyy', //use four digit year
                   'medium': 'dd-MM-yyyy',
                   'long': 'd. MMM yyyy',
                   'full': 'EEEE den d. MMMM yyyy',
                   'month': 'd. MMMM',
                   'year': 'MMMM yyyy',
                   'timestamp': 'HH.mm.ss',
                   'datetime': 'dd/MM/yyyy HH.mm'}, //Infered short + short gregorian/dateTimeFormats
      //ca-gregorian/main/dates/calendars/gregorian/days/format/short or abbreviated (2 digit)
      days: {
         wide: ['søndag', 'mandag', 'tirsdag', 'onsdag', 'torsdag', 'fredag', 'lørdag'],
         abbreviated: ['sø', 'ma', 'ti', 'on', 'to', 'fr', 'lø'],
         narrow: ['S', 'M', 'T', 'O', 'T', 'F', 'L']
      },
      //ca-gregorian/main/dates/calendars/gregorian/months/format/wide
      months: {
        wide: ['januar', 'februar', 'marts', 'april', 'maj', 'juni', 'juli', 'august', 'september', 'oktober', 'november', 'december'],
        abbreviated: ['jan', 'feb', 'mar', 'apr', 'maj', 'jun', 'jul', 'aug', 'sep', 'okt', 'nov', 'dec']
      },
      //ca-gregorian/main/dates/calendars/gregorian/timeFormats/short
      timeFormat: 'HH.mm',
      //ca-gregorian/main/dates/calendars/gregorian/dayPeriods/wide
      dayPeriods: ['', '']
    }],
    //numbers/currencyFormats-numberSystem-latn/standard (Replace Sign http://www.currencysymbols.in ?)
    currencySign: 'kr', //(Replace Sign http://www.currencysymbols.in ?)
    currencyFormat: '#,##0.00 ¤',
    //numbers/symbols-numberSystem-latn
    numbers: {
      percentSign: '%',
      percentFormat: '#,##0 %',
      minusSign: '-',
      decimal: ',',
      group: '.'
    },
    //Resx - Approved By Translation Team
   messages: {
      'AboutText': {id: 'AboutText', value: 'Copyright &copy; {0} Infor. Alle rettigheder forbeholdes. Ord- og designmærkerne anført heri er varemærker og/eller registrerede varemærker tilhørende Infor og/eller dennes affilierede selskaber og datterselskaber. Alle rettigheder forbeholdes. Alle andre varemærker angivet heri tilhører de respektive ejere.'},
      'Actions': {id: 'Actions', value: 'Handlinger', comment: 'Tooltip text for the action button with additional in context actions'},
      'Add': {id: 'Add', value: 'Tilføj', comment: 'Add'},
      'AddNewTab': {id: 'AddNewTab', value: 'Tilføj ny fane', comment: 'Attached to a button that adds new tabs'},
      'AdvancedFilter': {id: 'AdvancedFilter', value: 'Opret avanceret filter', comment: 'In a data grid active an advanced filtering feature'},
      'Alert': {id: 'Alert', value: 'Advarsel', comment: 'Alert'},
      'All': {id: 'All', value: 'Alle', comment: 'All items in the context of a filter'},
      'AllResults': {id: 'AllResults', value: 'Alle resultater for', comment: 'Search Results Text'},
      'AligntoBottom': {id: 'AligntoBottom', value: 'Juster bund', comment: 'Align to Bottom tooltip'},
      'AlignCenterHorizontally': {id: 'AlignCenterHorizontally', value: 'Centrer vandret', comment: 'Align Center Horizontally tooltip'},
      'Amber': {id: 'Amber', value: 'Gul', comment: 'Color in our color pallette'},
      'Amethyst': {id: 'Amethyst', value: 'Ametyst', comment: 'Color in our color pallette'},
      'Apply': {id: 'Apply', value: 'Anvend', comment: 'Text in a button to apply an action'},
      'Attach': {id: 'Attach', value: 'Vedhæft', comment: 'Attach'},
      'Azure': {id: 'Azure', value: 'Azurblå', comment: 'Color in our color pallette'},
      'BackgroundColor': {id: 'BackgroundColor', value: 'Baggrundsfarve', comment: 'add or edit text background color in the editor'},
      'Between': {id: 'Between', value: 'Mellem', comment: 'Between in icons for filtering'},
      'Blockquote': {id: 'Blockquote', value: 'Bloktilbud', comment: 'insert a block quote in the editor'},
      'Bold': {id: 'Bold', value: 'Fed', comment: 'Make text Bold'},
      'Bookmarked': {id: 'Bookmarked', value: 'Bogmærke oprettet', comment: 'Bookmark filled - Element is already bookmarked'},
      'BookmarkThis': {id: 'BookmarkThis', value: 'Bogmærk dette', comment: 'Bookmark an element'},
      'Breadcrumb': {id: 'Breadcrumb', value: 'Brødkrumme', comment: 'Text describing the Breadcrumb'},
      'BulletedList': {id: 'BulletedList', value: 'Punktopstilling', comment: 'Bulleted List tooltip'},
      'Calendar': {id: 'Calendar', value: 'Kalender', comment: 'Inline Text for the title of the Calendar control'},
      'Camera': {id: 'Camera', value: 'Kamera', comment: 'Camera tooltip'},
      'Cancel': {id: 'Cancel', value: 'Annuller', comment: 'Cancel tooltip'},
      'CapsLockOn': {id: 'CapsLockOn', value: 'Caps Lock til', comment: 'Caps Lock On message'},
      'Cart': {id: 'Cart', value: 'Vogn', comment: 'Cart tooltip'},
      'CenterText': {id: 'CenterText', value: 'Centrer', comment: 'An Icon Tooltip'},
      'CharactersLeft': {id: 'CharactersLeft', value: 'Tegn tilbage {0}', comment: 'indicator showing how many more characters you can type.'},
      'CharactersMax': {id: 'CharactersMax', value: 'Maks. antal tegn ', comment: 'indicator showing how many max characters you can type.'},
      'ChangeSelection': {id: 'ChangeSelection', value: '. Brug piletasterne for at ændre valget.', comment: 'Audible Text for drop down list help'},
      'Checkbox': {id: 'Checkbox', value: 'Afkrydsningsfelt', comment: 'Checkbox tooltip'},
      'Checked': {id: 'Checked', value: 'Kontrolleret', comment: 'Checked tooltip'},
      'Clear': {id: 'Clear', value: 'Ryd', comment: 'Tooltip for a Clear Action'},
      'ClearFilter': {id: 'ClearFilter', value: 'Ryd filter', comment: 'Clear the current filter criteria'},
      'Clock': {id: 'Clock', value: 'Ur', comment: 'Clock tooltip'},
      'Close': {id: 'Close', value: 'Luk', comment: 'Tooltip for a Close Button Action'},
      'Copy': {id: 'Copy', value: 'Kopiér', comment: 'Copy tooltip'},
      'Collapse': {id: 'Collapse', value: 'Skjul', comment: 'Collapse / close a tree/submenu'},
      'CollapseAppTray': {id: 'CollapseAppTray', value: 'Skjul app-bakke', comment: 'Collapse App Tray tooltip'},
      'Columns': {id: 'Columns', value: 'Kolonner', comment: 'Columns tooltip'},
      'Component': {id: 'Component', value: 'Komponent', comment: 'As in a UI component - building block.'},
      'Compose': {id: 'Compose', value: 'Opret', comment: 'Compose tooltip'},
      'Completed': {id: 'Completed', value: 'Fuldført', comment: 'Text For a Completed Status'},
      'Confirm': {id: 'Confirm', value: 'Bekræft', comment: 'Confirm tooltip'},
      'Contains': {id: 'Contains', value: 'Indeholder', comment: 'Contains in icons for filtering'},
      'CssClass': {id: 'CssClass', value: 'Css-klasse', comment: 'Label for entering a Css Class name'},
      'Cut': {id: 'Cut', value: 'Klip', comment: 'Cut tooltip'},
      'Date': {id: 'Date', value: 'Dato', comment: 'Describes filtering by a date data type'},
      'Delete': {id: 'Delete', value: 'Slet', comment: 'Delete Toolbar Action Tooltip'},
      'DistributeHoriz': {id: 'DistributeHoriz', value: 'Distribuer horisontalt', comment: 'Icon button tooltip for action that distributes elements across Horizontally'},
      'Document': {id: 'Document', value: 'Dokument', comment: 'Document tooltip'},
      'Dirty': {id: 'Dirty', value: 'Række er ændret', comment: 'Record is dirty / modified'},
      'Drilldown': {id: 'Drilldown', value: 'Detaljefokus', comment: 'Drill by moving page flow into a record'},
      'Drillup': {id: 'Drillup', value: 'Analysér op', comment: 'Opposite of Drilldown, move back up to a larger set of records'},
      'Dropdown': {id: 'Dropdown', value: 'Rulleliste', comment: 'Dropdown'},
      'DoesNotContain': {id: 'DoesNotContain', value: 'Indeholder ikke', comment: 'Does Not Contain in icons for filtering'},
      'DoesNotEndWith': {id: 'DoesNotEndWith', value: 'Slutter ikke med', comment: 'For condition filtering'},
      'DoesNotEqual': {id: 'DoesNotEqual', value: 'Ikke lig med', comment: 'Does Not Equal in icons for filtering'},
      'DoesNotStartWith': {id: 'DoesNotStartWith', value: 'Starter ikke med', comment: 'For condition filtering'},
      'Down': {id: 'Down', value: 'Ned', comment: 'Down tooltip'},
      'Download': {id: 'Download', value: 'Hent', comment: 'Download tooltip'},
      'Duplicate': {id: 'Duplicate', value: 'Dupliker', comment: 'Duplicate tooltip'},
      'EitherSelectedOrNotSelected': {id: 'EitherSelectedOrNotSelected', value: 'Enten valgt eller ikke valgt', comment: 'Either Selected Or NotSelected in icons for filtering'},
      'EndsWith': {id: 'EndsWith', value: 'Slutter med', comment: 'for condition filtering'},
      'EnterComments': {id: 'EnterComments', value: 'Indtast kommentarer her...', comment: 'Placeholder text for a text input (comments)'},
      'Error': {id: 'Error', value: 'Fejl', comment: 'Title, Spoken Text describing fact an error has occured'},
      'ErrorAllowedTypes': {id: 'ErrorAllowedTypes', value: 'Filtypen er ikke tilladt', comment: 'Error string for file-upload'},
      'ErrorMaxFileSize': {id: 'ErrorMaxFileSize', value: 'Overskred grænse på filstørrelse', comment: 'Error string for file-upload'},
      'ErrorMaxFilesInProcess': {id: 'ErrorMaxFilesInProcess', value: 'Overskred tilladt grænse for højeste antal filer', comment: 'Error string for file-upload'},
      'EmailValidation': {id: 'EmailValidation', value: 'E-mailadresse ikke gyldig', comment: 'This the rule for email validation'},
      'Emerald': {id: 'Emerald', value: 'Smaragd', comment: 'Color in our color pallette'},
      'Expand': {id: 'Expand', value: 'Udvid', comment: 'Expand open a tree/submenu'},
      'ExpandAppTray': {id: 'ExpandAppTray', value: 'Udvid app-bakke', comment: 'ExpandAppTray tooltip'},
      'ExpandCollapse': {id: 'ExpandCollapse', value: 'Udvid / Skjul', comment: 'Text to toggle a button in a container.'},
      'ExportAsSpreadsheet': {id: 'ExportAsSpreadsheet', value: 'Eksporter som regneark', comment: 'Export as Spreadsheet tooltip'},
      'Edit': {id: 'Edit', value: 'Rediger', comment: 'Edit tooltip'},
      'Equals': {id: 'Equals', value: 'Lig med', comment: 'Equals in icons for filtering'},
      'ExitFullView': {id: 'ExitFullView', value: 'Afslut fuld visning', comment: 'Exit Full View tooltip'},
      'Export': {id: 'Export', value: 'Eksportér', comment: 'Export tooltip'},
      'ExportToExcel': {id: 'ExportToExcel', value: 'Eksportér til Excel', comment: 'Export To Excel menu option in datagrid'},
      'Favorite': {id: 'Favorite', value: 'Foretrukken', comment: 'A favorite item'},
      'FileUpload': {id: 'FileUpload', value: 'Filoverførsel. Tryk på Enter for at navigere til en fil', comment: 'Screen Reader instructions'},
      'Filter': {id: 'Filter', value: 'Filter', comment: 'Filter tooltip'},
      'FirstPage': {id: 'FirstPage', value: 'Første side', comment: 'First Page tooltip'},
      'Folder': {id: 'Folder', value: 'Mappe', comment: 'Folder tooltip'},
      'FullView': {id: 'FullView', value: 'Fuld visning', comment: 'Full View tooltip'},
      'GoForward': {id: 'GoForward', value: 'Gå frem', comment: 'Move Page / object this direction'},
      'GoBack': {id: 'GoBack', value: 'Gå tilbage', comment: 'Move Page / object this directionp'},
      'GoDown': {id: 'GoDown', value: 'Gå ned', comment: 'Move Page / object this directionp'},
      'GoUp': {id: 'GoUp', value: 'Gå op', comment: 'Move Page / object this direction'},
      'Graphite': {id: 'Graphite', value: 'Grafit', comment: 'Color in our color pallette'},
      'GreaterOrEquals': {id: 'GreaterOrEquals', value: 'Større end eller lig med', comment: 'Greater Than Or Equals in icons for filtering'},
      'GreaterThan': {id: 'GreaterThan', value: 'Større end', comment: 'Greater Than in icons for filtering'},
      'Grid': {id: 'Grid', value: 'Gitter', comment: 'Grid tooltip'},
      'Hours': {id: 'Hours', value: 'Timer', comment: 'the hour portion of a time'},
      'HeadingThree': {id: 'HeadingThree', value: 'Overskrift tre', comment: 'Heading Three tooltip'},
      'HeadingFour': {id: 'HeadingFour', value: 'Overskrift fire', comment: 'Heading Four tooltip'},
      'Highest': {id: 'Highest', value: 'Højeste', comment: 'Highest Four tooltip'},
      'Home': {id: 'Home', value: 'Start', comment: 'Home tooltip'},
      'HtmlView': {id: 'HtmlView', value: 'Html-visning', comment: 'Html View tooltip'},
      'Image': {id: 'Image', value: 'Billede', comment: 'Image of something'},
      'Import': {id: 'Import', value: 'Importér', comment: 'Import tooltip'},
      'Info': {id: 'Info', value: 'Info', comment: 'Info tooltip'},
      'InProgress': {id: 'In Progress', value: 'I gang', comment: 'Info tooltip that an action is in progress'},
      'Insert': {id: 'Insert', value: 'Indsæt', comment: 'Insert Modal Dialog Button'},
      'InsertAnchor': {id: 'InsertAnchor', value: 'Indsæt anker', comment: 'Insert Acnhor (link) in an editor'},
      'InsertImage': {id: 'InsertImage', value: 'Indsæt billede', comment: 'Insert Image in an editor'},
      'InsertLink': {id: 'InsertLink', value: 'Indsæt link', comment: 'Insert Link in an editor'},
      'InsertUrl': {id: 'InsertUrl', value: 'Indsæt Url', comment: 'Insert a Url in an editor'},
      'Italic': {id: 'Italic', value: 'Kursiv', comment: 'Make Text Italic'},
      'InvalidDate': {id: 'InvalidDate', value: 'Ugyldig dato', comment: 'validation message for wrong date format (short)'},
      'InvalidTime': {id: 'InvalidTime', value: 'Ugyldig tid', comment: 'validation message for wrong time format'},
      'Inventory': {id: 'Inventory', value: 'Lager', comment: 'Icon button tooltop for Inventory Action'},
      'IsEmpty': {id: 'IsEmpty', value: 'Er tom', comment: 'Is Empty in icons for filtering'},
      'IsNotEmpty': {id: 'IsNotEmpty', value: 'Er ikke tom', comment: 'Is Not Empty in icons for filtering'},
      'ItemsSelected': {id: 'ItemsSelected', value: 'Valgte elementer', comment: 'Num of Items selected for swaplist'},
      'JustifyCenter': {id: 'JustifyCenter', value: 'Centrer', comment: 'justify text to center in the editor'},
      'JustifyLeft': {id: 'JustifyLeft', value: 'Venstrejusteret', comment: 'justify text to left in the editor'},
      'JustifyRight': {id: 'JustifyRight', value: 'Højrejusteret', comment: 'justify text to right in the editor'},
      'Keyword': {id: 'Keyword', value: 'Nøgleord', comment: 'Describes filtering by a keyword search'},
      'Launch': {id: 'Launch', value: 'Start', comment: 'Launch'},
      'LastPage': {id: 'LastPage', value: 'Sidste side', comment: 'Last Page tooltip'},
      'Left': {id: 'Left', value: 'Venstre', comment: 'Left tooltip'},
      'LessOrEquals': {id: 'LessOrEquals', value: 'Mindre end eller lig med', comment: 'Less Than Or Equals in icons for filtering'},
      'LessThan': {id: 'LessThan', value: 'Mindre end', comment: 'Less Than in icons for filtering'},
      'Link': {id: 'Link', value: 'Link', comment: 'Link - as in hyperlink - icon tooltop'},
      'Load': {id: 'Load', value: 'Indlæs', comment: 'Load icon tooltip'},
      'Loading': {id: 'Loading', value: 'Indlæser', comment: 'Text below spinning indicator to indicate loading'},
      'Locked': {id: 'Locked', value: 'Låst', comment: 'Locked tooltip'},
      'Logout': {id: 'Logout', value: 'Log af', comment: 'Log out of the application'},
      'Lookup': {id: 'Lookup', value: 'Slå op', comment: 'Lookup - As in looking up a record or value'},
      'Lowest': {id: 'Lowest', value: 'Lavest', comment: 'Lowest - As in Lowest value'},
      'Mail': {id: 'Mail', value: 'E-mail', comment: 'Mail tooltip'},
      'MapPin': {id: 'MapPin', value: 'Nål', comment: 'Map Pin tooltip'},
      'Maximize': {id: 'Maximize', value: 'Maksimer', comment: 'Maximize a screen or dialog in the UI'},
      'Median': {id: 'Median', value: 'Median', comment: 'Median in Mathematics'},
      'Medium': {id: 'Medium', value: 'Mellem', comment: 'Describes a Medium sized Row Height in a grid/list'},
      'Menu': {id: 'Menu', value: 'Menu', comment: 'Menu tooltip'},
      'MingleShare': {id: 'MingleShare', value: 'Del med Ming.le', comment: 'Share the contextual object/action in the mingle system'},
      'Minutes': {id: 'Minutes', value: 'Minutter', comment: 'the minutes portion of a time'},
      'Minimize': {id: 'Minimize', value: 'Minimer', comment: 'Minimize tooltip'},
      'Minus': {id: 'Minus', value: 'Minus', comment: 'Minus tooltip'},
      'Mobile': {id: 'Mobile', value: 'Mobil', comment: 'Indicates a mobile device (phone tablet ect)'},
      'More': {id: 'More', value: 'Mere...', comment: 'Text Indicating More Buttons or form content'},
      'MoreActions': {id: 'MoreActions', value: 'Flere handlinger', comment: 'Text on the More Actions button indictating hidden functions'},
      'MsgDirty': {id: 'MsgDirty', value: ', Ændret', comment: 'for modified form fields'},
      'NewDocument': {id: 'NewDocument', value: 'Nyt dokument', comment: 'New Document tooltip'},
      'NewItem': {id: 'NewItem', value: 'Nyt element', comment: 'New item in listbuilder'},
      'Next': {id: 'Next', value: 'Næste', comment: 'Next in icons tooltip'},
      'NextPage': {id: 'NextPage', value: 'Næste side', comment: 'Next on Pager'},
      'NextMonth': {id: 'NextMonth', value: 'Næste måned', comment: 'the label for the button that moves calendar to next/prev'},
      'No': {id: 'No', value: 'Nej', comment: 'On a dialog button'},
      'NoResults': {id: 'NoResults', value: 'Ingen resultater', comment: 'Search Results Text'},
      'Normal': {id: 'Normal', value: 'Normal', comment: 'Normal row height'},
      'Notes': {id: 'Notes', value: 'Noter', comment: 'Notes icon tooltip'},
      'NotSelected': {id: 'NotSelected', value: 'Ikke valgt', comment: 'Not Selected in icons for filtering'},
      'NumberList': {id: 'NumberList', value: 'Nummerliste', comment: 'Number List tooltip'},
      'OpenBackClose': {id: 'OpenBackClose', value: 'Åbn / Tilbage / Luk', comment: 'Open / Back / Close tooltip'},
      'OpenClose': {id: 'OpenClose', value: 'Åbn / Luk', comment: 'Open / Close tooltip'},
      'OrderedList': {id: 'OrderedList', value: 'Indsæt/Fjern punktopstilling med tal', comment: 'Insert an Ordered list in the editor'},
      'Page': {id: 'Page', value: 'side ', comment: 'Text on the pager links'},
      'PageOf': {id: 'PageOf', value: 'Side {0} af {1}', comment: 'Pager Text Showing current and number of pages'},
      'PageOn': {id: 'PageOn', value: 'Du er i øjeblikket på side ', comment: 'Text on the pager links'},
      'Paste': {id: 'Paste', value: 'Sæt ind', comment: 'Paste icon tooltip'},
      'PasswordValidation': {id: 'PasswordValidation', value: '<strong>Adgangskode skal</strong><br>Bestå af mindst 10 tegn<br>Indeholde mindst ét stort bogstav<br>Indeholde mindst ét lille bogstav<br>Indeholde ét specialtegn<br>Ikke indeholde dit brugernavn<br>Ikke være en tidligere anvendt adgangskode<br>', comment: 'Password validation requirements'},
      'PasswordConfirmValidation': {id: 'PasswordConfirmValidation', value: 'Adgangskode skal være den samme', comment: 'Password Confirm validation'},
      'Peak': {id: 'Peak', value: 'Spids', comment: 'the max or peak value in a chart'},
      'PersonalizeColumns': {id: 'PersonalizeColumns', value: 'Tilpas kolonner', comment: 'Customize Columns in a Grid'},
      'Period': {id: 'Period', value: 'Periode', comment: 'the am/pm portion of a time'},
      'PressDown': {id: 'PressDown', value: 'Tryk på pil ned for at vælge en dato', comment: 'the audible label for Tooltip about how to operate the date picker'},
      'PressShiftF10': {id: 'PressShiftF10', value: 'Tryk på Skift+F10 for at åbne genvejsmenuen.', comment: 'the audible infor for screen readers on how to use a field with a popup menu'},
      'Previous': {id: 'Previous', value: 'Forrige', comment: 'Previous icon tooltip - moved to previous record'},
      'PreviousMonth': {id: 'PreviousMonth', value: 'Forrige måned', comment: 'the label for the button that moves calendar to next/prev'},
      'PreviousPage': {id: 'PreviousPage', value: 'Forrige side', comment: 'Previous Page tooltip'},
      'Print': {id: 'Print', value: 'Udskriv', comment: 'Print tooltip'},
      'Range': {id: 'Range', value: 'Område', comment: 'Range for tooltip'},
      'RecordsPerPage': {id: 'RecordsPerPage', value: '{0} poster pr. side', comment: 'Dropd own allows the user to select how many visible records {} shows select value.'},
      'Redo': {id: 'Redo', value: 'Annuller fortryd', comment: 'Redo tooltip'},
      'Refresh': {id: 'Refresh', value: 'Opdater', comment: 'Refresh tooltip'},
      'Required': {id: 'Required', value: 'Obligatorisk', comment: 'indicates a form field is manditory'},
      'Reset': {id: 'Reset', value: 'Nulstil', comment: 'Reset tooltip'},
      'ResetDefault': {id: 'ResetDefault', value: 'Gendan til standard', comment: 'Reset Datagrid Columns, Filter and other Layout'},
      'Results': {id: 'Results', value: 'Resultater', comment: 'As in showing N Results in a List'},
      'RightAlign': {id: 'RightAlign', value: 'Højrejusteret', comment: 'Right Align tooltip'},
      'RightAlignText': {id: 'RightAlignText', value: 'Højrejusteret', comment: 'Right Align Text tooltip'},
      'Right': {id: 'Right', value: 'Højre', comment: 'Right'},
      'Roles': {id: 'Roles', value: 'Roller', comment: 'Roles tooltip'},
      'RowHeight': {id: 'RowHeight', value: 'Rækkehøjde', comment: 'Describes the Height for Rows in a Data Grid'},
      'Ruby': {id: 'Ruby', value: 'Rubinrød', comment: 'Color in our color pallette'},
      'RunFilter': {id: 'RunFilter', value: 'Kør filter', comment: 'Execute the current filter criteria'},
      'Save': {id: 'Save', value: 'Gem', comment: 'Save tooltip'},
      'SaveCurrentView': {id: 'SaveCurrentView', value: 'Gem aktuel visning', comment: 'Datagrids contain view sets. This menu option saves them'},
      'SavedViews': {id: 'SavedViews', value: 'Gemte visninger', comment: 'Label for a list of Views'},
      'Seconds': {id: 'Seconds', value: 'Sekunder', comment: 'the seconds portion of a time'},
      'Search': {id: 'Search', value: 'Søg', comment: 'Search tooltip'},
      'SearchColumnName': {id: 'SearchColumnName', value: 'Søg efter et kolonnenavn', comment: 'Search for a datagrid column by name'},
      'SearchFolder': {id: 'SearchFolder', value: 'Søg i mappe', comment: 'Search Folder tooltip'},
      'SearchList': {id: 'SearchList', value: 'Søgeliste', comment: 'Search List tooltip'},
      'Select': {id: 'Select', value: 'Vælg', comment: 'text describing a select action'},
      'Selected': {id: 'Selected', value: 'Valgt', comment: 'text describing a selected object'},
      'Send': {id: 'Send', value: 'Send', comment: 'Send tooltip'},
      'SetTime': {id: 'SetTime', value: 'Indstil tid', comment: 'button text that inserts time when clicked'},
      'Settings': {id: 'Settings', value: 'Indstillinger', comment: 'Settings tooltip'},
      'Short': {id: 'Short', value: 'Kort', comment: 'Describes a Shorted Row Height in a grid/list'},
      'ShowFilterRow': {id: 'ShowFilterRow', value: 'Vis filterrække', comment: 'Toggle a row with filer info above a list'},
      'ShowLess': {id: 'ShowLess', value: 'Vis mindre', comment: 'Show less form content'},
      'ShowMore': {id: 'ShowMore', value: 'Vis mere', comment: 'Show more form content'},
      'Slate': {id: 'Slate', value: 'Skifergrå', comment: 'Color in our color pallette'},
      'SliderHandle': {id: 'SliderHandle', value: 'Håndtag til', comment: 'Description of the portion of a Slider control that is focusable and changes its value, followed in code by the name of the control'},
      'SliderMaximumHandle': {id: 'SliderMaximumHandle', value: 'Maks. områdehåndtag til', comment: 'Describes a maximum value handle in a Range (double slider), followed in code by the name of the control'},
      'SliderMinimumHandle': {id: 'SliderMinimumHandle', value: 'Min. områdehåndtag til', comment: 'Describes a minimum value handle in a Range (double slider), followed in code by the name of the control'},
      'SkipToMain': {id: 'SkipToMain', value: 'Spring til hovedindhold', comment: 'Skip link in header, jumps when clicked on to main area'},
      'StartsWith': {id: 'StartsWith', value: 'Starter med', comment: 'for condition filtering'},
      'StrikeThrough': {id: 'StrikeThrough', value: 'Gennemstreget', comment: 'turn on and off strike through text in text editor (like word)'},
      'SortAtoZ': {id: 'SortAtoZ', value: 'Sortér stigende', comment: 'Sort A to Z in icons for filtering'},
      'SortZtoA': {id: 'SortZtoA', value: 'Sortér faldende', comment: 'Sort Z to A in icons for filtering'},
      'SortDown': {id: 'SortDown', value: 'Sortér ned', comment: 'Sort Down tooltip'},
      'SortUp': {id: 'SortUp', value: 'Sortér op', comment: 'Sort Up tooltip'},
      'Subscript': {id: 'Subscript', value: 'Sænket skrift', comment: 'Turn on and off Subscript text in text editor (like word)'},
      'Superscript': {id: 'Superscript', value: 'Hævet skrift', comment: 'Turn on and off Superscript text in text editor (like word)'},
      'Tabs': {id: 'Tabs', value: 'Faner...', comment: 'Used in the Tabs Control\'s more menu, preceeded by a number that describes how many tabs are in the spillover menu'},
      'Tack': {id: 'Tack', value: 'Nål', comment: 'Pin an object'},
      'Tall': {id: 'Tall', value: 'Høj', comment: 'Describes a Taller Row Height in a grid/list'},
      'Target': {id: 'Target', value: 'Destination', comment: 'Label for an input to enter a Target (Url Attribute)'},
      'TextColor': {id: 'TextColor', value: 'Tekstfarve', comment: 'add or edit text color in the editor'},

      'Timer': {id: 'Timer', value: 'Timer', comment: 'Timer tooltip'},
      'Today': {id: 'Today', value: 'I dag', comment: 'refering to today on a calendar'},
      'ToggleBold': {id: 'ToggleBold', value: 'Slå fed tekst til/fra', comment: 'turn on and off bold in text editor (like word)'},
      'ToggleH3': {id: 'ToggleH3', value: 'Slå overskrift 3 til/fra', comment: 'turn on and off heading 3 text'},
      'ToggleH4': {id: 'ToggleH4', value: 'Slå overskrift 4 til/fra', comment: 'turn on and off heading 4 text'},
      'ToggleItalic': {id: 'ToggleItalic', value: 'Slå kursiv tekst til/fra', comment: 'turn on and off Italic in text editor (like word)'},
      'ToggleUnderline': {id: 'ToggleUnderline', value: 'Slå understreget tekst til/fra', comment: 'turn on and off Underline in text editor (like word)'},
      'Toolbar': {id: 'Toolbar', value: 'Værktøjslinje', comment: 'describing the toolbar component'},
      'TopAlign': {id: 'TopAlign', value: 'Juster øverst', comment: 'Top Align tooltip'},
      'Total': {id: 'Total', value: 'Total', comment: 'Mathematic total of a calculation'},
      'Totals': {id: 'Totals', value: 'Totaler', comment: 'Mathematic total of a calculation (plural)'},
      'TreeCollapse': {id: 'TreeCollapse', value: 'Skjul træ', comment: 'Tree Collapse tooltip'},
      'TreeExpand': {id: 'TreeExpand', value: 'Udvid træ', comment: 'Tree Expand tooltip'},
      'Turquoise': {id: 'Turquoise', value: 'Turkis', comment: 'Color in our color pallette'},
      'Up': {id: 'Up', value: 'Op', comment: 'Up tooltip'},
      'Upload': {id: 'Upload', value: 'Overfør', comment: 'Upload tooltip'},
      'UnavailableDate': {id: 'UnavailableDate', value: 'Utilgængelig dato', comment: 'Unavailable Date Text'},
      'Underline': {id: 'Underline', value: 'Understreget', comment: 'Make text Underlined'},
      'Undo': {id: 'Undo', value: 'Fortryd', comment: 'Undo tooltip'},
      'Unlocked': {id: 'Unlocked', value: 'Ulåst', comment: 'Unlocked tooltip'},
      'UnorderedList': {id: 'UnorderedList', value: 'Indsæt/Fjern punktopstilling', comment: 'Insert an Unordered list in the editor'},
      'Unsupported': {id: 'Unsupported', value: 'Dette indhold er ikke tilgængeligt, fordi det bruger funktioner, som ikke understøttes i den aktuelle browserversion.', comment: 'Suggesting browser upgrade for missing features.'},
      'Url': {id: 'Url', value: 'Webadresse', comment: 'Url tooltip'},
      'UseArrow': {id: 'UseArrow', value: '. Brug piletaster til at vælge.', comment: 'Instructional comments for screen readers'},
      'UseEnter': {id: 'UseEnter', value: '. Brug Enter eller pil ned til at slå op.', comment: 'Instructional comments for screen readers'},
      'User': {id: 'User', value: 'Bruger', comment: 'User tooltip'},
      'UserProfile': {id: 'UserProfile', value: 'Brugerprofil', comment: 'User Profile tooltip'},
      'VerticalMiddleAlign': {id: 'VerticalMiddleAlign', value: 'Centrer lodret', comment: 'Vertical Align tooltip'},
      'ViewSource': {id: 'ViewSource', value: 'Vis kilde', comment: 'Toggle the source view in the editor'},
      'ViewVisual': {id: 'ViewVisual', value: 'Vis visuel', comment: 'Toggle the visual view in the editor'},
      'Yes': {id: 'Yes', value: 'Ja', comment: 'On a dialog button'}
    }
  });
}));