window.addEventListener('DOMContentLoaded', (event) => {
    getVisitCount();
});

const functionApi = 'https://cloudresumefunctions.azurewebsites.net/api/ResumeCounter?code=p/4Xa/auBiCKx/vGiFncfafVYFsVCyV87oVbrKaIahTWWDRZaaZ0nw=='; 

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