const fill = document.querySelector('.fill');
const empties = document.querySelectorAll('.empty');

fill.addEventListener('dragstart',  function dragStart() {
    this.className += ' hold';
    setTimeout(() => {
        this.className = 'invisible';
    }, 0);
});
fill.addEventListener('dragend', function dragEnd(){
    this.className = 'fill';
});

for (const empty of empties) {
    empty.addEventListener('dragover', function dragOver(e) {
        e.preventDefault();
    })
    empty.addEventListener('dragenter', function dragEnter(e) {
        e.preventDefault();
        this.className += ' hovered';
    })
    empty.addEventListener('dragleave', function dragLeave() {
        this.className = 'empty';
    })
    empty.addEventListener('drop', function dragDrop() {
        this.className = 'empty';
        this.append(fill);
    })
}