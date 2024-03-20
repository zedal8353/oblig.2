var tickets = [];

var fornavnErrorMessageElement = document.getElementById('fornavn-error');
var etternavnErrorMessageElement = document.getElementById('etternavn-error');
var antallErrorMessageElement = document.getElementById('antall-error');
var telefonnrErrorMessageElement = document.getElementById('telefonnr-error');
var epostErrorMessageElement = document.getElementById('epost-error');

function buyTicket() {
    fornavnErrorMessageElement.textContent = '';
    etternavnErrorMessageElement.textContent = '';
    antallErrorMessageElement.textContent = '';
    telefonnrErrorMessageElement.textContent = '';
    epostErrorMessageElement.textContent = '';

    var antall = document.getElementById('antall').value;
    var fornavn = document.getElementById('fornavn').value;
    var etternavn = document.getElementById('etternavn').value;
    var telefonnr = document.getElementById('telefonnr').value;
    var epost = document.getElementById('epost').value;

    // Valider antall
    if (!antall.trim()) {
        antallErrorMessageElement.textContent = 'Må skrive noe inn i antall.';
        return;
    }

    // Valider fornavn
    if (!fornavn.trim()) {
        fornavnErrorMessageElement.textContent = 'Må skrive noe inn i fornavnet.';
        return;
    }

    // Valider etternavn
    if (!etternavn.trim()) {
        etternavnErrorMessageElement.textContent = 'Må skrive noe inn i etternavnet.';
        return;
    }

    // Valider telefonnr
    if (!validatePhoneNumber(telefonnr)) {
        telefonnrErrorMessageElement.textContent = 'Ugyldig telefonnummer (8 siffer).';
        return;
    }

    // Valider epost
    if (!validateEmail(epost)) {
        epostErrorMessageElement.textContent = 'Ugyldig e-postadresse.';
        return;
    }

    var ticket = {
        fornavn: fornavn,
        etternavn: etternavn,
        telefonnr: telefonnr,
        epost: epost,
        movie: document.getElementById('movie').value
    };

    tickets.push(ticket);
    updateTicketList();

    // Tøm inputfeltene
    document.getElementById('antall').value = '';
    document.getElementById('fornavn').value = '';
    document.getElementById('etternavn').value = '';
    document.getElementById('telefonnr').value = '';
    document.getElementById('epost').value = '';
    document.getElementById('movie').value = '';
}

function validatePhoneNumber(phoneNumber) {
    var re = /^\d{8}$/;
    return re.test(phoneNumber);
}

function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}

function updateTicketList() {
    var ticketListElement = document.getElementById('ticketList');
    ticketListElement.innerHTML = '';

    tickets.forEach(function (ticket) {
        var listItem = document.createElement('li');
        listItem.textContent = 'Fornavn: ' + ticket.fornavn +
            ', Etternavn: ' + ticket.etternavn +
            ', Telefonnr: ' + ticket.telefonnr +
            ', Epost: ' + ticket.epost +
            ', Film: ' + ticket.movie;
        ticketListElement.appendChild(listItem);
    });
}

function deleteAllTickets() {
    tickets = [];
    updateTicketList();
}
