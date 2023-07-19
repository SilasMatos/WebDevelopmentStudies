function getProfile() {
    var username = document.getElementById('username').value;
    var url = 'https://api.github.com/users/' + username;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            showProfile(data);
        })
        .catch(error => {
            console.log('Erro:', error);
        });
}

function showProfile(profile) {
    var resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '';

    if (profile.message === 'Not Found') {
        resultDiv.innerHTML = '<p>Perfil não encontrado.</p>';
    } else {
        var avatar = '<img src="' + profile.avatar_url + '" alt="Avatar">';
        var name = '<p><strong>Nome:</strong> ' + profile.name + '</p>';
        var bio = '<p><strong>Biografia:</strong> ' + profile.bio + '</p>';
        var followers = '<p><strong>Seguidores:</strong> ' + profile.followers + '</p>';
        var repos = '<p><strong>Repositórios públicos:</strong> ' + profile.public_repos + '</p>';

        resultDiv.innerHTML = avatar + name + bio + followers + repos;
    }
}
