/*
  В функцию appendToBody передаются 3 параметра:
  tag - имя тега, content - содержимое тега и count - количество вставок.
  Необходимо, чтобы функция осуществила вставку на страницу указанный тег с указанным содержимым указанное число раз.
  Считаем, что всегда передается тег, допускающий вставку текста в качестве своего содержимого (P, DIV, I и пр.).
*/
export function appendToBody(tag, content, count) {
    for (let i = 1; i <= count; i++) {
        document.body.insertAdjacentHTML(
            'afterbegin',
            `<${tag}>${content}</${tag}>`,
        );
    }
}

/*
  Создайте дерево вложенных тегов DIV.
  Каждый узел дерева должен содержать childrenCount узлов.
  Глубина дерева задается параметром level.
  Каждый элемент должен иметь класс вида item_n, где n - глубина вложенности элемента. (Нумерацию ведем с единицы).
  Сформированное дерево верните в качестве результата работы функции.
*/
export function generateTree(childrenCount, level) {
    document.body.insertAdjacentHTML(
        'afterbegin',
        `<div class='item_1'></div>`,
    );
    let Inserters = document.getElementsByClassName('item_1');
    for (let i = 2; i < level + 1; i++) {
        for (let chast of Inserters) {
            for (let j = 0; j < childrenCount; j++) {
                chast.insertAdjacentHTML(
                    'afterbegin',
                    `<div class='item_${i}'></div>`,
                );
            }
        }
        Inserters = document.getElementsByClassName(`item_${i}`);
    }
    let result = document.getElementsByClassName('item_1')[0];
    return result;
}

/*
  Используйте функцию для создания дерева тегов DIV из предыдущего задания.
  Создайте дерево с вложенностью 3 и числом элементов в каждом узле 2.
  Далее замените все узлы второго уровня (т.е. имеющие класс item_2) на теги SECTION.
  Остальную структуру дерева сохраните неизменной, включая классы и те элементы,
  которые находились внутри переписанных тегов.
  Сформированное дерево верните в качестве результата работы функции.
*/
export function replaceNodes() {
    generateTree(2, 3);
    const NEWTREE = document.getElementsByClassName('item_2');
    for (let chast of NEWTREE) {
        const New = document.createElement('SECTION');
        New.innerHTML = chast.innerHTML;
        for (let i of chast.attributes) {
            New.setAttribute(i.name, i.value);
        }
        chast.before(New);
        chast.remove();
    }
    let result = document.getElementsByClassName('item_1')[0];
    return result;
}
