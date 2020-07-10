function SetDarkTheme(dark)
    {
        var darkSheet = document.getElementById('dark-sheet');

        var duringStartup = self.colorTheme == '';

        if (!dark) {
            self.colorTheme = 'light';
            if (darkSheet) {
                darkSheet.disabled = true;
            }
        } else {
            self.colorTheme = 'dark';
            if (darkSheet) {
                darkSheet.disabled = false;
            } else {
                darkSheet = libtuj.ce('link');
                darkSheet.rel = 'stylesheet';
                darkSheet.href = tujCDNPrefix + 'css/night.css';
                darkSheet.id = 'dark-sheet';
                document.getElementsByTagName('head')[0].appendChild(darkSheet);
            }
        }

        if (!duringStartup) {
            libtuj.Storage.Set('colorTheme', self.colorTheme);

            Main();
        }
    }