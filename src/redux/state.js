let dialogItems = [
    { name: 'Igor', id: 1 },
    { name: 'Eugene', id: 2 },
    { name: 'Taras', id: 3 },
    { name: 'Bill', id: 4 },
    { name: 'Doherty', id: 5 },
];

let dialogMessages = [
    { message: 'How are you?', id: 1 },
    { message: 'I"m fine ', id: 2 },
    { message: 'cooool', id: 3 },
];

let oldMessages = [
    "Lorem Ipsum is simply dummy text of the printing",
    "and typesetting industry. Lorem Ipsum has been the industry's standard",
    "dummy text ever since the 1500s, when an unknown printer took a galley",
];

let state = {
    dialogsInfo: {
        dialogItems: dialogItems,
        dialogMessages: dialogMessages,
    },
    oldMessages: oldMessages,
}

export default state;