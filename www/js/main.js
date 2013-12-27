var App = {
    isDeviceReady: false,
    isJQMReady: false,

    bootstrap: function () {
        var self = this;
        
        $(document).on("deviceready", function deviceReadyCallback() {
            $(document).off("deviceready", deviceReadyCallback);
            
            self.isDeviceReady = true;
            self.start();
        });
        
        $(document).on("mobileinit", function mobileInitCallback() {
            $(document).off("mobileinit", mobileInitCallback);
            
            self.isJQMReady = true;
            self.start();
        });
    },
    
    start: function () {
        if (!this.isDeviceReady || !this.isJQMReady) {
            return ;
        }
        
        this.bindFormEvents();
    },
    
    bindFormEvents: function () {
        $("#btnShare").click(function () {
            cordova.exec(function () {
                alert("Success");
            }, function (reason) {
                alert("Failed: " + reason);
            }, 'Wechat', 'share', [$("#demo").serializeObject()]);
        });
    }
};

App.bootstrap();
