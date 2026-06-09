document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('tracking-form');
    const resultado = document.getElementById('resultado');
    const codigoInput = document.getElementById('codigo-pedido');
    const codigoExibido = document.getElementById('codigo-exibido');

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const codigo = codigoInput.value.trim();

        if (codigo) {
            codigoExibido.textContent = '#' + codigo;
            resultado.style.display = 'block';
        }
    });
});