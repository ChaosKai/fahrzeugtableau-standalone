
//  -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
//  -
//  -           Fahrzeugtableau - Autoloader
//  -
//  -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --

//      -
//      -           Seppels Kill-Switch
//      -

        if( typeof killSwitchTableau !== "undefined" )
        {
            console.log("Fahrzeugtableau durch Sebastian gesperrt!");
        }
        else
        {
            var TableauUrl = "https://chaoskai.github.io/fahrzeugtableau-standalone/";
            
//          -
//          -           Google Font
//          -

            var styleElement = document.createElement("link");
            styleElement.rel = "stylesheet";
            styleElement.href = "https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700";
            document.body.appendChild(styleElement);
            
//          -
//          -           PeerJS CDN
//          -

            var scriptElement = document.createElement("script");
            scriptElement.type = "text/javascript";
            scriptElement.src = "https://cdnjs.cloudflare.com/ajax/libs/peerjs/0.3.24/peerjs.min.js";
            document.body.appendChild(scriptElement);
            
//          -
//          -           UI-Creator
//          -

            var scriptElement = document.createElement("script");
            scriptElement.type = "text/javascript";
            scriptElement.src = TableauUrl + "userscript/interface.js";
            document.body.appendChild(scriptElement);

//          -
//          -           Building- & Vehicle Export
//          -

            var scriptElement = document.createElement("script");
            scriptElement.type = "text/javascript";
            scriptElement.src = TableauUrl + "userscript/export.js";
            document.body.appendChild(scriptElement);

//          -
//          -           Vehicle Updater
//          -

            var scriptElement = document.createElement("script");
            scriptElement.type = "text/javascript";
            scriptElement.src = TableauUrl + "userscript/update.js";
            document.body.appendChild(scriptElement);

//          -
//          -           Load Style
//          -

            var styleElement = document.createElement("link");
            styleElement.rel = "stylesheet";
            styleElement.type = "text/css";
            styleElement.media = "screen";
            styleElement.href = TableauUrl + "userscript/interface.css";
            document.body.appendChild(styleElement);

//          -
//          -           Export Settings
//          -
            
            var AllowedBuildings = {
                0: true,    // Feuerwache
                1: false,   // Feuerwehrschule
                2: true,    // Rettungswache
                3: false,   // Rettungsschule
                4: false,   // Krankenhaus
                5: true,    // Rettungshubschrauberstation
                6: true,    // Polizeiwache
                8: false,   // Polizeischule
                9: true,    // THW
                10: false,  // THW Schule
                11: true,   // Bereitschaftspolizei
                12: true,   // SEG
                13: true,   // Polizeihubschrauberstation
                14: false,  // Bereitstellungsraum
                15: true    // Wasserrettung
            };
            
            var MaxBuildingsPerRequest = 20;
            var MaxVehiclesPerRequest  = 20;
        }
