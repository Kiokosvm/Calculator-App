const resultInput = document.getElementById('result');
const buttons = document.querySelectorAll('.number, .operator, .calculate, .clear');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const buttonText = button.textContent;

        if (buttonText === '=') {
            try {
                resultInput.value = eval(resultInput.value);
            } catch (error) {
                resultInput.value = 'Error';
            }
        } else if (buttonText === 'C') {
            resultInput.value = '';
        } else {
            resultInput.value += buttonText;
        }
    });
});
