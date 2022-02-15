class Stack {
    constructor() {
        this.data = []
        this.count = 0
    }
    push(element) {
        this.data.push(element)
        // console.log(`${element} has been added to index position ${this.count}!`)
        this.count += 1
        // return this.count - 1 // index position
    }
    pop() {
        if (this.count === 0) return undefined
        let popItem = this.data.pop()
        // console.log(`${popItem} has been removed!`)
        this.count -= 1
        return popItem
    }
    peek() {
        // console.log(`${this.data[this.count - 1]} is on top of the Stack!`)
        return this.data[this.count - 1]
    }
    getCount() {
        // console.log(`There are ${this.count} elements in the stack!`);
        return this.count
    }
    isEmpty() {
        this.count === 0 ? "Stack is empty!" : "Stack is NOT empty!"
        return this.count === 0
    }
}

const undo = new Stack()
const redo = new Stack()

const editor = document.getElementById('editor')

editor.addEventListener('keydown', (ev) => {
    if (ev.ctrlKey) {
        if (ev.key === 'u') {
            ev.preventDefault()
            let removed = undo.pop()
            ev.key === "Shift" || ev.key === "CapsLock" || ev.key === undefined || ev.key === "Backspace" ? !redo.push(removed)
                : redo.push(removed)
            editor.value = undo.data.join("")
        } else if (ev.key === 'r') {
            ev.preventDefault()
            let redone = redo.pop()
            ev.key === "Shift" || ev.key === "CapsLock" || ev.key === undefined || ev.key === "Backspace" ? !undo.push(redone)
                : undo.push(redone)
            editor.value = undo.data.join("")
        }
    } else {
        console.log(ev.key)
        ev.key === "Shift" || ev.key === "CapsLock" || ev.key === undefined || ev.key === "Backspace" ? console.log("Shift")
            : undo.push(ev.key)
        console.log(undo.data)
    }
})