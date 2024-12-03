 class  Todo {
    id: string;
    text: string;
    
    // for typescript, you need to define above properties.
    // javascript will need only constructor

    constructor(todoText: string) {
        this.text = todoText;
        this.id = new Date().toISOString();
    }
}

export default Todo;