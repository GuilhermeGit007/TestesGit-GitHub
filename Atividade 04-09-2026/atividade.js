let disciplinas = [];

let dadosSalvos = localStorage.getItem('disciplinas');

if (dadosSalvos !== null) {
    disciplinas = JSON.parse(dadosSalvos);
}

atualizarLista();

document.getElementById('cadastroForm').addEventListener('submit', function(e) {
    e.preventDefault();

    let novaDisciplina = {
        nome: "",
        horasEstudadas: 0,
        concluida: false
    }

    novaDisciplina.nome = document.getElementById('disciplina').value;
    novaDisciplina.horasEstudadas = parseInt(document.getElementById('horas').value);

    disciplinas.push(novaDisciplina);

    localStorage.setItem('disciplinas', JSON.stringify(disciplinas));

    atualizarLista();

    document.getElementById('disciplina').value = '';
    document.getElementById('horas').value = '';
});

function atualizarLista() {
    let lista = document.getElementById('disciplinasList');
    lista.innerHTML = '';

    for (let i = 0; i < disciplinas.length; i++) {
        const li = document.createElement('li');

        li.textContent = `${disciplinas[i].nome} - ${disciplinas[i].horasEstudadas} horas estudadas`;

        const botao = document.createElement('button');

        if (disciplinas[i].concluida === false) {
            botao.textContent = 'Concluir';
        } else {
            botao.textContent = 'Concluída';
        }

        botao.addEventListener('click', function() {
            disciplinas[i].concluida = true;

            localStorage.setItem('disciplinas', JSON.stringify(disciplinas));

            atualizarLista();
        });

        li.appendChild(botao);
        lista.appendChild(li);
    }
}