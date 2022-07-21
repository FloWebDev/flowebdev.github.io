(function () {
    const app = {
        init: () => {
            app.setCurrentDateTime();
            setInterval(() => {
                app.setCurrentDateTime();
            }, 1000);
        },
        setCurrentDateTime: () => {
            const today = new Date();
            const date = today.getFullYear() + '-' + ('0' + (today.getMonth() + 1)).slice(-2) + '-' + ('0' + today.getDate()).slice(-2);
            const time = ('0' + today.getHours()).slice(-2) + ":" + ('0' + today.getMinutes()).slice(-2) + ":" + ('0' + today.getSeconds()).slice(-2);
            const dateTime = date + ' ' + time;
            document.querySelector('#dateTime').textContent = dateTime;
        }
    }
    app.init();
})();