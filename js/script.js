document.addEventListener('DOMContentLoaded', () => {
    // Foca em funcionalidades da página de cadastro se o formulário existir
    const registrationForm = document.getElementById('registration-form');
    if (registrationForm) {
        // Máscaras para os campos
        const cpfInput = document.getElementById('cpf');
        const telefoneInput = document.getElementById('telefone');
        const cepInput = document.getElementById('cep');

        if (cpfInput) {
            cpfInput.addEventListener('input', maskCPF);
        }
        if (telefoneInput) {
            telefoneInput.addEventListener('input', maskTelefone);
        }
        if (cepInput) {
            cepInput.addEventListener('input', maskCEP);
            // Funcionalidade de busca de endereço pelo CEP
            cepInput.addEventListener('blur', handleCEP);
        }

        // Lógica de submissão do formulário
        registrationForm.addEventListener('submit', handleFormSubmit);
    }
});

/**
 * Máscaras de Input
 */
function maskCPF(event) {
    let value = event.target.value.replace(/\D/g, '');
    value = value.replace(/(\d{3})(\d)/, '$1.$2');
    value = value.replace(/(\d{3})(\d)/, '$1.$2');
    value = value.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
    event.target.value = value;
}

function maskTelefone(event) {
    let value = event.target.value.replace(/\D/g, '');
    if (value.length > 10) {
        value = value.replace(/^(\d\d)(\d{5})(\d{4}).*/, '($1) $2-$3');
    } else if (value.length > 5) {
        value = value.replace(/^(\d\d)(\d{4})(\d{0,4}).*/, '($1) $2-$3');
    } else if (value.length > 2) {
        value = value.replace(/^(\d\d)(\d{0,5}).*/, '($1) $2');
    } else {
        value = value.replace(/^(\d*)/, '($1');
    }
    event.target.value = value;
}

function maskCEP(event) {
    let value = event.target.value.replace(/\D/g, '');
    value = value.replace(/^(\d{5})(\d)/, '$1-$2');
    event.target.value = value;
}

/**
 * Preenchimento automático de endereço pelo CEP (API ViaCEP)
 */
async function handleCEP(event) {
    const cep = event.target.value.replace(/\D/g, '');

    if (cep.length !== 8) {
        return; // CEP inválido
    }

    try {
        const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        if (!response.ok) {
            throw new Error('Não foi possível buscar o CEP.');
        }
        const data = await response.json();

        if (data.erro) {
            alert('CEP não encontrado. Por favor, verifique o número digitado.');
            return;
        }

        // Preenche os campos do formulário
        document.getElementById('endereco').value = data.logradouro;
        document.getElementById('cidade').value = data.localidade;
        document.getElementById('estado').value = data.uf;

    } catch (error) {
        console.error('Erro ao buscar CEP:', error);
        alert('Ocorreu um erro ao buscar o endereço. Tente novamente.');
    }
}

/**
 * Manipula a submissão do formulário
 */
function handleFormSubmit(event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    // Aqui você poderia adicionar uma lógica para enviar os dados para um servidor
    // Por enquanto, vamos apenas simular o sucesso.

    alert('Cadastro enviado com sucesso! Obrigado por se juntar a nós.');

    // Limpa o formulário após o envio
    event.target.reset();
}