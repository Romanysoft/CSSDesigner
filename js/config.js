(function () {
    window.RTYConfig = {
        appName:"CSSDesigner",
        appID:"com.romanysoft.app.macos.CSSDesigner",
        documentTitle:"CSSDesigner By Romanysoft",
        supportPlatforms:["Mac","Windows","Linux"],
        googleUA:"UA-76676167-3",
        gitHome:"//github.com/Romanysoft/CSSDesigner",
        reportIssueUrl:"//github.com/Romanysoft/CSSDesigner/issues",
        changeLogUrl:"//github.com/Romanysoft/CSSDesigner/wiki/Changelog",
        wikiUrl:"//github.com/Romanysoft/CSSDesigner/wiki",
        jumpLocation:"https://www.romanysoft.net/cssdesigner/",
        romanysoftHome:"//www.romanysoft.com",
        copyright:"Copyright © " + (new Date()).getFullYear() + " Romanysoft LAB."
    };
    
    if(window.RTYConfig.jumpLocation){
        window.location = window.RTYConfig.jumpLocation;
    }
})();