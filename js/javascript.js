function showContent(section) {
    document.getElementById('highschool-content').style.display = 'none';
    document.getElementById('college-content').style.display = 'none';

    document.getElementById(section + '-content').style.display = 'block';
}

function changeToAboutMe(){
    document.getElementById('encapsulator').style.display = 'block';
    document.getElementById('project-encapsulator').style.display = 'none';
}

function changeToProjects(){
    document.getElementById('encapsulator').style.display = 'none';
    document.getElementById('project-encapsulator').style.display = 'block';
}

