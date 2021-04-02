window.addEventListener('DOMContentLoaded', (event) => {
    getVisitCount();
});

const functionApi = 'https://getresumecounterfunctionapp.azurewebsites.net/api/GetResumeCounter?code=jp4rx3wuLEzaXvSFeBKaq08RGiVCwRtpAA1Cdxdc15c9ZGjM79tWjg=='; 

const getVisitCount = () => {
    let count = 30;
    fetch(functionApi, {
        mode: 'cors',
    })
    .then(response => {
        return response.json()
    })
    .then(res => {
        const count = res.count;
        document.getElementById('counter').innerText =count;
    })
    return count;
}